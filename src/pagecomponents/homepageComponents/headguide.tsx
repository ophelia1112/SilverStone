import styles from '../../pageStyle/homepageStyle/headguide.module.css'


export default function Headguide() {
    return (
        <div className={styles.news_head}>
        <div className={styles.head}>
            <div className={styles.logoname}>
                <img src="/homepage_resource/logo.png" alt=""/>
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








