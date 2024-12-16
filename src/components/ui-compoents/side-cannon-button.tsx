import confetti from "canvas-confetti";

import { Button } from "@/components/ui/button";

interface SideCannonButtonProps {
  text: String;
}
export default function SideCannonButton({ text }: SideCannonButtonProps) {
  const handleClick = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <Button
      onClick={handleClick}
      className="text-white border-0 shadow-none bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent"
    >
      {text}
    </Button>
  );
}
