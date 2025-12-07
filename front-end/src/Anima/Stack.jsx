// src/Anima/Stack.jsx
import { useLayoutEffect, useRef, useCallback } from "react";

export const ScrollStackItem = ({ children, itemClassName = "" }) => (
  <div
    className={`scroll-stack-card relative w-full h-80 my-8 p-12 rounded-[40px] shadow-[0_0_30px_rgba(0,0,0,0.1)] box-border origin-top ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: "hidden",
      transformStyle: "preserve-3d",
      willChange: "transform, filter",
      transition: "transform 0.2s ease-out, filter 0.2s ease-out",
    }}
  >
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = true,
  onStackComplete,
}) => {
  const cardsRef = useRef([]);
  const lastTransformsRef = useRef(new Map());
  const stackCompletedRef = useRef(false);
  const tickingRef = useRef(false);

  // Fix glitching: throttle with requestAnimationFrame
  const runOnNextFrame = (cb) => {
    if (!tickingRef.current) {
      requestAnimationFrame(() => {
        cb();
        tickingRef.current = false;
      });
      tickingRef.current = true;
    }
  };

  const parsePercentage = (value, containerHeight) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  };

  const getElementOffset = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top + window.scrollY;
  };

  const calculateProgress = (scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  };

  const updateCardTransforms = useCallback(() => {
    runOnNextFrame(() => {
      const scrollTop = window.scrollY;
      const containerHeight = window.innerHeight;

      const stackPositionPx = parsePercentage(stackPosition, containerHeight);
      const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

      const endElement = document.querySelector(".scroll-stack-end");
      const endElementTop = endElement ? getElementOffset(endElement) : 0;

      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        const cardTop = getElementOffset(card);
        const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
        const triggerEnd = cardTop - scaleEndPositionPx;
        const pinStart = triggerStart;
        const pinEnd = endElementTop - containerHeight / 2;

        const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);

        const targetScale = baseScale + i * itemScale;
        const scale = 1 - scaleProgress * (1 - targetScale);

        const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;
        const blur = blurAmount && i > 0 ? blurAmount * i * (1 - scaleProgress) : 0;

        let translateY = 0;
        const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

        if (isPinned) {
          translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
        } else if (scrollTop > pinEnd) {
          translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
        }

        const newTransform = {
          translateY,
          scale,
          rotation,
          blur,
        };

        // NO JITTER: Skip tiny updates
        const last = lastTransformsRef.current.get(i) || {};
        const changed =
          Math.abs((last.translateY || 0) - translateY) > 0.3 ||
          Math.abs((last.scale || 0) - scale) > 0.0008 ||
          Math.abs((last.rotation || 0) - rotation) > 0.4 ||
          Math.abs((last.blur || 0) - blur) > 0.1;

        if (changed) {
          card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotation}deg)`;
          card.style.filter = blur > 0 ? `blur(${blur}px)` : "none";
          lastTransformsRef.current.set(i, newTransform);
        }

        if (i === cardsRef.current.length - 1 && isPinned && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        }
      });
    });
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    onStackComplete,
  ]);

  useLayoutEffect(() => {
    const cards = Array.from(document.querySelectorAll(".scroll-stack-card"));
    cardsRef.current = cards;

    cards.forEach((card) => {
      card.style.transform = "translate3d(0,0,0) scale(1)";
      card.style.filter = "none";
    });

    updateCardTransforms();

    window.addEventListener("scroll", updateCardTransforms, { passive: true });
    window.addEventListener("resize", updateCardTransforms);

    return () => {
      window.removeEventListener("scroll", updateCardTransforms);
      window.removeEventListener("resize", updateCardTransforms);
      cardsRef.current = [];
      lastTransformsRef.current.clear();
      stackCompletedRef.current = false;
      tickingRef.current = false;
    };
  }, [updateCardTransforms]);

  return (
    <>
      <div className={className}>{children}</div>
      <div className="scroll-stack-end w-full h-px" />
    </>
  );
};

export default ScrollStack;
