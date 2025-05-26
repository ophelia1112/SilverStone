import styles from '../../styles/Homepage/Inputbar.module.css'

export default function Inputbar(){
    return (
        <div className={styles.input_bar_container}>
            <input type="text" className={styles.input_bar} placeholder="Try entering the above question in..."/>
            <span className={`iconfont icon-send ${styles.send}`}></span>
        </div>
    )
}