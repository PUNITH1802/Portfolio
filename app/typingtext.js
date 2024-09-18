"use client";

import { useEffect, useState } from "react";

export default function TypingAnimation({
  texts,
  duration = 200,
  className,
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (charIndex < texts[textIndex].length) {
        setDisplayedText(texts[textIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        clearInterval(typingEffect);
        setTimeout(() => {
          setCharIndex(0);
          setTextIndex((textIndex + 1) % texts.length);
        }, 1000); // Adjust the pause duration between texts as needed
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [charIndex, textIndex, texts, duration]);

  return (
    <span
      className=" text-2xl fontsize fontguru font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm"
    >
      {displayedText}
    </span>
  );
}
