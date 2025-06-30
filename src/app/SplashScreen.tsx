'use client';
import { useEffect, useState, useRef } from 'react';

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(() => {
    if (typeof window !== 'undefined') {
      return !window.sessionStorage.getItem('splashShown');
    }
    return true;
  });
  const textWrapperRef = useRef<HTMLSpanElement>(null);
  const splashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showSplash) return;
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js';
    script.async = true;

    script.onload = () => {
      if (textWrapperRef.current && splashRef.current && window.anime) {
        const textWrapper = textWrapperRef.current;
        textWrapper.innerHTML = textWrapper.textContent?.replace(/\S/g, "<span class='letter'>$&</span>") || '';

        window.anime!.timeline({ loop: false })
          .add({
            targets: '.ml10 .letter',
            rotateY: [-90, 0],
            duration: 1200,
            easing: "easeOutCubic",
            delay: (_el: Element, i: number) => 20 * i
          })
          .add({
            targets: '.ml10',
            opacity: 0,
            duration: 800,
            easing: "easeOutExpo",
            delay: 500
          })
          .add({
            targets: splashRef.current,
            opacity: 0,
            duration: 400,
            easing: "easeOutExpo",
            complete: () => {
              window.sessionStorage.setItem('splashShown', 'true');
              setShowSplash(false);
            }
          });
      }
    };

    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [showSplash]);

  if (!showSplash) return <>{children}</>;

  return (
    <div
      ref={splashRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      style={{ transition: 'opacity 0.2s' }}
    >
      <style>{`
        .ml10 {
          position: relative;
          font-weight: 900;
          font-size: 4em;
          color: #181818;
          font-family: 'Power Grotesk', sans-serif;
        }
        .ml10 .text-wrapper {
          position: relative;
          display: inline-block;
          padding-top: 0.2em;
          padding-right: 0.05em;
          padding-bottom: 0.1em;
          overflow: hidden;
        }
        .ml10 .letter {
          display: inline-block;
          line-height: 1em;
          transform-origin: 0 0;
        }
      `}</style>
      <h1 className="ml10">
        <span className="text-wrapper">
          <span className="letters" ref={textWrapperRef}>Jurdan Wahyu</span>
        </span>
      </h1>
    </div>
  );
}