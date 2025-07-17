import Header from '../../Header';
import PatternImageSection2 from '../../PatternImageSection2';
import FooterSection from '../../FooterSection';
import Image from 'next/image';

export default function WatujoInteriorPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818', fontWeight: 500 }}>Watujo</h1>
          <p className="text-base md:text-lg " style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
            Watuijo is a refined interior design SaaS website UI Kit crafted for designers and startups who want to build clean, aesthetic, and functional interior-themed websites. This kit encapsulates modern design principles, responsive components, and editorial-style layouts that suit both personal and commercial use cases. The design system solves spatial and storytelling challenges, making it adaptable for agencies, architects, or SaaS products in the design domain.
          </p>
          </div>
          {/* Detail(s) */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Detail(s)</h2>
            <div className="w-full border-t border-b border-gray-200 divide-y divide-gray-200 text-sm md:text-lg" style={{ fontFamily: 'Power Grotesk, sans-serif' }}>
              <div className="flex py-2"><div className="w-32 text-gray-500 ">Type</div><div>Website</div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500">URL Link</div><div><a href="https://ui8.net/mordustwork/products/watuijo" className="underline" target="_blank" rel="noopener">https://ui8.net/mordustwork/products/watuijo</a></div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500">Industry</div><div>Property, Agency</div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500">Role</div><div>UX/UI Designer</div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500">Date</div><div>12 December 2023</div></div>
            </div>
          </div>
          {/* Problem Statement */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Problem Statement</h2>
            <p className="text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              Most UI Kits for interior or lifestyle websites lean either too generic or too niche, lacking balance between modularity and strong visual identity. Watuijo fills this gap with a calm, functional, and fully responsive UI Kit built with real use cases in mind &mdash; showcasing how simplicity and elegance can support scalable frontend development.
            </p>
          </div>
          {/* Research Objectives */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Research Objectives</h2>
            <ul className="list-disc pl-6 text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              <li>Create a reusable and scalable UI Kit that reflects real-world interior design sensibility</li>
              <li>Deliver clear and modular layouts that can be used for storytelling, portfolios, or service pages</li>
              <li>Establish a balance between aesthetic neutrality and strong visual hierarchy</li>
              <li>Make it easy to customize and implement for dev teams</li>
            </ul>
          </div>
          {/* My Role */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>My Role</h2>
            <p className="text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              I was responsible for:
            </p>
            <ul className="list-disc pl-6 text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              <li>Designing the full UI Kit in Figma</li>
              <li>Establishing layout rules and responsive behavior</li>
              <li>Defining typography and color tokens</li>
              <li>Collaborating with my teammate who implemented the development side</li>
            </ul>
          </div>
          {/* Design Process */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Design Process</h2>
            <ol className="list-decimal pl-6 text-base md:text-lg " style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              <li className="mb-4"><b style={{ color: '#181818' }}>UI Architecture</b><br />
                <ul className="list-disc pl-6 mt-2">
                  <li>Hero components with CTA and scroll indicator</li>
                  <li>Modular project grid with hover/card states</li>
                  <li>Blog/story layouts with clean typography</li>
                  <li>Contact and About blocks with subtle transitions</li>
                </ul>
              </li>
              <li className="mb-4"><b style={{ color: '#181818' }}>Visual Style</b><br />
                <ul className="list-disc pl-6 mt-2">
                  <li>Typography: Archivo - chosen for its neutral, versatile, and readable style</li>
                  <li>Colors: Warm greys, white backgrounds, and soft black accents</li>
                  <li>Spacing: Consistent padding/margin system to ensure readability and breathing room</li>
                  <li>Layout: 12-column grid, stackable components, responsive by default</li>
                </ul>
              </li>
              <li><b style={{ color: '#181818' }}>Components Included</b><br />
                <ul className="list-disc pl-6 mt-2">
                  <li>Navbar & Footer</li>
                  <li>Hero blocks (text + image variations)</li>
                  <li>Project showcase cards</li>
                  <li>Article blocks & stories</li>
                  <li>About team layout</li>
                  <li>CTA and contact form section</li>
                </ul>
              </li>
            </ol>
          </div>
        </section>
      </main>
      {/* Kontainer gambar */}
      <section className="w-full bg-[#ffffff] flex flex-col items-center py-16 px-4 pb-[200px] gap-[20px]">
        {/* row 1 gambar */}
        <div className="w-full max-w-[1440px] aspect-[4/3] relative">
          <Image
            src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752681970/New%20Website/Assert/Watuijo/1_yogo5y.webp"
            alt="Watuijo Project Hero"
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
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752681970/New%20Website/Assert/Watuijo/2_udqjtd.webp"
              alt="Watuijo Asset 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full aspect-square relative flex justify-center">
            <Image
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752681970/New%20Website/Assert/Watuijo/3_ttr6uo.webp"
              alt="Watuijo Asset 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* row 3 gambar */}
        <div className="w-full max-w-[1440px] aspect-[4/3] relative">
          <Image
            src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752681971/New%20Website/Assert/Watuijo/4_wmbf1w.webp"
            alt="Watuijo Asset 3"
            fill
            className="object-cover rounded-none shadow-none"
            style={{ background: '#ffffff' }}
          />
        </div>
        {/* row 4 gambar */}
        <div className="w-full max-w-[1440px] flex flex-row gap-[20px]">
          <div className="w-full aspect-square relative flex justify-center">
            <Image
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752681974/New%20Website/Assert/Watuijo/5_sdkfdr.webp"
              alt="Watuijo Asset 4"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full aspect-square relative flex justify-center">
            <Image
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752681981/New%20Website/Assert/Watuijo/6_wynmuq.webp"
              alt="Watuijo Asset 5"
              fill
              className="object-cover"
            />
          </div>
        </div>
         {/* row 5 gambar */}
         <div className="w-full max-w-[1440px] aspect-[4/3] relative">
          <Image
            src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752681979/New%20Website/Assert/Watuijo/7_wniigl.webp"
            alt="Watuijo Asset 6"
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