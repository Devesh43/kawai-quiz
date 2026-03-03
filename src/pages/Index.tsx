import { useState } from "react";
import FloatingDecorations from "@/components/FloatingDecorations";
import LandingPage from "@/components/LandingPage";
import QuizCard from "@/components/QuizCard";
import ResultsReveal from "@/components/ResultsReveal";

type Screen = "landing" | "quiz" | "results";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("landing");

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingDecorations />
      {screen === "landing" && <LandingPage onStart={() => setScreen("quiz")} />}
      {screen === "quiz" && <QuizCard onComplete={() => setScreen("results")} />}
      {screen === "results" && <ResultsReveal />}
    </div>
  );
};

export default Index;
