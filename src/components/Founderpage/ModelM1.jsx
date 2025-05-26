import styles from '../../styles/Founderpage/ModelM1.module.css'

export default function ModelM1() {
    return (
        <section id="model_m1-o1" className={styles.modelM1o1}>
            <div className={styles.modelTitle}>
                <span>System M1</span>
                <a href="">learn more</a>
            </div>

            <div className={styles.model_video}>
                <video src="/Founderpage_imgs_videos/m1.mov" autoPlay muted loop></video>
                <div className="video_tip">video paused</div>
            </div>
        </section>
    )
}