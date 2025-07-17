import Header from '../../Header';
import PatternImageSection2 from '../../PatternImageSection2';
import FooterSection from '../../FooterSection';
import Image from 'next/image';

export default function PosteraPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818', fontWeight: 500 }}>Postera Mail</h1>
          <p className="text-base md:text-lg " style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
            Postera Mail is a free, modern UI Kit designed for building professional email platform websites. Created with usability, clarity, and scalability in mind, it provides essential components to design clean and intuitive interfaces for inbox, email composition, mobile mail apps, and admin management. The kit was fully designed by me as a solo UI/UX designer, with the goal of delivering a pixel-perfect system that&rsquo;s both developer-friendly and adaptable for real-world applications.
          </p>
          </div>
          {/* Detail(s) */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Detail(s)</h2>
            <div className="w-full border-t border-b border-gray-200 divide-y divide-gray-200 text-sm md:text-lg" style={{ fontFamily: 'Power Grotesk, sans-serif' }}>
              <div className="flex py-2"><div className="w-32 text-gray-500 ">Type</div><div>Website</div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500">URL Link</div><div><a href="https://www.figma.com/community/file/1425861840566876539/email-platform-web-template-kit" className="underline" target="_blank" rel="noopener">Figma Community</a></div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500">Industry</div><div>SaaS / Productivity Tool</div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500">Role</div><div>UX/UI Designer</div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500">Date</div><div>16 October 2024</div></div>
            </div>
          </div>
          {/* Problem Statement */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Problem Statement</h2>
            <p className="text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              Designing interfaces for email platforms can be complex. Many available UI kits are either outdated or lack the structure needed for real-world use &mdash; such as inbox views, secure message threads, mobile optimization, and admin settings. Teams often waste valuable time reinventing these from scratch.
            </p>
          </div>
          {/* Research Objectives */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Research Objectives</h2>
            <ul className="list-disc pl-6 text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              <li><strong>Understand Common UI Patterns:</strong> Studied popular email services to learn how they structure layout, actions, and message flows.</li>
              <li><strong>Identify User Pain Points:</strong> Analyzed issues like layout clutter, poor mobile experience, and action confusion.</li>
              <li><strong>Define Key Page Requirements:</strong> Mapped out the must-have screens: inbox, open message view, compose, settings, and help center.</li>
              <li><strong>Ensure Mobile Usability:</strong> Tested design adaptability to guarantee ease of use on phones and tablets.</li>
              <li><strong>Build a Modular UI System:</strong> Designed reusable components to support scale and speed in future development.</li>
            </ul>
          </div>
          {/* Project Goals */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Project Goals</h2>
            <ul className="list-disc pl-6 text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              <li>Deliver a high-quality, free UI Kit tailored for email-based products.</li>
              <li>Cover all essential pages: inbox, email composition, and more.</li>
              <li>Ensure responsive, modular layouts for real-world adaptability.</li>
              <li>Provide a style guide for faster and more consistent development.</li>
              <li>Create a component that balances usability and visual clarity.</li>
            </ul>
          </div>
          {/* My Role */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>My Role</h2>
            <p className="text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              As the sole UI/UX designer, I led the entire design process &mdash; from initial research and wireframing to component creation and final documentation. I also built the style guide to support seamless development and customization.
            </p>
          </div>
          {/* Key Features */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Key Features</h2>
            <ul className="list-disc pl-6 text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              <li><strong>15+ Fully Designed Pages:</strong> Inbox, Compose, Mail View, Admin Panel, Pricing, FAQs.</li>
              <li><strong>Responsive Layouts:</strong> Optimized for desktop, tablet, and mobile.</li>
              <li><strong>Pixel-Perfect UI:</strong> Clean, consistent spacing and alignment across all screens.</li>
              <li><strong>Style Guide Included:</strong> Typography, color system, and component.</li>
            </ul>
          </div>
          {/* Final Deliverables */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Final Deliverables</h2>
            <ul className="list-disc pl-6 text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              <li>Figma file with 15+ structured, responsive screens.</li>
              <li>Full design system & documentation.</li>
              <li>Ready for frontend implementation in React, Webflow, or custom stacks.</li>
              <li>Free to download and adapt for any email-based SaaS product.</li>
            </ul>
          </div>
        </section>
      </main>
      {/* Kontainer gambar */}
      <section className="w-full bg-[#ffffff] flex flex-col items-center py-16 px-4 pb-[200px] gap-[20px]">
        {/* row 1 gambar */}
        <div className="w-full max-w-[1440px] aspect-[4/3] relative mb-5">
          <Image
            src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752725428/New%20Website/Assert/Postera/1_zkc63z.webp"
            alt="Postera Project Hero"
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
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752725434/New%20Website/Assert/Postera/5_mjggul.webp"
              alt="Postera Asset 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full aspect-square relative flex justify-center">
            <Image
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752725429/New%20Website/Assert/Postera/6_uwgfk2.webp"
              alt="Postera Asset 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* row 3 gambar */}
        <div className="w-full max-w-[1440px] aspect-[4/3] relative">
          <Image
            src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752725429/New%20Website/Assert/Postera/4_ny25ia.webp"
            alt="Postera Asset 3"
            fill
            className="object-cover rounded-none shadow-none"
            style={{ background: '#ffffff' }}
          />
        </div>
        {/* row 4 gambar */}
        <div className="w-full max-w-[1440px] flex flex-row gap-[20px]">
          <div className="w-full aspect-square relative flex justify-center">
            <Image
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752725429/New%20Website/Assert/Postera/3_i1kzbl.webp"
              alt="Postera Asset 4"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full aspect-square relative flex justify-center">
            <Image
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752725428/New%20Website/Assert/Postera/2_xnqdis.webp"
              alt="Postera Asset 5"
              fill
              className="object-cover"
            />
          </div>
        </div>
         {/* row 5 gambar */}
         <div className="w-full max-w-[1440px] aspect-[4/3] relative">
          <Image
            src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752725430/New%20Website/Assert/Postera/7_mna4y0.webp"
            alt="Postera Asset 6"
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