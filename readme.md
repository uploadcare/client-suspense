# сlient-suspense

[![Build Status][build-img]][build-link]
[![NPM version][npm-img]][npm-link]

> A hacky way to start using React Suspense in production.

In short, Suspense allows you to defer rendering part of your application tree
until some condition is met (for example, some data are loaded).

While React Suspense is still in experimental mode and not suitable for
production, this package provides an easy-to-use production-ready alternative.

**Note**, this library comes untranspiled. It means, if you want to support
IE11, make sure you transpile `node_modules`. [Learn more][es6-debate].

## Install

```
npm i @uploadcare/client-suspense
```

```
yarn add @uploadcare/client-suspense
```

## Usage

```jsx
import { ClientSuspens, lazy } from '@uploadcare/client-suspense'

const LazyComponent = lazy(() => import('@uploadcare/react-widget'))

<ClientSuspense fallback='loading...'>
  <LazyComponent />
</ClientSuspense>
```

[▶ Demo Sandbox][gatsby-demo]

[es6-debate]: https://gist.github.com/Rich-Harris/51e1bf24e7c093469ef7a0983bad94cb
[gatsby-demo]: https://codesandbox.io/s/gatsby-suspense-example-6g020
[build-img]: https://api.travis-ci.com/uploadcare/client-suspense.svg?branch=master
[build-link]: https://travis-ci.com/uploadcare/client-suspense
[npm-img]: https://img.shields.io/npm/v/@uploadcare/client-suspense.svg
[npm-link]: https://www.npmjs.com/package/@uploadcare/client-suspense
