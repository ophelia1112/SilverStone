import styles from '../../styles/Founderpage/Researchproject.module.css'

export default function Researchproject() {
    return (
        <div className={styles.research_project}>
            <div className={styles.research_project_title}>
                <span>Research & Projects</span>
                <a href="">learn more</a>
            </div>

            <div id="projects" className={styles.projects}>
                <div className={styles.projects_content}>
                    <div className={styles.projects_title}>
                        <p>Projects</p>
                    </div>

                    <div className={styles.projects_list}>
                        <div className={styles.img_project_info}>
                            <div className={styles.project_img}>
                                <img src="/Founderpage_imgs_videos/project1.png" alt=""/>
                            </div>
                            <div className={styles.img_project_content}>
                                <p>M1 System Framework.</p>
                                <p>M1 is an intelligent financial system
                                    that integrates emotion sensing,
                                    intent recognition, and automated execution.
                                    It analyzes real-time market data and user
                                    intent to generate personalized asset recommendations
                                    and execute trades, forming a closed-loop decision engine.
                                </p>
                            </div>
                        </div>

                        <div className={styles.img2_project_info} >
                            <div className={styles.img2_projects} >
                                <div className={styles.img2_projects_content}>
                                    <p>Development of an Open Metaverse Trading System
                                        and Autonomous On-Chain Scanning Bots.
                                    </p>
                                    <p>The Open Metaverse Trading System is designed to
                                        build a multi-dimensional,
                                        interoperable trading infrastructure mapped
                                        to Layer 2 blockchain assets.
                                        It integrates decentralized matching mechanisms
                                        to accelerate token bridging,
                                        improve cross-chain efficiency, and reduce transaction costs.
                                    </p>
                                </div>

                            </div>
                            <div className={styles.project_img2} id="project_video">
                                <img src="/Founderpage_imgs_videos/project2.png" alt="/"></img>
                            </div>
                        </div>
                    </div>


                </div>


            </div>


            <div id="research" className={styles.research}>
                <div className={styles.research_title}>
                    <p>Research</p>
                </div>

                <div className={styles.all_research_img_info} >

                    <div className={styles.research_img_info}>
                        <div className={styles.research_img}>
                            <img src="/Founderpage_imgs_videos/research.png" alt=""/>
                        </div>
                        <div className={styles.research_info}>
                            <p>
                                Emotion-Driven Intelligent System for Financial Signal Feedback,
                                Trade Execution, and User Profiling.
                            </p>
                        </div>

                    </div>
                    <div className={styles.research_img_info}>
                        <div className={styles.research_img}>
                            <img src="/Founderpage_imgs_videos/research1.png" alt=""/>
                        </div>
                        <div className={styles.research_info}>
                            <p>Construction of an Engineering System for Market Information
                                Feature Extraction and Multi-Source Data Aggregation.</p>
                        </div>

                    </div>
                    <div className={styles.research_img_info}>
                        <div className={styles.research_img}>
                            <img src="/Founderpage_imgs_videos/research2.png" alt=""/>
                        </div>
                        <div className={styles.research_info}>
                            <p>Research on Autonomous On-Chain Scanning Agents
                                and Intelligent Crypto Trading Systems.</p>
                        </div>

                    </div>
                    <div className={styles.research_img_info}>
                        <div className={styles.research_img}>
                            <img src="/Founderpage_imgs_videos/research3.png" alt=""/>
                        </div>
                        <div className={styles.research_info}>
                            <p>Interpretable Governance Architectures for Black-Box AI
                                and Smart Contract Risk Mitigation in Decentralized Finance.</p>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}