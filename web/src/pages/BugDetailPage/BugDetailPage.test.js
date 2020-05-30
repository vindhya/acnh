import { render, cleanup } from '@redwoodjs/testing'

import BugDetailPage from './BugDetailPage'

describe('BugDetailPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<BugDetailPage />)
    }).not.toThrow()
  })
})
