import Personalguide from '../components/Founderpage/Personalguide'
import Introduction from '../components/Founderpage/Introduction'
import IntroductionVideo from '../components/Founderpage/Introductionvideo'
import Modelvideo from '../components/Founderpage/ModelM1'
import ResearchProject from '../components/Founderpage/Researchproject'
import Skills from '../components/Founderpage/Skills'
import LearningFuture from "../components/Founderpage/Learning";

export default function Founder() {
    return (
        <div>
            <Personalguide />
            <Introduction />
            <IntroductionVideo />
            <Modelvideo />
            <ResearchProject />
            <Skills />
            <LearningFuture />


        </div>
    )
}