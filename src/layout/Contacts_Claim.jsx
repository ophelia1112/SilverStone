import styles from "../styles/Homepage/Contact_claim.module.css";


export default function contacts_Claim({closeMenu}) {
    return (
        <div className={`${styles.contactsClaim} ${closeMenu ? styles.compact : ''}`}
        style={{
        paddingLeft: closeMenu ? '6%' : '22%',
        transition: 'padding-left 0.6s ease'
      }}>
            <div className={styles.contact}>
                <a href="" className={'iconfont icon-tuite'}></a>
                <a href="" className={'iconfont icon-Youtube-fill'}></a>
                <a href="" className={'iconfont icon-linkin'}></a>
                <a href="" className={'iconfont icon-github'}></a>
                <a href="" className={'iconfont icon-instagram'}></a>
                <a href="" className={'iconfont icon-telegram'}></a>
                <a href="" className={'iconfont icon-discord'}></a>
            </div>
            <div className={styles.claim}>
                &copy; <span className="year">2024-2025</span> &ensp;&ensp;SilverStone Capital. All rights reserved.
            </div>
        </div>
    )
}