import type { HTMLAttributes } from 'react';

import { cn } from '@/shared/utils/cn';

type CardElement = 'section' | 'article' | 'div';

interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: CardElement;
}

export const Card = ({ as = 'section', className, ...props }: CardProps) => {
  const Component = as;
  return <Component className={cn('card', className)} {...props} />;
};
