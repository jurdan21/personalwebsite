export default function FooterSection() {
  return (
    <footer className="w-full bg-black-base text-white pt-[160px] pb-5" style={{ fontFamily: 'Power Grotesk, sans-serif', backgroundColor: '#181818' }}>
      <div className="flex flex-col gap-[160px]">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full px-8">
          <h4
            className="text-[80px] md:text-[80px] leading-[1] mb-6 md:mb-0"
            style={{ fontWeight: 500, fontFamily: 'Power Grotesk, sans-serif' }}
          >
            LET&apos;S START<br className="hidden md:block" /> SOMETHING
          </h4>
          <a href="mailto:hello@jurdanwahyu.com" className="text-[32px] md:text-[40px] leading-[1.1] font-normal md:self-end relative after:content-[''] after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">hello@jurdanwahyu.com</a>
        </div>
        {/* Row 2 */}
        <div className="flex flex-col md:flex-row items-start justify-between w-1/2 px-8 mx-auto">
          <div className="flex flex-col gap-2 text-[20px] md:text-[24px]">
            <a href="#" className="relative after:content-[''] after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">LingkedIn</a>
            <a href="#" className="relative after:content-[''] after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">Dribbble</a>
            <a href="#" className="relative after:content-[''] after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">Layers</a>
            <a href="#" className="relative after:content-[''] after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">Instagram</a>
            <a href="#" className="relative after:content-[''] after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">Medium</a>
          </div>
          <a href="#" className="text-[20px] md:text-[24px] mt-8 md:mt-0 relative after:content-[''] after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">Resume ↓</a>
        </div>
        {/* Row 3 */}
        <div className="flex flex-row items-center justify-between w-full px-8 text-[14px]">
          <span className="opacity-80">© 2021 Jurdan Wahyu. All rights reserved</span>
          <a href="#top" className="opacity-80 text-right relative after:content-[''] after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">(Back to Top ↑)</a>
        </div>
      </div>
    </footer>
  );
} 