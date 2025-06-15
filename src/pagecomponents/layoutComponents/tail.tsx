import styles from '../../pageStyle/layoutStyles/tail.module.css'

export default function Tail() {
    return (
        <div className={styles.slogan}>
            <img src="/homepage_resource/news.jpg" alt=""/>

            <div className={styles.imgdec}>
                <span className={styles.title}>SilverStone.</span>
                    <br></br>
                    <span className={styles.intro}>AI Empowerment of Intelligence.</span>


            </div>
        </div>
    )
}