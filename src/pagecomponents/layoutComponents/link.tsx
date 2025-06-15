import styles from '../../pageStyle/layoutStyles/link.module.css'
import {Link} from "react-router-dom";

export default function Links() {
    return (
            <div className={styles.link}>
            <div className={styles.grouplinks}>
                <Link to="/agents">AI agents</Link>
                <a href="">Reseach</a>
                <a href="">Security</a>
                <a href="">Privacy</a>
                <a href="">Policy</a>

            </div>
            <div className={styles.grouplinks}>
                <a href="">Team</a>
                <a href="">Consultation</a>
                <a href="">Blogs</a>
                <a href="">API</a>
                <a href="">Development</a>

            </div>
            <div className={styles.grouplinks}>
                <a href="">Help</a>
                <a href="">about</a>
                <a href="">Cookie</a>
                <a href="">FAQs</a>


            </div>
        </div>

    )
}