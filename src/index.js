import { createElement as h, lazy, Suspense, useState, useEffect } from 'react'

const ClientSuspense = props => {
  const [isClient, setClient] = useState(false)
  useEffect(() => setClient(true), [])

  return isClient ? h(Suspense, props) : props.fallback
}

export { lazy, ClientSuspense as Suspense }
