export default function Header() {
  return (
    <header className="z-50 w-full py-6 px-8 flex items-center bg-white justify-between">
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-h7-medium text-black-base font-sans font-medium flex items-center" style={{ color: '#181818' }}>J</div>

        {/* Center: Navigation */}
        <nav className="flex justify-center gap-52">
          <a href="#" className="text-h7-regular text-black-base font-sans hover:underline transition-all" style={{ color: '#181818' }}>Home</a>
          <a href="#" className="text-h7-regular text-black-base font-sans hover:underline transition-all" style={{ color: '#181818' }}>About</a>
          <a href="#" className="text-h7-regular text-black-base font-sans hover:underline transition-all" style={{ color: '#181818' }}>Showcase</a>
        </nav>

        {/* Right: Status & CTA */}
        <div className="flex items-center gap-1 justify-end">
          <div className="flex items-center gap-2 text-[18px] leading-[28px] font-normal whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-[#25C923] inline-block"></span>
            <span 
              className="text-black-base"
              style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 400, color: '#181818' }}
            >
              Available for freelance projects
            </span>
          </div>
          <div className="w-[40px] h-[1px] bg-[#181818] mx-4" />
          <a href="#" className="text-h7-medium text-black-base font-bold font-sans hover:underline transition-all whitespace-nowrap" style={{ color: '#181818' }}>Let&apos;s talk</a>
        </div>
      </div>
    </header>
  );
} 