"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function TermsAndConditions() {
  return (
    <main className="relative bg-[#050508] min-h-screen">
      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-[#050508]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-[#6b6b80] hover:text-[#A020F0] transition-colors text-xs font-heading tracking-wider">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="h-4 w-px bg-white/10" />
          <span className="text-[9px] font-heading tracking-[0.2em] uppercase text-[#A020F0]">Legal</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {/* Header */}
          <div className="mb-16">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-sm text-[9px] font-heading font-bold tracking-[0.2em] uppercase glow-border bg-[#A020F0]/[0.03] mb-7">
              Legal Agreement
            </span>
            <h1 className="font-heading font-black text-3xl md:text-5xl mb-4">
              Terms & <span className="text-gradient">Conditions</span>
            </h1>
            <p className="text-[#6b6b80] text-sm">Last updated: February 15, 2026</p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-12 text-[#9a9aad] text-sm leading-relaxed">

            {/* 1 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing, browsing, or using the website located at <strong>zefglobal.com</strong> (hereinafter referred to as the &quot;Website&quot;), operated by ZARX Esports Forum (&quot;ZEF&quot;), a competitive gaming division operating under <strong>ZARX Technologies Private Limited</strong> (hereinafter collectively referred to as &quot;ZEF,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions (&quot;Terms&quot;) in their entirety. If you do not agree to these Terms, you must immediately discontinue use of this Website and all associated services.</p>
              <p>These Terms constitute a legally binding agreement between you (the &quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and ZARX Technologies Private Limited (operating as ZARX Esports Forum). Your continued use of the Website after any modifications to these Terms shall constitute your acceptance of such modifications. We reserve the right to update, amend, or modify these Terms at any time without prior notice, and it is your responsibility to review these Terms periodically for changes.</p>
              <p>By using this Website, you represent and warrant that you are at least 13 years of age. If you are under 18 years of age, you represent that you have obtained verifiable consent from a parent or legal guardian to access and use this Website. If you are accessing or using this Website on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.</p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">2. Description of Services</h2>
              <p>ZARX Esports Forum is a competitive gaming intellectual property (IP) curator that designs, builds, and operates structured esports ecosystems across multiple gaming titles, audiences, and territories. The Website serves as the primary digital platform for:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Providing information about ZEF&apos;s competitive gaming intellectual properties, including but not limited to the ZEF Champions League, NXT in Gaming, National Showdown League (NSL), and Winter Wars tournament series;</li>
                <li>Facilitating tournament registrations, team sign-ups, player enrollments, and event participation;</li>
                <li>Publishing schedules, brackets, standings, match results, and statistical data for ongoing and past competitive events;</li>
                <li>Hosting media content including live streams, video-on-demand (VOD) content, highlight reels, photographs, and editorial content;</li>
                <li>Accepting and processing applications for employment, internships, partnerships, sponsorships, and investment inquiries;</li>
                <li>Distributing press releases, announcements, newsletters, and other forms of corporate communications;</li>
                <li>Collecting user feedback, survey responses, and community engagement metrics;</li>
                <li>Any other features, tools, services, or functionalities offered through the Website from time to time.</li>
              </ul>
              <p className="mt-3">We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with or without notice, and without liability to you or any third party.</p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">3. User Accounts and Registration</h2>
              <p>Certain features of the Website may require you to create an account or register for participation in events. When creating an account, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Provide accurate, current, and complete information during the registration process and keep such information updated;</li>
                <li>Maintain the confidentiality and security of your account credentials, including your username and password;</li>
                <li>Accept full responsibility for all activities that occur under your account, whether or not authorized by you;</li>
                <li>Notify us immediately of any unauthorized access to or use of your account or any other breach of security;</li>
                <li>Not create more than one account per person or share your account credentials with any third party;</li>
                <li>Not impersonate any other person or entity, or falsely state or otherwise misrepresent your affiliation with any person or entity.</li>
              </ul>
              <p className="mt-3">We reserve the right to suspend, disable, or terminate any account at our sole discretion, without prior notice, for any reason including but not limited to violations of these Terms, suspected fraudulent activity, or inactivity for an extended period.</p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">4. Tournament and Event Participation</h2>
              <p>Participation in any ZEF-organized tournament, league, exhibition, or competitive event (&quot;Events&quot;) is subject to the following conditions:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Eligibility:</strong> Participants must meet all eligibility requirements specified for each Event, which may include age restrictions, geographic limitations, game account requirements, and team composition rules. ZEF reserves the right to verify eligibility at any point before, during, or after an Event;</li>
                <li><strong>Rules and Regulations:</strong> Each Event will be governed by its own specific ruleset published by ZEF prior to the Event. By registering for an Event, you agree to comply with all applicable rules, regulations, and codes of conduct. Ignorance of published rules shall not constitute a valid defense;</li>
                <li><strong>Fair Play:</strong> All participants must compete fairly and honestly. The use of cheats, hacks, exploits, macros, third-party software, account sharing, match-fixing, collusion, intentional disconnections, or any other form of unsportsmanlike conduct is strictly prohibited and will result in immediate disqualification and potential permanent ban from all ZEF Events;</li>
                <li><strong>Prize Distribution:</strong> Prize pools, distribution structures, and payment timelines will be communicated prior to each Event. Prizes may be subject to applicable taxes, withholding obligations, and verification procedures. ZEF reserves the right to withhold prize payments pending investigation of any suspected rule violations;</li>
                <li><strong>Broadcast and Media Rights:</strong> By participating in any Event, you grant ZEF an irrevocable, worldwide, royalty-free license to capture, record, broadcast, stream, photograph, and distribute your likeness, voice, gameplay footage, screen name, and related content across all media channels, platforms, and formats, both now known and hereafter developed;</li>
                <li><strong>Conduct:</strong> Participants shall conduct themselves in a professional and respectful manner at all times. Harassment, hate speech, threats, discrimination on the basis of race, gender, sexual orientation, religion, nationality, disability, or any other protected characteristic will result in immediate disqualification and permanent ban;</li>
                <li><strong>Equipment and Connectivity:</strong> Unless otherwise specified, participants are solely responsible for their own equipment, internet connectivity, and gaming peripherals. ZEF shall not be held liable for any technical issues, hardware failures, or connectivity problems experienced by participants during competition.</li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">5. Intellectual Property Rights</h2>
              <p>All content, materials, and assets available on or through this Website, including but not limited to text, graphics, logos, brand names, trademarks, service marks, trade dress, icons, images, audio clips, video clips, animations, software code, user interface designs, and data compilations (collectively, the &quot;Content&quot;), are the exclusive property of ZARX Technologies Private Limited (operating as ZARX Esports Forum) or its licensors and are protected by applicable intellectual property laws, including copyright, trademark, patent, and trade secret laws.</p>
              <p>The ZEF name, ZARX Esports Forum name, ZARX Technologies name, ZEF logo, and all related names, logos, product and service names, designs, and slogans are trademarks of ZARX Technologies Private Limited. You may not use such marks without the prior written permission of ZEF. All other names, logos, product and service names, designs, and slogans on this Website are the trademarks of their respective owners.</p>
              <p>You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Website and its Content solely for personal, non-commercial purposes. This license does not include the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Modify, reproduce, distribute, display, perform, publish, license, create derivative works from, or sell any Content obtained from the Website;</li>
                <li>Use any data mining, robots, scrapers, or similar data gathering or extraction methods on the Website;</li>
                <li>Download (other than page caching) any portion of the Website or any Content thereon, except as expressly permitted;</li>
                <li>Use the Website or any Content for any commercial purpose without express written consent;</li>
                <li>Frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information;</li>
                <li>Use meta tags or any other &quot;hidden text&quot; utilizing ZEF&apos;s name or trademarks.</li>
              </ul>
              <p className="mt-3">Any unauthorized use of the Content or violation of these restrictions will terminate the license granted herein and may violate applicable laws, including copyright and trademark laws, and could result in legal action.</p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">6. User-Generated Content</h2>
              <p>The Website may allow you to submit, upload, publish, or otherwise make available content, including but not limited to comments, forum posts, reviews, feedback, suggestions, team logos, player profiles, and other materials (&quot;User Content&quot;). By submitting User Content, you:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Grant ZEF a perpetual, irrevocable, worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, display, and perform such User Content in any and all media and distribution methods;</li>
                <li>Represent and warrant that you own or have the necessary rights, licenses, consents, and permissions to grant the foregoing license;</li>
                <li>Represent and warrant that your User Content does not violate any third party&apos;s intellectual property rights, privacy rights, publicity rights, or any applicable law or regulation;</li>
                <li>Agree that ZEF has no obligation to monitor, edit, or remove User Content but reserves the right to do so at its sole discretion;</li>
                <li>Acknowledge that ZEF does not endorse any User Content and that you bear all risks associated with your use of any User Content.</li>
              </ul>
              <p className="mt-3">You shall not submit User Content that is unlawful, defamatory, obscene, pornographic, harassing, threatening, invasive of privacy, harmful to minors, infringing, or otherwise objectionable. ZEF reserves the right to remove any User Content and terminate the account of any User who violates these provisions.</p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">7. Prohibited Activities</h2>
              <p>You agree not to engage in any of the following prohibited activities in connection with your use of the Website:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Violating any applicable local, state, national, or international law, regulation, or ordinance;</li>
                <li>Interfering with or disrupting the operation, security, or integrity of the Website or its associated servers, networks, or infrastructure;</li>
                <li>Attempting to gain unauthorized access to any portion of the Website, other user accounts, computer systems, or networks connected to the Website through hacking, password mining, social engineering, or any other means;</li>
                <li>Uploading or transmitting viruses, worms, trojans, malware, ransomware, spyware, or any other malicious or destructive code;</li>
                <li>Using automated scripts, bots, or other programmatic means to access or interact with the Website without our express written consent;</li>
                <li>Engaging in any activity that could disable, overburden, damage, or impair the functioning of the Website, including denial-of-service attacks;</li>
                <li>Harvesting, collecting, or mining personal data or information about other users without their explicit consent;</li>
                <li>Impersonating ZEF staff, administrators, moderators, or any other person or entity;</li>
                <li>Selling, reselling, or commercially exploiting any aspect of the Website or its Content;</li>
                <li>Circumventing, disabling, or otherwise interfering with security-related features of the Website;</li>
                <li>Engaging in spamming, phishing, or distributing unsolicited commercial communications;</li>
                <li>Reverse-engineering, decompiling, disassembling, or otherwise attempting to derive the source code of any software used on the Website.</li>
              </ul>
            </section>

            {/* 8 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">8. Third-Party Links and Services</h2>
              <p>The Website may contain links to third-party websites, services, applications, and resources that are not owned or controlled by ZEF. These links are provided solely for your convenience and informational purposes. ZEF does not endorse, guarantee, or assume responsibility for the content, accuracy, privacy policies, or practices of any third-party websites or services.</p>
              <p>Your interactions with third-party websites and services, including payment processing, delivery of goods and services, and any other terms, conditions, warranties, or representations associated with such dealings, are solely between you and the third party. ZEF shall not be responsible or liable for any loss or damage of any kind incurred as the result of any such interactions or the presence of such third-party links on the Website.</p>
              <p>Third-party services utilized in connection with ZEF Events may include but are not limited to game publishers&apos; platforms (Riot Games, Supercell, Krafton, Garena, The Pokémon Company), streaming platforms (YouTube, Twitch), social media platforms (Instagram, X, Discord), and payment processors. Your use of such third-party services is governed by their respective terms of service and privacy policies.</p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">9. Disclaimer of Warranties</h2>
              <p>THE WEBSITE AND ALL CONTENT, SERVICES, FEATURES, AND FUNCTIONALITIES PROVIDED THROUGH THE WEBSITE ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, TITLE, ACCURACY, COMPLETENESS, RELIABILITY, OR AVAILABILITY.</p>
              <p>ZEF DOES NOT WARRANT THAT: (A) THE WEBSITE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE; (B) THE RESULTS OBTAINED FROM THE USE OF THE WEBSITE WILL BE ACCURATE OR RELIABLE; (C) THE QUALITY OF ANY CONTENT, SERVICES, OR INFORMATION OBTAINED THROUGH THE WEBSITE WILL MEET YOUR EXPECTATIONS; (D) ANY DEFECTS IN THE OPERATION OR FUNCTIONALITY OF THE WEBSITE WILL BE CORRECTED; OR (E) THE WEBSITE OR THE SERVERS THAT MAKE THE WEBSITE AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.</p>
              <p>YOU ACKNOWLEDGE AND AGREE THAT YOUR USE OF THE WEBSITE IS AT YOUR SOLE RISK AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM, MOBILE DEVICE, OR LOSS OF DATA THAT RESULTS FROM YOUR USE OF THE WEBSITE.</p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">10. Limitation of Liability</h2>
              <p>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ZARX TECHNOLOGIES PRIVATE LIMITED (OPERATING AS ZARX ESPORTS FORUM), ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, PARTNERS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, REVENUE, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Your access to or use of, or inability to access or use, the Website or any Content;</li>
                <li>Any conduct or content of any third party on or in connection with the Website;</li>
                <li>Any unauthorized access, use, or alteration of your transmissions or content;</li>
                <li>Any bugs, viruses, trojan horses, or similar malicious code transmitted through the Website;</li>
                <li>Event cancellations, postponements, rule changes, or technical failures during competitions;</li>
                <li>Prize disputes, distribution delays, or forfeiture of prize winnings due to rule violations;</li>
                <li>Any errors, omissions, or inaccuracies in any Content or materials published on the Website.</li>
              </ul>
              <p className="mt-3">IN NO EVENT SHALL ZEF&apos;S TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE USE OF THE WEBSITE EXCEED THE GREATER OF (A) THE AMOUNT YOU HAVE PAID TO ZEF IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED INDIAN RUPEES (₹100).</p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">11. Indemnification</h2>
              <p>You agree to indemnify, defend, and hold harmless ZARX Technologies Private Limited (operating as ZARX Esports Forum), its officers, directors, employees, agents, licensors, suppliers, affiliates, and any third-party information providers from and against all losses, liabilities, expenses, damages, and costs, including reasonable attorneys&apos; fees, resulting from any violation of these Terms by you, or arising out of or relating to any User Content you submit, post, transmit, or make available through the Website, your use of the Website, your connection to the Website, or your violation of any rights of another person or entity.</p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">12. Termination</h2>
              <p>ZEF reserves the right to terminate or suspend your access to the Website, without prior notice or liability, for any reason whatsoever, including without limitation if you breach any provision of these Terms. Upon termination:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Your right to use the Website will immediately cease;</li>
                <li>Any licenses granted to you under these Terms will automatically terminate;</li>
                <li>ZEF may delete or disable your account and all related information and files;</li>
                <li>ZEF shall not be liable to you or any third party for any termination of your access;</li>
                <li>Sections of these Terms that by their nature should survive termination shall survive, including but not limited to intellectual property provisions, warranty disclaimers, indemnification, and limitations of liability.</li>
              </ul>
            </section>

            {/* 13 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">13. Governing Law and Dispute Resolution</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any dispute, controversy, or claim arising out of or relating to these Terms or the breach, termination, or invalidity thereof shall be subject to the exclusive jurisdiction of the courts located in New Delhi, India.</p>
              <p>Before filing any claim or initiating formal legal proceedings, you agree to first attempt to resolve the dispute informally by contacting us at <a href="mailto:info@zefglobal.com" className="text-[#A020F0] hover:underline">info@zefglobal.com</a>. If the dispute is not resolved within thirty (30) days of such contact, either party may proceed with formal legal action as permitted under applicable law.</p>
              <p>You agree that any claim or cause of action arising out of or related to your use of the Website or these Terms must be filed within one (1) year after such claim or cause of action arose, or be forever barred.</p>
            </section>

            {/* 14 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">14. Severability</h2>
              <p>If any provision of these Terms is held to be unenforceable, invalid, or illegal by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it enforceable, valid, and legal while preserving its original intent. If such modification is not possible, the provision shall be severed from these Terms, and the remaining provisions shall continue in full force and effect.</p>
            </section>

            {/* 15 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">15. Entire Agreement</h2>
              <p>These Terms, together with our Privacy Policy and any additional terms, conditions, or agreements published on the Website or otherwise agreed to by you, constitute the entire agreement between you and ZARX Technologies Private Limited (operating as ZARX Esports Forum) with respect to the subject matter hereof and supersede all prior or contemporaneous communications and proposals, whether electronic, oral, or written, between you and ZEF.</p>
            </section>

            {/* 16 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">16. Waiver</h2>
              <p>No waiver by ZEF of any term or condition set forth in these Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition. Any failure of ZEF to assert a right or provision under these Terms shall not constitute a waiver of such right or provision.</p>
            </section>

            {/* 17 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">17. Force Majeure</h2>
              <p>ZEF shall not be liable for any failure to perform its obligations under these Terms where such failure results from any event beyond ZEF&apos;s reasonable control, including but not limited to acts of God, natural disasters, pandemics, epidemics, war, terrorism, riots, civil disturbances, government actions, sanctions, embargoes, fire, flood, earthquake, power outages, internet service disruptions, equipment failures, labor disputes, or any other event beyond ZEF&apos;s reasonable control. In the event of a force majeure, any affected Event may be postponed, rescheduled, modified, or cancelled at ZEF&apos;s sole discretion.</p>
            </section>

            {/* 18 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">18. Contact Information</h2>
              <p>If you have any questions, concerns, or feedback regarding these Terms and Conditions, please contact us at:</p>
              <div className="glass-card rounded-sm p-6 mt-4">
                <p className="font-heading text-xs font-bold text-white/90 mb-3">ZARX Esports Forum</p>
                <p className="text-[11px] text-[#6b6b80] mb-2">A division of ZARX Technologies Private Limited</p>
                <p>Email: <a href="mailto:info@zefglobal.com" className="text-[#A020F0] hover:underline">info@zefglobal.com</a></p>
                <p>Contact: <a href="tel:+917899589100" className="text-[#A020F0] hover:underline">+91 7899589100</a></p>
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </main>
  );
}
