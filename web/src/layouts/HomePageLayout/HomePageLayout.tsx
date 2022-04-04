type HomePageLayoutProps = {
  children?: React.ReactNode
}

const HomePageLayout = ({ children }: HomePageLayoutProps) => {
  return <>
  <main class='bg-neutral-400 h-screen w-full'>
  {children}
  </main>
  </>
}

export default HomePageLayout
