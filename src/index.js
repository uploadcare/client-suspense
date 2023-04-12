import { createElement as h, lazy, Suspense, useState, useEffect } from 'react'

function ClientSuspense (props) {
  const state = useState(false)
  const isClient = state[0]
  const setClient = state[1]

  useEffect(
    function () {
      setClient(true)
    },
    [setClient]
  )

  return isClient ? h(Suspense, props) : props.fallback
}

export { lazy, ClientSuspense as Suspense }
