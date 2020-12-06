<p align="center">
	<img src="static/logo.png" alt="Vue.js boilerplate">
</p>

<p align="center">
	<img src="https://img.shields.io/github/license/mmilanovic4/vue-boilerplate" alt="License">
</p>

# Overview

A simple boilerplate for creating Vue.js applications.

## Setup

```
git clone https://github.com/mmilanovic4/vue-boilerplate.git
cd vue-boilerplate
npm install
```

## Production

```
npm run clean
npm run build:prod
```

## Development

You can use this boilerplate with your own server (e.g. Express), then you can just run build script with development flag:

```
npm run build:dev
```

Differences between `build:prod` and `build:dev`:

- `webpack.mode` is set to `production` if started via `build:prod` or to `development` if started via `build:dev`
- `webpack.watch` is set to `true` if started via `build:dev`

## Profiling

To profile your JavaScript application simply run:

```
npm run build:stats
```

Now `stats.json` file is generated in your project's root directory and you can open it with [webpack analyse](https://github.com/webpack/analyse) or some [other build analysis tool](https://survivejs.com/webpack/optimizing/build-analysis/).
