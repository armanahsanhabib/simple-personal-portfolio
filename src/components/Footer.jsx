import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className='bg-gray-800 py-6'>
            <div className="content max-w-[1000px] w-[96%] mx-auto text-gray-50 font-semibold flex md:flex-row flex-col justify-between items-center">
                <h3>Copyright &copy; {year} - All rights reserved. </h3>
                <div className="social md:mt-0 mt-3">
                    <a href="https://www.linkedin.com/in/sheikh-ahsan-habib-arman-bb874920b/">
                        <FaLinkedin className='inline-block text-xl mr-3 transition hover:scale-110' />
                    </a>
                    <a href="https://github.com/armanahsanhabib">
                        <FaGithub className='inline-block text-xl mr-3 transition hover:scale-110' />
                    </a>
                    <a href="https://www.youtube.com/@armanahsanhabib">
                        <FaYoutube className='inline-block text-3xl md:mr-3 mr-0 transition hover:scale-110' />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;