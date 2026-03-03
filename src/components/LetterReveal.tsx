import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const letterLines = [
  "Sooo I hope you had fun playing this, because honestly that's all I ever want, a smile on your face.",
  "",
  "I know my past actions might be too much for you to forgive, and I get that. But I also know you have a really big heart, so I just wanted to ask… can we talk again?",
  "",
  "And I'm not saying this in a \"hey come back to me\" way. If I ever start sounding like that, block me instantly, seriously.",
  "",
  "I just… want to talk to you again. I don't even know what we'd talk about, but I miss talking to you the way we used to.",
  "",
  "Even if you don't really want to, you can treat it like a barter system or something. You talk to me, and I'll do whatever you want, your assignments, quizzes, anything. I'll do whatever it takes.",
  "",
  "And don't worry, I'm not saying you have to talk to me regularly. It can just be every now and then, whenever you feel like talking to me is fine.",
  "",
  "So… can we please?",
  "Like, a big please? 🥺",
];

const LetterReveal = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showEnd, setShowEnd] = useState(false);

  useEffect(() => {
    if (visibleLines < letterLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((p) => p + 1);
      }, letterLines[visibleLines] === "" ? 400 : 1800);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setShowEnd(true), 1000);
    }
  }, [visibleLines]);

  const handlePlayAgain = () => {
    window.location.reload();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-start min-h-screen px-4 py-10 relative z-10"
    >
      <div className="kawaii-card max-w-sm w-full">
        <div className="text-center mb-4 text-3xl">💌</div>

        <div className="space-y-3 text-sm leading-relaxed text-foreground">
          {letterLines.slice(0, visibleLines).map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={line === "" ? "h-2" : ""}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {showEnd && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 text-center"
          >
            <div className="text-4xl mb-3">🐱🐶🌸</div>
            <div className="text-2xl mb-6">✨🌟💫⭐✨</div>

            <motion.button
              onClick={handlePlayAgain}
              className="kawaii-btn w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Play Again 🎀
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default LetterReveal;
