import React, { lazy, useEffect, useState, Suspense } from 'react'

const ClientOnly = ({ children, fallback }) => {
  const [isClientOnlyRender, setClientRender] = useState(true)

  useEffect(() => {
    setClientRender(false)
  }, [])

  return isClientOnlyRender ? fallback : children
}

const ClientSuspense = ({ children, ...props }) => (
  <ClientOnly {...props}>
    <Suspense {...props}>{children}</Suspense>
  </ClientOnly>
)

export { lazy, ClientSuspense }
