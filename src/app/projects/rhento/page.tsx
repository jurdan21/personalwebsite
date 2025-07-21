import Header from '../../Header';
import FooterSection from '../../FooterSection';
import Image from 'next/image';

export default function RhentoPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818', fontWeight: 500 }}>Rhento</h1>
            <p className="text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              Rhento is a digital real estate platform built to help users find and rent properties easily — including apartments, houses, and villas — without the hassle of in-person visits.<br />
              <br />
              Especially during the pandemic, the need for remote property browsing and booking has grown significantly. Rhento responds to this by offering a mobile-first experience that allows users to search, explore, and book properties with confidence, all from their phones.
            </p>
          </div>
          {/* Detail(s) */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Detail(s)</h2>
            <div className="w-full border-t border-b border-gray-200 divide-y divide-gray-200 text-sm md:text-lg" style={{ fontFamily: 'Power Grotesk, sans-serif' }}>
              <div className="flex py-2"><div className="w-32 text-gray-500" style={{ color: '#757575' }}>Type</div><div style={{ color: '#181818' }}>Mobile App</div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500" style={{ color: '#757575' }}>URL Link</div><div><a href="https://www.figma.com/design/WpCOJPqh44loQLR3irMb3X/Rentho-Mobile-UI---Branding--?node-id=316-33&t=CLkX5GvtqAhfmXDA-1" className="underline" target="_blank" rel="noopener" style={{ color: '#181818' }}>Figma File</a></div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500" style={{ color: '#757575' }}>Industry</div><div style={{ color: '#181818' }}>Real Estate / Property Technology</div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500" style={{ color: '#757575' }}>Role</div><div style={{ color: '#181818' }}>UX/UI Designer</div></div>
              <div className="flex py-2"><div className="w-32 text-gray-500" style={{ color: '#757575' }}>Date</div><div style={{ color: '#181818' }}>2 September 2022</div></div>
            </div>
          </div>
          {/* Problem Statement */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Problem Statement</h2>
            <p className="text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              Finding a place to live in a new area can be difficult and time-consuming. This challenge became even more urgent during the pandemic, where physical property visits were limited or impossible. Users need a way to explore properties, check details, and make bookings — all without leaving home.
            </p>
          </div>
          {/* Research Objectives */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Research Objectives</h2>
            <ul className="list-disc pl-6 text-base md:text-md" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              <li><b style={{ color: '#181818' }}>Understand User Needs in Property Rental</b><br /><span style={{ color: '#757575' }}>Explore how users search, evaluate, and select rental properties — especially in unfamiliar locations or during remote-only scenarios like a pandemic.</span></li>
              <li><b style={{ color: '#181818' }}>Analyze Existing Real Estate Platforms</b><br /><span style={{ color: '#757575' }}>Study apps such as Airbnb, Travelio, and Rumah123 to identify UX patterns, navigation flows, and gaps in informativity.</span></li>
              <li><b style={{ color: '#181818' }}>Define Key Screens & Functionalities</b><br /><span style={{ color: '#757575' }}>Determine which features are essential to support a smooth end-to-end rental experience — including discovery, comparison, booking, and transaction tracking.</span></li>
              <li><b style={{ color: '#181818' }}>Ensure Mobile Usability</b><br /><span style={{ color: '#757575' }}>Focus on building interfaces that are intuitive and efficient for mobile users, where space is limited but decisions need to feel confident.</span></li>
              <li><b style={{ color: '#181818' }}>Establish Trust through UI</b><br /><span style={{ color: '#757575' }}>Investigate how layout, typography, and content hierarchy contribute to building user trust when browsing property listings remotely.</span></li>
            </ul>
          </div>
          {/* Project Goals */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Project Goals</h2>
            <ul className="list-disc pl-6 text-base md:text-md" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              <li>Build a seamless mobile experience for renting properties remotely</li>
              <li>Simplify browsing and property discovery with intuitive UI</li>
              <li>Present detailed information clearly for each listing</li>
              <li>Ensure smooth navigation and transaction flow</li>
              <li>Establish trust with a professional and user-friendly visual identity</li>
            </ul>
          </div>
          {/* Design Challenges */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Design Challenges</h2>
            <ul className="list-disc pl-6 text-base md:text-md" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              <li>Designing an interface that is visually simple yet rich in information</li>
              <li>Structuring detailed property info pages without overwhelming the user</li>
              <li>Optimizing information hierarchy and navigation for fast browsing</li>
              <li>Supporting various payment methods in a clean and secure flow</li>
            </ul>
          </div>
          {/* Design Scope */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Design Scope</h2>
            <p className="text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              The design scope includes the full user journey, from the first app launch to the final transaction confirmation. Key focuses:
            </p>
            <ul className="list-disc pl-6 text-base md:text-md" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              <li>Initial landing and onboarding</li>
              <li>Browsing & searching properties</li>
              <li>Viewing detailed property information</li>
              <li>Checkout and payment flows</li>
              <li>Order tracking and history</li>
            </ul>
          </div>
          {/* My Role */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>My Role</h2>
            <p className="text-base md:text-lg" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              As the UI/UX designer, I was responsible for designing the entire mobile experience — from research, flow planning, low-fidelity wireframing, to high-fidelity design and component creation. This project focused solely on design, with no app development involved.
            </p>
          </div>
          {/* Design Process */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Design Process</h2>
            <ul className="list-disc pl-6 text-base md:text-md" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              <li><b style={{ color: '#181818' }}>Research & Benchmarking</b><br /><span style={{ color: '#757575' }}>Studied apps like Airbnb, Zillow, and Travelio to understand real estate UI patterns and remote booking needs.</span></li>
              <li><b style={{ color: '#181818' }}>User Flow Mapping</b><br /><span style={{ color: '#757575' }}>Planned step-by-step interaction from home screen to transaction and confirmation.</span></li>
              <li><b style={{ color: '#181818' }}>Wireframing (Low-Fidelity)</b><br /><span style={{ color: '#757575' }}>Created rough layouts to ensure a logical and user-friendly structure before applying visual styles.</span></li>
              <li><b style={{ color: '#181818' }}>Visual Design (High-Fidelity)</b><br /><span style={{ color: '#757575' }}>Applied clean layouts, neutral color palettes, and consistent spacing to maintain professionalism and clarity.</span></li>
              <li><b style={{ color: '#181818' }}>Component Library & System</b><br /><span style={{ color: '#757575' }}>Built scalable UI components in Figma, optimized for mobile usability and reuse.</span></li>
            </ul>
          </div>
          {/* Key Features */}
          <div className="mb-0">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Key Features</h2>
            <ul className="list-disc pl-6 text-base md:text-md" style={{ color: '#757575', fontFamily: 'Power Grotesk, sans-serif', fontWeight: 400 }}>
              <li><b style={{ color: '#181818' }}>Featured Property Recommendations</b><br /><span style={{ color: '#757575' }}>The home screen highlights top-rated listings to build trust and showcase variety — making users feel confident that they have several good options.</span></li>
              <li><b style={{ color: '#181818' }}>Smart Property Search</b><br /><span style={{ color: '#757575' }}>Users can search by location and filter results by property type, price, size, and more. Each property includes full specs and location details.</span></li>
              <li><b style={{ color: '#181818' }}>Secure Booking & Payment</b><br /><span style={{ color: '#757575' }}>Users can complete transactions directly through the app using multiple payment options. A transaction ID is provided for tracking and confirmation.</span></li>
              <li><b style={{ color: '#181818' }}>Order History</b><br /><span style={{ color: '#757575' }}>A centralized page shows all past and current bookings — making it easy to rebook, track progress, and reference previous transactions.</span></li>
            </ul>
          </div>
        </section>
      </main>
      {/* Kontainer gambar */}
      <section className="w-full bg-[#ffffff] flex flex-col items-center py-16 px-4 pb-[200px] gap-[20px]">
        {/* row 1 gambar */}
        <div className="w-full max-w-[1440px] aspect-[4/3] relative">
          <Image
            src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1753096974/New%20Website/Assert/Rentho/1_tmphh6.webp"
            alt="Rhento Project Hero"
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
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1753096974/New%20Website/Assert/Rentho/2_cjbmk3.webp"
              alt="Rhento Asset 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full aspect-square relative flex justify-center">
            <Image
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1753096975/New%20Website/Assert/Rentho/3_swbgo4.webp"
              alt="Rhento Asset 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* row 3 gambar */}
        <div className="w-full max-w-[1440px] aspect-[4/3] relative">
          <Image
            src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1753096975/New%20Website/Assert/Rentho/4_djsl8q.webp"
            alt="Rhento Asset 3"
            fill
            className="object-cover rounded-none shadow-none"
            style={{ background: '#ffffff' }}
          />
        </div>
         {/* row 2 gambar */}
         <div className="w-full max-w-[1440px] flex flex-row gap-[20px]">
          <div className="w-full aspect-square relative flex justify-center">
            <Image
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1753096975/New%20Website/Assert/Rentho/5_t5rkwz.webp"
              alt="Rhento Asset 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full aspect-square relative flex justify-center">
            <Image
              src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1753096976/New%20Website/Assert/Rentho/6_u0ydle.webp"
              alt="Rhento Asset 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
         {/* row 3 gambar */}
         <div className="w-full max-w-[1440px] aspect-[4/3] relative">
          <Image
            src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1753096975/New%20Website/Assert/Rentho/7_u9c1hz.webp"
            alt="Rhento Asset 3"
            fill
            className="object-cover rounded-none shadow-none"
            style={{ background: '#ffffff' }}
          />
        </div>
      </section>
      <FooterSection />
    </>
  );
} 