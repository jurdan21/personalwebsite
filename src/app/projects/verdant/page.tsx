import Header from '../../Header';
import PatternImageSection2 from '../../PatternImageSection2';
import FooterSection from '../../FooterSection';
import Image from 'next/image';

export default function VerdantPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818', fontWeight: 500 }}>Verdant</h1>
          <p className="text-base md:text-lg " style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
            Verdant Agriculture is a modern consulting firm in the agriculture space. The goal was to create a landing page that feels trustworthy, professional, and clear — helping them communicate who they are, what they offer, and why it matters.<br /><br />
            I designed and built the page using Framer, with a focus on clear structure, strong messaging, and a calm visual style that reflects their values and industry.
          </p>
          </div>
          {/* Detail(s) */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Detail(s)</h2>
            <div className="w-full border-t border-b border-gray-200 divide-y divide-gray-200 text-sm md:text-lg" style={{ fontFamily: 'Power Grotesk, sans-serif' }}>
              <div className="flex py-2"><div className="w-32 text-gray-500 ">Type</div><div>Landingpage</div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500">URL Link</div><div><a href="https://verdant.framer.website" className="underline" target="_blank" rel="noopener">verdant.framer.website</a></div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500">Industry</div><div>Agriculture</div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500">Role</div><div>UX/UI Designer & Framer Developer</div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500">Date</div><div>1 February 2024</div></div>
            </div>
          </div>
          {/* Problem Statement */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Problem Statement</h2>
            <p className="text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              Before this project, Verdant didn&apos;t have a proper digital presence. There was no clear way for potential clients to understand what the company does or why they should care.<br /><br />
              They needed a landing page that could explain their services quickly and convincingly, while also building credibility with their core audience: family farms, agribusinesses, and government programs.
            </p>
          </div>
          {/* Research Objectives */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Research Objectives</h2>
            <ul className="list-disc pl-6 text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              <li>What do users in this space care about when visiting a consultancy&apos;s website?</li>
              <li>How do we organize content so it feels easy to follow, not overwhelming?</li>
              <li>And how do we make sure every section supports the next — leading visitors toward a clear next step?</li>
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
              <li className="mb-4"><b style={{ color: '#181818' }}>Empathize</b><br />I had a quick discovery chat with the team and looked at similar brands to understand tone and direction. Many agri-consulting websites feel outdated — I wanted Verdant to feel fresh, modern, and credible.</li>
              <li className="mb-4"><b style={{ color: '#181818' }}>Define</b><br />I mapped out a clean page flow:<ul className="list-disc pl-6"><li>Start strong with a hero message</li><li>Explain their 3 core values (Independent, Integrated, Innovation)</li><li>Show their services and who they serve</li><li>Share thought-leadership content</li><li>End with a call-to-action</li></ul></li>
              <li className="mb-4"><b style={{ color: '#181818' }}>Ideate</b><br />I sketched different layout options, tested spacing, and experimented with copy to make sure each section flowed naturally into the next.</li>
              <li className="mb-4"><b style={{ color: '#181818' }}>Design</b><br />I built the page in Framer, using earthy greens, elegant typography, and spacious layout to give it a calm and confident feel.</li>
              <li><b style={{ color: '#181818' }}>Deliver</b><br />The result is a clean, responsive landing page that helps Verdant tell their story, build trust, and start more conversations with potential clients.</li>
            </ol>
          </div>
        </section>
      </main>
      {/* Kontainer gambar */}
      <section className="w-full bg-[#ffffff] flex flex-col items-center py-16 px-4 pb-[200px] gap-[20px]">
        {/* row 1 gambar */}
        <div className="w-full max-w-[1440px] aspect-[4/3] relative mb-5">
          <Image
            src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1751548213/New%20Website/Assert/Verdant/7_jk3pjh.webp"
            alt="Verdant Project Hero"
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
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1751548211/New%20Website/Assert/Verdant/1_u1a4xn.webp"
              alt="Verdant Asset 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full aspect-square relative flex justify-center">
            <Image
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1751548211/New%20Website/Assert/Verdant/5_enryxt.webp"
              alt="Verdant Asset 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* row 3 gambar */}
        <div className="w-full max-w-[1440px] aspect-[4/3] relative">
          <Image
            src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1751548212/New%20Website/Assert/Verdant/3_fjcb4d.webp"
            alt="Verdant Asset 3"
            fill
            className="object-cover rounded-none shadow-none"
            style={{ background: '#ffffff' }}
          />
        </div>
        {/* row 4 gambar */}
        <div className="w-full max-w-[1440px] flex flex-row gap-[20px]">
          <div className="w-full aspect-square relative flex justify-center">
            <Image
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1751548212/New%20Website/Assert/Verdant/4_bgjbnh.webp"
              alt="Verdant Asset 4"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full aspect-square relative flex justify-center">
            <Image
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1751548211/New%20Website/Assert/Verdant/5_enryxt.webp"
              alt="Verdant Asset 5"
              fill
              className="object-cover"
            />
          </div>
        </div>
         {/* row 5 gambar */}
         <div className="w-full max-w-[1440px] aspect-[4/3] relative">
          <Image
            src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1751548213/New%20Website/Assert/Verdant/6_dsp5i9.webp"
            alt="Verdant Asset 6"
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