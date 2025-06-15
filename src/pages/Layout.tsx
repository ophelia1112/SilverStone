import Headguide from '../pagecomponents/layoutComponents/headguide.tsx'
import Links from '../pagecomponents/layoutComponents/link.tsx'
import Socials from '../pagecomponents/layoutComponents/social.tsx'
import Tail from '../pagecomponents/layoutComponents/tail.tsx'
import News from '../pagecomponents/layoutComponents/news.tsx'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Headguide />

      {children}

        <News/>
      <Links />
      <Socials />
      <Tail />
    </>
  )
}
