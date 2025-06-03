import styles from '../../styles/Homepage/M1product.module.css'
export default function M1product(){
    return (
        <div className={styles.new_project1}>
            <div className={styles.head_m1}>
                <video src="/Homepage_img_video/m1.mp4" autoPlay muted loop preload="auto"></video>
                <a href="" className={styles.m1_link}></a>
            </div>

            <div className={styles.m1_info}>
                <p>
                    M1 System<br/>
                    Now under construction.
                </p>
            </div>


        </div>
    )
}