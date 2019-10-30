import { createElement as h, lazy, Suspense, useState, useEffect } from 'react'

const ClientSuspense = props => {
  const hook = useState(false);
  const isClient = hook[0];
  const setClient = hook[1];
  useEffect(() => setClient(true), [])

  return isClient ? h(Suspense, props) : props.fallback
}

export { lazy, ClientSuspense as Suspense }
