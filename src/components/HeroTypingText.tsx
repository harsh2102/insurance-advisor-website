import { useEffect, useState } from "react";
import { useLang } from "@/utils/LanguageContext";

export default function HeroTypingText() {
  const { t } = useLang();

  const words = [
    t.hero_animated_1,
    t.hero_animated_2,
    t.hero_animated_3,
    t.hero_animated_4,
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const speed = isDeleting ? 60 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1200);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <span className="text-green-400">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}
