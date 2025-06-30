export default function VerdantPage() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center bg-white px-8 py-20">
      <h1 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Power Grotesk, sans-serif', color: '#181818' }}>
        Verdant
      </h1>
      <img
        src="https://res.cloudinary.com/dbmcmylvr/image/upload/v1683698860/image2_gex99j.png"
        alt="Verdant"
        className="rounded-md object-cover w-full max-w-xl mb-8 shadow-md"
      />
      <p className="text-lg text-gray-700 max-w-2xl text-center">
        This is the detail page for Verdant. You can add more information, screenshots, and project details here.
      </p>
    </main>
  );
} 