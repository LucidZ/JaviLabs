import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContactModal from "../components/ContactModal";
import ContactButton from "../components/ContactButton";

function HabitDeveloperPrivacy() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-primary-bg text-typography circuit-bg">
      {/* Header */}
      <header className="bg-card-bg border-b border-primary-green py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/apps/habit-developer"
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
            Back to Habit Developer
          </Link>
          <div className="flex items-center gap-4">
            <img
              src="/assets/habit-developer-icon.png"
              alt="Habit Developer"
              className="w-12 h-12 rounded-xl shadow-md"
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-accent-gold font-quicksand">
                Privacy Policy
              </h1>
              <p className="text-typography/60 mt-1">
                Habit Developer · Last updated: February 2026
              </p>
            </div>
          </div>
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

          {/* Overview */}
          <section className="bg-card-bg border border-primary-green rounded-xl p-8">
            <h2 className="text-2xl font-bold text-accent-gold mb-4 font-quicksand">
              Overview
            </h2>
            <p className="text-typography/80 leading-relaxed">
              HabitDeveloper is designed with your privacy as a first principle.
              Your personal data — including your photos — stays on your device.
              We do not collect, transmit, or store your photos on any server.
            </p>
          </section>

          {/* Photos */}
          <section className="bg-card-bg border border-primary-green rounded-xl p-8">
            <h2 className="text-2xl font-bold text-accent-gold mb-4 font-quicksand">
              Photos
            </h2>
            <p className="text-typography/80 leading-relaxed">
              HabitDeveloper accesses your photo library solely to select a
              random photo each day for the habit-reveal mechanic. Photos are
              read locally and never uploaded, shared, or transmitted off your
              device in any form.
            </p>
          </section>

          {/* Analytics */}
          <section className="bg-card-bg border border-primary-green rounded-xl p-8">
            <h2 className="text-2xl font-bold text-accent-gold mb-4 font-quicksand">
              Analytics (Optional)
            </h2>
            <div className="space-y-4 text-typography/80 leading-relaxed">
              <p>
                If you choose to opt in, we collect anonymous usage data using
                PostHog to help us understand how the app is used and improve
                it. This data includes: which features are used, how often
                habits are completed, and general app interactions. It does not
                include your name, email, photos, habit content, or any
                personally identifiable information.
              </p>
              <p>
                Analytics are strictly opt-in. You can change your preference
                at any time in the app settings.
              </p>
            </div>
          </section>

          {/* Data Storage */}
          <section className="bg-card-bg border border-primary-green rounded-xl p-8">
            <h2 className="text-2xl font-bold text-accent-gold mb-4 font-quicksand">
              Data Storage
            </h2>
            <p className="text-typography/80 leading-relaxed">
              All app data — your habits, tasks, streaks, and completion history
              — is stored locally on your device using the device's secure
              storage. It is never sent to our servers.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="bg-card-bg border border-primary-green rounded-xl p-8">
            <h2 className="text-2xl font-bold text-accent-gold mb-4 font-quicksand">
              Third-Party Services
            </h2>
            <p className="text-typography/80 leading-relaxed">
              If you opt in to analytics, data is processed by{" "}
              <a
                href="https://posthog.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-gold hover:text-accent-gold/80 transition-colors"
              >
                PostHog
              </a>{" "}
              (posthog.com). No other third-party services are used.
            </p>
          </section>

          {/* Children */}
          <section className="bg-card-bg border border-primary-green rounded-xl p-8">
            <h2 className="text-2xl font-bold text-accent-gold mb-4 font-quicksand">
              Children
            </h2>
            <p className="text-typography/80 leading-relaxed">
              HabitDeveloper is not directed at children under 13. We do not
              knowingly collect information from children under 13.
            </p>
          </section>

          {/* Changes */}
          <section className="bg-card-bg border border-primary-green rounded-xl p-8">
            <h2 className="text-2xl font-bold text-accent-gold mb-4 font-quicksand">
              Changes
            </h2>
            <p className="text-typography/80 leading-relaxed">
              We may update this policy as the app evolves. Any significant
              changes will be communicated through the app.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-card-bg border border-primary-green rounded-xl p-8">
            <h2 className="text-2xl font-bold text-accent-gold mb-4 font-quicksand">
              Contact
            </h2>
            <p className="text-typography/80 leading-relaxed mb-6">
              Questions about this policy? Reach out through the app's App
              Store listing or directly:
            </p>
            <ContactButton
              onClick={() => setIsContactModalOpen(true)}
              variant="primary"
            >
              Contact Us
            </ContactButton>
          </section>

          {/* General Policy Link */}
          <section className="bg-primary-bg border-l-4 border-accent-gold rounded-lg p-6">
            <p className="text-typography/70 text-sm leading-relaxed">
              This is the privacy policy specific to Habit Developer. For our
              general privacy practices covering the website and consulting
              services, see the{" "}
              <Link
                to="/privacy"
                className="text-accent-gold hover:text-accent-gold/80 transition-colors font-semibold"
              >
                Javi Labs Privacy Policy
              </Link>
              .
            </p>
          </section>
        </div>
      </main>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* Footer */}
      <footer className="py-8 px-6 bg-card-bg border-t border-primary-green mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-typography/50 text-sm">
            &copy; {new Date().getFullYear()} Javi Labs LLC. All rights
            reserved.
          </p>
          <p className="text-typography/40 text-xs mt-2">Passionately Curious</p>
        </div>
      </footer>
    </div>
  );
}

export default HabitDeveloperPrivacy;
