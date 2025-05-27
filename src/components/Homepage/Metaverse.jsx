import styles from "../../styles/Homepage/Metaverse.module.css";
export default function Metaverse() {
    return (
        <div className={styles.metaverse_area}>
      <div className={styles.metaverse_title}>
        <span>Metaverse Trading World</span>
        <a href="#">explore more</a>
      </div>
      <div className={styles.metaverse_img}>
          <img src="/Homepage_img_video/metaverse.png" alt=""/>
      </div>
    </div>
    )
}