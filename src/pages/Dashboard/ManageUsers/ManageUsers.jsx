import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hook/useAxiosSecure';

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
    const {data: users = [], refetch} = useQuery(['users'], async() => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = (user) => {
        fetch(`https://wolves-server.vercel.app/users/admin/${user._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} Is An Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleMakeInstructor = (id) => {

    }

    const handleDelete = (user) => {
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
            fetch(`https://wolves-server.vercel.app/users/${user._id}`,{
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
        <div className='w-full'>
            <h3 className='text-4xl m-8 text-lime-500 font-bold'>Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Make Admin</th>
        <th>Make Instructor</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
           users.map((user, index) => <tr key={user._id}>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                { user.role === 'admin' ? 'Admin' :
                <button onClick={()=>handleMakeAdmin(user)}  className="btn btn-ghost btn-sm text-white bg-orange-500"><FaUserShield/></button>}
            </td>
            <td>
                { user.role === 'instructor' ? 'instructor' :
                <button onClick={()=>handleMakeInstructor(user)}  className="btn btn-ghost btn-sm text-white bg-orange-500"><FaUserShield/></button>}
            </td>
                <td>  <button onClick={()=> handleDelete(user)} className="btn btn-ghost btn-sm text-white bg-red-500"><FaTrashAlt/></button>
            </td>
          </tr>
           )
        }
        
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageUsers;