import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import LetterReveal from "./LetterReveal";

const ResultsReveal = () => {
  const [step, setStep] = useState<"celebrate" | "transition" | "envelope" | "letter">("celebrate");

  useEffect(() => {
    // Fire confetti on mount
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FFB7C5", "#FFD6CC", "#E8DFFF", "#D6F1FF", "#FFE4A0"],
    });
  }, []);

  const handleOneLastThing = () => {
    setStep("transition");
    setTimeout(() => setStep("envelope"), 2000);
  };

  const handleEnvelopeClick = () => {
    setStep("letter");
  };

  if (step === "letter") {
    return <LetterReveal />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10"
    >
      <AnimatePresence mode="wait">
        {step === "celebrate" && (
          <motion.div
            key="celebrate"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="kawaii-card max-w-sm w-full text-center"
          >
            <motion.div
              className="text-6xl mb-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              😸
            </motion.div>
            <h2 className="text-2xl font-extrabold text-foreground mb-2">
              You finished the quiz! 🎉
            </h2>
            <p className="text-muted-foreground mb-6 italic">
              "I made this just for you."
            </p>
            <div className="text-3xl mb-6">✨🌸🎉💫✨</div>
            <motion.button
              onClick={handleOneLastThing}
              className="kawaii-btn w-full text-base"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              whileTap={{ scale: 0.97 }}
            >
              One last thing…
            </motion.button>
          </motion.div>
        )}

        {step === "transition" && (
          <motion.div
            key="transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <motion.div
              className="text-5xl"
              animate={{ x: ["-30vw", "30vw"] }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              🐱
            </motion.div>
            <motion.div
              className="mt-8 text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0, 1] }}
              transition={{ duration: 2 }}
            >
              ✨ ✨ ✨
            </motion.div>
          </motion.div>
        )}

        {step === "envelope" && (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, y: -50, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center cursor-pointer"
            onClick={handleEnvelopeClick}
          >
            <motion.div
              className="text-7xl mb-4"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💌
            </motion.div>
            <p className="text-lg font-bold text-foreground">
              "A small message"
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Tap to open ✨
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ResultsReveal;
