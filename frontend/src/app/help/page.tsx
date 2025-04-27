import React from "react";
import DesiDecoration from "@/components/ui/DesiDecoration";
import Footer from "@/components/base/Footer";
import NavbarOther from "@/components/base/NavBarOther";
import { getServerSession } from "next-auth";
import { authOption, CustomSession } from "../api/auth/[...nextauth]/options";

const HelpCenter = async () => {
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

      {/* Header */}
      <NavbarOther user={session?.user} />

      {/* Top border decoration */}
      <DesiDecoration type="border" className="w-full" />

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto px-6 py-12 min-h-[calc(100vh-64px)]">
        <h2 className="text-3xl font-semibold text-[#c2451e] mb-4">
          Need Assistance?
        </h2>
        <p className="text-[#804000] mb-6">
          Welcome to our Help Center! We&apos;re here to assist you with any
          questions, issues, or feedback you may have.
        </p>

        <DesiDecoration type="divider" />

        {/* Make two equal-width columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* FAQs Card */}
          <div className="p-6 bg-white rounded-lg shadow-sm border border-[#c2451e]/10 relative overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="h-1 absolute top-0 left-0 right-0 bg-gradient-to-r from-[#c2451e] to-[#a73a18] opacity-80"></div>
            <h3 className="text-xl font-semibold mb-2 text-[#3d1f00]">FAQs</h3>
            <p className="text-[#804000] mb-4">
              Find answers to the most commonly asked questions about our
              platform and services.
            </p>

            {/* FAQ Accordion */}
            <div className="mt-4 space-y-3">
              <details className="group border border-[#c2451e]/10 rounded-lg overflow-hidden">
                <summary className="w-full flex justify-between items-center p-3 font-medium cursor-pointer text-[#3d1f00] hover:bg-[#fff8eb] list-none">
                  <span>How do I create a new chat?</span>
                  <div className="min-w-[24px] flex justify-center">
                    <svg
                      className="transform transition-transform duration-200 group-open:rotate-180"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </summary>
                <p className="px-4 py-3 text-[#804000] border-t border-[#c2451e]/10">
                  To create a new chat, click on the &quot;+&quot; button in the
                  sidebar or click &quot;New Chat&quot; from the main menu. You
                  can then select contacts to start a conversation.
                </p>
              </details>

              <details className="group border border-[#c2451e]/10 rounded-lg overflow-hidden">
                <summary className="w-full flex justify-between items-center p-3 font-medium cursor-pointer text-[#3d1f00] hover:bg-[#fff8eb] list-none">
                  <span>How do I change my profile picture?</span>
                  <div className="min-w-[24px] flex justify-center">
                    <svg
                      className="transform transition-transform duration-200 group-open:rotate-180"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </summary>
                <p className="px-4 py-3 text-[#804000] border-t border-[#c2451e]/10">
                  Go to your profile settings by clicking on your avatar in the
                  top right corner. Then select &quot;Edit Profile&quot; and
                  upload a new image by clicking on your current profile
                  picture.
                </p>
              </details>

              <details className="group border border-[#c2451e]/10 rounded-lg overflow-hidden">
                <summary className="w-full flex justify-between items-center p-3 font-medium cursor-pointer text-[#3d1f00] hover:bg-[#fff8eb] list-none">
                  <span>Is my chat data secure?</span>
                  <div className="min-w-[24px] flex justify-center">
                    <svg
                      className="transform transition-transform duration-200 group-open:rotate-180"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </summary>
                <p className="px-4 py-3 text-[#804000] border-t border-[#c2451e]/10">
                  Yes! We use end-to-end encryption to protect your messages.
                  Your conversations are only visible to you and the people
                  you&apos;re chatting with. We don&apos;t sell your data to
                  third parties or use it for advertising.
                </p>
              </details>

              <details className="group border border-[#c2451e]/10 rounded-lg overflow-hidden">
                <summary className="w-full flex justify-between items-center p-3 font-medium cursor-pointer text-[#3d1f00] hover:bg-[#fff8eb] list-none">
                  <span>Can I delete messages after sending them?</span>
                  <div className="min-w-[24px] flex justify-center">
                    <svg
                      className="transform transition-transform duration-200 group-open:rotate-180"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </summary>
                <p className="px-4 py-3 text-[#804000] border-t border-[#c2451e]/10">
                  Yes, you can delete any message you&apos;ve sent. Hover over
                  the message, click the three dots (⋮), and select &quot;Delete
                  Message.&quot; You can choose to delete it just for yourself
                  or for everyone in the conversation.
                </p>
              </details>

              <details className="group border border-[#c2451e]/10 rounded-lg overflow-hidden">
                <summary className="w-full flex justify-between items-center p-3 font-medium cursor-pointer text-[#3d1f00] hover:bg-[#fff8eb] list-none">
                  <span>How do I report inappropriate content?</span>
                  <div className="min-w-[24px] flex justify-center">
                    <svg
                      className="transform transition-transform duration-200 group-open:rotate-180"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </summary>
                <p className="px-4 py-3 text-[#804000] border-t border-[#c2451e]/10">
                  If you encounter inappropriate content, you can report it by
                  clicking the three dots (⋮) next to the message and selecting
                  &quot;Report.&quot; You can also block users from their
                  profile page or from within a conversation.
                </p>
              </details>
            </div>
          </div>

          {/* Support Team Card */}
          <div className="p-6 bg-white rounded-lg shadow-sm border border-[#c2451e]/10 relative overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="h-1 absolute top-0 left-0 right-0 bg-gradient-to-r from-[#c2451e] to-[#a73a18] opacity-80"></div>
            <h3 className="text-xl font-semibold mb-2 text-[#3d1f00]">
              Support Team
            </h3>
            <p className="text-[#804000]">
              Contact our support team directly if you need personalized help or
              encounter an issue.
            </p>

            <div className="mt-4 space-y-2">
              <div className="flex items-center text-[#804000] mb-2">
                <svg
                  className="w-5 h-5 mr-2 text-[#c2451e]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <a
                  href="mailto:support@kyabaat.com"
                  className="hover:underline"
                >
                  support@kyabaat.com
                </a>
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

export default HelpCenter;
