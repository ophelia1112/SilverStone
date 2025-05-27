
import styles from '../../styles/Homepage/Financeservice.module.css';
export default function Financeservice() {



  return (
      <div className={styles.finance_service}>
        <div className={styles.finance_service_title}>
          <span>Finance Service</span>
          <a href="">explore more</a>
        </div>

        <div className={styles.services_container}>
            <video src="/Homepage_img_video/financeService.mp4" autoPlay muted loop preload="auto"></video>

        </div>

      </div>

  )

}