import React from "react";
import DesiDecoration from "@/components/ui/DesiDecoration";
import Footer from "@/components/base/Footer";
import NavbarOther from "@/components/base/NavBarOther";
import { getServerSession } from "next-auth";
import { authOption, CustomSession } from "../api/auth/[...nextauth]/options";

const PrivacyPolicy = async () => {
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
          Your Privacy Matters
        </h2>
        <p className="text-[#804000] mb-4">
          We value your privacy and are committed to protecting your personal
          data. This policy describes how we handle your information.
        </p>

        <DesiDecoration type="divider" />

        <div className="mt-8 bg-white p-8 rounded-lg shadow-sm border border-[#c2451e]/10 relative overflow-hidden hover:shadow-md transition-shadow duration-200">
          <div className="h-1 absolute top-0 left-0 right-0 bg-gradient-to-r from-[#c2451e] to-[#a73a18] opacity-80"></div>
          <ul className="list-none space-y-4 text-[#804000]">
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#c2451e] to-[#a73a18] flex items-center justify-center text-white text-xs font-bold mr-3 mt-0.5">
                1
              </div>
              <div>
                <h3 className="font-semibold text-[#3d1f00]">
                  Information Collection and Use
                </h3>
                <p className="mt-1 text-[#804000]">
                  We collect and use information to provide and improve our
                  services. The personal information we collect may include your
                  name, email address, and other information you provide when
                  using our chat application. We use this information to
                  operate, maintain, and improve our platform.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#c2451e] to-[#a73a18] flex items-center justify-center text-white text-xs font-bold mr-3 mt-0.5">
                2
              </div>
              <div>
                <h3 className="font-semibold text-[#3d1f00]">
                  Cookies and Tracking Technologies
                </h3>
                <p className="mt-1 text-[#804000]">
                  We use cookies and similar tracking technologies to enhance
                  your experience on our platform. Cookies are small text files
                  stored on your device that help us provide a better user
                  experience by enabling functions like remembering your
                  preferences and login status.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#c2451e] to-[#a73a18] flex items-center justify-center text-white text-xs font-bold mr-3 mt-0.5">
                3
              </div>
              <div>
                <h3 className="font-semibold text-[#3d1f00]">
                  Data Sharing and Disclosure
                </h3>
                <p className="mt-1 text-[#804000]">
                  We don&apos;t share your personal information with third
                  parties without your consent, except when required by law, to
                  protect our rights, or to fulfill our service obligations. We
                  may share anonymized, aggregate data for analytical purposes,
                  but this will never include personally identifiable
                  information.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#c2451e] to-[#a73a18] flex items-center justify-center text-white text-xs font-bold mr-3 mt-0.5">
                4
              </div>
              <div>
                <h3 className="font-semibold text-[#3d1f00]">
                  Security Measures
                </h3>
                <p className="mt-1 text-[#804000]">
                  We implement appropriate security measures to protect your
                  personal data against unauthorized access, alteration,
                  disclosure, or destruction. These measures include encryption,
                  secure socket layer technology (SSL), and regular security
                  assessments of our systems.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#c2451e] to-[#a73a18] flex items-center justify-center text-white text-xs font-bold mr-3 mt-0.5">
                5
              </div>
              <div>
                <h3 className="font-semibold text-[#3d1f00]">
                  Your Rights and Choices
                </h3>
                <p className="mt-1 text-[#804000]">
                  You have the right to access, correct, or delete your personal
                  information. You may also have the right to restrict or object
                  to certain types of processing. To exercise these rights,
                  please contact us using the information provided at the end of
                  this policy.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </main>

      {/* Bottom border decoration */}
      <DesiDecoration type="border" className="w-full transform rotate-180" />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
