# сlient-suspense

[![Build Status][build-img]][build-link]
[![NPM version][npm-img]][npm-link]

hacky way to use the React Suspense in production now

## This library comes untranspiled

Want to support IE11 → make sure you transpile `node_modules`.
> [debate][es6-debate]

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
[build-img]: https://img.shields.io/travis/com/uploadcare/client-suspense.svg
[build-link]: https://travis-ci.com/uploadcare/client-suspense
[npm-img]: https://img.shields.io/npm/v/@uploadcare/client-suspense.svg
[npm-link]: https://www.npmjs.com/package/@uploadcare/client-suspense
