import styles from '../../styles/Homepage/Research.module.css';
import { useRef, useEffect } from 'react';

export default function Research() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const tipRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    const tip = tipRef.current;

    if (!container || !video || !tip) {
      console.error('can not find container/video/tip');
      return;
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
    <div className={styles.research}>
      <div className={styles.research_title}>
        <span>Current Research</span>
        <a href="#">read more</a>
      </div>
      <div className={styles.research_video} ref={containerRef}>
        <video ref={videoRef} src="/Homepage_img_video/research_video.mp4" autoPlay muted loop preload="auto"/>
        <div ref={tipRef} className="video_tip">video paused</div>
      </div>
    </div>
  );
}
