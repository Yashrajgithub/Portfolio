
import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  centered?: boolean;
}

const SectionHeading = ({
  title,
  subtitle,
  children,
  className = '',
  centered = true,
}: SectionHeadingProps) => {
  return (
    <div
      className={`mb-12 ${
        centered ? 'text-center' : 'text-left'
      } ${className}`}
    >
      <h2 className="section-heading">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && <p className="section-subheading">{subtitle}</p>}
      {children}
    </div>
  );
};

export default SectionHeading;
