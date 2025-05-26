import styles from '../../styles/Founderpage/Personalguide.module.css'

export default function PersonalGuide() {
    return (
        <div className={styles.personal_guide}>
            <a href="#introduction_title">Introduction</a>
            <a href="#model_m1-o1">Model M1-o1</a>
            <a href="#projects">Projects</a>
            <a href="#research">Research</a>
            <a href="#skills">Skills</a>
            <a href="#learning_future">Learning & Future</a>
        </div>
    )
}