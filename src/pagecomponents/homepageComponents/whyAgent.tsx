import styles from '../../pageStyle/homepageStyle/whyAgent.module.css'

export default function WhyAgent() {
    return (
        <div className={styles.why}>
            <div className={styles.img}>
                <img src="/homepage_resource/agentdec.png" alt=""/>
            </div>
            <div className={styles.reason}>
                <p>Why agents?</p>
                <p><span></span>
                Leverage AI to eliminate 90% of repetitive tasks, mitigate human-induced risks, and maximize both strategic agility and return potential.

                </p>

            </div>
        </div>
    )
}