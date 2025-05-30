import styles from '../../styles/Homepage/Project2.module.css'

export default function Project2() {
    return (
        <div className={styles.new_project2}>
            <div className={styles.new_project2_title}>
                <span>What next?</span>
                <a href="">view more</a>
            </div>

            <div className={styles.project2}>
                <div className={styles.project2_container}>
                    <img src="/Homepage_img_video/o2.jpg" alt=""/>
                    <p><a href="#">
                        The Intelligent Sentiment-Driven Financial
                        Information Feedback and Trade Execution
                        System — M1-o1 Initial Model Version.

                    </a></p>
                </div>

                <div className={styles.project2_container}>
                    <img src="/Homepage_img_video/o1.jpg" alt=""/>

                    <p><a href="#">
                        A native on-chain mixing protocol on the trading chain Hyperliquid.
                    </a></p>

                </div>

                <div className={styles.project2_container}>
                    <img src="/Homepage_img_video/r1.jpg" alt=""/>
                    <p><a href="#">On-chain wallet infrastructure tailored for multi-chain asset management.</a></p>

                </div>
            </div>
        </div>

    )
}