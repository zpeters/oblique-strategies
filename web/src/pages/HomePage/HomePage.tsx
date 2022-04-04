import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import QuotesCell from 'src/components/QuotesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <h1 class="w-1/3 text-8xl text-neutral-200 font-semibold">Oblique Strategies</h1>

<div
	// on:click={getQuote}
	class="cursor-pointer w-8/12 h-72 border-2 max-w-2xl  my-20 mx-auto flex rounded-xl border-neutral-800 bg-neutral-100 shadow-2xl shadow-neutral-500 overflow-hidden"
>
	<div class="px-12 py-12 m-auto font-mono text-l font-semibold text-center text-neutral-600">
    <QuotesCell />
	</div>
</div>

<div class="mt-20 py-8 text-center bg-neutral-600 text-neutral-300">
	<a
		href="https://en.wikipedia.org/wiki/Oblique_Strategies"
		class="text-neutral-100 font-semibold hover:underline underline-offset-2 decoration-neutral-200"
		>Oblique Strategies</a
	>
	created by
	<a
		href="https://en.wikipedia.org/wiki/Brian_Eno"
		class="text-neutral-100 font-semibold hover:underline underline-offset-2 decoration-neutral-200"
	>
		Brian Eno</a
	>
	and
	<a
		href="https://en.wikipedia.org/wiki/Peter_Schmidt_(artist)"
		class="text-neutral-100 font-semibold hover:underline underline-offset-2 decoration-neutral-200"
		>Peter Schmidt</a
	>
</div>

<div class="mt-4 py-2 text-center bg-neutral-300 text-neutral-600">
	Website by <a
		href="https://twitter.com/zpeters"
		class="text-neutral-800 font-semibold hover:underline underline-offset-2 decoration-neutral-600"
		>@zpeters</a
	>
	with
	<a
		href="https://nestjs.com/"
		class="text-neutral-800 font-semibold hover:underline underline-offset-2 decoration-neutral-600"
		>NestJS</a
	>,
	<a
		href="https://kit.svelte.dev/"
		class="text-neutral-800 font-semibold hover:underline underline-offset-2 decoration-neutral-600"
		>SvelteKit</a
	>
	and
	<a
		href="https://tailwindcss.com/"
		class="text-neutral-800 font-semibold hover:underline underline-offset-2 decoration-neutral-600"
		>Tailwind</a
	>
</div>



    </>
  )
}

export default HomePage
