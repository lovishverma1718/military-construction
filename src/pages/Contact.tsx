import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Check } from 'lucide-react';
import { COMPANY } from '../constants/company';
import { images } from '../constants/images';

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
    document.title = "Contact Us | Military Homes Construction Ltd.";
    
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

    const messageText = `*Military Homes Construction Inquiry*
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
    <div className="w-full pt-[80px] bg-white text-[#111111]">
      
      {/* 1. TOP SUB-PAGE BANNER */}
      <section className="relative w-full h-[75vh] min-h-[500px] bg-[#ebe6fa] flex items-center overflow-hidden">
        {/* AI Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={images.contact_hero_v2} 
            alt="Contact Us background" 
            className="w-full h-full object-cover" 
          />
          {/* Light Lavender Gradient Tint */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, rgba(235, 230, 250, 0.95) 0%, rgba(235, 230, 250, 0.75) 50%, rgba(235, 230, 250, 0.15) 100%)'
            }}
          />
        </div>
        
        {/* Blueprint line decorations */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-15 pointer-events-none z-[1]" />
        
        <div className="mx-auto max-w-[1200px] w-full px-6 z-10 relative flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[800px] flex flex-col items-start gap-1 text-[#240a40]"
          >
            {/* Support Headphone Icon */}
            <div className="text-accent mb-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 64 64" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                className="w-16 h-16"
              >
                <path d="M12 36C12 22.75 20.95 12 32 12C43.05 12 52 22.75 52 36" strokeLinecap="round" />
                <rect x="6" y="32" width="8" height="12" rx="4" />
                <rect x="50" y="32" width="8" height="12" rx="4" />
                <path d="M22 24h20v12h-8l-4 4v-4h-8V24Z" strokeLinejoin="round" />
                <circle cx="28" cy="30" r="1.5" fill="currentColor" />
                <circle cx="32" cy="30" r="1.5" fill="currentColor" />
                <circle cx="36" cy="30" r="1.5" fill="currentColor" />
              </svg>
            </div>

            <h1 className="font-heading text-6xl sm:text-7xl md:text-[5.5rem] font-black text-primary uppercase tracking-tight leading-none">
              Contact Us
            </h1>
            
            <div className="w-24 h-1 bg-accent mt-4" />
            
            <p className="font-body text-base sm:text-lg text-primary/80 mt-6 max-w-md leading-relaxed text-left">
              Have a question or a project in mind?<br />
              We’re here to help. Let’s build something great together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN LAYOUT */}
      <section className="py-20 bg-white relative">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: Contact Details */}
            <div className="lg:col-span-5 flex flex-col gap-10 lg:sticky lg:top-32">
              <div className="flex flex-col gap-3">
                <span className="font-heading text-[10px] text-accent font-extrabold tracking-widest uppercase">
                  02 // Coordinates
                </span>
                <h2 className="font-heading text-3xl font-extrabold text-primary uppercase">
                  Establish Contact
                </h2>
              </div>

              {/* Coordinates List */}
              <div className="flex flex-col gap-8 font-body text-sm text-muted">
                
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary-bg border border-border text-accent shrink-0 rounded-[4px]">
                    <Phone size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading font-extrabold text-[10px] tracking-wider uppercase text-primary">
                      Direct Line
                    </span>
                    <a href={`tel:${COMPANY.phoneRaw}`} className="text-base hover:text-accent font-bold text-primary transition-colors">
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>

                {/* Emails */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary-bg border border-border text-accent shrink-0 rounded-[4px]">
                    <Mail size={16} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-heading font-extrabold text-[10px] tracking-wider uppercase text-primary">
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
                  <div className="p-3 bg-secondary-bg border border-border text-accent shrink-0 rounded-[4px]">
                    <MapPin size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading font-extrabold text-[10px] tracking-wider uppercase text-primary">
                      Service Region
                    </span>
                    <span className="text-base text-primary">
                      {COMPANY.location} &mdash; Lower Mainland
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary-bg border border-border text-accent shrink-0 rounded-[4px]">
                    <Clock size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading font-extrabold text-[10px] tracking-wider uppercase text-primary">
                      Site Coordinates
                    </span>
                    <span className="text-sm text-primary">
                      Monday to Friday &mdash; 7:30 AM to 5:00 PM
                    </span>
                  </div>
                </div>

              </div>

              {/* Service Areas Info */}
              <div className="border border-border p-6 bg-secondary-bg rounded-[4px]">
                <span className="font-heading text-xs font-extrabold tracking-[0.2em] uppercase text-accent block mb-2">
                  Regional Operations
                </span>
                <p className="font-body text-xs text-muted leading-relaxed">
                  Our framing and concrete foundation crews deploy daily throughout West Vancouver, North Vancouver, Point Grey, Burnaby, Richmond, Coquitlam, and surrounding BC municipalities.
                </p>
              </div>

            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="w-full bg-white border border-border p-8 md:p-12 rounded-[4px] shadow-[0_8px_24px_rgba(36, 10, 64, 0.06)] relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col gap-5"
                    >
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="font-heading text-[10px] font-extrabold tracking-wider uppercase text-text pl-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          className="w-full bg-white border border-[#cccccc] p-3.5 font-body text-sm text-[#111111] rounded-[4px] box-sizing-border-box focus:border-accent focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="font-heading text-[10px] font-extrabold tracking-wider uppercase text-text pl-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          className="w-full bg-white border border-[#cccccc] p-3.5 font-body text-sm text-[#111111] rounded-[4px] box-sizing-border-box focus:border-accent focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="font-heading text-[10px] font-extrabold tracking-wider uppercase text-text pl-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          className="w-full bg-white border border-[#cccccc] p-3.5 font-body text-sm text-[#111111] rounded-[4px] box-sizing-border-box focus:border-accent focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Project Select */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="projectType" className="font-heading text-[10px] font-extrabold tracking-wider uppercase text-text pl-1">
                          Project Classification
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full bg-white border border-[#cccccc] p-3.5 font-body text-sm text-[#111111] rounded-[4px] box-sizing-border-box focus:border-accent focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="custom-home">Custom Residential Home</option>
                          <option value="house-framing">House Framing & Timberwork</option>
                          <option value="icf-foundations">ICF Foundations & Concrete</option>
                          <option value="renovation">Foundation & Renovation</option>
                          <option value="commercial">Commercial Construction</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="message" className="font-heading text-[10px] font-extrabold tracking-wider uppercase text-text pl-1">
                          Project Scope & Specifications
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Provide details about your project scope..."
                          className="w-full bg-white border border-[#cccccc] p-3.5 font-body text-sm text-[#111111] rounded-[4px] box-sizing-border-box focus:border-accent focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <div className="mt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-accent hover:bg-[#240a40] text-white py-4 font-bold text-xs uppercase rounded-[4px] border-none tracking-[0.5px] cursor-pointer transition-colors duration-200"
                        >
                          {isSubmitting ? 'Submitting Specifications...' : 'Submit Specifications'}
                        </button>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center justify-center text-center py-16"
                    >
                      <div className="w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6">
                        <Check size={26} />
                      </div>
                      <h3 className="font-heading text-2xl font-extrabold uppercase text-primary mb-3">
                        Specifications Received
                      </h3>
                      <p className="font-body text-muted text-sm leading-relaxed max-w-sm">
                        Thank you for contacting us. Our estimation department will coordinate plans and contact you within 24 hours.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE OPERATIONAL MAPPING MODULE */}
      <section className="w-full h-[450px] overflow-hidden border-t border-border">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166311.2335198031!2d-123.26388414434283!3d49.25771430030588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b8590!2sVancouver%2C%20BC!5e0!3m2!1sen!2scan!4v1700000000000" 
          width="100%" 
          height="450" 
          style={{ border: 0, filter: 'grayscale(10%) contrast(105%)' }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade" 
          title="Military Homes Vancouver Office"
        />
      </section>

    </div>
  );
};
