import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContactModal from "../components/ContactModal";
import ContactButton from "../components/ContactButton";

function Privacy() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-primary-bg text-typography circuit-bg">
      {/* Header */}
      <header className="bg-card-bg border-b border-primary-green py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center text-accent-gold hover:text-accent-gold/80 transition-colors mb-4"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </a>
          <h1 className="text-3xl md:text-4xl font-bold text-accent-gold font-quicksand">
            Privacy Policy
          </h1>
          <p className="text-typography/60 mt-2">
            Last Updated: February 9, 2026
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Entity */}
          <section className="bg-card-bg border border-primary-green rounded-xl p-6">
            <p className="text-typography/80">
              <strong className="text-accent-gold">Entity:</strong> Javi Labs
              LLC ("we," "us," or "our")
            </p>
          </section>

          {/* Scope Notice */}
          <section className="bg-primary-bg border-l-4 border-accent-gold rounded-lg p-6">
            <h3 className="text-lg font-bold text-accent-gold mb-3">
              About This Policy
            </h3>
            <div className="text-typography/80 leading-relaxed space-y-3">
              <p>
                This is the general privacy policy for Javi Labs LLC, covering
                our website, consulting services, and general data handling
                practices.
              </p>
              <p>
                <strong className="text-accent-gold">
                  Mobile Applications:
                </strong>{" "}
                Each mobile app we develop has specific data collection
                practices detailed in its own dedicated privacy policy. These
                app-specific policies provide concrete information about what
                data each app collects and how it is used.
              </p>
              <p className="text-sm text-typography/60">
                App-specific policies are accessible within each app's settings
                and linked from each app's page at{" "}
                <Link
                  to="/apps"
                  className="text-accent-gold hover:text-accent-gold/80 transition-colors"
                >
                  javilabs.dev/apps
                </Link>
                .
              </p>
              <div className="mt-4 pt-4 border-t border-primary-green/20">
                <p className="text-sm font-semibold text-accent-gold mb-2">
                  App Policies:
                </p>
                <ul className="space-y-1">
                  <li>
                    <Link
                      to="/privacy/habit-developer"
                      className="text-sm text-accent-gold hover:text-accent-gold/80 transition-colors"
                    >
                      Habit Developer Privacy Policy →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 1 */}
          <section className="bg-card-bg border border-primary-green rounded-xl p-8">
            <h2 className="text-2xl font-bold text-accent-gold mb-4 font-quicksand">
              1. Introduction
            </h2>
            <div className="space-y-4 text-typography/80 leading-relaxed">
              <p>
                We are committed to protecting your privacy. This policy
                explains how we handle data for our Website, Consulting
                Services, and our Mobile Applications. Our core philosophy is{" "}
                <strong className="text-accent-gold">Data Minimization</strong>:
                we only collect what is strictly necessary to provide our
                services.
              </p>
              <p className="text-accent-gold font-semibold">
                We will never sell your personal data to third parties.
              </p>
            </div>
          </section>

          {/* Section 2 - Age Restrictions */}
          <section className="bg-card-bg border border-primary-green rounded-xl p-8">
            <h2 className="text-2xl font-bold text-accent-gold mb-4 font-quicksand">
              2. Age Restrictions and Children's Privacy
            </h2>
            <div className="space-y-4 text-typography/80 leading-relaxed">
              <p>
                <strong className="text-accent-gold">General Policy:</strong>{" "}
                Services that collect personal information (such as email
                addresses or user-generated content) are intended for users aged{" "}
                <strong>13 years or older</strong> (or 16 years or older in the
                European Economic Area).
              </p>
              <p>
                <strong className="text-accent-gold">
                  Mobile Applications:
                </strong>{" "}
                Each app has its own age rating based on its content and data
                collection practices. Apps that do not collect any personal
                information may be suitable for all ages, including children.
                Please refer to each app's specific privacy policy and App Store
                age rating for details.
              </p>
              <p>
                We do not knowingly collect personal information from children
                under the applicable age thresholds for services that require
                such restrictions. If we discover that a child has provided
                personal information without appropriate consent, we will
                promptly delete such information from our systems.
              </p>
              <div>
                <p className="mb-4">
                  If you are a parent or guardian and have concerns about your
                  child's data, please contact us:
                </p>
                <div className="flex justify-start">
                  <ContactButton
                    onClick={() => setIsContactModalOpen(true)}
                    variant="secondary"
                    className="text-sm"
                  >
                    Contact Privacy Team
                  </ContactButton>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-card-bg border border-primary-green rounded-xl p-8">
            <h2 className="text-2xl font-bold text-accent-gold mb-4 font-quicksand">
              3. Information We Collect
            </h2>

            <div className="space-y-6 text-typography/80 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-accent-gold mb-3">
                  A. From our Mobile Apps
                </h3>
                <p className="mb-3">
                  Our mobile applications are designed with privacy-first
                  principles. Data collection varies by app and is limited to
                  what is strictly necessary for functionality. Common data
                  types may include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Account Data:</strong> If an app requires login, we
                    may store your email address and authentication credentials
                    via secure infrastructure providers.
                  </li>
                  <li>
                    <strong>User-Generated Content:</strong> Data you explicitly
                    input into the app to use its features.
                  </li>
                  <li>
                    <strong>Technical Data:</strong> Device information
                    necessary for app stability (e.g., OS version, device model,
                    app version). We do NOT collect advertising identifiers
                    (IDFA) or precise location data unless explicitly required
                    for a specific app feature.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Anonymous, aggregated analytics
                    about how features are used to improve app functionality.
                    This data is not linked to your identity.
                  </li>
                </ul>
                <p className="mt-3 text-sm italic">
                  For specific details about what data each app collects, please
                  refer to that app's dedicated privacy policy accessible from
                  within the app or via{" "}
                  <Link to="/apps" className="text-accent-gold hover:text-accent-gold/80 transition-colors">
                    our Apps page
                  </Link>
                  .
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-accent-gold mb-3">
                  B. From our Website
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Analytics:</strong> We use Umami, a privacy-focused,
                    cookieless analytics tool. It does not collect Personally
                    Identifiable Information (PII) and is fully GDPR compliant.
                  </li>
                  <li>
                    <strong>Contact Form:</strong> If you contact us through our
                    website form, we collect only your email address, subject,
                    and message content. Form submissions are processed through
                    Formspark, a privacy-focused form handling service, with
                    BotPoison spam protection that does not use tracking
                    cookies. We do not collect names to respect user anonymity.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-accent-gold mb-3">
                  C. From Consulting Clients
                </h3>
                <p>
                  Data handled during consulting engagements is governed by
                  specific Data Processing Agreements (DPAs). We treat client
                  data as strictly confidential and only process it within
                  agreed-upon environments (e.g., your secure cloud or our
                  encrypted local machines).
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-card-bg border border-primary-green rounded-xl p-8">
            <h2 className="text-2xl font-bold text-accent-gold mb-4 font-quicksand">
              4. How We Use Your Data
            </h2>
            <div className="text-typography/80 leading-relaxed">
              <p className="mb-3">
                We process data based on the following legal grounds:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Consent:</strong> When you sign up for an account.
                </li>
                <li>
                  <strong>Contract:</strong> To fulfill our consulting
                  obligations.
                </li>
                <li>
                  <strong>Legitimate Interest:</strong> To improve app
                  performance and security.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-card-bg border border-primary-green rounded-xl p-8">
            <h2 className="text-2xl font-bold text-accent-gold mb-4 font-quicksand">
              5. Third-Party Service Providers
            </h2>
            <div className="space-y-4 text-typography/80 leading-relaxed">
              <p>
                We engage a limited number of carefully selected service
                providers to help us operate our applications and services. We
                select only partners who maintain high security standards and
                comply with relevant data protection laws (e.g., GDPR, CCPA).
              </p>
              <p>
                <strong className="text-accent-gold">For Our Website:</strong>{" "}
                We use Umami Analytics (privacy-focused, cookieless analytics),
                Formspark (contact form handling), and BotPoison (spam
                protection without tracking cookies). None of these services
                process Personally Identifiable Information beyond what you
                explicitly provide in the contact form and are contractually
                prohibited from selling your data or using the information you
                submit for any purpose other than delivering your message to us.
              </p>
              <p>
                <strong className="text-accent-gold">
                  For Consulting Services:
                </strong>{" "}
                Third-party services are disclosed in project-specific Data
                Processing Agreements (DPAs).
              </p>
              <p>
                <strong className="text-accent-gold">
                  For Mobile Applications:
                </strong>{" "}
                Each app's specific third-party services (e.g., authentication
                providers, database hosting, analytics) are detailed in that
                app's dedicated privacy policy.
              </p>
              <p className="mt-4 pt-4 border-t border-primary-green/30">
                All third-party service providers are contractually prohibited
                from using your data for any purpose other than providing
                services to us. They cannot sell or share your data with others
                for marketing or advertising purposes.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="bg-card-bg border border-primary-green rounded-xl p-8">
            <h2 className="text-2xl font-bold text-accent-gold mb-4 font-quicksand">
              6. Artificial Intelligence (AI) Policy
            </h2>
            <div className="space-y-4 text-typography/80 leading-relaxed">
              <p>
                <strong className="text-accent-gold">
                  Consulting Services:
                </strong>{" "}
                We maintain a strict opt-in policy. Any use of AI-assisted
                analytics or tools in our workflow is disclosed to the client
                beforehand, and we only proceed with explicit consent.
              </p>
              <p>
                <strong className="text-accent-gold">
                  Mobile Applications:
                </strong>{" "}
                If an app uses AI or machine learning features, this will be
                clearly disclosed in that app's privacy policy. We prioritize
                on-device AI processing where possible to minimize data
                transmission. Any use of cloud-based AI services will be
                explicitly stated.
              </p>
              <p className="text-sm italic">
                We do not use your personal data to train AI models for
                commercial purposes without your explicit consent.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="bg-card-bg border border-primary-green rounded-xl p-8">
            <h2 className="text-2xl font-bold text-accent-gold mb-4 font-quicksand">
              7. Your Rights (GDPR & CCPA)
            </h2>
            <div className="text-typography/80 leading-relaxed">
              <p className="mb-3">
                Regardless of your location, we honor the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Access & Portability:</strong> Request a copy of the
                  data we hold about you.
                </li>
                <li>
                  <strong>Correction:</strong> Request that we update inaccurate
                  data.
                </li>
                <li>
                  <strong>Deletion:</strong> You may request that we delete your
                  account and all associated data. In our mobile apps, you can
                  initiate this directly within the settings menu.
                </li>
                <li>
                  <strong>Withdrawal of Consent:</strong> You may opt-out of
                  data collection at any time.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 8 */}
          <section className="bg-card-bg border border-primary-green rounded-xl p-8">
            <h2 className="text-2xl font-bold text-accent-gold mb-4 font-quicksand">
              8. Data Security
            </h2>
            <div className="text-typography/80 leading-relaxed">
              <p className="mb-3">
                We implement industry-standard security measures, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of data at rest and in transit (SSL/TLS).</li>
                <li>
                  Row-level security via Supabase to ensure users only access
                  their own data.
                </li>
                <li>Strict access controls for consulting environments.</li>
              </ul>
            </div>
          </section>

          {/* Section 9 */}
          <section className="bg-card-bg border border-primary-green rounded-xl p-8">
            <h2 className="text-2xl font-bold text-accent-gold mb-4 font-quicksand">
              9. Data Retention
            </h2>
            <div className="text-typography/80 leading-relaxed">
              <p className="mb-3">
                We retain personal data only as long as necessary to provide our
                services and comply with legal obligations:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Website Analytics:</strong> Anonymous data retained
                  for up to 12 months.
                </li>
                <li>
                  <strong>Consulting Client Data:</strong> Retained per
                  contractual agreements and Data Processing Agreements (DPAs).
                </li>
                <li>
                  <strong>Mobile App Data:</strong> Retention periods vary by
                  app and are detailed in each app's privacy policy. Generally,
                  account data is retained while your account is active.
                </li>
                <li>
                  <strong>Deleted Accounts:</strong> When you delete your
                  account (or request deletion), all associated personal data is
                  removed from our active systems within 30 days, except where
                  we are required by law to retain certain information.
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-primary-green/30">
                <p className="mb-4">
                  You may request earlier deletion of your data at any time:
                </p>
                <div className="flex justify-start">
                  <ContactButton
                    onClick={() => setIsContactModalOpen(true)}
                    variant="secondary"
                    className="text-sm"
                  >
                    Request Data Deletion
                  </ContactButton>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10 */}
          <section className="bg-card-bg border border-primary-green rounded-xl p-8">
            <h2 className="text-2xl font-bold text-accent-gold mb-4 font-quicksand">
              10. Contact Us
            </h2>
            <div className="text-typography/80 leading-relaxed">
              <p className="mb-6">
                If you have questions about this policy or wish to exercise your
                data rights, please contact us:
              </p>
              <div className="bg-primary-bg border border-primary-green/30 rounded-lg p-6 space-y-4">
                <p>
                  <strong className="text-accent-gold text-lg">
                    Javi Labs LLC
                  </strong>
                </p>
                <p className="text-typography/60 text-sm">
                  1500 N Grant St Ste R<br />
                  Denver CO 80203
                  <br />
                  United States
                </p>
                <div className="pt-2">
                  <ContactButton
                    onClick={() => setIsContactModalOpen(true)}
                    variant="primary"
                  >
                    Contact Us
                  </ContactButton>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 bg-card-bg border-t border-primary-green mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-typography/50 text-sm">
            &copy; {new Date().getFullYear()} Javi Labs LLC. All rights
            reserved.
          </p>
          <p className="text-typography/40 text-xs mt-2">
            Passionately Curious
          </p>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}

export default Privacy;
