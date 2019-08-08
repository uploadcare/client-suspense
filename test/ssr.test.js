/**
 * @jest-environment node
 */

import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import { lazy, Suspense } from '../src/index'

const Lazy = lazy(() => import('./component'))

test('server-side rendering', () => {
  const App = () => (
    <Suspense fallback='nice'>
      <Lazy />
    </Suspense>
  )

  const rendered = renderToStaticMarkup(<App />)
  expect(rendered).toBe('nice')
})
