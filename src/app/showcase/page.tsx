'use client';
import Header from '../Header';
import PatternImageSection2 from '../PatternImageSection2';
import FooterSection from '../FooterSection';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const images = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/dbmcmylvr/image/upload/v1715844878/Personal%20Website/yq87izb2ibeyzaiyoqoq.jpg',
    alt: 'Showcase image 1',
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/dbmcmylvr/image/upload/v1715844878/Personal%20Website/cbbvtr8nsdvyhex3x9dr.jpg',
    alt: 'Showcase image 2',
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/dbmcmylvr/image/upload/v1715844878/Personal%20Website/k3ky67vy885imixbq4ed.jpg',
    alt: 'Showcase image 3',
  },
  {
    id: 4,
    src: 'https://res.cloudinary.com/dbmcmylvr/image/upload/v1715844878/Personal%20Website/fht0tghlsioqhjhqw1s1.jpg',
    alt: 'Showcase image 4',
  },
  {
    id: 5,
    src: 'https://res.cloudinary.com/dbmcmylvr/image/upload/v1715844878/Personal%20Website/epk2hjiosxf5x6etbpe1.jpg',
    alt: 'Showcase image 5',
  },
  {
    id: 6,
    src: 'https://res.cloudinary.com/dbmcmylvr/image/upload/v1715844878/Personal%20Website/bqulbefr0j7cnkpr11u5.jpg',
    alt: 'Showcase image 6',
  },
  // Dummy diganti asset baru
  {
    id: 7,
    src: 'https://res.cloudinary.com/dbmcmylvr/image/upload/v1699281065/Personal%20Website/xqhzyammafv10qlcczbf.jpg',
    alt: 'Showcase image 7',
  },
  {
    id: 8,
    src: 'https://res.cloudinary.com/dbmcmylvr/image/upload/v1699281065/Personal%20Website/oyvqruehwfpdgcufb7hr.jpg',
    alt: 'Showcase image 8',
  },
  {
    id: 9,
    src: 'https://res.cloudinary.com/dbmcmylvr/image/upload/v1699281064/Personal%20Website/thr0iiwkzamn2uclfula.jpg',
    alt: 'Showcase image 9',
  },
  {
    id: 10,
    src: 'https://res.cloudinary.com/dbmcmylvr/image/upload/v1699281064/Personal%20Website/icotegnljtx2nuiizkmn.jpg',
    alt: 'Showcase image 10',
  },
  {
    id: 11,
    src: 'https://res.cloudinary.com/dbmcmylvr/image/upload/v1699428518/Personal%20Website/v5imc0r8ionas7quvl2g.jpg',
    alt: 'Showcase image 11',
  },
  {
    id: 12,
    src: 'https://res.cloudinary.com/dbmcmylvr/image/upload/v1699428518/Personal%20Website/glxa9d5r9ibd6otseqv8.jpg',
    alt: 'Showcase image 12',
  },
];

export default function ShowcasePage() {
  const [selected, setSelected] = useState(0);

  // Auto-looping: pindah gambar setiap 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <main className="w-full min-h-screen flex flex-col items-start bg-white px-4 sm:px-6 md:px-8 pb-8 sm:pb-12 md:pb-60 pt-6 sm:pt-10 md:pt-16">
        <div className="w-full max-w-8xl">
          {/* Baris 1: Judul dan info */}
          <div className="flex flex-col sm:flex-col md:flex-row justify-start items-start md:items-end mb-6 sm:mb-12 md:mb-[160px] gap-2 sm:gap-6 md:gap-[300px]">
            <div>
              <h4 className="text-sm sm:text-base md:text-lg" style={{ fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400, color: '#181818', textAlign: 'left' }}>Showcase</h4>
              <div className="text-sm sm:text-base md:text-lg" style={{ color: '#181818', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400, textAlign: 'left' }}>12 Images</div>
            </div>
            <div>
              <h4 className="text-sm sm:text-base md:text-lg" style={{ fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400, color: '#181818', textAlign: 'left' }}>2021 -</h4>
              <div className="text-sm sm:text-base md:text-lg" style={{ color: '#181818', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400, textAlign: 'left' }}>Ongoing</div>
            </div>
          </div>
          {/* Baris 2: List gambar horizontal scroll (mobile/tablet), grid (desktop) dan Preview */}
          <div className="flex flex-col md:flex-row gap-4 sm:gap-8 md:gap-12 items-start justify-between w-full">
            {/* List gambar */}
            <div className="w-full md:flex-1 flex flex-col mb-4 sm:mb-8 md:mb-0">
              {/* Mobile/tablet: horizontal scroll, Desktop: grid */}
              <div className="block md:hidden w-full overflow-x-auto pb-2">
                <div className="flex flex-row gap-2 sm:gap-4" style={{ minWidth: 'max-content' }}>
                  {images.map((img, idx) => (
                    <div key={img.id} className="flex flex-col items-center cursor-pointer group w-fit h-fit pt-2" onClick={() => setSelected(idx)}>
                      {selected === idx && (
                        <div className="mb-1" style={{ height: 2, width: 24, background: '#181818', borderRadius: 2 }} />
                      )}
                      <span className="mb-2 text-xs sm:text-sm font-regular group-hover:text-black" style={{ fontFamily: 'Power Grotesk, sans-serif' }}>{img.id}</span>
                      <div className={`flex items-center justify-center rounded-md transition-all h-14 sm:h-20`} style={{ width: 80, aspectRatio: '1/1', background: '#f5f5f5' }}>
                        <Image src={img.src} alt={img.alt} width={80} height={80} className="object-contain" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden md:grid w-full grid-cols-4 grid-rows-3 gap-12">
                {images.map((img, idx) => (
                  <div key={img.id} className="flex flex-col items-center cursor-pointer group w-full h-fit pt-2" onClick={() => setSelected(idx)}>
                    {selected === idx && (
                      <div className="mb-1" style={{ height: 2, width: 24, background: '#181818', borderRadius: 2 }} />
                    )}
                    <span className="mb-2 text-xs font-regular group-hover:text-black" style={{ fontFamily: 'Power Grotesk, sans-serif' }}>{img.id}</span>
                    <div className={`flex items-center justify-center rounded-md transition-all h-20`} style={{ width: '100%', maxWidth: 80, aspectRatio: '1/1', background: '#f5f5f5' }}>
                      <Image src={img.src} alt={img.alt} width={80} height={80} className="object-contain" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Preview Besar */}
            <div className="w-full md:flex-1 flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-full">
                <Image src={images[selected].src} alt={images[selected].alt} fill className="object-cover rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <PatternImageSection2 />
      <FooterSection />
    </>
  );
} 