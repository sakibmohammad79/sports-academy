import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import DisplayClass from './DisplayClass';


const InstructorClass = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('https://wolves-server.vercel.app/instructor')
        .then(res => res.json())
        .then(data => setClasses(data));
    },[])
    console.log(classes);
    return (
        <>
            <SectionTitle heading={'Our client class'} subHeading={'about us'}></SectionTitle>
            <div className='grid grid-cols-3 my-12 gap-12'>
            {
                classes.map(classs => <DisplayClass
                key={classs._id}
                classs={classs}>
                </DisplayClass>)
            }
            </div>
        </>
    );
};

export default InstructorClass;