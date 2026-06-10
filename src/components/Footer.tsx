import { ArrowUp, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';

export default function Footer() {
  const handleBackToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo('#home');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full py-12 px-6 md:px-12 bg-brand-surface/10 relative overflow-hidden">
      {/* Subtle Gradient Line Divider */}
      <div className="max-w-7xl mx-auto w-full h-[1px] bg-gradient-to-r from-transparent via-brand-border to-transparent mb-10" />

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 relative z-10">
        
        {/* Left Side: Copyright */}
        <div className="text-left text-xs sm:text-sm text-brand-text-muted">
          <p>© {new Date().getFullYear()} Dwip Pandya. All rights reserved.</p>
          <p className="text-[11px] font-mono opacity-50 mt-1 uppercase tracking-wider">Quality Engineering & SDET</p>
        </div>

        {/* Right Side: Social links & Back-to-Top */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-brand-text-muted">
            <a 
              href="https://github.com/pandya-dwip" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="magnetic hover:text-brand-primary transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <GitHubIcon size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/pandya-dwip" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="magnetic hover:text-brand-primary transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon size={18} />
            </a>
            <a 
              href="mailto:aydnapdwip@gmail.com" 
              className="magnetic hover:text-brand-primary transition-colors duration-300"
              aria-label="Send Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <button
            onClick={handleBackToTop}
            className="magnetic p-2.5 rounded-full border border-brand-border hover:border-brand-text/30 hover:bg-brand-surface text-brand-text-muted hover:text-brand-text transition-all duration-300 cursor-pointer flex items-center justify-center shadow-sm"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
