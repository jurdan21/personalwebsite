const testimonials = [
  {
    text: `Every time I catch up with Jurdan's work, there's something new, a sharper idea, a better layout, a smarter solution. You can really see the growth in every project he touches. He's intentional about his process, open to learning, and always exploring how to make things better. It's been inspiring to follow his journey, and I'm excited to see the designer he's becoming.`,
    name: 'Rizki Agus',
    role: 'Product Designer & Co-Founder UX Scan',
  },
  {
    text: `I've witnessed how fast Jurdan has grown. I've learned a lot from him, especially when it comes to creating designs with strong visuals. Jurdan works quickly and efficiently, and many of his ideas are ones I wouldn't have thought of on my own. He is a talented designer, and I highly recommend him.`,
    name: 'Satria Ridho',
    role: 'Senior UX Designer',
  },
  {
    text: `Jurdan truly exceeded our expectations. The landing page he designed for Tomcspace not only looked clean and professional, but also helped double our website traffic within just a few weeks. He listened carefully to our goals and translated them into a design that works — both visually and strategically. I'd absolutely recommend him to anyone who needs high-performing product pages.`,
    name: 'Imam Rizal',
    role: 'Owner Tomcspace',
  },
  {
    text: `I remember when Feedloop.ai needed a strong UI/UX designer and ultimately decided to hire Jurdan. At that time, Jurdan had only been learning UI/UX design for 6 months, yet he was already able to showcase a remarkably mature and impressive portfolio. What a fast learner, I thought. Since then, we've collaborated on several projects for Feedloop.ai and other clients. Jurdan is incredibly reliable in delivering high-quality work on time. His kind and helpful nature makes him a valuable team player who's always willing to support colleagues, and his positive energy as a natural mood maker creates an enjoyable work environment for everyone. Jurdan combines strong technical design skills with outstanding interpersonal qualities, making him an asset to any team. I highly recommend him for any UI/UX design role.`,
    name: 'Rukma Pratista',
    role: 'Head of Design',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#F5F5F5] flex justify-center items-center px-4 sm:px-6 md:px-8 py-12 md:py-24 lg:py-[160px] relative overflow-hidden">
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
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-stretch gap-8 md:gap-[60px] lg:gap-[100px] relative z-10">
        {/* Title */}
        <div className="flex-1 flex justify-start pt-4 md:pt-12">
          <h2 className="text-2xl md:text-4xl lg:text-[48px] leading-8 md:leading-[56px] font-normal text-black-base text-left self-end" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>
            Testimonial(s)
          </h2>
        </div>
        {/* Flex 2 columns, 1 column on mobile */}
        <div className="flex-[3] flex flex-col md:flex-row gap-6 md:gap-12 w-full">
          <div className="flex flex-col gap-6 md:gap-12 w-full md:w-1/2">
            {testimonials.slice(0, 2).map((t, i) => (
              <div key={i} className="flex flex-col">
                <p className="text-base md:text-lg lg:text-[20px] leading-6 md:leading-7 lg:leading-[32px] font-normal text-black-base mb-3 md:mb-5" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>{t.text}</p>
                <div>
                  <div className="font-bold text-sm md:text-base lg:text-[18px] leading-5 md:leading-7 lg:leading-[28px] text-black-base font-medium" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818', fontWeight: 500 }}>{t.name}</div>
                  <div className="text-xs md:text-sm lg:text-[16px] leading-4 md:leading-6 lg:leading-[24px] text-[#757575]" style={{ fontFamily: 'Power Grotesk, sans-serif' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6 md:gap-12 w-full md:w-1/2">
            {testimonials.slice(2, 4).map((t, i) => (
              <div key={i} className="flex flex-col">
                <p className="text-base md:text-lg lg:text-[20px] leading-6 md:leading-7 lg:leading-[32px] font-normal text-black-base mb-3 md:mb-5" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>{t.text}</p>
                <div>
                  <div className="font-bold text-sm md:text-base lg:text-[18px] leading-5 md:leading-7 lg:leading-[28px] text-black-base font-medium" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818', fontWeight: 500 }}>{t.name}</div>
                  <div className="text-xs md:text-sm lg:text-[16px] leading-4 md:leading-6 lg:leading-[24px] text-[#757575]" style={{ fontFamily: 'Power Grotesk, sans-serif' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 