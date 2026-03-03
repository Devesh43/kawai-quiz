import { useMemo } from "react";

const decorations = ["🐱", "⭐", "✨", "☁️", "🌸", "💫", "🎀", "🐶"];

interface FloatingItem {
  emoji: string;
  left: string;
  top: string;
  delay: string;
  duration: string;
  size: string;
  opacity: number;
}

const FloatingDecorations = () => {
  const items: FloatingItem[] = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      emoji: decorations[i % decorations.length],
      left: `${Math.random() * 95}%`,
      top: `${Math.random() * 95}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
      size: `${0.8 + Math.random() * 1}rem`,
      opacity: 0.3 + Math.random() * 0.3,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((item, i) => (
        <span
          key={i}
          className="absolute select-none"
          style={{
            left: item.left,
            top: item.top,
            fontSize: item.size,
            opacity: item.opacity,
            animation: `float ${item.duration} ease-in-out ${item.delay} infinite`,
          }}
        >
          {item.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingDecorations;
