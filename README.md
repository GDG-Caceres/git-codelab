# \<git codelab\>

This is a project by GDG Cáceres to learn use git for managing project in real life.

## How work?

### Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

### Viewing Your Application In Local

```
$ polymer serve
```

### Building Your Application

```
$ polymer build
```

This will create a `build/` folder with `bundled/` and `unbundled/` sub-folders
containing a bundled (Vulcanized) and unbundled builds, both run through HTML,
CSS, and JS optimizers.

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
$ polymer serve build/bundled
```

### Running Tests

```
$ polymer test
```

### How deploy in official web?

Project uses Firebase hosting, and it's necessary Firebase-cli for this task.

```
$ firebase deploy
```

This task only work after login in Firebase-cli.
