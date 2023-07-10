import { Search, X } from 'lucide-react';
import React, { useEffect } from 'react';

const SearchBar = ({ closeSearch, open }) => {
  useEffect(() => {
    function handleWindowResize() {
      if (window.innerWidth < 767) {
        closeSearch(false);
      }
    }

    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div
      className={`bg-white w-full flex items-center md:justify-center justify-start ${
        open ? '' : 'md:hidden'
      }`}
    >
      <div className='flex pb-2 md:w-1/2 w-3/4  flex-row-reverse md:flex-row'>
        <button>
          <Search className='mr-3 ' />
        </button>
        <input
          type='text'
          placeholder='Search'
          className='w-full focus:outline-none'
        />
        <button onClick={() => closeSearch(false)} className='hidden md:block'>
          <X />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
