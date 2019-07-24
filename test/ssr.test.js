/**
 * @jest-environment node
 */

import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import { lazy, ClientSuspense } from '../src/index'

const Lazy = lazy(() => import('./component'))

test.skip('server-side rendering', () => {
  const App = () => (
    <ClientSuspense fallback='nice'>
      <Lazy />
    </ClientSuspense>
  )

  const rendered = renderToStaticMarkup(<App />)
  expect(rendered).toBe('nice')
})
