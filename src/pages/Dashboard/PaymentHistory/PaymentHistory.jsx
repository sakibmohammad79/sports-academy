import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const PaymentHistory = () => {
    const {user} = useContext(AuthContext)
    const [payments, setPayment] = useState([]);
    useEffect(() => {
        fetch(`https://wolves-server.vercel.app/payments/${user?.email}`)
        .then(res => res.json())
        .then(data => setPayment(data))
    },[])
    return (
        <div className='w-full mx-8 text-white'>
        <h3 className='text-3xl font-bold text-center my-6 text-lime-500'>MY SELECTED CLASS</h3>
        <div className="overflow-x-auto w-full">
    <table className="table w-full text-white font-bold text-md">
      <thead>
        <tr className='text-white text-md'>
          <th>#</th>
          <th>Email</th>
          <th>TransactionId</th>
          <th>Price</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {
          payments.map((item, index) => 
           <tr key={item._id}>
            <td>
              {index + 1}
            </td>
            <td>
              {item.email}
            </td>
            <td>
              {item.transactionId}
            </td>
            <td>
              {item.price}
            </td>
            <td >
              {item.date}
            </td>
            
          </tr> )
        }
        
      </tbody>
    </table>
  </div>
    </div>
    );
};

export default PaymentHistory;