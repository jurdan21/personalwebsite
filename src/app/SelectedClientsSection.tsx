const clientLogos = [
  "https://res.cloudinary.com/dbmcmylvr/image/upload/v1751199268/New%20Website/Client%20Logo/Group_8_jwo4xv.webp",
  "https://res.cloudinary.com/dbmcmylvr/image/upload/v1751199265/New%20Website/Client%20Logo/Group_3_fld3yu.webp",
  "https://res.cloudinary.com/dbmcmylvr/image/upload/v1751199265/New%20Website/Client%20Logo/Group_4_y84ido.webp",
  "https://res.cloudinary.com/dbmcmylvr/image/upload/v1751199265/New%20Website/Client%20Logo/Group_5_qlxmp1.webp",
  "https://res.cloudinary.com/dbmcmylvr/image/upload/v1751199266/New%20Website/Client%20Logo/Group_6_m09jrl.webp",
  "https://res.cloudinary.com/dbmcmylvr/image/upload/v1751199273/New%20Website/Client%20Logo/Mask_group_litx2q.webp",
  "https://res.cloudinary.com/dbmcmylvr/image/upload/v1751199270/New%20Website/Client%20Logo/Group_11_q8sjxb.webp",
  "https://res.cloudinary.com/dbmcmylvr/image/upload/v1751199272/New%20Website/Client%20Logo/Group_13_aapado.webp",
  "https://res.cloudinary.com/dbmcmylvr/image/upload/v1751199270/New%20Website/Client%20Logo/Group_10_vp8hpj.webp",
  "https://res.cloudinary.com/dbmcmylvr/image/upload/v1751199265/New%20Website/Client%20Logo/Group_1_rp5be9.webp",
  "https://res.cloudinary.com/dbmcmylvr/image/upload/v1751199269/New%20Website/Client%20Logo/Group_9_whypm8.webp",
  "https://res.cloudinary.com/dbmcmylvr/image/upload/v1751199268/New%20Website/Client%20Logo/Group_7_ih61zy.webp",
];

export default function SelectedClientsSection() {
  return (
    <section className="w-full bg-white flex justify-center items-top px-4 sm:px-6 md:px-8 py-12 md:py-24 lg:py-[160px]">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-top">
        {/* Title */}
        <div className="flex-1 flex items-start justify-start pt-4 md:pt-12">
          <h2 className="text-2xl md:text-4xl lg:text-[48px] leading-8 md:leading-[56px] font-normal text-black-base text-left self-start" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>
            Selected<br />Clients
          </h2>
        </div>
        {/* Grid Logo */}
        <div className="flex-[3] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-6 sm:grid-rows-4 md:grid-rows-3 gap-0 w-full border-l border-t border-[#E7E7E7]" style={{ columnGap: '-1px' }}>
          {clientLogos.map((logo, i) => (
            <div key={i} className="flex items-center justify-center border-r border-b border-[#E7E7E7] bg-white aspect-[5/3] h-full">
              <img
                src={logo}
                alt={`Client Logo ${i+1}`}
                style={{ maxWidth: '100px', maxHeight: '40px', width: 'auto', height: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 