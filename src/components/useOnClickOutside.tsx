import * as React from 'react';
import { useEffect, useRef } from 'react';

type OnClickOutsideCallback = () => void;

const useOnClickOutside = (
  ref: React.RefObject<HTMLElement>,
  callback: OnClickOutsideCallback
) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};

export default useOnClickOutside;
