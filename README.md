# Broward College Design System - Pattern Lab

## Quick Start
#### Clone/Download repository


## Pattern Lab

To get more information on Pattern Lab itself, please see the [Github repo for the PHP version of Pattern Lab](https://github.com/pattern-lab/patternlab-php) or check out their [official documentation](https://patternlab.io/docs).

## Requirements

### Node JS
### Composer


## Installing



## Migrating from Pattern Lab 1 to Pattern Lab 2

Pattern Lab 2 was a complete rewrite and reorganization of Pattern Lab 1. [Learn about the changes](http://patternlab.io/docs/changes-1-to-2.html). After installing the Standard Edition for Mustache do the following to migrate from Pattern Lab 1 to Pattern Lab 2:

1. Copy `./source` from your old project to your new install
2. Copy `./source/_patterns/00-atoms/00-meta/_00-head.mustache` to `./source/_meta/_00-head.mustache`
3. Copy `./source/_patterns/00-atoms/00-meta/_01-foot.mustache` to `./source/_meta/_00-foot.mustache`
4. Copy `./source/_data/annotations.js` to `./source/_annotations/annotations.js`

Everything else should work without changes.

## Need Pattern Lab 1?

The [source code for Pattern Lab 1](https://github.com/pattern-lab/patternlab-php/releases/tag/v1.1.0) is still available for download.

## Packaged Components

The Standard Edition for Mustache installs the following components:

* `pattern-lab/core`: [GitHub](https://github.com/pattern-lab/patternlab-php-core), [Packagist](https://packagist.org/packages/pattern-lab/core)
* `pattern-lab/patternengine-mustache`: [documentation](https://github.com/pattern-lab/patternengine-php-mustache#mustache-patternengine-for-pattern-lab-php), [GitHub](https://github.com/pattern-lab/patternengine-php-mustache), [Packagist](https://packagist.org/packages/pattern-lab/patternengine-mustache)
* `pattern-lab/plugin-reload`: [GitHub](https://github.com/pattern-lab/plugin-php-reload), [Packagist](https://packagist.org/packages/pattern-lab/plugin-reload)
* `pattern-lab/styleguidekit-assets-default`: [GitHub](https://github.com/pattern-lab/styleguidekit-assets-default), [Packagist](https://packagist.org/packages/pattern-lab/styleguidekit-assets-default)
* `pattern-lab/styleguidekit-mustache-default`: [GitHub](https://github.com/pattern-lab/styleguidekit-mustache-default), [Packagist](https://packagist.org/packages/pattern-lab/styleguidekit-mustache-default)

## List All of the Available Commands and Their Options

To list all available commands type:

    php core/console --help

To list the options for a particular command type:

    php core/console --help --[command]
