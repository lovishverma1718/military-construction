import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Check } from 'lucide-react';
import { COMPANY } from '../constants/company';
import { Button } from '../components/ui/Button';

const InstagramIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'custom-home',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | Military Homes Construction Ltd. (MHCL)";
    
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      const validOptions = ['custom-home', 'house-framing', 'icf-foundations', 'renovation', 'commercial'];
      if (validOptions.includes(serviceParam)) {
        setFormData((prev) => ({ ...prev, projectType: serviceParam }));
      }
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const projectLabels: Record<string, string> = {
      'custom-home': 'Custom Residential Home',
      'house-framing': 'House Framing & Timberwork',
      'icf-foundations': 'ICF Foundations & Concrete',
      'renovation': 'Foundation & Renovation',
      'commercial': 'Commercial Construction',
    };
    const friendlyProjectType = projectLabels[formData.projectType] || formData.projectType;

    const messageText = `*MHCL Inquiry Spec Sheet*
----------------------------------------
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'N/A'}
*Classification:* ${friendlyProjectType}
----------------------------------------
*Specifications:*
${formData.message}`;

    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/17787101033?text=${encodedText}`;

    // Open WhatsApp URL in a new tab
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'custom-home',
        message: '',
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="w-full pt-[90px] bg-background text-primary">
      
      {/* 1. EDITORIAL PAGE HERO */}
      <section className="py-24 bg-secondary-bg border-b border-accent/15 relative overflow-hidden bg-blueprint-grid">
        <div className="absolute left-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none hidden xl:block" />
        <div className="absolute right-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none hidden xl:block" />

        <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative z-10">
          <div className="max-w-3xl flex flex-col gap-6">
            <span className="font-body text-[9px] font-bold tracking-[0.3em] text-accent uppercase">
              01 // contact registry
            </span>
            <h1 className="font-heading text-clamp-hero font-normal leading-tight text-primary">
              Discuss your structural build, <br />
              <span className="italic font-light text-accent">schedule consultation.</span>
            </h1>
            <p className="font-body text-xs md:text-sm leading-relaxed text-muted font-light max-w-xl">
              Partner with us on your custom home framing project, ICF concrete foundation, or structural renovation. Fill out the contact inquiry form, and our director will contact you.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN LAYOUT */}
      <section className="py-24 bg-background relative">
        <div className="absolute left-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none hidden xl:block" />
        <div className="absolute right-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none hidden xl:block" />

        <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left: Contact Details */}
            <div className="lg:col-span-5 flex flex-col gap-10 lg:sticky lg:top-32">
              <div className="flex flex-col gap-3">
                <span className="font-body text-[9px] font-bold tracking-[0.3em] text-accent uppercase">
                  02 // coordinates
                </span>
                <h2 className="font-heading text-4xl font-normal text-primary">
                  Establish Contact
                </h2>
              </div>

              {/* Coordinates List */}
              <div className="flex flex-col gap-8 font-body text-xs text-muted font-light">
                
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary-bg border border-accent/20 text-accent shrink-0">
                    <Phone size={16} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-bold text-[9px] tracking-wider uppercase text-primary">
                      Direct Line
                    </span>
                    <a href={`tel:${COMPANY.phoneRaw}`} className="text-sm hover:text-accent font-bold text-primary transition-colors">
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>

                {/* Emails */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary-bg border border-accent/20 text-accent shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-bold text-[9px] tracking-wider uppercase text-primary">
                      Inquiries Emails
                    </span>
                    <a href={`mailto:${COMPANY.emailPrimary}`} className="text-sm hover:text-accent font-bold text-primary transition-colors break-all">
                      {COMPANY.emailPrimary}
                    </a>
                    <a href={`mailto:${COMPANY.emailSecondary}`} className="text-sm hover:text-accent font-bold text-primary transition-colors break-all">
                      {COMPANY.emailSecondary}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary-bg border border-accent/20 text-accent shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-bold text-[9px] tracking-wider uppercase text-primary">
                      Service Region
                    </span>
                    <span className="text-sm text-primary">
                      {COMPANY.location} &mdash; Lower Mainland
                    </span>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary-bg border border-accent/20 text-accent shrink-0">
                    <InstagramIcon size={16} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-bold text-[9px] tracking-wider uppercase text-primary">
                      Instagram Profile
                    </span>
                    <a
                      href={COMPANY.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-accent font-bold text-primary transition-colors"
                    >
                      @mhclframing
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary-bg border border-accent/20 text-accent shrink-0">
                    <Clock size={16} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-bold text-[9px] tracking-wider uppercase text-primary">
                      Site Coordinates
                    </span>
                    <span className="text-sm text-primary">
                      Monday to Friday &mdash; 7:30 AM to 5:00 PM
                    </span>
                  </div>
                </div>

              </div>

              {/* Service Areas Info */}
              <div className="border border-accent/20 p-6 bg-secondary-bg relative">
                <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-accent/15" />
                <div className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-accent/15" />

                <span className="font-body text-[9px] font-bold tracking-[0.25em] uppercase text-accent block mb-2">
                  Regional Operations
                </span>
                <p className="font-body text-xs text-muted leading-relaxed font-light">
                  Our framing and concrete foundation crews deploy daily throughout West Vancouver, North Vancouver, Point Grey, Burnaby, Richmond, Coquitlam, and surrounding BC municipalities.
                </p>
              </div>

            </div>

            {/* Right: Contact Form styled with CAD input reference tags */}
            <div className="lg:col-span-7">
              <div className="w-full bg-secondary-bg border border-accent/20 p-8 md:p-12 relative overflow-hidden">
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t border-l border-accent/40" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b border-r border-accent/40" />

                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col gap-8"
                    >
                      {/* Name */}
                      <div className="relative w-full">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder=" "
                          className="peer w-full bg-transparent border-b border-border py-4 pl-2 font-body text-sm text-primary focus:border-accent focus:outline-none transition-colors"
                        />
                        <label
                          htmlFor="name"
                          className="absolute left-2 top-4 font-body text-xs text-muted pointer-events-none transition-all duration-300 transform origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-80 peer-focus:text-accent peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:scale-80"
                        >
                          Your Name
                        </label>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative w-full">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder=" "
                            className="peer w-full bg-transparent border-b border-border py-4 pl-2 font-body text-sm text-primary focus:border-accent focus:outline-none transition-colors"
                          />
                          <label
                            htmlFor="email"
                            className="absolute left-2 top-4 font-body text-xs text-muted pointer-events-none transition-all duration-300 transform origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-80 peer-focus:text-accent peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:scale-80"
                          >
                            Email Address
                          </label>
                        </div>

                        <div className="relative w-full">
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder=" "
                            className="peer w-full bg-transparent border-b border-border py-4 pl-2 font-body text-sm text-primary focus:border-accent focus:outline-none transition-colors"
                          />
                          <label
                            htmlFor="phone"
                            className="absolute left-2 top-4 font-body text-xs text-muted pointer-events-none transition-all duration-300 transform origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-80 peer-focus:text-accent peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:scale-80"
                          >
                            Phone Number
                          </label>
                        </div>
                      </div>

                      {/* Project Select */}
                      <div className="flex flex-col gap-2 relative">
                        <label htmlFor="projectType" className="font-body text-[9px] font-bold tracking-[0.2em] text-muted uppercase pl-2">
                          Project Classification
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-border py-4 pl-2 font-body text-sm text-primary focus:border-accent focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="custom-home">Custom Residential Home</option>
                          <option value="house-framing">House Framing & Timberwork</option>
                          <option value="icf-foundations">ICF Foundations & Concrete</option>
                          <option value="renovation">Foundation & Renovation</option>
                          <option value="commercial">Commercial Construction</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="relative w-full">
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder=" "
                          className="peer w-full bg-transparent border-b border-border py-4 pl-2 font-body text-sm text-primary focus:border-accent focus:outline-none transition-colors resize-none"
                        />
                        <label
                          htmlFor="message"
                          className="absolute left-2 top-4 font-body text-xs text-muted pointer-events-none transition-all duration-300 transform origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-80 peer-focus:text-accent peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:scale-80"
                        >
                          Project Scope & Specifications
                        </label>
                      </div>

                      {/* Submit */}
                      <div className="mt-4">
                        <Button
                          type="submit"
                          variant="primary"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto text-[9px] tracking-[0.2em]"
                        >
                          {isSubmitting ? 'Submitting Specifications...' : 'Submit Specs'}
                        </Button>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col items-center justify-center text-center py-16"
                    >
                      <div className="w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6">
                        <Check size={26} />
                      </div>
                      <h3 className="font-heading text-3xl italic text-primary mb-3">
                        Specifications Received
                      </h3>
                      <p className="font-body text-muted text-xs leading-relaxed max-w-sm">
                        Thank you for contacting MHCL. Our estimation department will coordinate plans and contact you within 24 hours.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>



    </div>
  );
};
