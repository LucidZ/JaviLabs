import { useState, useEffect } from "react";

function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
    // Honeypot field - disguised as a real field to catch bots
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const FORMSPARK_FORM_ID = "UYtrJ0oQz";

  const BOTPOISON_PUBLIC_KEY = "pk_0b5ee14f-cc9f-41ed-badb-3a63058d8f36";

  // Obfuscated email construction (makes it harder for bots to scrape)
  const getContactEmail = () => {
    const parts = ["contact", "javilabs", "dev"];
    return `${parts[0]}@${parts[1]}.${parts[2]}`;
  };

  // Load BotPoison script when modal opens
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/@botpoison/browser";
      script.async = true;
      document.head.appendChild(script);

      return () => {
        // Only remove if it exists
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, [isOpen]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({ email: "", subject: "", message: "", phone: "" });
      setSubmitStatus(null);
      onClose();
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Check honeypot (disguised as phone field) - if filled, it's likely a bot
      if (formData.phone) {
        console.warn("Honeypot triggered - submission blocked");
        setSubmitStatus("error");
        setIsSubmitting(false);
        return;
      }

      // Get BotPoison solution
      let botpoisonSolution = null;
      if (window.Botpoison) {
        try {
          const botpoison = new window.Botpoison({
            publicKey: BOTPOISON_PUBLIC_KEY,
          });
          botpoisonSolution = await botpoison.challenge();
        } catch (botpoisonError) {
          console.warn("BotPoison challenge failed:", botpoisonError);
          // Continue without BotPoison - let Formspark handle it
        }
      }

      // Submit to Formspark - exclude honeypot field
      const { phone, ...formDataWithoutHoneypot } = formData;
      const payload = {
        ...formDataWithoutHoneypot,
        ...(botpoisonSolution && { _botpoison: botpoisonSolution.solution }),
      };

      const response = await fetch(
        `https://submit-form.com/${FORMSPARK_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (response.ok) {
        console.log("Form submitted successfully!");
        setSubmitStatus("success");
        setFormData({ email: "", subject: "", message: "", phone: "" });
        // Don't auto-close - let user dismiss manually
      } else {
        let errorDetails = "Unknown error";
        try {
          // Try to read as text first (works for both JSON and plain text)
          const errorText = await response.text();
          try {
            // Try to parse as JSON
            const errorJson = JSON.parse(errorText);
            errorDetails = JSON.stringify(errorJson, null, 2);
          } catch {
            // If not JSON, use the text as-is
            errorDetails = errorText;
          }
        } catch (e) {
          errorDetails = `Could not read error: ${e.message}`;
        }
        console.error("Formspark error response:", response.status, errorDetails);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="bg-card-bg border border-primary-green rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-primary-green/30">
          <h2 className="text-2xl font-bold text-accent-gold font-quicksand">
            Get In Touch
          </h2>
          <button
            onClick={handleClose}
            disabled={isSubmitting}
            className="text-typography/50 hover:text-accent-gold transition-colors disabled:opacity-50"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Form or Success Message */}
        <div className="p-6">
          {submitStatus === "success" ? (
            <div className="text-center py-8">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 text-accent-gold mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-accent-gold mb-2">
                Message Sent!
              </h3>
              <p className="text-typography/70">
                Thanks for reaching out. I'll get back to you as soon as
                possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-typography/70 text-sm mb-4">
                I'd love to hear about your project or question. Fill out the
                form below and I'll get back to you soon.
              </p>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-typography/80 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 bg-primary-bg border border-primary-green/30 rounded-lg
                           text-typography placeholder-typography/40
                           focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold
                           disabled:opacity-50 disabled:cursor-not-allowed
                           transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-typography/80 mb-2"
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 bg-primary-bg border border-primary-green/30 rounded-lg
                           text-typography
                           focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold
                           disabled:opacity-50 disabled:cursor-not-allowed
                           transition-colors"
                >
                  <option value="">Select a topic...</option>
                  <option value="Consulting: Data Science">
                    Consulting: Data Science
                  </option>
                  <option value="Consulting: Data Visualization">
                    Consulting: Data Visualization
                  </option>
                  <option value="Mobile App Development">
                    Mobile App Development
                  </option>
                  <option value="Data Privacy">Data Privacy</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-typography/80 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full px-4 py-2 bg-primary-bg border border-primary-green/30 rounded-lg
                           text-typography placeholder-typography/40
                           focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold
                           disabled:opacity-50 disabled:cursor-not-allowed
                           transition-colors resize-vertical"
                  placeholder="Tell me about your project or question..."
                />
              </div>

              {/* Honeypot field - disguised as phone field, hidden from humans */}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                placeholder="Phone number"
                style={{
                  position: "absolute",
                  left: "-9999px",
                  width: "1px",
                  height: "1px",
                  opacity: 0,
                }}
                aria-hidden="true"
              />

              {/* Error Message */}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try again or email me directly
                    at:{" "}
                    <span className="font-mono select-all">
                      {getContactEmail().split("").map((char, i) => (
                        <span key={i}>{char}</span>
                      ))}
                    </span>
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-gold text-primary-bg px-6 py-3 rounded-lg font-semibold
                         hover:scale-105 hover:shadow-xl transition-all duration-300
                         hover:shadow-accent-gold/50 active:scale-95
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              <p className="text-typography/40 text-xs text-center">
                This form is protected by BotPoison spam detection and respects
                your privacy. See our{" "}
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-gold hover:text-accent-gold/80"
                >
                  privacy policy
                </a>
                .
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
