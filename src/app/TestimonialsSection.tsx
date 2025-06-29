const testimonials = [
  {
    text: `Jurdan doesn't just deliver designs — he brings structure, clarity, and user-first thinking to the table. His ability to balance business goals with user experience helped our team ship a better product, faster.`,
    name: 'Daniel Harper',
    role: 'UX Researcher',
  },
  {
    text: `Working with Jurdan was one of the best decisions we made for our product. He quickly understood what we needed, translated it into clean and intuitive UI, and improved our user flow dramatically. We've received positive feedback from users ever since.`,
    name: 'Emily Zhao',
    role: 'Product Manager',
  },
  {
    text: `I came in with just a rough idea, and Jurdan turned it into a professional-looking product in a matter of days. He asked the right questions, challenged my assumptions, and delivered something far better than I expected.`,
    name: 'Leo Martins',
    role: 'Senior Product Designer',
  },
  {
    text: `As a developer, collaborating with Jurdan has always been smooth. His handoffs are clear, consistent, and well-documented. He anticipates edge cases and always thinks one step ahead.`,
    name: 'Sofia Andersson',
    role: 'Senior Product Designer',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#F5F5F5] flex justify-center items-center px-8 py-[160px] relative overflow-hidden">
      {/* Background Pattern */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "url('https://res.cloudinary.com/dbmcmylvr/image/upload/v1751087291/New%20Website/Pattern/Pattern-4_wexwxu.webp')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <div className="w-full max-w-[1440px] flex flex-row items-stretch gap-[240px] relative z-10">
        {/* Title */}
        <div className="flex-1 flex justify-start pt-12">
          <h2 className="text-[48px] leading-[56px] font-normal text-black-base text-left self-end" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>
            Testimonial(s)
          </h2>
        </div>
        {/* Flex 2 columns */}
        <div className="flex-[3] flex flex-row gap-12 w-full">
          <div className="flex flex-col gap-12 w-1/2">
            {testimonials.slice(0, 2).map((t, i) => (
              <div key={i} className="flex flex-col">
                <p className="text-[20px] leading-[32px] font-normal text-black-base mb-5" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>{t.text}</p>
                <div>
                  <div className="font-bold text-[18px] leading-[28px] text-black-base font-medium" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818', fontWeight: 500 }}>{t.name}</div>
                  <div className="text-[16px] leading-[24px] text-[#757575]" style={{ fontFamily: 'Power Grotesk, sans-serif' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-12 w-1/2">
            {testimonials.slice(2, 4).map((t, i) => (
              <div key={i} className="flex flex-col">
                <p className="text-[20px] leading-[32px] font-normal text-black-base mb-5" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>{t.text}</p>
                <div>
                  <div className="font-bold text-[18px] leading-[28px] text-black-base font-medium" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818', fontWeight: 500 }}>{t.name}</div>
                  <div className="text-[16px] leading-[24px] text-[#757575]" style={{ fontFamily: 'Power Grotesk, sans-serif' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 