import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quizQuestions } from "@/data/quizData";

interface QuizCardProps {
  onComplete: () => void;
}

const QuizCard = ({ onComplete }: QuizCardProps) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [hintsLeft, setHintsLeft] = useState(3);
  const [showHint, setShowHint] = useState(false);
  const [disabledOptions, setDisabledOptions] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const question = quizQuestions[currentQ];
  const progress = ((currentQ) / quizQuestions.length) * 100;

  useEffect(() => {
    setShowHint(false);
    setDisabledOptions([]);
    setFeedback(null);
    setSelectedAnswer(null);
  }, [currentQ]);

  const handleAnswer = (option: string) => {
    if (disabledOptions.includes(option) || feedback === "correct") return;

    setSelectedAnswer(option);

    if (option === question.correctAnswer) {
      setFeedback("correct");
      setTimeout(() => {
        if (currentQ < quizQuestions.length - 1) {
          setCurrentQ((p) => p + 1);
        } else {
          onComplete();
        }
      }, 1500);
    } else {
      setFeedback("wrong");
      setDisabledOptions((prev) => [...prev, option]);
      setTimeout(() => {
        setFeedback(null);
        setSelectedAnswer(null);
      }, 800);
    }
  };

  const useHint = () => {
    if (hintsLeft > 0) {
      setHintsLeft((p) => p - 1);
      setShowHint(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10"
    >
      <div className="kawaii-card max-w-sm w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
            {question.anime}
          </span>
          <span className="text-xs font-bold text-primary">
            Question {currentQ + 1} / {quizQuestions.length}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 rounded-full bg-muted mb-5 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg, hsl(var(--warm-pink)), hsl(var(--sakura)))" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-lg font-bold text-foreground mb-5 leading-snug">
              {question.question}
            </h2>

            <div className="flex flex-col gap-3">
              {question.options.map((option) => {
                const isDisabled = disabledOptions.includes(option);
                const isSelected = selectedAnswer === option;
                const isCorrect = isSelected && feedback === "correct";
                const isWrong = isSelected && feedback === "wrong";

                return (
                  <motion.button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    disabled={isDisabled || feedback === "correct"}
                    className={`pill-btn text-left text-sm ${isCorrect ? "correct" : ""} ${isWrong || isDisabled ? "wrong" : ""}`}
                    animate={isWrong ? { x: [0, -5, 5, -5, 0] } : {}}
                    transition={{ duration: 0.3 }}
                    whileTap={!isDisabled ? { scale: 0.97 } : {}}
                  >
                    {option}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Hint */}
        <div className="mt-5 flex items-center justify-between">
          <button
            onClick={useHint}
            disabled={hintsLeft === 0 || showHint}
            className="text-xs font-semibold text-primary disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors"
          >
            💡 Hint ({hintsLeft} left)
          </button>
        </div>

        <AnimatePresence>
          {showHint && (
            <motion.div
              initial={{ opacity: 0, y: -5, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mt-3 rounded-2xl bg-lavender p-3 text-xs text-secondary-foreground"
            >
              💬 {question.hint}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Feedback popup */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
          >
            <div className="kawaii-card text-center px-8 py-6">
              <div className="text-5xl mb-2">
                {feedback === "correct" ? "😸" : "😿"}
              </div>
              <p className="font-bold text-lg">
                {feedback === "correct" ? "Yay! Correct! ✨" : "Oops! Try again!"}
              </p>
              {feedback === "correct" && (
                <div className="mt-2 text-2xl">🎉✨🌟</div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default QuizCard;
