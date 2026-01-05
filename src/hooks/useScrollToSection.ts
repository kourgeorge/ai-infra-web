import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const scrollToElement = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const useScrollToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(
    (sectionId: string) => {
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollToId: sectionId } });
        return;
      }

      scrollToElement(sectionId);
    },
    [location.pathname, navigate],
  );
};
