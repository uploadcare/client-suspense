# сlient-suspense

> A hacky way to start using React Suspense in production.

[![Build Status][build-img]][build-link]
[![NPM version][npm-img]][npm-link]

In short, Suspense allows you to defer rendering part of your application tree
until some condition is met (for example, some data are loaded).

While React Suspense is still in experimental mode and not suitable for
production, this package provides an easy-to-use production-ready alternative.

## Install

```
npm i @uploadcare/client-suspense
```

```
yarn add @uploadcare/client-suspense
```

## Usage

```jsx
import { Suspense, lazy } from '@uploadcare/client-suspense'

const LazyComponent = lazy(() => import('@uploadcare/react-widget'))

<Suspense fallback='loading...'>
  <LazyComponent />
</Suspense>
```

[▶ Demo Sandbox][gatsby-demo]

[es6-debate]: https://gist.github.com/Rich-Harris/51e1bf24e7c093469ef7a0983bad94cb
[gatsby-demo]: https://codesandbox.io/s/gatsby-suspense-example-6g020
[npm-img]: https://img.shields.io/npm/v/@uploadcare/client-suspense.svg
[npm-link]: https://www.npmjs.com/package/@uploadcare/client-suspense
