import { useEffect } from "react";
import { Link } from "react-router-dom";

function Apps() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-primary-bg text-typography circuit-bg">
      {/* Header */}
      <header className="bg-card-bg border-b border-primary-green py-6 px-6">
        <div className="max-w-5xl mx-auto">
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
            Apps
          </h1>
          <p className="text-typography/60 mt-2">
            Privacy-first mobile apps built with curiosity.
          </p>
        </div>
      </header>

      {/* App Grid */}
      <main className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Habit Developer */}
            <Link
              to="/apps/habit-developer"
              className="bg-card-bg border border-primary-green rounded-xl p-8 flex flex-col items-center text-center
                         hover:border-accent-gold/60 hover:shadow-lg hover:shadow-accent-gold/10
                         transition-all duration-300 group"
            >
              <img
                src="/assets/habit-developer-icon.png"
                alt="Habit Developer"
                className="w-24 h-24 rounded-2xl mb-5 shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <h2 className="text-xl font-bold text-accent-gold font-quicksand mb-2">
                Habit Developer
              </h2>
              <p className="text-typography/70 text-sm leading-relaxed">
                Build better habits with a photo-reveal mechanic that keeps you
                motivated. All data stays on your device.
              </p>
              <span className="mt-5 text-accent-gold/80 text-sm font-semibold group-hover:text-accent-gold transition-colors">
                Learn more →
              </span>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 bg-card-bg border-t border-primary-green mt-12">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-typography/50 text-sm">
            &copy; {new Date().getFullYear()} Javi Labs LLC. All rights reserved.
          </p>
          <p className="text-typography/40 text-xs mt-2">Passionately Curious</p>
        </div>
      </footer>
    </div>
  );
}

export default Apps;
