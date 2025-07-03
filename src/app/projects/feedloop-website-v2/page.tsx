import Image from 'next/image';

export default function FeedloopWebsiteV2Page() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center bg-white px-8 py-20">
      <h1 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>
        Feedloop Website V2
      </h1>
      <div className="relative w-full max-w-xl h-[320px] mb-8">
        <Image
          src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1683698860/image2_gex99j.png"
          alt="Feedloop Website V2"
          fill
          className="rounded-md object-cover shadow-md"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      <p className="text-lg text-gray-700 max-w-2xl text-center">
        This is the detail page for Feedloop Website V2. You can add more information, screenshots, and project details here.
      </p>
    </main>
  );
} 