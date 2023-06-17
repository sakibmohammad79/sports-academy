import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const EnrolledClass = () => {
    const {user} = useContext(AuthContext)
    const [enrolClasses, setEnrollClasses] = useState([]);
    
    useEffect(() => {
        fetch(`https://wolves-server.vercel.app/enrollclass/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setEnrollClasses(data);
        })
    }, [])
    console.log(enrolClasses);
    return (
        <div className='w-full px-8'>
            <SectionTitle heading={'My Enrolled Classes'} subHeading={'successfully paid payment'}></SectionTitle>

            <div className="overflow-x-auto">
  <table className="table text-white">
    {/* head */}
    <thead className='text-white'>
      <tr>
        <th>#</th>
        <th>Class Image</th>
        <th>Class Name</th>
        <th>Instructor Name</th>
        <th>Price</th>
        <th>Seats</th>
      </tr>
    </thead>
    <tbody>
        {
            enrolClasses.map((enrollClass, index) => <tr key={enrollClass._id}>
            <th>{index + 1}</th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={enrollClass.classImage} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>{enrollClass.className}</td>
            <td>{enrollClass.instructorName}</td>
            <td>{enrollClass.seats}</td>
            <td>${enrollClass.price}</td>
          </tr> )
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default EnrolledClass;