import styles from "../../styles/Homepage/Metaverse.module.css";
export default function Metaverse() {
    return (
        <div className={styles.metaverse_area}>
      <div className={styles.metaverse_title}>
        <span>Metaverse Trading World</span>
        <a href="#">explore more</a>
      </div>
      <div className={styles.metaverse_video}>
        <video src="/Homepage_img_video/metaverse.mp4" autoPlay muted loop />
      </div>
    </div>
    )
}