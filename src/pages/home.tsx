import Headguide from '../pagecomponents/homepageComponents/headguide.tsx'
import Headvideo from '../pagecomponents/homepageComponents/headvideo.tsx'
import Agents from '../pagecomponents/homepageComponents/agents.tsx'
import Whyagent from '../pagecomponents/homepageComponents/whyAgent.tsx'
import News from '../pagecomponents/homepageComponents/news.tsx'
import Links from '../pagecomponents/homepageComponents/link.tsx'
import Socials from '../pagecomponents/homepageComponents/social.tsx'
import Tail from '../pagecomponents/homepageComponents/tail.tsx'
export default function Home() {
    return (
        <>
            <Headguide />
            <Headvideo />
            <Agents />
            <Whyagent />
            <News/>
            <Links />
            <Socials />
            <Tail/>


        </>
    )
}