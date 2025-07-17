import Header from '../../Header';
import PatternImageSection2 from '../../PatternImageSection2';
import FooterSection from '../../FooterSection';
import Image from 'next/image';

export default function NgeluMedicalPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818', fontWeight: 500 }}>Ngelu Medical</h1>
          <p className="text-base md:text-lg " style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
            Ngelu Medical is a mobile app UI Kit designed to simplify the healthcare experience through intuitive and user-centered interfaces. Built for telemedicine, online consultations, and medicine delivery, this kit supports a full patient flow — from appointment booking to chat-based consultation and digital pharmacy.<br /><br />
            Crafted with scalability and usability in mind, Ngelu Medical is offered as a premium UI Kit on UI8, enabling designers and developers to accelerate their healthtech product launches with polished, mobile-ready screens.
          </p>
          </div>
          {/* Detail(s) */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Detail(s)</h2>
            <div className="w-full border-t border-b border-gray-200 divide-y divide-gray-200 text-sm md:text-lg" style={{ fontFamily: 'Power Grotesk, sans-serif' }}>
              <div className="flex py-2"><div className="w-32 text-gray-500 ">Type</div><div>Mobile App</div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500">URL Link</div><div><a href="https://ui8.net/nooncx/products/ngelu-medical" className="underline" target="_blank" rel="noopener">https://ui8.net/nooncx/products/ngelu-medical</a></div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500">Industry</div><div>Healthcare / Medical Technology</div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500">Role</div><div>UX/UI Designer</div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500">Date</div><div>4 July 2022</div></div>
            </div>
          </div>
          {/* Problem Statement */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Problem Statement</h2>
            <p className="text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              Designing digital healthcare experiences is complex — users need fast access to appointments, real-time messaging, and a clear way to purchase medicine or consult with doctors. Many health apps feel cluttered, impersonal, or confusing. This UI Kit was created to bridge that gap by offering clean, purpose-built layouts for every core health service touchpoint.
            </p>
          </div>
          {/* Research Objectives */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Research Objectives</h2>
            <ul className="list-disc pl-6 text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              <li>Understand user expectations in health apps like Halodoc, GoodRx, and MySejahtera</li>
              <li>Define a complete patient flow, from sign-in to appointment and order history</li>
              <li>Prioritize clarity and accessibility for all age groups</li>
              <li>Support both on-demand services and scheduled care</li>
              <li>Build consistent, reusable UI patterns</li>
            </ul>
          </div>
          {/* Project Goals */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Project Goals</h2>
            <ul className="list-disc pl-6 text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              <li>Create a complete mobile design flow for healthcare apps</li>
              <li>Maintain simplicity and clarity across every screen</li>
              <li>Build modular components that adapt to multiple use cases (clinic, pharmacy, hospital)</li>
              <li>Offer a professional UI Kit ready for development or customization</li>
              <li>Make it accessible and scalable for startups and agencies</li>
            </ul>
          </div>
          {/* My Role */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>My Role</h2>
            <p className="text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              I designed the entire UI Kit from start to finish — including research, user flow planning, and visual design. I created all screens in Figma, built reusable components, and developed a clear style guide to support developers. The project was completed independently, with a strong focus on usability, consistency, and scalability for healthcare apps.
            </p>
          </div>
          {/* Key Features */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Key Features</h2>
            <ul className="list-disc pl-6 text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              <li>100+ Mobile-Optimized Screens</li>
              <li>Clean, Minimal Visual Language</li>
              <li>Auto Layout Ready (Figma)</li>
              <li>Fully Layered and Named UI Components</li>
              <li>Modular System for Scalability</li>
              <li>Dark Mode Ready (Optional)</li>
              <li>Supports Multilingual Layouts</li>
            </ul>
          </div>
          {/* Design Process */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Design Process</h2>
            <ul className="list-disc pl-6 text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              <li><b>Research & Benchmarking</b><br />Reviewed popular health apps (e.g., Halodoc, GoodRx) to understand key features, flows, and visual standards in healthcare UX.</li>
              <li><b>Flow Mapping</b><br />Planned user journeys across key screens like booking, consultation, shopping, and profile — ensuring logical, intuitive steps.</li>
              <li><b>Wireframing</b><br />Created low-fidelity frames to define layout hierarchy, navigation structure, and content priorities.</li>
              <li><b>Visual Design</b><br />Translated wireframes into clean, modern interfaces using accessible colors, soft edges, and mobile-first design principles.</li>
              <li><b>Component System</b><br />Built a modular, scalable UI system in Figma with reusable components and auto layout for flexibility.</li>
              <li><b>Style Guide Preparation</b><br />Documented typography, color palette, spacing, and UI elements in a well-structured style guide — ready for developer use.</li>
            </ul>
          </div>
        </section>
      </main>
      {/* Kontainer gambar */}
      <section className="w-full bg-[#ffffff] flex flex-col items-center py-16 px-4 pb-[200px] gap-[20px]">
        {/* row 1 gambar */}
        <div className="w-full max-w-[1440px] aspect-[4/3] relative">
          <Image
            src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752761888/New%20Website/Assert/Ngelu%20Medical/1_1_pckkc4.webp"
            alt="Ngelu Medical Project Hero"
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
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752761693/New%20Website/Assert/Ngelu%20Medical/2_2_tk0xcb.webp"
              alt="Ngelu Medical Asset 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full aspect-square relative flex justify-center">
            <Image
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752760015/New%20Website/Assert/Ngelu%20Medical/3_nvpxkr.webp"
              alt="Ngelu Medical Asset 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* row 3 gambar */}
        <div className="w-full max-w-[1440px] aspect-[4/3] relative">
          <Image
            src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752761888/New%20Website/Assert/Ngelu%20Medical/4_1_lhsbep.webp"
            alt="Ngelu Medical Asset 3"
            fill
            className="object-cover rounded-none shadow-none"
            style={{ background: '#ffffff' }}
          />
        </div>
        {/* row 4 gambar */}
        <div className="w-full max-w-[1440px] flex flex-row gap-[20px]">
          <div className="w-full aspect-square relative flex justify-center">
            <Image
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752760016/New%20Website/Assert/Ngelu%20Medical/5_of7z9c.webp"
              alt="Ngelu Medical Asset 4"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full aspect-square relative flex justify-center">
            <Image
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752760021/New%20Website/Assert/Ngelu%20Medical/6_p8wcgd.webp"
              alt="Ngelu Medical Asset 5"
              fill
              className="object-cover"
            />
          </div>
        </div>
         {/* row 5 gambar */}
         <div className="w-full max-w-[1440px] aspect-[4/3] relative">
          <Image
            src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752760022/New%20Website/Assert/Ngelu%20Medical/7_fopufi.webp"
            alt="Ngelu Medical Asset 6"
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