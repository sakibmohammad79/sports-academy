
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const MyClasses = () => {
    const {user} = useContext(AuthContext)
    const [myClass, setMyClass] = useState([]);
    useEffect(() => {
        fetch(`https://wolves-server.vercel.app/instructorclass/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMyClass(data);
        })
    }, [])
     return (
        <div className='text-white'>
            {myClass.length}
        </div>
    );
};

export default MyClasses;