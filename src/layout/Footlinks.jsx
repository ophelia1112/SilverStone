import styles from '../styles/Homepage/Footlinks.module.css'





export default function footlinks({closeMenu}) {
    return (
        <div className={`${styles.footlinks} ${closeMenu ? styles.compact : ''}`}
        style={{
        paddingLeft: closeMenu ? '14%' : '24%',
        transition: 'padding-left 0.6s ease'
      }}>
            <div className={styles.link_area}>
                <div className={styles.links}>
                    <p className={styles.link_title}><a href="">M1-o</a></p>
                    <p className={styles.every_link}><a href="">Model M1-o</a></p>
                    <p className={styles.every_link}><a href="">API</a></p>
                    <p className={styles.every_link}><a href="">Corporation</a></p>
                    <p className={styles.every_link}><a href="">Docs</a></p>
                    <p className={styles.every_link}><a href="">Prices</a></p>
                </div>

                <div className={styles.links}>
                    <p className={styles.link_title}><a href="">M1-r</a></p>
                    <p className={styles.every_link}><a href="">Robot M1-r</a></p>
                    <p className={styles.every_link}><a href="">API</a></p>
                    <p className={styles.every_link}><a href="">Docs</a></p>

                </div>
            </div>
            <div className={styles.link_area}>
                <div className={styles.links}>
                    <p className={styles.link_title}><a href="">Research</a></p>
                    <p className={styles.every_link}><a href="">Articles</a></p>
                    <p className={styles.every_link}><a href="">Publications</a></p>
                    <p className={styles.every_link}><a href="">M1</a></p>

                </div>

                <div className={styles.links}>
                    <p className={styles.link_title}><a href="">Privacy</a></p>
                    <p className={styles.every_link}><a href="">Safety Policy</a></p>
                    <p className={styles.every_link}><a href="">User Privacy</a></p>
                    <p className={styles.every_link}><a href="">Protection</a></p>
                    <p className={styles.every_link}><a href="">Safety Research</a></p>

                </div>


            </div>


            <div className={styles.link_area}>
                <div className={styles.links}>
                    <p className={styles.link_title}><a href="">Company</a></p>
                    <p className={styles.every_link}><a href="">About us</a></p>
                    <p className={styles.every_link}><a href="">Future</a></p>
                    <p className={styles.every_link}><a href="">Our Products</a></p>
                    <p className={styles.every_link}><a href="">Our Aims</a></p>
                    <p className={styles.every_link}><a href="">Stories</a></p>
                    <p className={styles.every_link}><a href="">Contact</a></p>

                </div>

                <div className={styles.links}>
                    <p className={styles.link_title}><a href="">Team</a></p>
                    <p className={styles.every_link}><a href="">Team Members</a></p>
                    <p className={styles.every_link}><a href="">Contributions</a></p>
                    <p className={styles.every_link}><a href="">Philosophy</a></p>
                    <p className={styles.every_link}><a href="">Who We Want?</a></p>
                    <p className={styles.every_link}><a href="">Join us</a></p>

                </div>
            </div>

            <div className={styles.link_area}>
                <div className={styles.links}>
                    <p className={styles.link_title}><a href="">API</a></p>
                    <p className={styles.every_link}><a href="">Deploy API</a></p>
                    <p className={styles.every_link}><a href="">Products API</a></p>
                    <p className={styles.every_link}><a href="">API Docs</a></p>
                    <p className={styles.every_link}><a href="">Develop With us</a></p>

                </div>

                <div className={styles.links}>
                    <p className={styles.link_title}><a href="">Prices</a></p>
                    <p className={styles.every_link}><a href="">Discount</a></p>
                    <p className={styles.every_link}><a href="">Prices</a></p>
                    <p className={styles.every_link}><a href="">Feedback</a></p>

                </div>


            </div>

        </div>

    )
}