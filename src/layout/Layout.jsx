import {Outlet} from "react-router-dom";
import Mainguide from './Guide'
import Footlinks from './Footlinks'
import ContactsClaim from "./Contacts_Claim";
import {useState} from "react";
import styles from '../styles/Homepage/Layout.module.css'


export default function Layout() {
    const [closeMenu, setCloseMenu] = useState(false);
    return (
        <div className={styles.layout_container}>
            <Mainguide closeMenu={closeMenu} setCloseMenu={setCloseMenu} />


            <div className={`${styles.main_page} ${closeMenu ? styles.mainwebExpande : ''}`}>
                <Outlet />
            </div>


            <Footlinks closeMenu={closeMenu}/>
            <ContactsClaim closeMenu={closeMenu}/>

        </div>





    )
}