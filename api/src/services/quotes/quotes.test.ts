import { quotes, quote, createQuote, updateQuote, deleteQuote } from './quotes'
import type { StandardScenario } from './quotes.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('quotes', () => {
  scenario('returns all quotes', async (scenario: StandardScenario) => {
    const result = await quotes()

    expect(result.length).toEqual(Object.keys(scenario.quote).length)
  })

  scenario('returns a single quote', async (scenario: StandardScenario) => {
    const result = await quote({ id: scenario.quote.one.id })

    expect(result).toEqual(scenario.quote.one)
  })

  scenario('creates a quote', async () => {
    const result = await createQuote({
      input: { quote: 'String5479029' },
    })

    expect(result.quote).toEqual('String5479029')
  })

  scenario('updates a quote', async (scenario: StandardScenario) => {
    const original = await quote({ id: scenario.quote.one.id })
    const result = await updateQuote({
      id: original.id,
      input: { quote: 'String9862202' },
    })

    expect(result.quote).toEqual('String9862202')
  })

  scenario('deletes a quote', async (scenario: StandardScenario) => {
    const original = await deleteQuote({ id: scenario.quote.one.id })
    const result = await quote({ id: original.id })

    expect(result).toEqual(null)
  })
})
