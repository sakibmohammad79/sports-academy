import React from 'react';
import { Slide } from "react-awesome-reveal";

const UpcomingMatch = () => {
    return (
        <div className='my-16 text-white p-8'>
            <h2 className='font-bold text-4xl uppercase text-lime-500 text-center mb-8'>Upcoming Match</h2>
            <div className='flex justify-around items-center '>
                <div>
                    <Slide direction="left"><img style={{height: '200px', width: '200px'}} src="https://i.postimg.cc/VLLtyjd0/tes4.png" alt="" /></Slide>
                    <h3 className='text-3xl uppercase font-extrabold mt-2 text-center'>Beckstrom</h3>
                </div>
                <div>
                    <h3 className='text-5xl font-extrabold text-center mb-4'>VS</h3>
                    <h2 className='text-2xl font-bold text-center'>Location : Furblock Base</h2>
                    <h2 className='text-lime-500 text-center text-lg font-bold'>July 18, 2022, 5:00 Pm</h2>
                </div>
                <div>
                    <Slide direction="right"><img style={{height: '200px', width: '200px'}} src="https://i.postimg.cc/Gh7ybHy7/tes5.png" alt="" /></Slide>
                    <h3 className='text-3xl uppercase font-extrabold mt-2 text-center'>Gradular</h3>
                </div>
            </div>
            <div className='flex justify-around text-center items-center mt-12'>
                <div>
                    <Slide direction='left'><img style={{height: '200px', width: '200px'}} src="https://i.postimg.cc/VLLtyjd0/tes4.png" alt="" /></Slide>
                    <h3 className='text-3xl uppercase font-extrabold mt-2 text-center'>EastWood</h3>
                </div>
                <div>
                    <h3 className='text-5xl font-extrabold text-center mb-4'>VS</h3>
                    <h2 className='text-2xl font-bold text-center'>Location : Furblock Base</h2>
                    <h2 className='text-lime-500 text-center text-lg font-bold'>July 24, 2022, 5:00 Pm</h2>
                </div>
                <div>
                    <Slide direction='right'><img style={{height: '200px', width: '200px'}} src="https://i.postimg.cc/Gh7ybHy7/tes5.png" alt="" /></Slide>
                    <h3 className='text-3xl uppercase font-extrabold mt-2 text-center'>Shuttle</h3>
                </div>
            </div>
        </div>
    );
};

export default UpcomingMatch;