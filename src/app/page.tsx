import Header from "./Header";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import PatternImageSection from "./PatternImageSection";
import SelectedClientsSection from "./SelectedClientsSection";
import TestimonialsSection from "./TestimonialsSection";
import PatternImageSection2 from "./PatternImageSection2";
import FooterSection from "./FooterSection";

export default function Home() {
  // Debug log
  console.log('Home page rendered, FooterSection should appear below.');
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <PatternImageSection />
      <SelectedClientsSection />
      <TestimonialsSection />
      <PatternImageSection2 />
      <FooterSection />
      {/* Fallback jika FooterSection tidak tampil */}
      <noscript>Footer fallback: Jika Anda melihat ini, FooterSection gagal di-render.</noscript>
    </div>
  );
}
