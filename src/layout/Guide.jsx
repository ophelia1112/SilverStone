import {Link} from 'react-router-dom'
import {useState} from "react";
import styles from "../styles/Homepage/Guide.module.css"


export default function Guide({closeMenu, setCloseMenu}) {
    const [activeMenu,enterMenu]=useState('main')


    return (
        <div>
            {/* rotate button */}
            <span className={`iconfont icon-button ${styles.hideGuideButton} ${closeMenu ? styles.rotated : ''}`}
                  onClick={() => setCloseMenu(!closeMenu)}></span>

                <aside className={`${styles.left_guide} ${closeMenu ? styles.guideHide : ''}`}>

                    <div className={styles.menuContainer}>
                        {/* logo */}
                        <div className={styles.companyname_logo}>
                            <Link to="/" onClick={() => enterMenu('main')}>
                                <img className={styles.logoImg} src="/Homepage_img_video/logo.png" alt="logo"/>
                            </Link>
                        </div>

                        {/* main menu (bool logic) */}
                        {activeMenu === 'main' && (
                            <div className={styles.main_menu}>
                                <div className={styles.menu} onClick={() => enterMenu('submenu_news')}>
                                    <div className={styles.guideText}>What's New?</div>
                                    <span className={`iconfont icon-jiantou ${styles.arrow}`}></span>
                                </div>

                                <div className={styles.menu} onClick={() => enterMenu('submenu_models')}>
                                    <div className={styles.guideText}>M1-o</div>
                                    <span className={`iconfont icon-jiantou ${styles.arrow}`}></span>
                                </div>

                                <div className={styles.menu} onClick={() => enterMenu('submenu_robots')}>
                                    <div className={styles.guideText}>M1-r</div>
                                    <span className={`iconfont icon-jiantou ${styles.arrow}`}></span>
                                </div>

                                <div className={styles.menu} onClick={() => enterMenu('submenu_research')}>
                                    <div className={styles.guideText}>Research</div>
                                    <span className={`iconfont icon-jiantou ${styles.arrow}`}></span>
                                </div>

                                <div className={styles.menu} onClick={() => enterMenu('submenu_privacy')}>
                                    <div className={styles.guideText}>Privacy</div>
                                    <span className={`iconfont icon-jiantou ${styles.arrow}`}></span>
                                </div>


                                <div className={styles.menu} onClick={() => enterMenu('submenu_company')}>
                                    <div className={styles.guideText}>Company</div>
                                    <span className={`iconfont icon-jiantou ${styles.arrow}`}></span>
                                </div>

                                <div className={styles.menu} onClick={() => enterMenu('submenu_team')}>
                                    <div className={styles.guideText}>Team</div>
                                    <span className={`iconfont icon-jiantou ${styles.arrow}`}></span>
                                </div>

                                <div className={styles.menu} onClick={() => enterMenu('submenu_API')}>
                                    <div className={styles.guideText}>API</div>
                                    <span className={`iconfont icon-jiantou ${styles.arrow}`}></span>
                                </div>

                                <div className={styles.menu} onClick={() => enterMenu('submenu_prices')}>
                                    <div className={styles.guideText}>Prices</div>
                                    <span className={`iconfont icon-jiantou ${styles.arrow}`}></span>
                                </div>




                            </div>)}


                        {/* sub menu (bool logic) */}
                        {activeMenu !== 'main' && (
                            <div className={styles.submenu}>
                                {/* return main menu */}
                                <div className={styles.menu} onClick={() => enterMenu('main')}>
                                    <div>Main Menu</div>
                                </div>
                                {/* enter sub menus */}
                                {activeMenu === 'submenu_news' && (
                                    <div className={styles.submenu_block}>
                                        <div>Lower Prices</div>
                                        <div>Model M1-o</div>
                                        <div>Robot M1-r</div>
                                        <div>Research</div>
                                        <div>Partner</div>
                                        <div>Team Member</div>
                                        <div>API</div>
                                        <div>New Policy</div>
                                    </div>

                                )}
                                {activeMenu === 'submenu_models' && (
                                    <div className={styles.submenu_block}>
                                        <div>Model M1-o</div>
                                        <div>API</div>
                                        <div>Corporation</div>
                                        <div>Docs</div>
                                        <div>Prices</div>
                                    </div>

                                )}
                                {activeMenu === 'submenu_robots' && (
                                    <div className={styles.submenu_block}>
                                        <div>Robot M1-r</div>
                                        <div>API</div>
                                        <div>Docs</div>
                                    </div>

                                )}
                                {activeMenu === 'submenu_research' && (
                                    <div className={styles.submenu_block}>
                                        <div>Articles</div>
                                        <div>Publications</div>
                                        <div>M1</div>
                                    </div>

                                )}
                                {activeMenu === 'submenu_privacy' && (
                                    <div className={styles.submenu_block}>
                                        <div>Safety Policy</div>
                                        <div>User Privacy</div>
                                        <div>Protection</div>
                                        <div>Safety Research</div>
                                    </div>

                                )}
                                {activeMenu === 'submenu_company' && (
                                    <div className={styles.submenu_block}>
                                        <div>About Us</div>
                                        <div>Future</div>
                                        <div>Our Products</div>
                                        <div>Our Aims</div>
                                        <div>Brand</div>
                                        <div>Stories</div>
                                        <div>Contact</div>
                                    </div>

                                )}
                                {activeMenu === 'submenu_team' && (
                                    <div className={styles.submenu_block}>
                                        <div>Team Members</div>
                                        <div>Contributions</div>
                                        <div>Philosophy</div>
                                        <div>Who We Want?</div>
                                        <div>Join us</div>
                                    </div>

                                )}
                                {activeMenu === 'submenu_API' && (
                                    <div className={styles.submenu_block}>
                                        <div>Deploy API</div>
                                        <div>Products API</div>
                                        <div>API Docs</div>
                                        <div>Develop With us</div>
                                    </div>

                                )}
                                {activeMenu === 'submenu_prices' && (
                                    <div className={styles.submenu_block}>
                                        <div>Discount</div>
                                        <div>Prices</div>
                                        <div>Feedback</div>
                                    </div>

                                )}
                            </div>
                        )}


                    </div>


                </aside>


        </div>

    )
}