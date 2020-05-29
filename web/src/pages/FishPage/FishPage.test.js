import { render, cleanup } from '@redwoodjs/testing'

import FishPage from './FishPage'

describe('FishPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<FishPage />)
    }).not.toThrow()
  })
})
