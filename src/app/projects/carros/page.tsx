import Header from '../../Header';
import PatternImageSection2 from '../../PatternImageSection2';
import FooterSection from '../../FooterSection';
import Image from 'next/image';

export default function CarrosPage() {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen flex flex-row bg-white px-8 py-20 gap-[500px] max-w-[1440px] mx-auto">
        {/* Sidebar kiri */}
        <aside className="hidden md:flex flex-col w-48 pt-2 text-left" >
          <h6 className="text-[24px] leading-[28px] font-medium" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818', fontWeight: 500 }}>
            Project<br />Overview
          </h6>
        </aside>
        {/* Konten utama */}
        <section className="flex-1 max-w-3xl mx-auto flex flex-col gap-[40px]">
        <div className="mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818', fontWeight: 500 }}>Carros</h1>
          <p className="text-base md:text-lg " style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
            [Deskripsi singkat project Carros di sini. Silakan edit sesuai kebutuhan.]
          </p>
          </div>
          {/* Detail(s) */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Detail(s)</h2>
            <div className="w-full border-t border-b border-gray-200 divide-y divide-gray-200 text-sm md:text-lg" style={{ fontFamily: 'Power Grotesk, sans-serif' }}>
              <div className="flex py-2"><div className="w-32 text-gray-500 ">Type</div><div>Landingpage</div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500">URL Link</div><div><a href="#" className="underline" target="_blank" rel="noopener">carros.project.link</a></div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500">Industry</div><div>[Industry]</div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500">Role</div><div>UX/UI Designer & Framer Developer</div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500">Date</div><div>[Tanggal Project]</div></div>
            </div>
          </div>
          {/* Problem Statement */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Problem Statement</h2>
            <p className="text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              [Problem statement untuk project Carros. Silakan edit sesuai kebutuhan.]
            </p>
          </div>
          {/* Research Objectives */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Research Objectives</h2>
            <ul className="list-disc pl-6 text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              <li>[Objective 1]</li>
              <li>[Objective 2]</li>
              <li>[Objective 3]</li>
            </ul>
          </div>
          {/* My Role */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>My Role</h2>
            <ul className="list-disc pl-6 text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              <li>Content structure</li>
              <li>Visual design</li>
              <li>Page build in Framer</li>
              <li>Responsive behavior across desktop and mobile</li>
              <li>This project gave me full ownership, which let me focus on both the details and the big picture.</li>
            </ul>
          </div>
          {/* Design Process */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Design Process</h2>
            <ol className="list-decimal pl-6 text-base md:text-lg " style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              <li className="mb-4"><b style={{ color: '#181818' }}>Empathize</b><br />[Empathize step untuk Carros]</li>
              <li className="mb-4"><b style={{ color: '#181818' }}>Define</b><br />[Define step untuk Carros]</li>
              <li className="mb-4"><b style={{ color: '#181818' }}>Ideate</b><br />[Ideate step untuk Carros]</li>
              <li className="mb-4"><b style={{ color: '#181818' }}>Design</b><br />[Design step untuk Carros]</li>
              <li><b style={{ color: '#181818' }}>Deliver</b><br />[Deliver step untuk Carros]</li>
            </ol>
          </div>
        </section>
      </main>
      {/* Kontainer gambar */}
      <section className="w-full bg-[#ffffff] flex flex-col items-center py-16 px-4 pb-[200px] gap-[20px]">
        {/* row 1 gambar */}
        <div className="w-full max-w-[1440px] aspect-[4/3] relative mb-5">
          <Image
            src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1683698860/image2_gex99j.png"
            alt="Carros Project Hero"
            fill
            className="object-cover rounded-none shadow-none"
            style={{ background: '#ffffff' }}
            priority={true}
          />
        </div>
         {/* row 2 gambar */}
        <div className="w-full max-w-[1440px] flex flex-row gap-[20px]">
          <div className="w-full aspect-square relative flex justify-center">
            <Image
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1683698860/image2_gex99j.png"
              alt="Carros Asset 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full aspect-square relative flex justify-center">
            <Image
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1683698860/image2_gex99j.png"
              alt="Carros Asset 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* row 3 gambar */}
        <div className="w-full max-w-[1440px] aspect-[4/3] relative">
          <Image
            src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1683698860/image2_gex99j.png"
            alt="Carros Asset 3"
            fill
            className="object-cover rounded-none shadow-none"
            style={{ background: '#ffffff' }}
          />
        </div>
        {/* row 4 gambar */}
        <div className="w-full max-w-[1440px] flex flex-row gap-[20px]">
          <div className="w-full aspect-square relative flex justify-center">
            <Image
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1683698860/image2_gex99j.png"
              alt="Carros Asset 4"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full aspect-square relative flex justify-center">
            <Image
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1683698860/image2_gex99j.png"
              alt="Carros Asset 5"
              fill
              className="object-cover"
            />
          </div>
        </div>
         {/* row 5 gambar */}
         <div className="w-full max-w-[1440px] aspect-[4/3] relative">
          <Image
            src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1683698860/image2_gex99j.png"
            alt="Carros Asset 6"
            fill
            className="object-cover rounded-none shadow-none"
            style={{ background: '#ffffff' }}
          />
        </div>
      </section>
      <PatternImageSection2 />
      <FooterSection />
    </>
  );
} 