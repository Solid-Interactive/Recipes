---
layout: post
title: "Setup Git and release branches"
description: ""
category: 
tags: []
---
{% include JB/setup %}

1. Initialize git repository.

    ```bash
    git init && git add -A && git commit -m 'initial structure'
    ```

1. Create repo in either gitlab or github, then copy paste that sucker.

1. Add a remote repository if desired.

    ```bash
    git remote add origin git://github.com/Solid-Interactive/YourNewApp.git
    ```
        
1. Add [git extras](https://github.com/visionmedia/git-extras) by visionmedia. 

    ```bash
    brew install git-extras
    ```
         
1. Unlink pre-commit hooks if installed.
         
    ```bash
    mv .git/hooks/pre-commit .git/hooks/pre-commit.bkp
    ``` 
     
1. Create orphan branches (uses gh-pages from the previous step). This creates an orphan branch called gh-pages.

    ```bash
    git gh-pages
    ```

1. Relink pre-commit hooks.

    ```bash
    mv .git/hooks/pre-commit.bkp .git/hooks/pre-commit
    ``` 
    
1. Rename gh-pages branch to either stage or production.

    ```bash
    git branch -m <oldname> <newname>
    ```
    
1. Push that new branch to origin.

    ```bash
    git push -u origin stage
    ```
    