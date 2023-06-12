import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const MyEnrolledClass = () => {
    const {user} = useContext(AuthContext)
    const [payment, setPayment] = useState([]);
    useEffect(() => {
        fetch(`https://wolves-server.vercel.app/payments/${user?.email}`)
        .then(res => res.json())
        .then(data => setPayment(data))
    },[])
    return (
        <div className='text-white'>
            <h2>paymetn: {payment.length}</h2>
        </div>
    );
};

export default MyEnrolledClass;