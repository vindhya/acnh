import { render, cleanup } from '@redwoodjs/testing'

import BugDetail from './BugDetail'

describe('BugDetail', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<BugDetail />)
    }).not.toThrow()
  })
})
