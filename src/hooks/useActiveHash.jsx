import { useEffect, useState } from 'react';

export const useActiveHash = (defaultHash = '#home') => {
  const [activeHash, setActiveHash] = useState(() => window.location.hash || defaultHash);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || defaultHash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [defaultHash]);

  return activeHash;
};
