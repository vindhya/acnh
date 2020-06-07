import { render, cleanup } from '@redwoodjs/testing'

import CritterDetail from './CritterDetail'

describe('CritterDetail', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<CritterDetail />)
    }).not.toThrow()
  })
})
