import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'dark' | 'light';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-body text-xs font-semibold tracking-[0.15em] uppercase px-8 py-4 transition-all duration-300 select-none overflow-hidden border border-transparent rounded-lg";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-accent border-primary hover:border-accent",
    secondary: "bg-accent text-white hover:bg-primary border-accent hover:border-primary",
    outline: "bg-transparent border-primary text-primary hover:bg-primary hover:text-white",
    dark: "bg-primary text-white border-primary hover:bg-transparent hover:text-primary hover:border-primary",
    light: "bg-transparent border-white text-white hover:bg-white hover:text-primary",
  };

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className} disabled:opacity-50 disabled:pointer-events-none`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};
