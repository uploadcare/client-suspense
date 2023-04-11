/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom/extend-expect'

import React from 'react'
import { render } from '@testing-library/react'
import { lazy, Suspense } from '../src/index'

/*
 * this is just a little hack to silence a warning that we'll get until we
 * upgrade to 16.9. See also: https://github.com/facebook/react/pull/14853
 *
 * The same happens on React 18
 * See https://github.com/testing-library/react-testing-library#suppressing-unnecessary-warnings-on-react-dom-168
 */
const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})

test('render childrens when no suspended components provided', () => {
  const testMessage = 'Test Message'
  const { getByText } = render(
    <Suspense fallback='loading'>{testMessage}</Suspense>
  )

  expect(getByText(testMessage)).toBeInTheDocument()
})

test('render fallback when have suspended component', () => {
  const Lazy = lazy(() => import('./component'))
  const { getByText } = render(
    <Suspense fallback='loading'><Lazy /></Suspense>
  )

  expect(getByText('loading')).toBeInTheDocument()
})
