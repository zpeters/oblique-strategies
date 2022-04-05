import { render } from '@redwoodjs/testing/web'

import Quote from './Quote'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Quote', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Quote />)
    }).not.toThrow()
  })
})
