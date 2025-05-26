import styles from '../../styles/Founderpage/Skills.module.css'


export default function Skills() {
    return (

        <div className={styles.skills} id="skills">
        <div className={styles.skills_title}>
            <span>Personal Skills</span>
            <a href="">learn more</a>
        </div>

        <div className={styles.skill}>
            <img src="/Founderpage_imgs_videos/skill1.png" alt=""/>
            <img src="/Founderpage_imgs_videos/skill2.png" alt=""/>
        </div>

    </div>
    )

}