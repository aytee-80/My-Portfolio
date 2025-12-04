// Typewriter hook (paste into a component file)
import { useEffect, useRef } from "react";

export function useTypewriter(texts = ["Full Stack Developer", "Problem Solver", "Junior Software Developer"], delay = 80, pause = 1600) {
  const ref = useRef(null);

  useEffect(() => {
    let idx = 0; let char = 0; let forward = true; let loop;
    const el = ref.current;
    if (!el) return;

    const tick = () => {
      const full = texts[idx];
      if (forward) {
        char++;
        el.textContent = full.slice(0, char);
        if (char === full.length) {
          forward = false;
          setTimeout(tick, pause);
          return;
        }
      } else {
        char--;
        el.textContent = full.slice(0, char);
        if (char === 0) {
          forward = true;
          idx = (idx + 1) % texts.length;
        }
      }
      loop = setTimeout(tick, forward ? delay : delay / 2);
    };
    tick();
    return () => clearTimeout(loop);
  }, [texts, delay, pause]);

  return ref;
}
