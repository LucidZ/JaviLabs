import { useEffect, useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-primary-bg text-typography circuit-bg">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <div
          className={`text-center transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
          <p className="text-lg md:text-xl text-typography/80 mb-12 font-light italic">
            Passionately Curious
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToServices}
            className="bg-accent-gold text-primary-bg px-8 py-4 rounded-lg text-lg font-semibold
                     hover:scale-105 hover:shadow-2xl transition-all duration-300
                     hover:shadow-accent-gold/50 active:scale-95"
          >
            Explore Projects
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-accent-gold font-quicksand">
            What We Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Data Science Card */}
            <div className="bg-card-bg border border-primary-green rounded-xl p-8
                          hover:scale-105 hover:card-glow transition-all duration-300
                          group cursor-pointer">
              <h3 className="text-2xl font-bold text-accent-gold mb-4 text-center font-quicksand">
                Data Science Consulting
              </h3>
              <p className="text-typography/70 text-center leading-relaxed">
                Transform your data into actionable insights. We help businesses leverage advanced analytics
                and machine learning to make informed decisions.
              </p>
            </div>

            {/* Data Visualization Card */}
            <div className="bg-card-bg border border-primary-green rounded-xl p-8
                          hover:scale-105 hover:card-glow transition-all duration-300
                          group cursor-pointer">
              <h3 className="text-2xl font-bold text-accent-gold mb-4 text-center font-quicksand">
                Data Visualization Consulting
              </h3>
              <p className="text-typography/70 text-center leading-relaxed">
                Bring your data to life with compelling visualizations. We create intuitive dashboards
                and interactive reports that tell your data's story.
              </p>
            </div>

            {/* Mobile Apps Card */}
            <div className="bg-card-bg border border-primary-green rounded-xl p-8
                          hover:scale-105 hover:card-glow transition-all duration-300
                          group cursor-pointer">
              <h3 className="text-2xl font-bold text-accent-gold mb-4 text-center font-quicksand">
                Mobile Apps
              </h3>
              <p className="text-typography/70 text-center leading-relaxed">
                Build innovative mobile experiences. We develop privacy-focused applications
                that put users in control of their data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About/Mission Section */}
      <section id="about" className="py-20 px-6 bg-card-bg/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-accent-gold font-quicksand">
            Our Mission
          </h2>
          <div className="space-y-6 text-typography/80 text-lg leading-relaxed">
            <p>
              At Javi Labs, we believe in the power of curiosity-driven innovation. We're passionately
              committed to creating technology that respects and empowers users.
            </p>
            <p>
              Having worked extensively in ad tech, we've witnessed firsthand how pervasive and invasive
              data collection can be. That's why we take a different approach—one that prioritizes
              transparency and user control.
            </p>
            <p className="text-accent-gold font-semibold">
              We believe that great products don't require sacrificing privacy. Our philosophy is simple:
              collect only what's necessary, be transparent about what we collect, and always empower
              users to control their data.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-accent-gold font-quicksand">
            Our Privacy Commitment
          </h2>

          <div className="bg-card-bg border border-primary-green rounded-xl p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-accent-gold mb-3">Minimal Data Collection</h3>
              <p className="text-typography/70 leading-relaxed">
                We collect only the data essential for our applications to function. In many cases,
                that means zero data collection. When we do need data, it's limited to usage metrics
                that help us improve your experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-accent-gold mb-3">Complete Transparency</h3>
              <p className="text-typography/70 leading-relaxed">
                No hidden tracking. No opaque transactions. We clearly communicate what data we collect,
                why we collect it, and how it's used. There are no "free" apps that secretly monetize
                your data.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-accent-gold mb-3">User Control</h3>
              <p className="text-typography/70 leading-relaxed">
                You're in charge. You can always opt out of data sharing, and you can request deletion
                of any data we've previously collected. Your data, your choice.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-accent-gold mb-3">No Third-Party Sharing</h3>
              <p className="text-typography/70 leading-relaxed">
                We never sell, rent, or share your data with third parties for marketing or advertising
                purposes. Your information stays with us and is used solely to provide you with better service.
              </p>
            </div>

            <div className="pt-6 border-t border-primary-green/30">
              <p className="text-typography/60 text-sm italic">
                This commitment isn't just a policy—it's a core value. We're building the kind of
                technology we want to use ourselves: respectful, transparent, and user-focused.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <footer id="contact" className="py-16 px-6 bg-card-bg border-t border-primary-green">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent-gold font-quicksand">
            Get In Touch
          </h2>

          <div className="space-y-4 mb-12">
            <p className="text-typography/70">
              Interested in working together? We'd love to hear from you.
            </p>
            <a
              href="mailto:contact@javilabs.com"
              className="inline-block text-accent-gold hover:text-accent-gold/80
                       transition-colors text-lg font-semibold"
            >
              contact@javilabs.com
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {/* Placeholder for social links - add as needed */}
            <a href="#" className="text-typography/50 hover:text-accent-gold transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-typography/50 hover:text-accent-gold transition-colors">
              GitHub
            </a>
          </div>

          <div className="pt-8 border-t border-primary-green/30">
            <p className="text-typography/50 text-sm">
              &copy; {new Date().getFullYear()} Javi Labs LLC. All rights reserved.
            </p>
            <p className="text-typography/40 text-xs mt-2">
              Passionately Curious
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
