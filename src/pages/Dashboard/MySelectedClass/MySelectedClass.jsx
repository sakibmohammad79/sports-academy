import React from 'react';
import useClass from '../../../hook/useClass';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const MySelectedClass = () => {
    const [classes, refetch] = useClass();
    //console.log(classes)
    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            fetch(`https://wolves-server.vercel.app/class/${item._id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    refetch();
                      Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
              )
                }
            })
            }
          })
    }
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
              <th>Instructor Name</th>
              <th>Seats</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {
              classes.map((item, index) => 
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
                  {item.instructorName}
                </td>
                <td >
                  {item.seats}
                </td>
                <td className="">
                  ${item.price}
                </td>
                <td>
                <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-sm text-white bg-red-500"><FaTrashAlt/></button>
                </td>
                <td>
                <Link to='/dashboard/payment' state={item}><button className="btn btn-ghost btn-sm text-white bg-lime-500">Pay</button></Link>
                </td>
                
              </tr> )
            }
            
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default MySelectedClass;