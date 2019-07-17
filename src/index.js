import React, { lazy, useEffect, useState, Suspense } from 'react'

const ClientOnly = ({ children }) => {
  const [isClientOnlyRender, setClientRender] = useState(true)

  useEffect(() => {
    setClientRender(false)
  }, [])

  return isClientOnlyRender ? null : children
}

const ClientSuspense = props => (
  <ClientOnly>
    <Suspense {...props} />
  </ClientOnly>
)

export { lazy, ClientSuspense }
