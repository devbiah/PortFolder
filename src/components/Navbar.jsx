import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const navLinks = [
  { id: "About", title: "Sobre" },
  { id: "Tech", title: "Tecnologias" },
  { id: "Experience", title: "Experiência" },
  { id: "Contact", title: "Contato" },
];

const Navbar = () => {
  return (
    <nav className={` w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Beatriz Silva&nbsp;
            <span className='sm:block hidden'> | Dev Portfolio</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                className='text-secondary hover:text-white text-[18px] font-medium cursor-pointer'
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
