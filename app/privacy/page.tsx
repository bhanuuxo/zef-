"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-[#6b6b80] text-sm">Last updated: February 15, 2026</p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-12 text-[#9a9aad] text-sm leading-relaxed">

            {/* 1 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">1. Introduction</h2>
              <p>ZARX Esports Forum (&quot;ZEF&quot;), a competitive gaming division of <strong>ZARX Technologies Private Limited</strong> (collectively referred to as &quot;ZEF,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), is committed to protecting and respecting your privacy. This Privacy Policy (&quot;Policy&quot;) describes how we collect, use, process, store, share, and protect the personal information and data of individuals (&quot;you,&quot; &quot;your,&quot; or &quot;User&quot;) who access or use our website located at <strong>zefglobal.com</strong> (the &quot;Website&quot;), participate in our events and tournaments, or interact with us through any other digital or offline channels.</p>
              <p>This Policy applies to all information collected through our Website, during event registrations and tournament participation, through our social media channels and communication platforms, via email and other direct correspondence, and through any other interactions you have with ZEF.</p>
              <p>By accessing or using our Website, registering for our events, or providing your personal information to us in any manner, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with any part of this Policy, please do not use our Website or provide your information to us.</p>
              <p>We may update this Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. We will notify you of any material changes by posting the updated Policy on the Website with a revised &quot;Last updated&quot; date. Your continued use of the Website after such changes constitutes your acceptance of the updated Policy.</p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">2. Information We Collect</h2>
              <p>We collect various types of information to provide and improve our services, operate our competitive events, and enhance your experience with ZEF. The information we collect falls into the following categories:</p>

              <h3 className="font-heading text-sm font-bold text-white/80 mt-6 mb-3">2.1 Personal Information You Provide Directly</h3>
              <p>When you register for an account, sign up for a tournament, apply for a position, submit a contact form, or otherwise interact with us, you may provide:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Identity Information:</strong> Full legal name, display name, username, gamer tag, date of birth, age, gender, nationality, and government-issued identification (where required for prize verification or age verification);</li>
                <li><strong>Contact Information:</strong> Email address, phone number, physical mailing address, Discord username, and other social media handles;</li>
                <li><strong>Account Credentials:</strong> Username, password (stored in encrypted form), and security questions/answers;</li>
                <li><strong>Gaming Information:</strong> In-game usernames, player IDs across various gaming platforms (Riot Games, Supercell ID, Krafton ID, Garena account, Nintendo account), competitive rank/rating, team affiliations, and match history;</li>
                <li><strong>Payment and Financial Information:</strong> Bank account details, UPI IDs, digital wallet information, PAN card number (for Indian tax compliance on prize winnings exceeding applicable thresholds), and other information necessary for prize distribution;</li>
                <li><strong>Professional Information:</strong> Resume/CV, portfolio links, work experience, educational qualifications, skills, references, and other information submitted through career applications;</li>
                <li><strong>Communication Content:</strong> Messages, feedback, suggestions, complaints, and any other content you communicate to us through contact forms, emails, support tickets, or social media interactions;</li>
                <li><strong>Event-Specific Information:</strong> Dietary preferences (for in-person events), t-shirt sizes, emergency contact details, medical conditions relevant to event participation, and travel/accommodation preferences.</li>
              </ul>

              <h3 className="font-heading text-sm font-bold text-white/80 mt-6 mb-3">2.2 Information Collected Automatically</h3>
              <p>When you access or use our Website, we automatically collect certain technical and usage information through cookies, log files, web beacons, pixel tags, and similar technologies:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Device Information:</strong> Device type, model, operating system and version, unique device identifiers, browser type and version, screen resolution, and language settings;</li>
                <li><strong>Network Information:</strong> Internet Protocol (IP) address, Internet Service Provider (ISP), mobile carrier, and network type;</li>
                <li><strong>Usage Information:</strong> Pages visited, features used, links clicked, time spent on each page, scroll depth, search queries, navigation paths, referral URLs, and exit pages;</li>
                <li><strong>Location Information:</strong> Approximate geographic location inferred from your IP address, and precise geographic location if you grant permission through your device settings;</li>
                <li><strong>Performance Information:</strong> Page load times, error logs, crash reports, and other performance metrics;</li>
                <li><strong>Cookie and Tracking Data:</strong> Cookie identifiers, session IDs, tracking pixels, and other persistent and session-based identifiers used to recognize you across visits.</li>
              </ul>

              <h3 className="font-heading text-sm font-bold text-white/80 mt-6 mb-3">2.3 Information from Third Parties</h3>
              <p>We may receive information about you from third-party sources, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Gaming Platforms:</strong> Public profile information, competitive statistics, and match data from game publishers&apos; APIs (subject to their respective terms of service);</li>
                <li><strong>Social Media Platforms:</strong> Public profile information when you connect your social media accounts or interact with our social media pages;</li>
                <li><strong>Analytics Providers:</strong> Aggregated and non-aggregated usage data from analytics services such as Google Analytics, Hotjar, and similar tools;</li>
                <li><strong>Partners and Sponsors:</strong> Information shared by our event partners, sponsors, and co-organizers in connection with joint events or promotions;</li>
                <li><strong>Public Sources:</strong> Publicly available information from competitive gaming databases, leaderboards, and esports news outlets.</li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect for the following purposes:</p>

              <h3 className="font-heading text-sm font-bold text-white/80 mt-6 mb-3">3.1 Service Delivery and Operations</h3>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Creating, maintaining, and managing your user account;</li>
                <li>Processing tournament registrations, team enrollments, and event participation;</li>
                <li>Verifying eligibility for events, leagues, and prize distribution;</li>
                <li>Managing competitive brackets, scheduling matches, recording results, and maintaining leaderboards;</li>
                <li>Processing and distributing prize winnings, including applicable tax withholding;</li>
                <li>Providing customer support and responding to your inquiries, feedback, and complaints;</li>
                <li>Facilitating communication between participants, teams, and event administrators.</li>
              </ul>

              <h3 className="font-heading text-sm font-bold text-white/80 mt-6 mb-3">3.2 Communication</h3>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Sending transactional notifications about your account, registrations, match schedules, and results;</li>
                <li>Delivering event announcements, updates, schedule changes, and organizational communications;</li>
                <li>Sending newsletters, promotional materials, and marketing communications (with your consent where required);</li>
                <li>Notifying you about changes to our Terms of Service, Privacy Policy, or other legal agreements;</li>
                <li>Responding to job applications and communicating about career opportunities.</li>
              </ul>

              <h3 className="font-heading text-sm font-bold text-white/80 mt-6 mb-3">3.3 Improvement and Analytics</h3>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Analyzing usage patterns and trends to improve the Website&apos;s design, functionality, and user experience;</li>
                <li>Conducting research and analytics to understand our audience demographics and preferences;</li>
                <li>Testing new features, products, and services;</li>
                <li>Measuring the effectiveness of our marketing campaigns and communications;</li>
                <li>Generating aggregated, anonymized, or de-identified data for statistical analysis and reporting.</li>
              </ul>

              <h3 className="font-heading text-sm font-bold text-white/80 mt-6 mb-3">3.4 Safety, Security, and Compliance</h3>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Detecting, investigating, and preventing fraudulent transactions, cheating, match-fixing, and other illegal or unauthorized activities;</li>
                <li>Enforcing our Terms and Conditions, tournament rules, and codes of conduct;</li>
                <li>Protecting the rights, property, and safety of ZEF, our users, participants, and the public;</li>
                <li>Complying with applicable laws, regulations, legal processes, and governmental requests;</li>
                <li>Maintaining the security and integrity of our systems, networks, and data.</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">4. Legal Basis for Processing</h2>
              <p>We process your personal information based on the following legal grounds:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Consent:</strong> Where you have given us explicit consent to process your personal data for specific purposes, such as receiving marketing communications or participating in surveys;</li>
                <li><strong>Contractual Necessity:</strong> Where processing is necessary for the performance of a contract with you, such as providing tournament services, managing your account, or distributing prizes;</li>
                <li><strong>Legitimate Interests:</strong> Where processing is necessary for our legitimate interests or those of a third party, provided your fundamental rights and freedoms do not override those interests. Our legitimate interests include operating and improving our services, ensuring platform security, and conducting business analytics;</li>
                <li><strong>Legal Obligations:</strong> Where processing is necessary for compliance with a legal obligation to which ZEF is subject, such as tax reporting requirements, anti-money laundering regulations, or responding to lawful government requests.</li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">5. How We Share Your Information</h2>
              <p>We do not sell your personal information to third parties. However, we may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Service Providers:</strong> We share information with trusted third-party service providers who assist us in operating the Website, conducting our business, and providing services to you, including cloud hosting providers, email service providers, analytics platforms, payment processors, and customer support tools. These service providers are contractually obligated to use your information only for the purposes of providing services to ZEF and are required to maintain appropriate security measures;</li>
                <li><strong>Event Partners and Sponsors:</strong> In connection with co-organized events, sponsored tournaments, or collaborative initiatives, we may share limited participant information (such as team names, player display names, and competitive results) with event partners and sponsors. We will not share your personal contact information with sponsors without your explicit consent;</li>
                <li><strong>Broadcasting and Media:</strong> Participant display names, team names, competitive results, gameplay footage, and related information may be shared publicly through live streams, broadcasts, social media posts, press releases, and promotional materials in connection with ZEF Events;</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law, regulation, legal process, or governmental request, or if we believe in good faith that such disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, reorganization, bankruptcy, dissolution, or sale of all or a portion of ZEF&apos;s assets, your personal information may be transferred to the acquiring entity or successor;</li>
                <li><strong>With Your Consent:</strong> We may share your information with third parties when you have given us explicit consent to do so;</li>
                <li><strong>Aggregated and Anonymized Data:</strong> We may share aggregated, anonymized, or de-identified information that cannot reasonably be used to identify you with third parties for analytics, research, marketing, and other business purposes.</li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">6. Cookies and Tracking Technologies</h2>
              <p>We use cookies and similar tracking technologies to collect and store information about your interactions with our Website. Cookies are small text files that are stored on your device when you visit a website.</p>

              <h3 className="font-heading text-sm font-bold text-white/80 mt-6 mb-3">6.1 Types of Cookies We Use</h3>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Essential Cookies:</strong> These cookies are strictly necessary for the operation of the Website. They enable core functionality such as security, user authentication, session management, and accessibility. You cannot opt out of essential cookies as the Website cannot function properly without them;</li>
                <li><strong>Performance and Analytics Cookies:</strong> These cookies collect information about how you use the Website, including which pages you visit most often, how long you spend on each page, and any error messages you encounter. This data helps us improve the performance and usability of the Website. We use services such as Google Analytics for this purpose;</li>
                <li><strong>Functionality Cookies:</strong> These cookies remember your preferences and settings (such as language, region, and display preferences) to provide a more personalized experience;</li>
                <li><strong>Targeting and Advertising Cookies:</strong> These cookies are used to deliver advertisements that are more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement and to measure the effectiveness of advertising campaigns.</li>
              </ul>

              <h3 className="font-heading text-sm font-bold text-white/80 mt-6 mb-3">6.2 Managing Cookies</h3>
              <p>Most web browsers allow you to control cookies through their settings. You can set your browser to refuse all cookies, accept only certain cookies, or alert you when a cookie is being set. However, if you disable or refuse cookies, some parts of the Website may become inaccessible or not function properly.</p>
              <p>You can also opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on, available at <a href="https://tools.google.com/dlpage/gaoptout" className="text-[#A020F0] hover:underline" target="_blank" rel="noopener noreferrer">tools.google.com/dlpage/gaoptout</a>.</p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">7. Data Retention</h2>
              <p>We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, comply with our legal obligations, resolve disputes, and enforce our agreements. Specific retention periods include:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Account Information:</strong> Retained for the duration of your account&apos;s existence and for a period of three (3) years following account deletion or deactivation, to comply with legal obligations and protect against potential claims;</li>
                <li><strong>Tournament and Event Data:</strong> Competitive results, match data, brackets, and standings are retained indefinitely as part of the historical record of ZEF Events;</li>
                <li><strong>Financial and Tax Records:</strong> Prize payment records and associated tax documentation are retained for a minimum of eight (8) years in accordance with Indian tax law requirements;</li>
                <li><strong>Communication Records:</strong> Correspondence, support tickets, and feedback are retained for three (3) years from the date of the last interaction;</li>
                <li><strong>Analytics Data:</strong> Aggregated and anonymized analytics data may be retained indefinitely;</li>
                <li><strong>Career Applications:</strong> Job applications and associated materials are retained for two (2) years from the date of submission, unless you request earlier deletion;</li>
                <li><strong>Cookie Data:</strong> Cookie data is retained in accordance with the lifetime of each specific cookie, typically ranging from session-based (deleted when you close your browser) to persistent (up to 24 months).</li>
              </ul>
              <p className="mt-3">When personal information is no longer needed for the purposes for which it was collected, we will securely delete or anonymize it in accordance with our data retention policies and applicable laws.</p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">8. Data Security</h2>
              <p>We take the security of your personal information seriously and implement appropriate technical and organizational measures to protect it against unauthorized access, alteration, disclosure, or destruction. Our security measures include:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Encryption of sensitive data in transit using TLS/SSL protocols;</li>
                <li>Encryption of sensitive data at rest using industry-standard encryption algorithms;</li>
                <li>Regular security assessments, vulnerability scanning, and penetration testing;</li>
                <li>Access controls and authentication mechanisms to limit access to personal data to authorized personnel only;</li>
                <li>Employee security awareness training and confidentiality agreements;</li>
                <li>Regular backup procedures and disaster recovery planning;</li>
                <li>Monitoring and logging of system access and security events;</li>
                <li>Physical security measures for servers and data centers.</li>
              </ul>
              <p className="mt-3">However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security. In the event of a data breach that may affect your personal information, we will notify you and the relevant supervisory authorities in accordance with applicable law.</p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">9. Your Rights and Choices</h2>
              <p>Depending on your jurisdiction and applicable data protection laws, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Right to Access:</strong> You have the right to request a copy of the personal information we hold about you, along with information about how we use it;</li>
                <li><strong>Right to Rectification:</strong> You have the right to request correction of any inaccurate or incomplete personal information we hold about you;</li>
                <li><strong>Right to Erasure (Right to be Forgotten):</strong> You have the right to request deletion of your personal information, subject to certain exceptions (such as legal compliance obligations or defense of legal claims);</li>
                <li><strong>Right to Restriction of Processing:</strong> You have the right to request that we restrict the processing of your personal information in certain circumstances;</li>
                <li><strong>Right to Data Portability:</strong> You have the right to receive your personal information in a structured, commonly used, and machine-readable format, and to transmit that data to another controller;</li>
                <li><strong>Right to Object:</strong> You have the right to object to the processing of your personal information based on legitimate interests or for direct marketing purposes;</li>
                <li><strong>Right to Withdraw Consent:</strong> Where processing is based on your consent, you have the right to withdraw that consent at any time, without affecting the lawfulness of processing based on consent before its withdrawal;</li>
                <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of your privacy rights;</li>
                <li><strong>Right to Lodge a Complaint:</strong> You have the right to lodge a complaint with a supervisory authority if you believe our processing of your personal data violates applicable law.</li>
              </ul>
              <p className="mt-3">To exercise any of these rights, please contact us at <a href="mailto:info@zefglobal.com" className="text-[#A020F0] hover:underline">info@zefglobal.com</a>. We will respond to your request within thirty (30) days of receipt. We may request additional information to verify your identity before processing your request.</p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">10. International Data Transfers</h2>
              <p>ZEF is based in India and primarily processes data within India. However, your personal information may be transferred to and processed in countries other than your country of residence, including countries that may not have the same level of data protection as your home country. Such transfers may occur when we use third-party service providers located in other jurisdictions or when we organize international events.</p>
              <p>Where we transfer personal data to countries outside your jurisdiction, we ensure that appropriate safeguards are in place to protect your personal information, including standard contractual clauses, adequacy decisions, or other approved transfer mechanisms as required by applicable data protection laws.</p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">11. Children&apos;s Privacy</h2>
              <p>Our Website is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13 years of age. If we become aware that we have inadvertently collected personal information from a child under 13, we will take steps to delete such information as soon as possible.</p>
              <p>For users between the ages of 13 and 18, we require verifiable parental or guardian consent before collecting and processing personal information. If you are a parent or guardian and believe that your child has provided us with personal information without your consent, please contact us at <a href="mailto:info@zefglobal.com" className="text-[#A020F0] hover:underline">info@zefglobal.com</a>, and we will take steps to remove such information from our systems.</p>
              <p>For tournament participation, different age requirements may apply based on specific game publisher policies, event rules, and applicable laws. All age-related requirements will be clearly stated in each event&apos;s registration materials.</p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">12. Third-Party Services and Links</h2>
              <p>Our Website may contain links to third-party websites, applications, and services that are not operated or controlled by ZEF. This Privacy Policy does not apply to such third-party services, and we are not responsible for the content, privacy policies, or practices of any third-party websites or services.</p>
              <p>We encourage you to review the privacy policies of any third-party websites or services that you visit or interact with. Third-party services commonly linked from or integrated with our Website include:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Game publisher platforms (Riot Games, Supercell, Krafton, Garena, The Pokémon Company);</li>
                <li>Streaming and content platforms (YouTube, Twitch);</li>
                <li>Social media platforms (Instagram, X, Discord, LinkedIn);</li>
                <li>Payment processors and financial services;</li>
                <li>Cloud hosting and infrastructure providers;</li>
                <li>Email and communication service providers;</li>
                <li>Analytics and advertising platforms.</li>
              </ul>
            </section>

            {/* 13 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">13. Do Not Track Signals</h2>
              <p>Some web browsers transmit &quot;Do Not Track&quot; (DNT) signals to the websites and online services that you visit. There is currently no universally accepted standard for how websites should respond to DNT signals. At this time, our Website does not respond to DNT signals. However, you can manage your tracking preferences through your browser settings and cookie management tools as described in Section 6.2 above.</p>
            </section>

            {/* 14 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">14. California Privacy Rights (CCPA/CPRA)</h2>
              <p>If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA), including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>The right to know what personal information we collect, use, disclose, and sell;</li>
                <li>The right to delete personal information we have collected from you;</li>
                <li>The right to opt out of the sale or sharing of your personal information;</li>
                <li>The right to correct inaccurate personal information;</li>
                <li>The right to limit the use and disclosure of sensitive personal information;</li>
                <li>The right to non-discrimination for exercising your privacy rights.</li>
              </ul>
              <p className="mt-3">We do not sell personal information as defined under the CCPA/CPRA. To exercise your California privacy rights, please contact us at <a href="mailto:info@zefglobal.com" className="text-[#A020F0] hover:underline">info@zefglobal.com</a>.</p>
            </section>

            {/* 15 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">15. European Economic Area (GDPR)</h2>
              <p>If you are located in the European Economic Area (EEA), the United Kingdom (UK), or Switzerland, you may have additional rights under the General Data Protection Regulation (GDPR), including all rights listed in Section 9 above. Additionally:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>We will only process your personal data when we have a valid legal basis for doing so, as described in Section 4;</li>
                <li>You have the right to lodge a complaint with your local data protection authority;</li>
                <li>For international data transfers outside the EEA, we rely on Standard Contractual Clauses approved by the European Commission or other appropriate safeguards.</li>
              </ul>
            </section>

            {/* 16 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">16. Indian Data Protection (DPDPA)</h2>
              <p>In compliance with the Digital Personal Data Protection Act, 2023 (DPDPA) and any rules framed thereunder, we ensure that:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Personal data is processed only for lawful purposes with your consent or for other legitimate uses as prescribed under the Act;</li>
                <li>We provide clear and accessible notice before collecting your personal data, specifying the purpose of processing;</li>
                <li>You have the right to access, correct, and erase your personal data, and to nominate another person to exercise these rights on your behalf;</li>
                <li>We implement reasonable security safeguards to protect personal data from breaches;</li>
                <li>In the event of a personal data breach, we will notify you and the Data Protection Board of India as required under the Act;</li>
                <li>We do not process personal data of children (below 18 years of age in India) without verifiable consent of a parent or lawful guardian;</li>
                <li>We retain personal data only for the period necessary to serve the purpose for which it was collected, unless retention is required by law.</li>
              </ul>
            </section>

            {/* 17 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">17. Changes to This Privacy Policy</h2>
              <p>We reserve the right to modify, update, or replace this Privacy Policy at any time. If we make material changes, we will notify you by posting the updated Policy on this page with a new &quot;Last updated&quot; date, and where appropriate, we will provide additional notice such as an email notification or a prominent notice on the Website.</p>
              <p>Your continued use of the Website after the posting of any revised Policy constitutes your acceptance of the changes. We encourage you to periodically review this Policy to stay informed about our data practices.</p>
            </section>

            {/* 18 */}
            <section>
              <h2 className="font-heading text-lg font-bold text-white/90 mb-4">18. Contact Us</h2>
              <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, or if you wish to exercise any of your privacy rights, please contact us at:</p>
              <div className="glass-card rounded-sm p-6 mt-4">
                <p className="font-heading text-xs font-bold text-white/90 mb-3">ZARX Esports Forum — Data Protection</p>
                <p className="text-[11px] text-[#6b6b80] mb-2">A division of ZARX Technologies Private Limited</p>
                <p>Email: <a href="mailto:info@zefglobal.com" className="text-[#A020F0] hover:underline">info@zefglobal.com</a></p>
                <p>Contact: <a href="tel:+917899589100" className="text-[#A020F0] hover:underline">+91 7899589100</a></p>
              </div>
              <p className="mt-4">We will endeavor to respond to all legitimate requests within thirty (30) days. Occasionally it may take longer if your request is particularly complex or if you have made multiple requests, in which case we will notify you and keep you updated on our progress.</p>
            </section>

          </div>
        </motion.div>
      </div>
    </main>
  );
}
