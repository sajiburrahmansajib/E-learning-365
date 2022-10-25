import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaTwitter, FaTwitterSquare } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-green-600 mt-4'>
            <h1 className='text-slate-200 pt-11  text-2xl font-bold'>Copyright@ 2022 E-LEARNING-365</h1>
            <div className='icon pb-8 pt-4 '>
                <FaFacebookSquare className='text-4xl' />
                <FaLinkedin className='text-4xl' />
                <FaTwitterSquare className='text-4xl' />
            </div>
        </div>
    );
};

export default Footer;