// Hand-built for this page, not a React Bits registry component. Reuses
// the same sticky-pin-and-read-scroll-position mechanic ScrollExpand uses
// internally, but the visual effect is deliberately different: instead of
// one frame growing from small to full-bleed, this holds N full-bleed
// photos stacked on top of each other and crossfades between them as you
// scroll through one shared pinned track. Each photo gets one "slot" of
// the total scroll range; a short overlap at each boundary is where the
// dissolve happens.

import { useEffect, useRef } from 'react';

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

const smoothstep = (edge0, edge1, x) => {
  const t = clamp((x - edge0) / (edge1 - edge0 || 1e-6), 0, 1);
  return t * t * (3 - 2 * t);
};

const ScrollFade = ({
  slides = [],
  useWindowScroll = true,
  overlayScrim = 0.55,
  // Fraction of one slide's slot spent crossfading into the next, on each
  // side. 0.18 means each boundary's dissolve spans roughly a third of a
  // slide's own slot (0.18 in, 0.18 out from the neighbours meeting it).
  fadeOverlap = 0.18,
  className = ''
}) => {
  const rootRef = useRef(null);
  const trackRef = useRef(null);
  const stageRef = useRef(null);
  const mediaRefs = useRef([]);
  const contentRefs = useRef([]);

  const count = slides.length;

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!root || !track || !stage || count === 0) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let stageH = 0;
    let raf = 0;

    const measure = () => {
      stageH = useWindowScroll ? window.innerHeight : root.clientHeight;
      if (stageH <= 0) return;
      stage.style.height = `${stageH}px`;
      track.style.height = `${stageH * count}px`;
    };

    const applyProgress = p => {
      const segment = 1 / count;

      for (let i = 0; i < count; i++) {
        const media = mediaRefs.current[i];
        const content = contentRefs.current[i];
        if (!media) continue;

        const a = i * segment;
        const b = (i + 1) * segment;
        const f = segment * fadeOverlap;

        // First slide has nothing to fade in from — it's already there
        // when you arrive. Last slide has nothing to fade out to — it
        // holds. Everything in between fades in at its leading edge and
        // out at its trailing edge.
        const inFactor = i === 0 ? 1 : smoothstep(a - f, a + f, p);
        const outFactor = i === count - 1 ? 1 : 1 - smoothstep(b - f, b + f, p);
        const opacity = reduceMotion
          ? p >= a && p < b
            ? 1
            : i === count - 1 && p >= b
              ? 1
              : 0
          : inFactor * outFactor;

        const settle = reduceMotion ? 1 : 1 + (1 - inFactor) * 0.06;

        media.style.opacity = opacity.toFixed(3);
        media.style.transform = `scale(${settle.toFixed(4)})`;
        media.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';

        if (content) {
          content.style.opacity = opacity.toFixed(3);
          content.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';
        }
      }
    };

    const readProgress = () => {
      const span = stageH * count - stageH;
      if (span <= 0) return 0;
      const top = track.getBoundingClientRect().top;
      return clamp(-top / span, 0, 1);
    };

    const tick = () => {
      applyProgress(readProgress());
      raf = 0;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onResize = () => {
      measure();
      applyProgress(readProgress());
    };

    measure();
    applyProgress(readProgress());

    const scroller = useWindowScroll ? window : root;
    scroller.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    const ro = new ResizeObserver(onResize);
    ro.observe(root);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      scroller.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      ro.disconnect();
    };
  }, [count, useWindowScroll, fadeOverlap]);

  return (
    <div
      ref={rootRef}
      className={`scroll-fade ${useWindowScroll ? '' : 'scroll-fade--scroller'} ${className}`.trim()}
    >
      <div ref={trackRef} className="scroll-fade__track">
        <div ref={stageRef} className="scroll-fade__stage">
          {slides.map((slide, i) => (
            <div key={i} className="scroll-fade__slide">
              <img
                ref={el => (mediaRefs.current[i] = el)}
                className="scroll-fade__media"
                src={slide.src}
                alt={slide.alt || ''}
                style={{ objectPosition: slide.objectPosition || 'center' }}
                draggable={false}
              />
              <div
                className="scroll-fade__scrim"
                style={{ opacity: overlayScrim }}
                aria-hidden="true"
              />
              {slide.content && (
                <div ref={el => (contentRefs.current[i] = el)} className="scroll-fade__content">
                  {slide.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollFade;