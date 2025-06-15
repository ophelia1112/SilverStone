import styles from '../../pageStyle/layoutStyles/news.module.css'

export default function News() {
    return (
        <div className={styles.news}>
            <div className={styles.email}>
                <p>Subscribe to our latest product updates and news<span className="iconfont icon-news"></span>. </p>
                <div className={styles.inputBar}>
                    <input type="text" className={styles.input}/>
                    <span className={`iconfont icon-arrow ${styles.arrow}`}></span>
                </div>


            </div>



        </div>
    )
}