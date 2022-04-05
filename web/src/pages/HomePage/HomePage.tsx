import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import QuotesCell from 'src/components/QuotesCell'

const HomePage = () => {
  return (
    <>
      <h1 className="w-1/3 text-8xl text-neutral-200 font-semibold">
        Oblique Strategies
      </h1>

      <QuotesCell />

      <div className="mt-20 py-8 text-center bg-neutral-600 text-neutral-300">
        <a
          href="https://en.wikipedia.org/wiki/Oblique_Strategies"
          className="text-neutral-100 font-semibold hover:underline underline-offset-2 decoration-neutral-200"
        >
          Oblique Strategies
        </a>
        &nbsp;created by&nbsp;
        <a
          href="https://en.wikipedia.org/wiki/Brian_Eno"
          className="text-neutral-100 font-semibold hover:underline underline-offset-2 decoration-neutral-200"
        >
          Brian Eno
        </a>
        &nbsp;and&nbsp;
        <a
          href="https://en.wikipedia.org/wiki/Peter_Schmidt_(artist)"
          className="text-neutral-100 font-semibold hover:underline underline-offset-2 decoration-neutral-200"
        >
          Peter Schmidt
        </a>
      </div>

      <div className="mt-4 py-2 text-center bg-neutral-300 text-neutral-600">
        Website by&nbsp;
        <a
          href="https://twitter.com/zpeters"
          className="text-neutral-800 font-semibold hover:underline underline-offset-2 decoration-neutral-600"
        >
          @zpeters
        </a>
        &nbsp;with&nbsp;
        <a
          href="https://nestjs.com/"
          className="text-neutral-800 font-semibold hover:underline underline-offset-2 decoration-neutral-600"
        >
          NestJS
        </a>
        ,
        <a
          href="https://kit.svelte.dev/"
          className="text-neutral-800 font-semibold hover:underline underline-offset-2 decoration-neutral-600"
        >
          SvelteKit
        </a>
        &nbsp;and&nbsp;
        <a
          href="https://tailwindcss.com/"
          className="text-neutral-800 font-semibold hover:underline underline-offset-2 decoration-neutral-600"
        >
          Tailwind
        </a>
      </div>
    </>
  )
}

export default HomePage
