import React from "react";
import DesiDecoration from "@/components/ui/DesiDecoration";
import Footer from "@/components/base/Footer";
import NavbarOther from "@/components/base/NavBarOther";
import { getServerSession } from "next-auth";
import { authOption, CustomSession } from "../api/auth/[...nextauth]/options";

const TermsOfService = async () => {
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
          User Agreement
        </h2>
        <p className="text-[#804000] mb-4">
          By using our platform, you agree to comply with and be legally bound
          by these Terms of Service.
        </p>

        <DesiDecoration type="divider" />

        <div className="mt-8 bg-white p-8 rounded-lg shadow-sm border border-[#c2451e]/10 relative overflow-hidden hover:shadow-md transition-shadow duration-200">
          <div className="h-1 absolute top-0 left-0 right-0 bg-gradient-to-r from-[#c2451e] to-[#a73a18] opacity-80"></div>
          
          <div className="space-y-6">
            <div className="pb-4 border-b border-[#c2451e]/10">
              <h3 className="text-lg font-semibold text-[#3d1f00] mb-2">Account Responsibilities</h3>
              <p className="text-[#804000]">You are responsible for safeguarding your account and ensuring that all activities that occur through your account comply with these Terms. You must notify us immediately of any unauthorized use of your account or any other breach of security. We cannot and will not be liable for any loss or damage arising from your failure to comply with these requirements.</p>
            </div>
            
            <div className="pb-4 border-b border-[#c2451e]/10">
              <h3 className="text-lg font-semibold text-[#3d1f00] mb-2">Acceptable Use Policy</h3>
              <p className="text-[#804000]">You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to use the services to engage in any harmful, offensive, or abusive activities. This includes but is not limited to: distributing malware, sending spam, harassing others, sharing illegal or inappropriate content, or attempting to gain unauthorized access to our systems.</p>
            </div>
            
            <div className="pb-4 border-b border-[#c2451e]/10">
              <h3 className="text-lg font-semibold text-[#3d1f00] mb-2">Intellectual Property Rights</h3>
              <p className="text-[#804000]">The service and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, and other intellectual property laws. You may not copy, modify, create derivative works, publicly display or perform, republish, or distribute any material from our service without our prior written consent.</p>
            </div>
            
            <div className="pb-4 border-b border-[#c2451e]/10">
              <h3 className="text-lg font-semibold text-[#3d1f00] mb-2">Dispute Resolution</h3>
              <p className="text-[#804000]">Any disputes arising out of or relating to these Terms or our services shall be resolved through binding arbitration. The arbitration will be conducted in accordance with the rules of the American Arbitration Association and take place in [Location]. The decision of the arbitrator shall be final and binding, and judgment on the award may be entered in any court of competent jurisdiction.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-[#3d1f00] mb-2">Changes to Terms</h3>
              <p className="text-[#804000]">We reserve the right to modify or replace these Terms at any time at our sole discretion. We will provide notice of any significant changes by posting the new Terms on our website or application. It is your responsibility to review these Terms periodically for changes. Your continued use of our services after any changes to the Terms constitutes your acceptance of those changes.</p>
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

export default TermsOfService;
