# Broward College Design System - Pattern Lab





## Quick Start
If you already have NodeJS and Composer installed, then just run these commands from within the root directory of the project.

    npm install
    composer install
    grunt server
    grunt

If that doesn't get you up and running, or if perhaps you just need a little more instructions to get you up and running, please read on.




### Requirements



#### NodeJS
Node.js is required for this project. To install Node.js, simply [download and install](http://nodejs.org/) the latest version from their website.
To check if Node.js and NPM are properly installed, simply open your command line and run the commands below.

    $ node --version
    v8.11.3

##### NodeJS - Specific Installation Instructions
If you prefer to install through the command line, choose your preferred method below.
###### Node Installation on Mac OSX
If you don't already have it, first install [Homebrew](http://brew.sh/) with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, then run:

    brew install node
###### Node installation on Linux

  sudo apt-get install python-software-properties
  sudo add-apt-repository ppa:chris-lea/node.js
  sudo apt-get update
  sudo apt-get install nodejs
###### Node installation on Windows
Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.



#### NPM
NPM, or Node Package Manager, is also required for this project. If you followed the previous step of installing NodeJS then you most likely can skip this one, as NPM comes bundled with NodeJS.

To verify that you have NPM installed, however, run the command below in your terminal. The version shown below is the version used on this project.

    $ npm --version
    5.6.0



#### Composer
You will also need another dependency manager, [Composer](https://getcomposer.org), in order to complete the project installation.

To install Composer, [follow the instructions](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos) on their site.




### Clone/Download repository
Now that all the required software is installed and ready to use, we are ready to install the actual project. To do so, you must first clone or download the Github repo onto your local machine.

    git clone https://github.com/writebeat/bc-design-system [directory name]




### Install
Once the repository has been downloaded, you can proceed to install the required third party packages from [NPM](https://www.npmjs.com/) and [Composer](https://getcomposer.org/). So, first change into the directory you just created.

    cd [directory name]

From there, run the following commands to install the required packages.

    npm install
    composer install




### Start Server
Now that everything is installed, we can run the `server` script using [Grunt.js](https://gruntjs.com/).

    grunt server

 This will spin up an Apache web-server and provide you with the URL where it is being hosted. It should look something like `http://localhost:8080`




### Generate and Watch Files
Once the server is running, you just have one last thing to do before everything is working. You now must generate the public files from the source files. In order to do this, simply run

    grunt

This will generate the files needed in the `public/` folder, and will watch your `source/` folder for any changes, and regenerate accordingly. No need to manually copy any files over, minify, or concatenate files. All this is done for you by [Grunt.js](https://gruntjs.com/).




### Live Reload
Now, for true workflow heaven, it would be great if the browser automatically refreshed when a change is detected in one of the files (css, mustache, js, etc). Luckily, we can achieve this rather simply using the Chrome plugin [Live Reload](http://livereload.com/). Simply install the plugin on your Chrome browser, and *turn it on*. Once it is on, you can go ahead and test to make sure that a change in any source file will not only automatically cause it to regenerate, but the browser will reload as well.





## Pattern Lab

To get more information on Pattern Lab itself, please see the [Github repo for the PHP version of Pattern Lab](https://github.com/pattern-lab/patternlab-php) or check out their [official documentation](https://patternlab.io/docs).

## Updating Look and Feel
[Instructions for updating the styleguidekit-assets-default plugin]
