export const schema = gql`
  type Quote {
    quote: String!
  }

  type Query {
    randomQuote: Quote @skipAuth
  }
`
