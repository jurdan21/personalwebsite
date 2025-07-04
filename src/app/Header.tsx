'use client';
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="z-50 w-full py-4 px-4 md:py-6 md:px-8 flex items-center bg-white justify-between">
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-h7-medium text-black-base font-sans font-medium flex items-center" style={{ color: '#181818' }}>J</div>

        {/* Center: Navigation (desktop) */}
        <nav className="hidden md:flex justify-center gap-16 lg:gap-52">
          <Link href="/" className="text-h7-regular text-black-base font-sans transition-all relative after:content-[''] after:block after:h-[2px] after:bg-[#181818] after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100" style={{ color: '#181818' }}>Home</Link>
          <Link href="/about" className="text-h7-regular text-black-base font-sans transition-all relative after:content-[''] after:block after:h-[2px] after:bg-[#181818] after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100" style={{ color: '#181818' }}>About</Link>
          <Link href="/showcase" className="text-h7-regular text-black-base font-sans transition-all relative after:content-[''] after:block after:h-[2px] after:bg-[#181818] after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100" style={{ color: '#181818' }}>Showcase</Link>
        </nav>
        {/* Hamburger (mobile) */}
        <button className="md:hidden flex flex-col justify-center items-center w-8 h-8 ml-2" onClick={() => setOpen(!open)} aria-label="Open menu">
          <span className={`block w-6 h-0.5 bg-black mb-1 transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black mb-1 transition-all ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        {/* Right: Status & CTA */}
        <div className="hidden md:flex items-center gap-1 justify-end">
          <div className="flex items-center gap-2 text-[18px] leading-[28px] font-normal whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-[#25C923] inline-block"></span>
            <span 
              className="text-black-base"
              style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 400, color: '#181818' }}
            >
              Available for freelance projects
            </span>
          </div>
          <div className="w-[40px] h-[1px] bg-[#181818] mx-4" />
          <a href="mailto:hello@jurdanwahyu.com" className="text-h7-medium text-black-base font-bold font-sans transition-all relative after:content-[''] after:block after:h-[2px] after:bg-[#181818] after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 whitespace-nowrap" style={{ color: '#181818' }}>Let&apos;s talk</a>
        </div>
      </div>
      {/* Mobile menu dropdown */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={() => setOpen(false)}>
          <div className="absolute top-0 right-0 w-2/3 max-w-xs h-full bg-white shadow-lg flex flex-col p-8 gap-8" onClick={e => e.stopPropagation()}>
            <nav className="flex flex-col gap-6 mt-8">
              <Link href="/" className="text-lg text-black-base font-sans" onClick={() => setOpen(false)}>Home</Link>
              <Link href="/about" className="text-lg text-black-base font-sans" onClick={() => setOpen(false)}>About</Link>
              <Link href="/showcase" className="text-lg text-black-base font-sans" onClick={() => setOpen(false)}>Showcase</Link>
            </nav>
            <div className="flex flex-col gap-4 mt-8">
              <span className="flex items-center gap-2 text-[16px] font-normal">
                <span className="w-2 h-2 rounded-full bg-[#25C923] inline-block"></span>
                <span className="text-black-base">Available for freelance projects</span>
              </span>
              <a href="mailto:hello@jurdanwahyu.com" className="text-lg text-black-base font-bold font-sans">Let&apos;s talk</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 