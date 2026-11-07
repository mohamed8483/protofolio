import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => setDone(true), 250);
          return 100;
        }
        return p + Math.floor(Math.random() * 18) + 6;
      });
    }, 80);
    return () => clearInterval(timer);
  }, []);

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg transition-opacity duration-500 ${
        progress >= 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      <p className="font-mono text-sm text-dim">Loading experience</p>
      <p className="mt-3 text-5xl font-bold text-gradient">{Math.min(progress, 100)}%</p>
      <div className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-border">
        <div
          className="h-full rounded-full bg-amber-400 transition-all duration-200"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  );
}
