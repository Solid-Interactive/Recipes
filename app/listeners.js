'use strict';

var app = require('ral')('app'),
    authToken = require('ral')('authToken'),
    constants = require('ral')('constants'),
    dot = require('ral')('dotGetSet'),
    _ = require('lodash');

module.exports.load = load;

function load() {
    app.ghCore.event.channel('/type/' + constants.ids.recipes).on('parse', function(payload, next) {
        var node;
        if (!dot.get(payload, 'args.fields')) {
            next();
            return;
        }

        node = dot.get(payload, 'args.meta.node');
        console.log('node', node);
        app.ghCore.request(authToken.get())
            .nodes.getById(node)
            .then(function(theNode) {
                var slug = [];
                _.each(theNode.ancestors, function(ancestor) {
                    slug.push(ancestor.label);
                });
                slug.push(theNode.label);
                slug.push(dot.get(payload, 'args.fields.title-slug'));
                dot.set(payload, 'args.fields.computed-slug', '/' + slug.join('/'));
                next();
            });
    });
}
