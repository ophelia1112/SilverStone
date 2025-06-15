import styles from '../../pageStyle/layoutStyles/headguide.module.css'
import {Link} from 'react-router-dom'

export default function Headguide() {
    return (
        <div className={styles.news_head}>
        <div className={styles.head}>
            <div className={styles.logoname}>
                <Link to="/">
                    <img src="/homepage_resource/logo.png" alt=""/>
                </Link>

            </div>

            <div className={styles.otherbutton}>
                <div className={styles.headicon}>
                    <span className={`iconfont icon-language ${styles.sideicon}`}></span>

                </div>
                <div className={styles.headicon}>
                    <span className={`iconfont icon-register ${styles.register}`}></span>
                </div>
                <div className={styles.headicon}>
                    <span className={`iconfont icon-guide ${styles.sideicon}`}></span>
                </div>
            </div>
        </div>
            </div>
    )
}








