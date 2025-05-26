import styles from '../../styles/Homepage/Futurecooperation.module.css'
import {useRef,useEffect} from "react";

export default function Futurecooperation() {
    const typingRef = useRef(null);

    useEffect(() => {
        const texts=[
            "AI-Powered Carbon Market Intelligence.",
            "AI-Driven Financial Education & Literacy.",
            "AI-Based Risk Management and Compliance.",
            "Blockchain Security and Privacy Engineering.",
            "Text-to-Image and Generative Media AI.",
            "Multimodal Artificial Intelligence.",
            "Large Language Model (LLM) Applications."
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
        <div className={styles.future_cooperation}>
            <div className={styles.tail_title} >
                <a href="">
                    Try M1 System.
                </a>
            </div>
            <span className={styles.future_title}>
            Futures:
            </span>

            <span ref={typingRef} className={styles.future_areas}></span>
        </div>
    )
}