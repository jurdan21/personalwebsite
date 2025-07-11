'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const greetingRef = useRef<HTMLSpanElement>(null);
  const descriptionRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // GSAP Animation Timeline with smoother defaults
    const tl = gsap.timeline({ 
      defaults: { 
        ease: "power3.out",
        duration: 1.2
      } 
    });

    // Set initial states for smoother start
    gsap.set([greetingRef.current, titleRef.current, descriptionRef.current], {
      opacity: 0,
      y: 60,
      scale: 0.98
    });

    // Set initial state for bottom elements
    gsap.set('.bottom-text', {
      opacity: 0,
      y: 30
    });

    // Animate greeting text with more sophisticated easing
    tl.to(greetingRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.4,
      ease: "power4.out"
    });

    // Animate main title "UX/UI DESIGNER" with bounce effect
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.6,
      ease: "elastic.out(1, 0.8)"
    }, "-=0.8"); // More overlap for smoother transition

    // Add subtle scale animation to title
    tl.to(titleRef.current, {
      scale: 1.03,
      duration: 0.4,
      ease: "power2.inOut"
    }, "-=1.2");

    // Return to normal scale
    tl.to(titleRef.current, {
      scale: 1,
      duration: 0.4,
      ease: "power2.inOut"
    });

    // Animate description text with slide and fade
    tl.to(descriptionRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: "power3.out"
    }, "-=1.4"); // Start much earlier for better flow

    // Add subtle animation to bottom elements
    const bottomElements = document.querySelectorAll('.bottom-text');
    if (bottomElements.length > 0) {
      tl.to(bottomElements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      }, "-=0.6");
    }

  }, []);

  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 pt-24 md:pt-[116px] pb-10 md:pb-20 bg-white relative overflow-hidden h-[100dvh] flex flex-col justify-between"
      style={{
        backgroundColor: '#fff',
      }}
    >
      {/* Background Pattern */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "url('https://res.cloudinary.com/dbmcmylvr/image/upload/v1751087290/New%20Website/Pattern/Pattern-1_uphwsk.webp')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Kontainer 1: Greeting */}
        <div className="flex flex-col flex-1 justify-start w-full h-full gap-20 md:gap-[180px] lg:gap-[260px]">
          <span 
            ref={greetingRef}
            className="block text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-7 sm:leading-8 md:leading-[36px] font-medium text-black-base" 
            style={{ color: '#181818' }}
          >
            Hi, I&apos;m Jurdan Wahyu
          </span>
          {/* Row 2: Judul & Deskripsi */}
          <div className="flex flex-col md:flex-row w-full items-start md:items-end justify-between gap-6 md:gap-0">
            <h1 
              ref={titleRef}
              className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[100px] leading-[40px] sm:leading-[56px] md:leading-[72px] lg:leading-[90px] font-normal text-black-base text-left" 
              style={{ color: '#181818' }}
            >
              UX/UI<br className="hidden md:block" />DESIGNER
            </h1>
            <span
              ref={descriptionRef}
              className="block max-w-full md:max-w-xl text-left md:text-right text-base sm:text-lg md:text-xl lg:text-[24px] leading-6 sm:leading-7 md:leading-8 lg:leading-[36px] font-normal text-gray-500"
              style={{ color: '#757575' }}
            >
              With 3+ years of experience, focused on clarity, efficiency, and user experience.
            </span>
          </div>
        </div>

        {/* Row 3: Est, Scroll, Detail */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-4 md:gap-0 mt-8 md:mt-0">
          <span className="bottom-text text-base sm:text-lg md:text-[18px] leading-6 sm:leading-7 md:leading-[28px] font-normal text-black-base" style={{ color: '#181818' }}>Est. 2021</span>
          <button
            className="bottom-text text-base sm:text-lg md:text-[18px] leading-6 sm:leading-7 md:leading-[28px] font-normal text-black-base cursor-pointer bg-transparent border-0 p-0 relative after:content-[''] after:block after:h-[2px] after:bg-[#181818] after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100"
            style={{ color: '#181818' }}
            data-scroll-to="projects"
          >
            (Scroll down <span className="inline-block animate-bounce">↓</span>)
          </button>
          <span className="bottom-text text-base sm:text-lg md:text-[18px] leading-6 sm:leading-7 md:leading-[28px] font-normal text-black-base" style={{ color: '#181818' }}>Live in the detail(s)</span>
        </div>
      </div>
    </section>
  );
} 