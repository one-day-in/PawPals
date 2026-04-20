import type { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  action?: ReactNode;
  titleClassName?: string;
}

export const SectionHeader = ({ title, action, titleClassName }: SectionHeaderProps) => {
  return (
    <div className="section-header">
      <h2 className={`section-header__title${titleClassName ? ` ${titleClassName}` : ''}`}>{title}</h2>
      {action}
    </div>
  );
};
