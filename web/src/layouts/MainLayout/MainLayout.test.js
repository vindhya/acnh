import { render, cleanup } from '@redwoodjs/testing'

import MainLayout from './MainLayout'

describe('MainLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<MainLayout />)
    }).not.toThrow()
  })
})
