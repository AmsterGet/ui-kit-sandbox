import { useEffect, RefObject } from 'react';

export function useOnClickOutside<T extends HTMLElement = HTMLDivElement>(
  ref: RefObject<T>,
  handler?: (e?: MouseEvent) => void,
) {
  useEffect(() => {
    if (!handler) {
      return undefined;
    }

    const listener = (event: MouseEvent) => {
      if (ref && ref.current && !ref.current.contains(event.target as Node)) {
        handler(event);
      }
    };

    document.addEventListener('pointerdown', listener);

    return () => {
      document.removeEventListener('pointerdown', listener);
    };
  }, [ref, handler]);
}
