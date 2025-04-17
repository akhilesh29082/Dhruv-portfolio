import { useState, useEffect } from "react";

interface TypewriterEffectProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenPhrases?: number;
  className?: string;
}

const TypewriterEffect = ({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenPhrases = 1500,
  className = "",
}: TypewriterEffectProps) => {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(typingSpeed);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        setDisplayText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        setSpeed(deletingSpeed);
      } else {
        setDisplayText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        setSpeed(typingSpeed);
      }

      // Switch to deleting mode if we've fully typed the phrase
      if (!isDeleting && charIndex === currentPhrase.length) {
        setIsDeleting(true);
        setSpeed(delayBetweenPhrases);
      } 
      // Switch to next phrase and typing mode if we've deleted the current phrase
      else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
        setSpeed(500); // Pause before typing next phrase
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, delayBetweenPhrases, deletingSpeed, isDeleting, phraseIndex, phrases, speed, typingSpeed]);

  return <span className={className}>{displayText}</span>;
};

export default TypewriterEffect;
