function ContactButton({ onClick, children, variant = "primary", className = "" }) {
  const baseStyles = "group relative inline-flex items-center gap-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 overflow-hidden cursor-pointer";

  const variants = {
    primary: `bg-gradient-to-r from-accent-gold to-amber-400 text-primary-bg
              hover:shadow-2xl hover:shadow-accent-gold/40 hover:scale-105 active:scale-95
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-amber-400 before:to-accent-gold
              before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300`,

    secondary: `bg-card-bg border-2 border-accent-gold text-accent-gold
                hover:bg-accent-gold hover:text-primary-bg hover:shadow-xl hover:shadow-accent-gold/30
                hover:scale-105 active:scale-95 transition-all duration-300`,

    outline: `bg-transparent border border-accent-gold/50 text-accent-gold
              hover:border-accent-gold hover:bg-accent-gold/10 hover:shadow-lg hover:shadow-accent-gold/20
              hover:scale-105 active:scale-95 transition-all duration-300`
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {/* Animated background pulse */}
      <span className="absolute inset-0 animate-pulse-slow opacity-20 bg-accent-gold rounded-lg blur-xl group-hover:opacity-40 transition-opacity duration-300" />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-3">
        {/* Mail Icon */}
        <svg
          className="w-5 h-5 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>

        <span className="group-hover:translate-x-0.5 transition-transform duration-300">
          {children}
        </span>

        {/* Arrow Icon */}
        <svg
          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </span>

      {/* Shine effect on hover */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
      </span>
    </button>
  );
}

export default ContactButton;
