module.exports = function (grunt) {
    'use strict';

    var _ = require('lodash'),
        path = require('path'),
        sep = path.sep,
        databases = require('./databases');

    grunt.registerTask('data:deleteTemp', function() {
        grunt.file.delete('.data');
    });

    // Load
    grunt.registerTask('data:load', 'Helper task', function () {
        grunt.task.run('prompt:data', 'data:load:write:grasshopper');
    });
    grunt.registerTask('data:load:write', function(database) {
        var tasks = [];
        grunt.config.set('database', database);
        grunt.config.set('fixtureFolder', getFixtureFolder());
        grunt.config.set('mongo', getMongoConfigs(database));

        _.each(databases[database].collections, function (collection) {
            var filepath = grunt.config.get('fixtureFolder') + '/' + collection,
                arr = [];

            _.each(grunt.file.expand('fixtures' + sep + filepath + sep + '*.json'), function(onePath) {
                arr.push(grunt.file.readJSON(onePath));
            });

            grunt.file.write('.data' + sep + filepath + '.json', JSON.stringify(arr));
            tasks.push('data:set:collection:' + collection);
            tasks.push('shell:mongoImport');
        });

        tasks.push('data:deleteTemp');

        grunt.task.run(tasks);
    });


    // Save
    grunt.registerTask('data:save', function () {
        grunt.task.run('prompt:data', 'clean:fixtures', 'data:save:write:grasshopper');
    });

    grunt.registerTask('data:save:write', function (database) {

        var tasks = [];
        grunt.config.set('database', database);
        grunt.config.set('fixtureFolder', getFixtureFolder());
        grunt.config.set('mongo', getMongoConfigs());

        _.each(databases[database].collections, function (collection) {
            console.log('setting collection to: ' + collection);
            tasks.push('data:set:collection:' + collection);
            tasks.push('shell:mongoExport');
            tasks.push('data:prettify:collection:' + collection);
        });
        grunt.task.run(tasks);

    });

    // Utilities
    grunt.registerTask('data:set:collection', 'Helper task', function (collection) {
        grunt.log.writeln('collection: ' + collection);
        grunt.config.set('collection', collection);
    });
    grunt.registerTask('data:prettify:collection', 'Helper task', function (collection) {
        var filePath = grunt.config.get('fixtureFolder') + '/' + collection,
            collectionData = grunt.file.readJSON('.data' + path.sep + filePath + '.json');

        _.each(collectionData, function(collectionItem) {
            grunt.file.write('fixtures' + path.sep + filePath + path.sep + collectionItem._id.$oid + '.json',
                JSON.stringify(collectionItem, null, 4));
        });

        grunt.file.delete('.data');
    });

    function getFixtureFolder() {
        return grunt.config.get('database');
    }

    function getMongoConfigs() {
        var env = grunt.config.get('environment');
        return require('../../ghapi.' + env + '.json').db;
    }
};
