import { createElement as h, lazy, Suspense } from 'react'

const isDOM = typeof document !== 'undefined'

const ClientSuspense = props =>
  isDOM ? h(Suspense, props) : props.fallback

export { lazy, ClientSuspense as Suspense }
