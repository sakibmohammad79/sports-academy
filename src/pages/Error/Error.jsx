import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="relative">
            <img className="w-full h-[100vh]" src="https://i.postimg.cc/YSZwv2ZY/3737258.jpg" alt="" />
            <Link to='/'><button className="text-white font-bold btn border-none bottom-10 left-1/2 absolute bg-teal-400">Back To Home</button></Link>
        </div>
    );
};

export default Error;