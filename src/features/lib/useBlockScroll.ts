import { useEffect } from 'react';

export function useBlockScroll() {
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.margin = '0';
      document.body.style.height = '100%';
      document.body.style.overflow = 'auto';
    };
  }, []);
}
