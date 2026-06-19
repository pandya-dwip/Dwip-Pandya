import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Copy, Check, Send } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';

interface ContactInfo {
  icon: any;
  label: string;
  value: string;
  href: string;
  isCopyable?: boolean;
}

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const contactDetails: ContactInfo[] = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aydnapdwip@gmail.com',
      href: 'mailto:aydnapdwip@gmail.com',
      isCopyable: true,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-8320036370',
      href: 'tel:+918320036370',
      isCopyable: true,
    },
    {
      icon: GitHubIcon,
      label: 'GitHub',
      value: 'github.com/Pandya-Dwip',
      href: 'https://github.com/pandya-dwip',
    },
    {
      icon: LinkedInIcon,
      label: 'LinkedIn',
      value: 'linkedin.com/in/pandya-dwip',
      href: 'https://www.linkedin.com/in/pandya-dwip/',
    },
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/aydnapdwip@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject || `New message from ${formState.name} on Portfolio`,
          message: formState.message
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        throw new Error('Failed to transmit message. Please try again.');
      }
    } catch (err: any) {
      setIsSubmitting(false);
      setSubmitError(err.message || 'An unexpected error occurred. Please try again.');
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex items-center justify-center py-24 px-6 md:px-12 bg-brand-surface/25 overflow-hidden"
    >
      {/* Background ambient light */}
      <div className="absolute w-[40vw] h-[40vw] rounded-full bg-brand-secondary/5 glow-blob top-1/4 right-10 pointer-events-none" />
      <div className="absolute w-[35vw] h-[35vw] rounded-full bg-brand-accent/5 glow-blob bottom-10 left-10 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-brand-primary" />
            <span className="text-xs font-mono font-bold tracking-widest text-brand-primary uppercase">Connection</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-brand-text">
            Get In Touch.
          </h2>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-6">
              <p className="text-brand-text-muted text-base sm:text-lg leading-relaxed text-left">
                Have an automation challenge, a pipeline bottleneck, or want to discuss quality engineering methodologies? Drop me a message or connect through my coordinates below.
              </p>
            </div>

            <div className="space-y-4">
              {contactDetails.map((detail, idx) => {
                const IconComponent = detail.icon;
                const isCopied = copiedIndex === idx;

                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -2 }}
                    className="glass-panel border border-brand-border/60 rounded-2xl p-4 flex items-center justify-between group transition-colors duration-300"
                  >
                    <div className="flex items-center gap-4 text-left">
                      <div className="p-3 rounded-xl bg-brand-primary/5 text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-bg transition-colors duration-300">
                        <IconComponent size={18} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-brand-text-muted uppercase tracking-wider">{detail.label}</h4>
                        <a
                          href={detail.href}
                          target={detail.href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-brand-text hover:text-brand-primary transition-colors duration-300"
                        >
                          {detail.value}
                        </a>
                      </div>
                    </div>

                    {/* Copy Button */}
                    {detail.isCopyable && (
                      <button
                        onClick={() => handleCopy(detail.value, idx)}
                        className="magnetic p-2.5 rounded-xl border border-brand-border hover:border-brand-text/30 hover:bg-brand-bg text-brand-text-muted hover:text-brand-text transition-colors duration-300 cursor-pointer"
                        title={`Copy ${detail.label}`}
                      >
                        {isCopied ? <Check size={14} className="text-brand-success" /> : <Copy size={14} />}
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Simulated Active Status badge */}
            <div className="glass-panel border border-brand-border/60 rounded-2xl p-4 flex items-center gap-3 text-left">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brand-success"></span>
              </span>
              <div>
                <span className="text-xs font-bold text-brand-text">Availability Status</span>
                <p className="text-[11px] text-brand-text-muted">Open to senior QA Automation & SDET roles.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphism Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="glass-panel border border-brand-border/60 rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden h-full justify-between"
            >
              <h3 className="text-xl font-extrabold text-brand-text tracking-tight text-left mb-2">Send a Message</h3>

              <div className="space-y-5 flex-grow">
                {/* Name field */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder=" "
                    className="w-full px-4 py-3 bg-brand-bg/50 border border-brand-border rounded-xl text-brand-text placeholder-transparent focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-all duration-300 text-sm"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-3 text-sm text-brand-text-muted pointer-events-none transition-all duration-300 transform origin-left -translate-y-6 scale-75 bg-brand-surface px-1 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-brand-primary"
                  >
                    Your Name
                  </label>
                </div>

                {/* Email field */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder=" "
                    className="w-full px-4 py-3 bg-brand-bg/50 border border-brand-border rounded-xl text-brand-text placeholder-transparent focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-all duration-300 text-sm"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-3 text-sm text-brand-text-muted pointer-events-none transition-all duration-300 transform origin-left -translate-y-6 scale-75 bg-brand-surface px-1 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-brand-primary"
                  >
                    Your Email
                  </label>
                </div>

                {/* Subject field */}
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder=" "
                    className="w-full px-4 py-3 bg-brand-bg/50 border border-brand-border rounded-xl text-brand-text placeholder-transparent focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-all duration-300 text-sm"
                  />
                  <label
                    htmlFor="subject"
                    className="absolute left-4 top-3 text-sm text-brand-text-muted pointer-events-none transition-all duration-300 transform origin-left -translate-y-6 scale-75 bg-brand-surface px-1 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-brand-primary"
                  >
                    Subject (Optional)
                  </label>
                </div>

                {/* Message field */}
                <div className="relative">
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder=" "
                    className="w-full px-4 py-3 bg-brand-bg/50 border border-brand-border rounded-xl text-brand-text placeholder-transparent focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-all duration-300 text-sm resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-3 text-sm text-brand-text-muted pointer-events-none transition-all duration-300 transform origin-left -translate-y-6 scale-75 bg-brand-surface px-1 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-brand-primary"
                  >
                    Your Message
                  </label>
                </div>

                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-brand-danger text-xs font-mono text-left bg-brand-danger/10 border border-brand-danger/25 p-3 rounded-lg"
                  >
                    ✕ {submitError}
                  </motion.div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`magnetic w-full py-4 rounded-xl font-bold text-sm tracking-wide border transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${isSubmitted
                  ? 'bg-brand-success text-brand-bg border-brand-success'
                  : 'bg-brand-text text-brand-bg hover:bg-brand-surface hover:text-brand-text border-brand-text'
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-brand-bg border-t-transparent rounded-full animate-spin" />
                    <span>Transmitting Data...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <Check size={16} />
                    <span>Message Dispatched!</span>
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
