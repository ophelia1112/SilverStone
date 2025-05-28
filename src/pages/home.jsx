import Headslogan from "../components/Homepage/Headslogan"
import Flowhead from '../components/Homepage/Flowhead'
import Inputbar from '../components/Homepage/Inputbar'
import M1product from '../components/Homepage/M1product'
import Product2 from '../components/Homepage/Project2'
import Financeservice from '../components/Homepage/Financeservice'
import Metaverse from '../components/Homepage/Metaverse'
import Research from '../components/Homepage/Research'
import Futurecooperation from '../components/Homepage/Futurecooperation'


export default function Home() {
    return (
        <div>
            <Headslogan />
            <Flowhead />
            <Inputbar />
            <M1product/>
            <Product2 />
            <Financeservice/>
            <Metaverse/>
            <Research/>
            <Futurecooperation/>
        </div>


    )
}