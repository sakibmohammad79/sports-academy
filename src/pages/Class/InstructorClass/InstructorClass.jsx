import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import DisplayClass from './DisplayClass';


const InstructorClass = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('https://wolves-server.vercel.app/instructorclass')
        .then(res => res.json())
        .then(data => setClasses(data));
    },[])
    console.log(classes);
    return (
        <div className='p-8'>
            <SectionTitle heading={'Our All Instructor classes'} subHeading={'all classes are amazing you learn lot of things'}></SectionTitle>
            <div className='grid grid-cols-3 my-12 gap-12'>
            {
                classes.map(classs => <DisplayClass
                key={classs._id}
                classs={classs}>
                </DisplayClass>)
            }
            </div>
        </div>
    );
};

export default InstructorClass;