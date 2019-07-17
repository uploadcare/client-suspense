# сlient-suspense

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
