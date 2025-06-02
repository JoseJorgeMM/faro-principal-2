// src/components/common/Button.tsx
import React from 'react';
import { Link, LinkProps } from 'react-router-dom'; // Para botones que son enlaces
import { IconType } from 'react-icons'; // Para tipar los iconos

type ButtonVariant = 'primary' | 'secondary' | 'outline-primary' | 'outline-secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
  isLoading?: boolean; // Para mostrar un spinner o estado de carga
  disabled?: boolean;
  fullWidth?: boolean;
}

// Propiedades para un botón estándar <button>
interface StandardButtonProps extends ButtonBaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'button';
  to?: never; // Asegura que 'to' no se use con 'as="button"'
}

// Propiedades para un botón que actúa como enlace <Link>
interface LinkButtonProps extends ButtonBaseProps, Omit<LinkProps, 'to'> {
  as: 'link';
  to: string; // 'to' es requerido si 'as="link"'
}

type ButtonProps = StandardButtonProps | LinkButtonProps;

const Button: React.FC<ButtonProps> = ({
  children,
  as = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  isLoading = false,
  disabled = false,
  fullWidth = false,
  ...props
}) => {
  const baseStyles = `
    inline-flex items-center justify-center font-semibold border
    focus:outline-none focus:ring-2 focus:ring-offset-2 
    transition-all duration-200 ease-in-out rounded-md
    disabled:opacity-60 disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
  `;

  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-brand-green text-white border-transparent hover:bg-brand-green-dark focus:ring-brand-green',
    secondary: 'bg-accent-gold text-brand-blue border-transparent hover:bg-opacity-90 focus:ring-accent-gold',
    'outline-primary': 'bg-transparent text-brand-green border-brand-green hover:bg-brand-green/10 focus:ring-brand-green',
    'outline-secondary': 'bg-transparent text-accent-gold border-accent-gold hover:bg-accent-gold/10 focus:ring-accent-gold',
    ghost: 'bg-transparent text-brand-blue hover:bg-brand-gray-light/50 border-transparent focus:ring-brand-blue',
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base', // Tamaño por defecto
    lg: 'px-8 py-3 text-lg',
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!isLoading && LeftIcon && <LeftIcon className={`mr-2 h-5 w-5 ${size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'}`} aria-hidden="true" />}
      {children}
      {!isLoading && RightIcon && <RightIcon className={`ml-2 h-5 w-5 ${size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'}`} aria-hidden="true" />}
    </>
  );

  const commonProps = {
    className: combinedClasses,
    disabled: disabled || isLoading,
    // Extiende las props restantes para permitir atributos HTML nativos
    ...(props as React.ButtonHTMLAttributes<HTMLButtonElement> & Omit<LinkProps, 'to'>)
  };

  if (as === 'link') {
    // Castea props a LinkProps sin 'as', y luego añade 'to'
    const { to, ...linkRestProps } = props as Omit<LinkButtonProps, 'as' | 'children' | 'variant' | 'size' | 'className' | 'leftIcon' | 'rightIcon' | 'isLoading' | 'disabled' | 'fullWidth'>;
    return (
      <Link to={to!} {...commonProps} {...linkRestProps}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" {...commonProps} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
};

export default Button;
