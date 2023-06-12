
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
        <div className='w-full mx-8 text-white'>
            <h3 className='text-3xl font-bold text-center my-6 text-lime-500'>MY SELECTED CLASS</h3>
            <div className="overflow-x-auto w-full">
        <table className="table w-full text-white font-bold text-md">
          <thead>
            <tr className='text-white text-md'>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {
              myClass.map((item, index) => 
               <tr key={item._id}>
                <td>
                  {index + 1}
                </td>
                <td>
                  
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.classImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                </td>
                <td>
                  {item.className}
                </td>
                <td>
                  {item.email}
                </td>
                <td >
                  {item.seats}
                </td>
                <td className="">
                  ${item.price}
                </td>
                <td>
                <button className="btn btn-ghost btn-sm text-white bg-lime-500">Update</button>
                </td>
              </tr> )
            }
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default MyClasses;