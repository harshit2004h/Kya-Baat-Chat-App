import React from "react";
import DesiDecoration from "@/components/ui/DesiDecoration";
import Footer from "@/components/base/Footer";
import NavbarOther from "@/components/base/NavBarOther"; // Changed from Navbar
import { getServerSession } from "next-auth";
import { authOption, CustomSession } from "../api/auth/[...nextauth]/options";
import { Mail, Phone, Clock } from "lucide-react";

const ContactUs = async () => {
  const session: CustomSession | null = await getServerSession(authOption);
  
  return (
    <div className="flex flex-col bg-[#fff0d6]">
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

      {/* Header - using NavbarOther instead of Navbar */}
      <NavbarOther user={session?.user} />

      {/* Top border decoration */}
      <DesiDecoration type="border" className="w-full" />

      {/* Main Content - Set min-height to push footer below fold */}
      <main className="flex-grow max-w-4xl mx-auto px-6 py-12 min-h-[calc(100vh-64px)]">
        <h2 className="text-3xl font-semibold text-[#c2451e] mb-4">
          We&apos;re Here to Help
        </h2>
        <p className="text-[#804000] mb-6">
          Have any questions or feedback? We&apos;d love to hear from you!
        </p>

        <DesiDecoration type="divider" />

        <div className="space-y-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#c2451e]/10 relative overflow-hidden">
            <div className="h-1 absolute top-0 left-0 right-0 bg-gradient-to-r from-[#c2451e] to-[#a73a18] opacity-80"></div>
            <div className="flex items-center">
              <div className="bg-[#c2451e]/10 p-3 rounded-full mr-4">
                <Mail className="h-6 w-6 text-[#c2451e]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#3d1f00] mb-1">Email</h3>
                <p className="text-[#804000]">
                  Reach out to us at{" "}
                  <a href="mailto:support@example.com" className="text-[#c2451e] hover:text-[#a73a18] underline">
                    support@kyabaat.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#c2451e]/10 relative overflow-hidden">
            <div className="h-1 absolute top-0 left-0 right-0 bg-gradient-to-r from-[#c2451e] to-[#a73a18] opacity-80"></div>
            <div className="flex items-center">
              <div className="bg-[#c2451e]/10 p-3 rounded-full mr-4">
                <Phone className="h-6 w-6 text-[#c2451e]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#3d1f00] mb-1">Phone</h3>
                <p className="text-[#804000]">+91 98765 43210</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#c2451e]/10 relative overflow-hidden">
            <div className="h-1 absolute top-0 left-0 right-0 bg-gradient-to-r from-[#c2451e] to-[#a73a18] opacity-80"></div>
            <div className="flex items-center">
              <div className="bg-[#c2451e]/10 p-3 rounded-full mr-4">
                <Clock className="h-6 w-6 text-[#c2451e]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#3d1f00] mb-1">Office Hours</h3>
                <p className="text-[#804000]">Monday to Friday: 9 AM - 6 PM</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom border decoration */}
      <DesiDecoration type="border" className="w-full transform rotate-180" />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;
