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
            Carros is a modern car rental platform offering fast and trusted vehicle bookings online. This project focused on designing a minimalist and elegant landing page that builds trust and converts visitors into customers.
          </p>
          </div>
          {/* Detail(s) */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Detail(s)</h2>
            <div className="w-full border-t border-b border-gray-200 divide-y divide-gray-200 text-sm md:text-lg" style={{ fontFamily: 'Power Grotesk, sans-serif' }}>
              <div className="flex py-2"><div className="w-32 text-gray-500 ">Type</div><div>Landingpage</div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500">URL Link</div><div><a href="https://carros.framer.website" className="underline" target="_blank" rel="noopener">Carros.framer.website</a></div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500">Industry</div><div>Car Rental Services</div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500">Role</div><div>UX/UI Designer & Framer Developer</div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500">Date</div><div>14 February 2024</div></div>
            </div>
          </div>
          {/* Problem Statement */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Problem Statement</h2>
            <p className="text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              Most car rental websites are cluttered, outdated, and unintuitive for everyday users. Carros needed a clean, modern interface that made browsing and booking cars simple while reinforcing the brand&rsquo;s reliability.
            </p>
          </div>
          {/* Research Objectives */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Research Objectives</h2>
            <ul className="list-disc pl-6 text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              <li>Design a homepage that immediately communicates Carros&rsquo; core value</li>
              <li>Build trust through strong visuals and copy</li>
              <li>Create an intuitive reservation flow</li>
              <li>Clearly showcase vehicle categories and service areas without overwhelming the user</li>
            </ul>
          </div>
          {/* My Role */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>My Role</h2>
            <p className="text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              As the UI/UX Designer, I was responsible for:
            </p>
            <ul className="list-disc pl-6 text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              <li>Wireframing and structuring key sections</li>
              <li>Designing the visual UI</li>
              <li>Ensuring accessibility and mobile responsiveness</li>
              <li>Aligning the design with Carros&rsquo; brand tone: clean, reliable, modern</li>
            </ul>
          </div>
          {/* Design Process */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Design Process</h2>
            <ol className="list-decimal pl-6 text-base md:text-lg " style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              <li className="mb-4"><b style={{ color: '#181818' }}>Information Architecture</b><br />I mapped out a clear content hierarchy:
                <ul className="list-disc pl-6 mt-2">
                  <li>Hero section &rarr; value proposition</li>
                  <li>Service highlights &rarr; why choose Carros</li>
                  <li>Vehicle categories &rarr; visual-first layout</li>
                  <li>&ldquo;How it Works&rdquo; &rarr; step-by-step booking guide</li>
                  <li>Locations &rarr; interactive map</li>
                  <li>Testimonials & FAQ &rarr; reinforce trust</li>
                </ul>
              </li>
              <li className="mb-4"><b style={{ color: '#181818' }}>Wireframes & Layout Planning</b><br />The layout focused on:
                <ul className="list-disc pl-6 mt-2">
                  <li>Ample white space</li>
                  <li>Strong grid structure</li>
                  <li>Distraction-free navigation</li>
                  <li>Fully responsive behavior across devices</li>
                </ul>
              </li>
              <li className="mb-4"><b style={{ color: '#181818' }}>Visual UI</b><br />
                <ul className="list-disc pl-6 mt-2">
                  <li>Typography: Clean Power Grotesk for modern appeal</li>
                  <li>Colors: Dominantly black and white for contrast and elegance</li>
                  <li>Images: Full-width realistic car visuals with minimal distractions</li>
                  <li>CTAs: Blue primary buttons to stand out without overwhelming</li>
                </ul>
              </li>
              <li><b style={{ color: '#181818' }}>Iterations</b><br />Multiple design iterations were done to balance aesthetics with usability. Sections like &ldquo;Easily to Rent&rdquo; and &ldquo;Our Category Vehicle&rdquo; featured horizontal scrolling for a dynamic feel.</li>
            </ol>
          </div>
        </section>
      </main>
      {/* Kontainer gambar */}
      <section className="w-full bg-[#ffffff] flex flex-col items-center py-16 px-4 pb-[200px] gap-[20px]">
        {/* row 1 gambar */}
        <div className="w-full max-w-[1440px] aspect-[4/3] relative">
          <Image
            src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752679322/New%20Website/Assert/Carros/1_mepgin.png"
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
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752679296/New%20Website/Assert/Carros/2_sopvum.png"
              alt="Carros Asset 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full aspect-square relative flex justify-center">
            <Image
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752679301/New%20Website/Assert/Carros/3_dc2mgm.png"
              alt="Carros Asset 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* row 3 gambar */}
        <div className="w-full max-w-[1440px] aspect-[4/3] relative">
          <Image
            src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752679308/New%20Website/Assert/Carros/4_bahiih.png"
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
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752679298/New%20Website/Assert/Carros/5_pdyg6x.png"
              alt="Carros Asset 4"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full aspect-square relative flex justify-center">
            <Image
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752679299/New%20Website/Assert/Carros/6_tktjlr.png"
              alt="Carros Asset 5"
              fill
              className="object-cover"
            />
          </div>
        </div>
         {/* row 5 gambar */}
         <div className="w-full max-w-[1440px] aspect-[4/3] relative">
          <Image
            src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1752679305/New%20Website/Assert/Carros/7_o7dn6w.png"
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