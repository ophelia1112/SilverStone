import styles from '../../styles/Founderpage/Introductionvideo.module.css'
import {useRef,useEffect} from "react";

export default function Introduction_Video() {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const tipRef = useRef(null);
    useEffect(() => {
        const container = containerRef.current;
        const video = videoRef.current;
        const tip = tipRef.current;

        if (!container || !video || !tip) {
            console.error('can not find container/video/tip');
        }

        const handleEnter = () => {
            video.pause();
            tip.style.display = 'block';
    };

        const handleExit = () => {
          video.play();
          tip.style.display = 'none';
        };

        const handlePosition = (e) => {
          tip.style.left = `${e.clientX}px`;
          tip.style.top = `${e.clientY}px`;
          tip.style.transform = 'translate(13px, 13px)';
        };

    container.addEventListener('mouseenter', handleEnter);
    container.addEventListener('mouseleave', handleExit);
    container.addEventListener('mousemove', handlePosition);

    return () => {
      container.removeEventListener('mouseenter', handleEnter);
      container.removeEventListener('mouseleave', handleExit);
      container.removeEventListener('mousemove', handlePosition);
    };
  }, []);


    return (
        <section ref={containerRef} className={styles.personal_introduction_video} >
            <video ref={videoRef} src="/Founderpage_imgs_videos/introduction.mp4" autoPlay muted loop></video>
            <div ref={tipRef} className="video_tip">video paused</div>
        </section>
    )
}