---
layout: page
title : "Overview:"
tagline: "things to cover"
---
{% include JB/setup %}

* [TO DO's]({{ site.JB.BASE_PATH }}/to-dos/) 

* goals
    * recipe book
    * exploratory tests
    * runnable samples
    
## Docs

---

* masseuse
    * <a name="masseuse-start"></a> [starting a new project]({{ site.JB.BASE_PATH }}/setting-up-masseuse)
        * [setting up the git repository and release branches]({{ site.JB.BASE_PATH }}/setup-git-and-release-branches)
        * [setting up heroku for staging]({{ site.JB.BASE_PATH }}/setup-heroku-for-staging)
    * [routers]({{ site.JB.BASE_PATH }}/masseuse-routers)
    * views
        * [Drag and drop with jQuery UI example]({{ site.JB.BASE_PATH }}/drag-and-drop-with-jquery-ui-example)
        * [Lifecycle]({{ site.JB.BASE_PATH }}/lifecycle)
            * [Async render example]({{ site.JB.BASE_PATH }}/async-render-example)
        * [Plugins]({{ site.JB.BASE_PATH }}/masseuse-plugins)
        * hooks
        * Child views
            * [Child view binder example]({{ site.JB.BASE_PATH }}/child-view-binder-example)
        * [Two way binding example]({{ site.JB.BASE_PATH }}/two-way-binding-example)
        * default options
            * viewOptions field
        * options.js
            * Listeners
            * Rivets options
            * Events
            * viewContext
            * Model
            * Model defaults
            * appendTo
            * wrapper
            * Collection
    * channels
    * models
        * [Validation example]({{ site.JB.BASE_PATH }}/validation)
        * proxy/computed/observer properties
    * router
        * example with beforeRouting, onRouterFail, etc.
    * workers (do not use - name appropriately and break into multiple amds)
        * refactoring a view to first create private methods, then grouping them, then extracting to amds
    * modals
    * naming conventions
        * directory structure
        * file names
        * path aliases
        
---

* grasshopper admin
    * [dev workflow]({{ site.JB.BASE_PATH }}/grasshopper-admin-dev-workflow)
* gh as a library
    * creating static pages
    * creating custom endpoints
    * using gh core separately (queries)
    * using bridgetown to create responses
    * creating a namespaced api
    
---

## Reference

* javascript
    * style
        * [creating an object]({{ site.JB.BASE_PATH }}/creating-an-object)
    * node
        * [debugging]({{ site.JB.BASE_PATH }}/debugging-node)
* promises
    * differences between Q / $
    * chaining
    * error handling
* rivets
    * keypaths
    * [Rivets Binder example]({{ site.JB.BASE_PATH }}/rivets-binder-example)
    * [Rivets Formatters example]({{ site.JB.BASE_PATH }}/rivets-formatters-example)
    * binders 
        * existing masseuse ones
    * filters
    * adapters
    * if / unless
    * components
    * formatters
        * existing masseuse ones
    * rivets
    * iteration
* git
    * undoing things with reflog
    * editing using git rebase -i
    * checking local and global configs
* requirejs
    * path aliases
* testing
    * browser
        * unit
        * integration
    * node     
        * unit
        * integration
* grunt
    * paths.json
    * release notes
    * deploy
* heroku
* foundation
* sass
    * mixins
    * https://github.com/davidtheclark/scut
* jade
    * mixins
    * blocks
* shell
    * checking what is using port
    * shortcuting with && and ||
    * cp -R