import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContactModal from "../components/ContactModal";
import ContactButton from "../components/ContactButton";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-primary-bg text-typography circuit-bg">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <div
          className={`text-center transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img
              src="/assets/logo-beaker-only.svg"
              alt="Javi Labs"
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto drop-shadow-2xl"
            />
          </div>

          {/* Company Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-accent-gold font-quicksand tracking-wider">
            JAVI LABS LLC
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-typography/90 mb-12 font-light italic">
            Passionately Curious
          </p>
        </div>

        {/* Scroll indicator with CTA */}
        <button
          onClick={scrollToServices}
          className="absolute bottom-8 flex flex-col items-center gap-2 animate-bounce
                     hover:scale-110 transition-transform duration-300 cursor-pointer group"
          aria-label="Scroll to services"
        >
          <svg
            className="w-6 h-6 text-accent-gold group-hover:text-accent-gold/80 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span className="text-accent-gold text-sm font-semibold tracking-wide
                         group-hover:text-accent-gold/80 transition-colors">
            What I Offer
          </span>
          <svg
            className="w-6 h-6 text-accent-gold group-hover:text-accent-gold/80 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-card-bg/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-accent-gold font-quicksand">
            What I Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Data Science Card */}
            <div
              className="bg-card-bg border border-primary-green rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-accent-gold mb-4 text-center font-quicksand">
                Data Science Consulting
              </h3>
              <p className="text-typography/90 text-base md:text-lg text-center leading-relaxed">
                I have over 10 years of experience helping businesses leverage
                advanced analytics and modeling on data sets of all sizes
                providing actionable insights and data-driven solutions that
                drive growth.
              </p>
            </div>

            {/* Data Visualization Card */}
            <div
              className="bg-card-bg border border-primary-green rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-accent-gold mb-4 text-center font-quicksand">
                Data Visualization Consulting
              </h3>
              <p className="text-typography/90 text-base md:text-lg text-center leading-relaxed">
                Go beyond static charts and dashboards, and let me craft custom
                data journeys with purposeful interactions that guide users to
                insights and empower them to explore on their own.
              </p>
            </div>

            {/* Mobile Apps Card */}
            <Link
              to="/apps"
              className="bg-card-bg border border-primary-green rounded-xl p-8 block
                         hover:border-accent-gold/60 hover:shadow-lg hover:shadow-accent-gold/10
                         transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold text-accent-gold mb-4 text-center font-quicksand">
                Mobile Apps
              </h3>
              <p className="text-typography/90 text-base md:text-lg text-center leading-relaxed">
                A newer, more exploratory venture driven purely by my own
                curiosity. I'm building mobile apps to solve real problems
                without relying on invasive data collection or ad-based
                monetization. It's a passion project to create respectful,
                user-focused technology.
              </p>
              <p className="text-accent-gold/80 text-sm font-semibold text-center mt-5 group-hover:text-accent-gold transition-colors">
                Browse apps →
              </p>
            </Link>
          </div>

          {/* CTA after Services */}
          <div className="text-center mt-16">
            <p className="text-typography/90 text-xl md:text-2xl mb-6">
              Ready to discuss your project?
            </p>
            <ContactButton
              onClick={() => setIsContactModalOpen(true)}
              variant="primary"
            >
              Get In Touch
            </ContactButton>
          </div>
        </div>
      </section>

      {/* About/Mission Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-accent-gold font-quicksand">
            About Me
          </h2>
          <div className="space-y-6 text-typography/90 text-lg md:text-xl leading-relaxed">
            <p>
              I'm a former tech data scientist who's traded the corporate grind
              for something more fulfilling: following my curiosity wherever it
              leads.
            </p>
            <p>
              Over my career, I've worked with everyone from scrappy startups to
              Fortune 500 giants, tackling data challenges that ranged from
              Excel-sized to petabyte-scale infrastructures. To me, the size of
              the data doesn't matter as much as the{" "}
              <span className="text-accent-gold font-semibold">
                questions
              </span>{" "}
              we ask.
            </p>
            <p>
              These days, I'm semi-retired and highly selective about the work I
              take on. What drives me isn't revenue or scale. It's{" "}
              <span className="text-accent-gold font-semibold">
                interesting problems that make me think differently
              </span>
              . Intractable challenges that keep me up at night (in a good way).
              Projects that let me experiment, learn, and build things I would
              want to use. Work that creates meaningful impact, whether that's
              for a startup, a Fortune 500, or a nonprofit with a mission I
              believe in.
            </p>
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <footer
        id="contact"
        className="py-16 px-6 bg-card-bg border-t border-primary-green"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent-gold font-quicksand">
            Get In Touch
          </h2>

          <div className="space-y-6 mb-12">
            <p className="text-typography/90 text-xl md:text-2xl">
              Interested in working together? I'd love to hear from you.
            </p>
            <ContactButton
              onClick={() => setIsContactModalOpen(true)}
              variant="primary"
            >
              Send a Message
            </ContactButton>
          </div>

          <div className="pt-8 border-t border-primary-green/30">
            <p className="text-typography/50 text-sm mb-4">
              &copy; {new Date().getFullYear()} Javi Labs LLC. All rights
              reserved.
            </p>
            <div className="bg-card-bg/50 border border-primary-green/30 rounded-lg p-6 mb-4">
              <p className="text-typography/60 text-sm leading-relaxed mb-3">
                <span className="text-accent-gold font-semibold">Privacy matters.</span> Having worked extensively in ad tech, I build technology with minimal data collection, complete transparency, and no selling your information to third parties.
              </p>
              <Link
                to="/privacy"
                className="inline-block text-accent-gold hover:text-accent-gold/80 transition-colors text-sm font-semibold"
              >
                Read Full Privacy Policy →
              </Link>
            </div>
            <p className="text-typography/40 text-xs mt-4">
              Passionately Curious
            </p>
          </div>
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

export default Home;
