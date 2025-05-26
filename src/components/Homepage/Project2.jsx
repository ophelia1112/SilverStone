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
                        An on-chain intel and auto-trading bot
                        that scans new token contracts,
                        scores them, and executes user-defined strategies
                        — M1-r1.
                    </a></p>

                </div>

                <div className={styles.project2_container}>
                    <img src="/Homepage_img_video/r1.jpg" alt=""/>
                    <p><a href="#">Open Metaverse Trading System .</a></p>

                </div>
            </div>
        </div>

    )
}