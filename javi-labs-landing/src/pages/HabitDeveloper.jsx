import { useEffect } from "react";
import { Link } from "react-router-dom";

function HabitDeveloper() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-primary-bg text-typography circuit-bg">
      {/* Header */}
      <header className="bg-card-bg border-b border-primary-green py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/apps"
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
            Back to Apps
          </Link>
          <div className="flex items-center gap-5">
            <img
              src="/assets/habit-developer-icon.png"
              alt="Habit Developer"
              className="w-16 h-16 rounded-2xl shadow-md"
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-accent-gold font-quicksand">
                Habit Developer
              </h1>
              <p className="text-typography/60 mt-1">iOS · Javi Labs LLC</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Description */}
          <section className="bg-card-bg border border-primary-green rounded-xl p-8">
            <h2 className="text-2xl font-bold text-accent-gold mb-4 font-quicksand">
              About
            </h2>
            <div className="space-y-4 text-typography/80 leading-relaxed">
              <p>
                Habit Developer is a habit-tracking app built around a simple
                idea: your photo library is full of moments worth revisiting.
                Each day, the app surfaces a random photo from your library as
                the reward for completing your habits — a small, personal
                moment of delight to keep you motivated.
              </p>
              <p>
                Built with privacy as a first principle. Your habits, streaks,
                and photos never leave your device.
              </p>
            </div>
          </section>

          {/* Privacy Highlight */}
          <section className="bg-primary-bg border-l-4 border-accent-gold rounded-lg p-6">
            <h3 className="text-lg font-bold text-accent-gold mb-3">
              Privacy First
            </h3>
            <ul className="space-y-2 text-typography/80 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-accent-gold mt-1">✓</span>
                All data stored locally on your device
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-gold mt-1">✓</span>
                Photos are never uploaded or shared
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-gold mt-1">✓</span>
                Analytics are strictly opt-in and anonymous
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-gold mt-1">✓</span>
                No ads, no tracking, no data sales
              </li>
            </ul>
            <Link
              to="/privacy/habit-developer"
              className="inline-block mt-5 text-accent-gold hover:text-accent-gold/80 transition-colors text-sm font-semibold"
            >
              Read the full privacy policy →
            </Link>
          </section>

          {/* App Store Link Placeholder */}
          <section className="bg-card-bg border border-primary-green rounded-xl p-8 text-center">
            <p className="text-typography/60 text-sm">Available on the App Store</p>
            <p className="text-typography/40 text-xs mt-2">Link coming soon</p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 bg-card-bg border-t border-primary-green mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-typography/50 text-sm">
            &copy; {new Date().getFullYear()} Javi Labs LLC. All rights reserved.
          </p>
          <p className="text-typography/40 text-xs mt-2">Passionately Curious</p>
        </div>
      </footer>
    </div>
  );
}

export default HabitDeveloper;
