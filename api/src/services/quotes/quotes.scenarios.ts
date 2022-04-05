import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.QuoteCreateArgs>({
  quote: {
    one: { data: { quote: 'String8233656' } },
    two: { data: { quote: 'String6007413' } },
  },
})

export type StandardScenario = typeof standard
