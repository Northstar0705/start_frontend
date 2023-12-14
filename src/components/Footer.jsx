import React from 'react';
import logo from '../assets/logo.svg';
import facebook from '../assets/facebook.png';
import insta from '../assets/insta.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';

const Footer = () => {
    return (
        <div className='flex px-20 py-10 w-full justify-between'>
            <div className='flex flex-col gap-5'>
                <div className='flex gap-2 items-center'>
                    <img src={logo} alt="logo" style={{ width: '44px', height: '44px' }} />
                    <div className='flex items-center'>
                        <span className='text-4xl font-bold text-[#172E59]'>North</span>
                        <span className='text-4xl text-[#172E59]'>Star</span>
                    </div>
                </div>
                <span className='text-gray-500 text-[17px] font-normal w-[384px] text-left'>Your trusted source to find highly-vetted mentors & industry professionals to move your career ahead.</span>
                <div className='flex gap-1'>
                    <img src={facebook} alt="facebook" style={{ height: "40px" }} />
                    <img src={insta} alt="insta" style={{ height: "40px" }} />
                    <img src={twitter} alt="twitter" style={{ height: "40px" }} />
                    <img src={linkedin} alt="linkedin" style={{ height: "40px" }} />
                </div>
            </div>
            <div className='flex flex-col text-left gap-2'>
                <span className='text-gray-400 text-md uppercase font-semibold'>Platform</span>
                <span className='text-base font-normal text-gray-500 hover:text-gray-900'>Browse Mentors</span>
                <span className='text-base font-normal text-gray-500 hover:text-gray-900'>Book a Session</span>
                <span className='text-base font-normal text-gray-500 hover:text-gray-900'>Become a Mentor</span>
                <span className='text-base font-normal text-gray-500 hover:text-gray-900'>Mentorship for Teams</span>
                <span className='text-base font-normal text-gray-500 hover:text-gray-900'>Testimonials</span>
            </div>
            <div className='flex flex-col text-left gap-2'>
                <span className='text-gray-400 text-md uppercase font-semibold'>Resources</span>
                <span className='text-base font-normal text-gray-500 hover:text-gray-900'>Newsletter</span>
                <span className='text-base font-normal text-gray-500 hover:text-gray-900'>Case Studies</span>
                <span className='text-base font-normal text-gray-500 hover:text-gray-900'>Books</span>
                <span className='text-base font-normal text-gray-500 hover:text-gray-900'>Perks</span>
                <span className='text-base font-normal text-gray-500 hover:text-gray-900'>Templates</span>
                <span className='text-base font-normal text-gray-500 hover:text-gray-900'>Spreadsheet</span>
                <span className='text-base font-normal text-gray-500 hover:text-gray-900'>Career Paths</span>
                <span className='text-base font-normal text-gray-500 hover:text-gray-900'>Alternatives</span>
                <span className='text-base font-normal text-gray-500 hover:text-gray-900'>Blog</span>
            </div>
            <div className='flex flex-col text-left gap-2'>
                <span className='text-gray-400 text-md uppercase font-semibold'>Company</span>
                <span className='text-base font-normal text-gray-500 hover:text-gray-900'>About</span>
                <span className='text-base font-normal text-gray-500 hover:text-gray-900'>Partner Program</span>
                <span className='text-base font-normal text-gray-500 hover:text-gray-900'>Code of Conduct</span>
                <span className='text-base font-normal text-gray-500 hover:text-gray-900'>Privacy Policy</span>
            </div>
            <div className='flex flex-col gap-16'>
                <div className='flex flex-col text-left gap-2'>
                    <span className='text-gray-400 text-md uppercase font-semibold'>Support</span>
                    <span className='text-base font-normal text-gray-500 hover:text-gray-900'>FAQ</span>
                    <span className='text-base font-normal text-gray-500 hover:text-gray-900'>Contact</span>
                </div>
                <div className='flex flex-col text-left gap-2'>
                    <span className='text-gray-400 text-md uppercase font-semibold'>Collections</span>
                    <span className='text-base font-normal text-gray-500 hover:text-gray-900'>About</span>
                    <span className='text-base font-normal text-gray-500 hover:text-gray-900'>Partner Program</span>
                    <span className='text-base font-normal text-gray-500 hover:text-gray-900'>Code of Conduct</span>
                    <span className='text-base font-normal text-gray-500 hover:text-gray-900'>Privacy Policy</span>
                </div>
            </div>

        </div>
    )
}

export default Footer