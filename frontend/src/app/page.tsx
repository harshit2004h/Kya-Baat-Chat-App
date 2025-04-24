import Navbar from "@/components/base/Navbar";
import HeroSection from "@/components/base/HeroSection";
import FeatureSection from "@/components/base/FeatureSection";
import UserReviews from "@/components/base/UserReviews";
import AboutSection from "@/components/base/AboutSection";
import Footer from "@/components/base/Footer";
import { getServerSession } from "next-auth";
import { authOption, CustomSession } from "./api/auth/[...nextauth]/options";
import DesiDecoration from "@/components/ui/DesiDecoration";

export default async function LandingPage() {
  const session: CustomSession | null = await getServerSession(authOption);
  return (
    <div className="min-h-screen flex flex-col bg-[#fff0d6]">
      {/* Corner decorations */}
      <div className="fixed top-0 left-0 pointer-events-none opacity-40 z-10">
        <DesiDecoration type="corner" />
      </div>
      <div className="fixed top-0 right-0 pointer-events-none rotate-90 opacity-40 z-10">
        <DesiDecoration type="corner" />
      </div>
      <div className="fixed bottom-0 left-0 pointer-events-none -rotate-90 opacity-40 z-10">
        <DesiDecoration type="corner" />
      </div>
      <div className="fixed bottom-0 right-0 pointer-events-none rotate-180 opacity-40 z-10">
        <DesiDecoration type="corner" />
      </div>
      
      {/* Header */}
      <Navbar user={session?.user} />
      
      {/* Top border decoration */}
      <DesiDecoration type="border" className="w-full" />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* User Reviews Section */}
      <UserReviews />

      {/* About Section */}
      <AboutSection />

      {/* Bottom border decoration */}
      <DesiDecoration type="border" className="w-full transform rotate-180" />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
