import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ThemesSection from "@/components/themes-section"
import PrizesSection from "@/components/prizes-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen cyberpunk-grid">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ThemesSection />
      <PrizesSection />
      <Footer />
    </main>
  )
}

