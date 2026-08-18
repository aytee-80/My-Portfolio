// Adapted from React Bits — TrueFocus
//
// Upstream animates the focus frame with `motion/react`. The frame only ever
// tweens x / y / width / height / opacity, all of which CSS transitions do
// natively — so the dependency is dropped and the frame is a plain div with
// a transition. Same motion, one fewer package.

import { useCallback, useEffect, useRef, useState } from 'react';
import './TrueFocus.css';

const TrueFocus = ({
  sentence = 'True Focus',
  separator = ' ',
  manualMode = false,
  blurAmount = 5,
  borderColor = '#c9a24b',
  animationDuration = 0.5,
  pauseBetweenAnimations = 1
}) => {
  const words = sentence.split(separator);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState(null);
  const [hovering, setHovering] = useState(false);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (manualMode || hovering) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const interval = setInterval(
      () => setCurrentIndex(prev => (prev + 1) % words.length),
      (animationDuration + pauseBetweenAnimations) * 1000
    );
    return () => clearInterval(interval);
  }, [manualMode, hovering, animationDuration, pauseBetweenAnimations, words.length]);

  const measure = useCallback(() => {
    if (currentIndex == null || currentIndex < 0) return;
    const el = wordRefs.current[currentIndex];
    if (!el || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = el.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height
    });
    setReady(true);
  }, [currentIndex]);

  useEffect(() => {
    measure();
  }, [measure]);

  // Measure after webfonts land, otherwise the frame is sized to the
  // fallback face and sits slightly off every word.
  useEffect(() => {
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  return (
    <div className="focus-container" ref={containerRef}>
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={el => {
              wordRefs.current[index] = el;
            }}
            className={`focus-word ${isActive ? 'active' : ''}`}
            style={{
              filter: isActive ? 'blur(0px)' : `blur(${blurAmount}px)`,
              transition: `filter ${animationDuration}s ease`
            }}
            onMouseEnter={() => {
              setHovering(true);
              setLastActiveIndex(index);
              setCurrentIndex(index);
            }}
            onMouseLeave={() => {
              setHovering(false);
              if (manualMode && lastActiveIndex != null) setCurrentIndex(lastActiveIndex);
            }}
          >
            {word}
          </span>
        );
      })}

      <span
        className="focus-frame"
        aria-hidden="true"
        style={{
          transform: `translate(${focusRect.x}px, ${focusRect.y}px)`,
          width: focusRect.width,
          height: focusRect.height,
          opacity: ready ? 1 : 0,
          transitionDuration: `${animationDuration}s`,
          '--border-color': borderColor
        }}
      >
        <span className="corner top-left" />
        <span className="corner top-right" />
        <span className="corner bottom-left" />
        <span className="corner bottom-right" />
      </span>
    </div>
  );
};

export default TrueFocus;
