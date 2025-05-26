import styles from '../../styles/Homepage/Flowhead.module.css'

export default function Flowhead(){
    return (
        <div className={styles.flow_head}>
            <div className={styles.sentence}
                 style={{"--duration": "120s",
                     top: "10%",
                     fontSize: "20px",
                     color:"rgba(1,1,1,0.3)"}}>
                What’s the overall market sentiment right now? Are most people feeling bearish?
            </div>

            <div className={styles.sentence}
                    style={{"--duration": "50s",
                     top: "25%",
                     fontSize: "16px",
                     color:"rgba(1,1,1,0.7)"}}>
                Which tokens are worth buying at the moment? Can you suggest some promising low-cap coins?
            </div>

            <div className={styles.sentence}
                    style={{"--duration": "60s",
                     top: "35%",
                     fontSize: "21px",
                     color:"rgba(1,1,1,0.5)"}}>
                Is it a good time to buy Bitcoin now? Do you think it's a smart entry point for ETH?
            </div>

            <div className={styles.sentence}
                    style={{"--duration": "80s",
                     top: "65%",
                     fontSize: "17px",
                     color:"rgba(1,1,1,0.8)"}}>
                Are there any major updates or breaking news in the market today?
            </div>

            <div className={styles.sentence}
                    style={{"--duration": "100s",
                     top: "85%",
                     fontSize: "21px",
                     color:"rgba(1,1,1,0.2)"}}>
                Any new tokens deployed recently? Which projects have just launched or gone live?
            </div>

            <div className={styles.sentence}
                style={{"--duration": "70s",
                     top: "75%",
                     fontSize: "16px",
                     color:"rgba(1,1,1,0.6)"}}>
                Which NFTs are trending lately? Can you recommend any high-hype collections right now?
            </div>

            <div className={styles.sentence}
                style={{"--duration": "90s",
                     top: "0%",
                     fontSize: "19px",
                     color:"rgba(1,1,1,0.4)"}}>
                What exactly is ORDI? Can you break down the fundamentals of the LayerZero project?
            </div>

        </div>
    )
}