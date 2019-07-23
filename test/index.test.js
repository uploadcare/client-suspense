import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'

import React from 'react'
import { render } from '@testing-library/react'
import { lazy, ClientSuspense } from '../src/index'

test('render childrens when no suspended components provided', () => {
  const testMessage = 'Test Message'
  const { getByText } = render(
    <ClientSuspense fallback='loading'>{testMessage}</ClientSuspense>
  )

  expect(getByText(testMessage)).toBeInTheDocument()
})

const Lazy = lazy(() => import('./component'))

test('render fallback when have suspended component', () => {
  const { getByText } = render(
    <ClientSuspense fallback='loading'><Lazy /></ClientSuspense>
  )

  expect(getByText('loading')).toBeInTheDocument()
})
