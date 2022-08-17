import { useEffect, useState } from 'react';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === 'function') return initialValue();
    else return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export const useStorage = () => {
  const isBrowser = (() => typeof window !== 'undefined')();

  const getItem = key => {
    return isBrowser ? window['localStorage'][key] : '';
  };

  const setItem = (key, value) => {
    if (isBrowser) {
      window['localStorage'].setItem(key, value);
      return true;
    }

    return false;
  };

  const removeItem = key => {
    window['localStorage'].removeItem(key);
  };

  return {
    getItem,
    setItem,
    removeItem,
  };
};

export default useStorage;
