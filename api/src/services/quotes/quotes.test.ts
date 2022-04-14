import { randomQuote } from './quotes'

describe('quotes', () => {
  scenario('returns a random quote', async () => {
    const result = await randomQuote()
    expect(result.quote).toBeDefined()
  })
})
