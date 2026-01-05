import React from 'react';
import { useScrollToSection } from '../hooks/useScrollToSection';

interface ScrollLinkProps {
  targetId: string;
  className?: string;
  children: React.ReactNode;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ targetId, className, children }) => {
  const scrollToSection = useScrollToSection();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToSection(targetId);
  };

  return (
    <a href={`#${targetId}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export default ScrollLink;
