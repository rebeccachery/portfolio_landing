import { useEffect, useState } from "react";

const stages = ["BUILD", "EXPERIMENT", "LEARN", "SHIP"] as const;

export function ScrollMotif() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) {
        setActive(0);
        return;
      }
      const progress = window.scrollY / max;
      setActive(Math.min(stages.length - 1, Math.floor(progress * stages.length)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-motif" aria-hidden="true">
      {stages.map((stage, index) => (
        <span key={stage} className={index === active ? "active" : undefined}>
          {stage}
          {index < stages.length - 1 ? " →" : ""}
        </span>
      ))}
    </div>
  );
}
