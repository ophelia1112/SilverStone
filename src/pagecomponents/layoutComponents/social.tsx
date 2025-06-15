import styles from '../../pageStyle/layoutStyles/social.module.css'

export default function Social() {
    return (
        <div className={styles.social_claim}>
            <div className={styles.socials}>

                <a href=""><span className="iconfont icon-X"></span></a>
                <a href=""><span className="iconfont icon-GitHub"></span></a>
                <a href=""><span className="iconfont icon-linkedin"></span></a>
                <a href=""><span className="iconfont icon-youtube"></span></a>
                <a href=""><span className="iconfont icon-discard"></span></a>
                <a href=""><span className="iconfont icon-telegram"></span></a>
                <a href=""><span className="iconfont icon-ins"></span></a>

            </div>

            <div className={styles.claim}>
                &copy; <span className="year">2024-2025</span> &ensp;&ensp;SilverStone Capital. All rights reserved.
            </div>
        </div>

    )
}