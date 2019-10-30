import { createElement as h, lazy, Suspense, useState, useEffect } from 'react'

function ClientSuspense(props) {
  var state = useState(false),
    isClient = state[0],
    setClient = state[1];

  useEffect(function() {
    setClient(true), []);
  });

  return isClient ? h(Suspense, props) : props.fallback;
}

export { lazy, ClientSuspense as Suspense }
