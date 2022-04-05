import type { QuotesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Quote from 'src/components/Quote'


export const QUERY = gql`
  query RandomQuery {
    randomQuote {
      quote
    }
  }
`

export const Loading = () => <div>...thinking</div>

export const Empty = () => <div>something weird happened</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ randomQuote, refetch }: CellSuccessProps<QuotesQuery>) => {
  return (
      <div
      onClick={() => refetch()}
        className='cursor-pointer w-8/12 h-72 border-2 max-w-2xl  my-20 mx-auto flex rounded-xl border-neutral-800 bg-neutral-100 shadow-2xl shadow-neutral-500 overflow-hidden'
      >
      <div
      className='px-12 py-12 m-auto font-mono text-l font-semibold text-center text-neutral-600'
      >
      <Quote quote={randomQuote.quote} />
      </div>
      </div>
  )
}
