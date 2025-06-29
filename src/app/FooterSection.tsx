export default function FooterSection() {
  return (
    <footer className="w-full bg-black-base text-white pt-[160px] pb-5" style={{ fontFamily: 'Power Grotesk, sans-serif', backgroundColor: '#181818' }}>
      <div className="flex flex-col gap-[160px]">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full px-8">
          <h2 className="text-[92px] md:text-[92px] leading-[1] font-bold mb-6 md:mb-0">LET&apos;S START<br className="hidden md:block" /> SOMETHING</h2>
          <a href="mailto:hello@jurdanwahyu.com" className="text-[32px] md:text-[40px] leading-[1.1] font-normal underline md:self-end">hello@jurdanwahyu.com</a>
        </div>
        {/* Row 2 */}
        <div className="flex flex-col md:flex-row items-start justify-between w-1/2 px-8 mx-auto">
          <div className="flex flex-col gap-2 text-[20px] md:text-[24px]">
            <a href="#" className="hover:underline">LingkedIn</a>
            <a href="#" className="hover:underline">Dribbble</a>
            <a href="#" className="hover:underline">Layers</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Medium</a>
          </div>
          <a href="#" className="text-[20px] md:text-[24px] mt-8 md:mt-0 hover:underline">Resume ↓</a>
        </div>
        {/* Row 3 */}
        <div className="flex flex-row items-center justify-between w-full px-8 text-[14px]">
          <span className="opacity-80">© 2021 Jurdan Wahyu. All rights reserved</span>
          <a href="#top" className="opacity-80 hover:underline text-right">(Back to Top ↑)</a>
        </div>
      </div>
    </footer>
  );
} 