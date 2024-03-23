import { useEffect } from "react";

const useClickAway = (ref, handler, excludedRefs = []) => {
  useEffect(() => {
    const handleClickAway = (event) => {
      const isExcluded = excludedRefs.some((excludedRef) => {
        return excludedRef.current && excludedRef.current.contains(event.target);
      });

      if (ref.current && !ref.current.contains(event.target) && !isExcluded) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickAway);

    return () => {
      document.removeEventListener('mousedown', handleClickAway);
    };
  }, [ref, handler, excludedRefs]);
};

export default useClickAway;

