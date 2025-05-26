import styles from '../../styles/Founderpage/Learning.module.css'
import {useRef,useEffect} from "react";

export default function Learning() {

    const typingRef = useRef(null);

    useEffect(() => {
        const texts=[
              "Other Programming Languages",
              "AI Deep Learning",
              "AI Reinforcement Learning",
              "Foundation Models for Finance",
              "3D Modeling"
        ]
        const element=typingRef.current
        if(!element){console.error('can not find element of typing')}

        let sentenceIndex = 0;
        let charIndex = 0;

        function typeNextChar() {
            const currentText = texts[sentenceIndex];
            if (charIndex <= currentText.length) {
              element.textContent = currentText.slice(0, charIndex);
              charIndex++;
              setTimeout(typeNextChar, 60);
            } else {
              setTimeout(startNextSentence, 1500);
            }
        }

        function startNextSentence() {
            sentenceIndex = (sentenceIndex + 1) % texts.length;
            charIndex = 0;
            setTimeout(typeNextChar, 300);
      }

      typeNextChar();
    }, []);


    return (
        <div className={styles.learning_future} id="learning_future">
            <div><a href="">Try M1 System.</a></div>
            <div><a href="">Visit our official website(under construction).</a></div>

            <div>
                <span>Learning:</span>
                <span className={styles.learning_content} ref={typingRef}></span>
            </div>

    </div>
    )
}