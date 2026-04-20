import type { HTMLAttributes } from 'react';

import { cn } from '@/shared/utils/cn';

type BadgeTone = 'neutral' | 'blue' | 'green';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

export const Badge = ({ tone = 'neutral', className, ...props }: BadgeProps) => {
  return <span className={cn('ui-badge', `ui-badge--${tone}`, className)} {...props} />;
};
