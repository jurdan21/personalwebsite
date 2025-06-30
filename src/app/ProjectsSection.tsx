"use client";

import React, { useRef, useState } from "react";

const projects = [
  { no: "01", name: "Feedloop Website V2", type: "Website", date: "22.22.2023", url: "/projects/feedloop-website-v2", image: "https://res.cloudinary.com/dbmcmylvr/image/upload/v1683698860/image2_gex99j.png" },
  { no: "02", name: "Verdant", type: "Landingpage", date: "22.22.2023", url: "/projects/verdant", image: "https://res.cloudinary.com/dbmcmylvr/image/upload/v1683698860/image2_gex99j.png" },
  { no: "03", name: "Ngelu Doc", type: "Mobile App", date: "22.22.2023", url: "/projects/ngelu-doc", image: "https://res.cloudinary.com/dbmcmylvr/image/upload/v1683698860/image2_gex99j.png" },
  { no: "04", name: "Watujo Interior", type: "Website", date: "22.22.2023", url: "/projects/watujo-interior", image: "https://res.cloudinary.com/dbmcmylvr/image/upload/v1683698860/image2_gex99j.png" },
  { no: "05", name: "Carros", type: "Landingpage", date: "22.22.2023", url: "/projects/carros", image: "https://res.cloudinary.com/dbmcmylvr/image/upload/v1683698860/image2_gex99j.png" },
  { no: "06", name: "Coco DS", type: "Design System", date: "22.22.2023", url: "/projects/coco-ds", image: "https://res.cloudinary.com/dbmcmylvr/image/upload/v1683698860/image2_gex99j.png" },
  { no: "07", name: "Rhento", type: "Mobile App", date: "22.22.2023", url: "/projects/rhento", image: "https://res.cloudinary.com/dbmcmylvr/image/upload/v1683698860/image2_gex99j.png" },
  { no: "08", name: "Buatin.app", type: "Website", date: "22.22.2023", url: "/projects/buatin-app", image: "https://res.cloudinary.com/dbmcmylvr/image/upload/v1683698860/image2_gex99j.png" },
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
      className="w-full text-white px-8 py-[160px] flex flex-col gap-[160px] relative overflow-hidden"
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
      {/* Floating image on hover */}
      {hoveredIdx !== null && (
        <img
          src={projects[hoveredIdx].image}
          alt="Preview"
          style={{
            position: 'fixed',
            right: 48,
            top: imgTop,
            transform: 'translateY(-50%)',
            width: 260,
            height: 260,
            aspectRatio: '1/1',
            objectFit: 'cover',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            zIndex: 50,
            pointerEvents: 'none',
            transition: 'opacity 0.2s',
          }}
        />
      )}
      <div className="relative z-10 flex flex-col gap-[160px]">
        {/* Row 1 & 2: Title + Type & Year */}
        <div className="flex flex-col gap-4 w-full max-w-[1440px] mx-auto">
          <h2 className="text-[72px] leading-[80px] font-normal">Project(s)</h2>
          <div className="flex flex-row gap-16 text-[16px] leading-[24px] font-normal text-[#E0E0E0] self-end">
            <div className="flex flex-col gap-1">
              <span className="uppercase text-[12px] tracking-widest text-[#B0B0B0]">TYPE</span>
              <span>Website</span>
              <span>Mobile App</span>
              <span>Design System</span>
              <span>Landingpage</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="uppercase text-[12px] tracking-widest text-[#B0B0B0]">YEAR</span>
              <span>2021 - Ongoing</span>
            </div>
          </div>
        </div>
        {/* Row 3: List Project */}
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="grid grid-cols-6 gap-8 text-[#B0B0B0] text-[14px] leading-[20px] mb-4">
            <span className="col-span-1">#</span>
            <span className="col-span-2">Project</span>
            <span className="col-span-1">Type</span>
            <span className="col-span-1">Date</span>
            <span className="col-span-1 text-right">#</span>
          </div>
          <div className="flex flex-col gap-2">
            {projects.map((p, idx) => (
              <a
                key={p.no}
                ref={el => { itemRefs.current[idx] = el; }}
                href={p.url}
                className="grid grid-cols-6 gap-8 items-center text-[20px] leading-[32px] font-normal text-white group hover:bg-[#292929] rounded transition cursor-pointer no-underline"
                style={{ textDecoration: 'none' }}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <span className="col-span-1 text-[#B0B0B0] text-[16px]">{p.no}</span>
                <span className="col-span-2 font-normal">{p.name}</span>
                <span className="col-span-1 text-[#E0E0E0]">{p.type}</span>
                <span className="col-span-1 text-[#E0E0E0]">{p.date}</span>
                <span className="col-span-1 text-right text-[#B0B0B0] text-[24px] font-light">+</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}