import { motion } from "framer-motion";

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage = ({ onStart }: LandingPageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10"
    >
      <div className="kawaii-card max-w-sm w-full text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <motion.span
            className="text-5xl"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
          >
            🐱
          </motion.span>
        </div>

        <h1 className="text-3xl font-extrabold text-foreground mb-2">
          Kawaii Anime Quiz 🌸
        </h1>

        <p className="text-muted-foreground text-base mb-1">
          "Let's see how well you know your anime!"
        </p>

        <p className="text-sm text-primary font-semibold mb-8 italic">
          "I made this quiz for someone special."
        </p>

        <motion.button
          onClick={onStart}
          className="kawaii-btn text-lg w-full"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          Start Quiz 🎀
        </motion.button>
      </div>

      <motion.div
        className="mt-6 text-2xl"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ✨🌸✨
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
