import Header from '../Header';
import FooterSection from '../FooterSection';
import PatternImageSection2 from '../PatternImageSection2';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen flex flex-col items-center bg-white px-8 py-20">
        <div className="w-full max-w-6xl mx-auto flex flex-col gap-16">
          {/* Row 1: Description & Resume CTA */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline gap-8 md:gap-0">
            <div className="w-full md:w-1/2">
              <p className="text-base md:text-lg mb-6" style={{ color: '#181818', fontFamily: 'Power Grotesk, sans-serif' }}>
                I&apos;m Jurdan Wahyu, a UX/UI Designer based in Malang, Indonesia, with a strong focus on clarity, usability, and product driven design.<br /><br />
                I started my career in 2021 as a full-time designer at Feedloop.ai, where I worked on a range of data-driven and enterprise platforms. In parallel, I&apos;ve taken on freelance opportunities helping startups and small teams craft thoughtful user experiences from concept to launch.<br /><br />
                Over the years, I&apos;ve contributed to 10+ design projects, including platforms like Qore, Buatin.app, and the Feedloop website. I&apos;ve collaborated closely with developers, product owners, and founders to solve real problems through clean and functional interfaces.<br /><br />
                What drives me is the belief that good design should be intuitive and aligned with real user needs, while also meeting business goals. Whether working in a team or independently, I bring structure, curiosity, and a mindset that combines strategy with detail.
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto flex justify-end md:items-baseline">
              <span className="text-base md:text-lg font-regular" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818', lineHeight: 1 }}>
                (Resume <span className="align-middle text-xs md:text-base">↓</span>)
              </span>
            </div>
          </div>
          {/* Row 2: Avatar & List Konten */}
          <div className="flex flex-col md:flex-row md:justify-end gap-12 md:gap-[280px] items-start">
            <div className="flex justify-center md:justify-start w-full md:w-auto">
              <img
                src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1751256853/New%20Website/jurdanimg_xtf73o.png"
                alt="Jurdan Wahyu"
                className="rounded-md object-cover w-48 h-60 md:w-56 md:h-72 shadow-md"
                style={{ objectPosition: 'top' }}
              />
            </div>
            <div className="flex flex-col gap-12 md:items-end text-left w-full md:w-auto">
              <div className="text-left w-full md:w-[400px]">
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Experience</h3>
                <div className="text-base mb-1" style={{ color: '#757575' }}>Feedloop.ai - UX/UI Designer 2021 - Now</div>
                <div className="text-base" style={{ color: '#757575' }}>Freelance UX/UI Designer 2022 - Now</div>
              </div>
              <div className="text-left w-full md:w-[400px]">
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>Expertise</h3>
                <ul className="text-base space-y-1" style={{ color: '#757575' }}>
                  <li>UX/UI Designer</li>
                  <li>UI Animation</li>
                  <li>Prototyping</li>
                  <li>Wireframing</li>
                  <li>Icon Design</li>
                  <li>Framer Dev</li>
                </ul>
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