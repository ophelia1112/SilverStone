import styles from '../../styles/Founderpage/Introduction.module.css'
export default function Introduction() {
    return (
        <section id="introduction_title" className={styles.introduction_title}>
            <p>About Founder.</p>

            <p>Silverstone AI Technologies Pte. Ltd. was founded to build a more automated and transparent
                AI-powered trading universe for the world.
                Our team maintains an unwavering passion for both trading and artificial intelligence.
            </p>

            <p>Find More <span className="iconfont icon-below-arrow"></span></p>
        </section>
    )
}