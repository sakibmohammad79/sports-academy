import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import DisplayAllInstructor from './DisplayAllInstructor';



const Allinstructor = () => {
    const [instructors, setInstructor] = useState([]);
    useEffect(() => {
        fetch('https://wolves-server.vercel.app/instructor')
        .then(res => res.json())
        .then(data => setInstructor(data))
    },[])
    return (
        <div className='p-8'>
            <SectionTitle heading={'our all instructor'} subHeading={'contuct with'}></SectionTitle>
            <div className='grid grid-cols-3 gap-12 my-16'>
            {
                instructors.map(instructor => <DisplayAllInstructor key={instructor._id}
                instructor={instructor}
                ></DisplayAllInstructor>)
            }
            </div>
        </div>
    );
};

export default Allinstructor;