import type { ButtonHTMLAttributes } from 'react';

import { cn } from '@/shared/utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

export const Button = ({ variant = 'primary', fullWidth = false, className, ...props }: ButtonProps) => {
  return <button className={cn('btn', `btn--${variant}`, fullWidth && 'btn--full', className)} {...props} />;
};
