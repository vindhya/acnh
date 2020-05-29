import { render, cleanup } from '@redwoodjs/testing'

import BugsPage from './BugsPage'

describe('BugsPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<BugsPage />)
    }).not.toThrow()
  })
})
