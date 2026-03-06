import { useLayoutEffect, useRef, useCallback } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./scroll.css";

gsap.registerPlugin(ScrollTrigger);

export const ScrollStackItem = ({ children, itemClassName = "" }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>
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
  baseScale = 0.9,
  rotationAmount = 0,
  blurAmount = 0
}) => {
  const cardsRef = useRef([]);
  const cardPositionsRef = useRef([]);
  const lenisRef = useRef(null);

  const calculateProgress = (scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  };

  const parsePercentage = (value, containerHeight) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  };

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length) return;

    const scrollTop = window.scrollY;
    const containerHeight = window.innerHeight;

    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(
      scaleEndPosition,
      containerHeight
    );

    cardsRef.current.forEach((card, i) => {
      const cardTop = cardPositionsRef.current[i];

      const triggerStart =
        cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;

      const scaleProgress = calculateProgress(
        scrollTop,
        triggerStart,
        triggerEnd
      );

      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);

      const rotation = rotationAmount
        ? i * rotationAmount * scaleProgress
        : 0;

      let translateY = 0;

      if (scrollTop >= triggerStart) {
        const rawTranslate =
          scrollTop -
          cardTop +
          stackPositionPx +
          itemStackDistance * i;

        // 🔥 kill subpixel jitter
        translateY = Math.round(rawTranslate);
      }

      card.style.transform = `
        translate3d(0, ${translateY}px, 0)
        scale(${scale})
        rotate(${rotation}deg)
      `;

      if (blurAmount > 0) {
        card.style.filter = `blur(${Math.max(
          0,
          i * blurAmount * scaleProgress
        )}px)`;
      } else {
        card.style.filter = "none";
      }
    });
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount
  ]);

  const setupLenis = useCallback(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.15 // sedikit lebih rigid biar stabil
    });

    lenis.on("scroll", () => {
      requestAnimationFrame(updateCardTransforms);
      ScrollTrigger.update();
    });

    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    lenisRef.current = { instance: lenis, raf };
  }, [updateCardTransforms]);

  useLayoutEffect(() => {
    const cards = Array.from(
      document.querySelectorAll(".scroll-stack-card")
    );

    cardsRef.current = cards;

    // 🔥 SAVE INITIAL STATIC POSITIONS (ONCE ONLY)
    cardPositionsRef.current = cards.map((card) => {
      const rect = card.getBoundingClientRect();
      return rect.top + window.scrollY;
    });

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }

      card.style.willChange = "transform";
      card.style.transformOrigin = "top center";
    });

    setupLenis();
    updateCardTransforms();

    return () => {
      if (lenisRef.current) {
        gsap.ticker.remove(lenisRef.current.raf);
        lenisRef.current.instance.destroy();
      }
    };
  }, [itemDistance, setupLenis, updateCardTransforms]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;