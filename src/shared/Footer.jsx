import React from 'react';
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";

const Footer = () => {
    return (
        <div className='container mx-auto bg-[#244d3f] p-3'>
            <div>
                <h1 className='text-7xl text-center text-white font-bold m-8'>KeenKeeper</h1>
                <p className='text-white text-center m-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            </div>
            <div className='text-center text-white font-semibold shadow mb-5'>
                <h2 className='mb-5 bt-2'>Social Links</h2>
                <div className='flex justify-center items-center gap-4 mb-5 '>
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={twitter} alt="" />
                </div> <br />
            </div>
            <div className='flex justify-between items-center gap-5 text-white'>
                <p >© 2026 KeenKeeper. All rights reserved.</p>
                <div className='flex justify-center items-center gap-5'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;