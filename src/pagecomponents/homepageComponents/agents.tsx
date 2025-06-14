import styles from '../../pageStyle/homepageStyle/agents.module.css'
import { useEffect, useRef } from "react";

export default function Agents() {
    const sideRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const fullpageRef=useRef<HTMLDivElement>(null)

    useEffect(() => {
        const side = sideRef.current;
        const content = contentRef.current;
        const fullpage=fullpageRef.current;
        if (!side || !content || !fullpage) return;

        let canIntercept=false;

        const observer = new IntersectionObserver(([entry]) => {
            canIntercept=entry.isIntersecting && entry.intersectionRatio===1;
        },
            {
                threshold:1.0
            });
        observer.observe(fullpage);

        const handleWheel = (event: WheelEvent) => {
            if (!canIntercept) return;

            const delta = event.deltaY;

            const atTop = content.scrollTop <= 0;
            const atBottom = content.scrollTop + content.clientHeight >= content.scrollHeight - 1;

            const shouldScroll =
                (delta > 0 && !atBottom) || (delta < 0 && !atTop);

            if (shouldScroll) {
                event.preventDefault();
                content.scrollBy({
                    top: delta,
                    behavior: 'auto',
                });
            }

        };

        side.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            side.removeEventListener("wheel", handleWheel);
            observer.disconnect();
        };
    }, []);

    return (
        <div className={styles.agentarea} ref={fullpageRef}>
            <div className={styles.agentside} ref={sideRef}>
                Explore AI agents.
            </div>

            <div className={styles.agentsexpress} ref={contentRef}>
                <div className={styles.agents}>
                    <div className={styles.agent}>
                        <div className={styles.logo}>
                            <img src="/homepage_resource/twitterAgent.png" alt="" />
                        </div>
                        <div className={styles.name}>
                            <a href="">Realtime Social Stream Agent.</a>
                        </div>
                        <div className={styles.intro}>
                            Helps you quickly access clear, processed social media tweets.
                        </div>
                    </div>
                </div>

                <div className={styles.agents}>
                    <div className={styles.agent}>
                        <div className={styles.logo}>
                            <img src="/homepage_resource/tradingAgent.png" alt="" />
                        </div>
                        <div className={styles.name}>
                            <a href="">A hands-free strategy trading agent.</a>
                        </div>
                        <div className={styles.intro}>
                            Define your own strategy and let the agent execute it around the clock.
                        </div>
                    </div>
                </div>

                <div className={styles.agents}>
                    <div className={styles.agent}>
                        <div className={styles.logo}>
                            <img src="/homepage_resource/wallet.png" alt=""/>
                        </div>
                        <div className={styles.name}>
                            <a href="">A Bitcoin ecosystem-native wallet.</a>
                        </div>
                        <div className={styles.intro}>
                            Speed up capital flow across the Bitcoin chain.
                        </div>
                    </div>
                </div>

                <div className={styles.agents}>
                    <div className={styles.agent}>
                        <div className={styles.exploreMoreAgents}>
                            <a href="">Explore more trading-assistant agents.</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
