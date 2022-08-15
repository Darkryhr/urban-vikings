import React, { useState } from 'react';
import Link from 'next/link';
import { BiCart } from 'react-icons/bi';

import { useCart } from '@lib/useCart';

const Header = () => {
  const { subtotal } = useCart();
  const [open, setOpen] = useState(false);
  return (
    <header>
      <Link href='/' passHref>
        <h1>Logo</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/store'>
              <a>Store</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href='/cart' passHref>
              <a>
                <div>
                  <BiCart size={24} color={open ? 'black' : 'white'} />
                  {subtotal !== 0 ? <div className='dot'></div> : ''}
                </div>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
