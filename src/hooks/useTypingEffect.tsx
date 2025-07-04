import { useEffect, useState } from "react";

export function useTypingEffect(
  texts: string[],
  speed: number = 100,
  delay: number = 1500
): string {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        setCharIndex((i) => i + 1);
      }, speed);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex - 1));
        setCharIndex((i) => i - 1);
      }, speed / 2);
    } else if (!deleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setDeleting(true), delay);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTextIndex((i) => (i + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [texts, textIndex, charIndex, deleting, speed, delay]);

  return displayedText;
}
