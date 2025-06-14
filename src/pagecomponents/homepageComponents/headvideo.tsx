import styles from '../../pageStyle/homepageStyle/headvideo.module.css'

export default function HeadVideo() {
    return (
        <div className={styles.headvideo}>
            <video src="/homepage_resource/headvideo.mp4" autoPlay muted></video>


            <div className={styles.videodec}>
                <div className={styles.content_link}>
                    <div className={styles.headcontent}>
                        Next trade. <br></br>
                        Informed or executed<br></br>
                        by your agent.<br></br>
                    </div>
                    <br></br>
                    <div className={styles.link}>
                        <div className={styles.linkbackground}>
                            <a href="">
                            Learn more
                        </a>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}