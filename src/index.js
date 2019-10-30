import { createElement as h, lazy, Suspense, useState, useEffect } from 'react'

function ClientSuspense(props) {
  var hook = useState(false),
    isClient = hook[0],
    setClient = hook[1];

  useEffect(function() {
    setClient(true), []);
  });

  return isClient ? h(Suspense, props) : props.fallback;
}

export { lazy, ClientSuspense as Suspense }
