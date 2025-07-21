"use client";

import React, { useRef, useState } from "react";
import Image from 'next/image';

const projects = [
  // { no: "01", name: "Feedloop Website V2", type: "Website", date: "Coming Soon", url: "/projects/feedloop-website-v2", image: "https://res.cloudinary.com/dbmcmylvr/image/upload/v1683698860/image2_gex99j.png" },
  { no: "01", name: "Verdant", type: "Landingpage", date: "1.1.2024", url: "/projects/verdant", image: "https://res.cloudinary.com/dbmcmylvr/image/upload/v1751548213/New%20Website/Assert/Verdant/6_dsp5i9.webp" },
  { no: "02", name: "Ngelu Medical", type: "Mobile App", date: "4.7.2022", url: "/projects/ngelu-medical", image: "https://res.cloudinary.com/dbmcmylvr/image/upload/v1752761888/New%20Website/Assert/Ngelu%20Medical/1_1_pckkc4.webp" },
  { no: "03", name: "Watuijo Interior", type: "Website", date: "12.12.2023", url: "/projects/watujo-interior", image: "https://res.cloudinary.com/dbmcmylvr/image/upload/v1752681970/New%20Website/Assert/Watuijo/1_yogo5y.webp" },
  { no: "04", name: "Carros", type: "Landingpage", date: "14.02.2024", url: "/projects/carros", image: "https://res.cloudinary.com/dbmcmylvr/image/upload/v1752679322/New%20Website/Assert/Carros/1_mepgin.png" },
  // { no: "05", name: "Coco DS", type: "Design System", date: "Coming Soon", url: "/projects/coco-ds", image: "https://res.cloudinary.com/dbmcmylvr/image/upload/v1683698860/image2_gex99j.png" },
  { no: "05", name: "Rhento", type: "Mobile App", date: "2.9.2021", url: "/projects/rhento", image: "https://res.cloudinary.com/dbmcmylvr/image/upload/v1753096974/New%20Website/Assert/Rentho/1_tmphh6.webp" },
  { no: "06", name: "Postera", type: "Website", date: "16.10.2024", url: "/projects/postera", image: "https://res.cloudinary.com/dbmcmylvr/image/upload/v1752725428/New%20Website/Assert/Postera/1_zkc63z.webp" },
];

export default function ProjectsSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number|null>(null);
  const [imgTop, setImgTop] = useState<number>(0);
  const itemRefs = useRef<(HTMLAnchorElement|null)[]>([]);

  const handleMouseEnter = (idx: number) => {
    setHoveredIdx(idx);
    const ref = itemRefs.current[idx];
    if (ref) {
      const rect = ref.getBoundingClientRect();
      setImgTop(rect.top + rect.height / 2);
    }
  };

  return (
    <section
      id="projects"
      className="w-full text-white px-4 sm:px-6 md:px-8 py-12 md:py-24 lg:py-[160px] flex flex-col gap-24 md:gap-[160px] relative overflow-hidden"
      style={{
        fontFamily: 'Power Grotesk, sans-serif',
        backgroundColor: '#181818',
      }}
      onMouseLeave={() => setHoveredIdx(null)}
    >
      {/* Background Pattern */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "url('https://res.cloudinary.com/dbmcmylvr/image/upload/v1751087291/New%20Website/Pattern/Pattern-2_tskptv.webp')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      {/* Floating image on hover (desktop only) */}
      {hoveredIdx !== null && (
        <div
          className="hidden md:block"
          style={{
            position: 'fixed',
            right: 48,
            top: imgTop,
            transform: 'translateY(-50%)',
            width: 260,
            height: 180,
            aspectRatio: '4/3',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            zIndex: 50,
            pointerEvents: 'none',
            transition: 'opacity 0.2s',
          }}
        >
          <Image
            src={projects[hoveredIdx].image}
            alt="Preview"
            fill
            style={{ objectFit: 'cover', borderRadius: 0 }}
            sizes="260px"
            priority={false}
          />
        </div>
      )}
      <div className="relative z-10 flex flex-col gap-24 md:gap-[160px]">
        {/* Row 1 & 2: Title + Type & Year */}
        <div className="flex flex-col gap-4 w-full max-w-[1440px] mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-[72px] leading-9 md:leading-[80px] font-normal">Project(s)</h2>
          <div className="flex flex-row gap-8 md:gap-16 text-xs md:text-[16px] leading-5 md:leading-[24px] font-normal text-[#E0E0E0] self-end">
            <div className="flex flex-col gap-1">
              <span className="uppercase text-[10px] md:text-[12px] tracking-widest text-[#B0B0B0]">TYPE</span>
              <span>Website</span>
              <span>Mobile App</span>
              <span>Design System</span>
              <span>Landingpage</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="uppercase text-[10px] md:text-[12px] tracking-widest text-[#B0B0B0]">YEAR</span>
              <span>2021 - Ongoing</span>
            </div>
          </div>
        </div>
        {/* Row 3: List Project */}
        <div className="w-full max-w-[1440px] mx-auto">
          {/* Header grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 md:gap-8 text-[#B0B0B0] text-xs md:text-[14px] leading-4 md:leading-[20px] mb-2 md:mb-4">
            <span className="col-span-1">#</span>
            <span className="col-span-1 sm:col-span-2">Project</span>
            <span className="hidden sm:block col-span-1">Type</span>
            <span className="hidden sm:block col-span-1">Date</span>
            <span className="hidden md:block col-span-1 text-right">#</span>
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            {projects.map((p, idx) => (
              <a
                key={p.no}
                ref={el => { itemRefs.current[idx] = el; }}
                href={p.url}
                className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 md:gap-8 items-center text-base md:text-[20px] leading-6 md:leading-[32px] font-normal text-white group hover:bg-[#292929] rounded transition cursor-pointer no-underline"
                style={{ textDecoration: 'none' }}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <span className="col-span-1 text-[#B0B0B0] text-xs md:text-[16px]">{p.no}</span>
                <span className="col-span-1 sm:col-span-2 font-normal">{p.name}</span>
                <span className="hidden sm:block col-span-1 text-[#E0E0E0]">{p.type}</span>
                <span className="hidden sm:block col-span-1 text-[#E0E0E0]">{p.date}</span>
                <span className="hidden md:block col-span-1 text-right text-[#B0B0B0] text-lg md:text-[24px] font-light">+</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}