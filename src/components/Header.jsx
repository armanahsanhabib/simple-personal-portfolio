import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const navClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className='flex justify-between items-center bg-gray-50 md:px-12 px-5 py-7 shadow-md sticky top-0 left-0 right-0 z-50'>
            <h3 className='text-xl font-bold'>Ahsan Habib</h3>

            <div className='lg:hidden flex justify-center items-center'>
                <button className='text-xl' onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            <ul
                className={`lg:flex lg:space-x-4 lg:space-y-0 space-y-8 lg:text-lg text-2xl font-[600] ${isMenuOpen
                    ? 'text-center block h-[calc(100vh-84px)] w-screen absolute left-0 top-[84px] bg-gray-50 flex flex-col justify-center items-center'
                    : 'hidden'
                    }`}
            >
                {isMenuOpen ? <hr className='w-full absolute top-0 border-t-[3px]' /> : null}
                <li onClick={() => navClick()}>
                    <a className='hover:text-blue-600 transition' href='#'>
                        Home
                    </a>
                </li>
                <li onClick={() => navClick()}>
                    <a className='hover:text-blue-600 transition' href='#about'>
                        About
                    </a>
                </li>
                <li onClick={() => navClick()}>
                    <a className='hover:text-blue-600 transition' href='#projects'>
                        Projects
                    </a>
                </li>
                <li onClick={() => navClick()}>
                    <a className='hover:text-blue-600 transition' href='#contact'>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
