import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';


const imgHostingToken = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
console.log(imgHostingToken);
const AddClass = () => {
  const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();

    const imgHostingURL = `https://api.imgbb.com/1/upload?key=${imgHostingToken}`

  const onSubmit = data => {
   
    const formData = new FormData();
    formData.append('image', data.instructorImage[0]);
    fetch(imgHostingURL, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(imgResponse => {
        if(imgResponse.success){
            const imageURL = imgResponse.data.display_url;
            const {className, price, seats, instructorName, email} = data;
            const newClass = {className, price: parseFloat(price), seats: parseInt(seats), instructorName, email, classImage: imageURL}
            console.log(newClass);

            axiosSecure.post('/instructorclass', newClass)
            .then(data => {
                console.log('after posting new menu item', data.data);
                if(data.data.insertedId){
                  reset();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Item Added Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }
            })
        }
    })
  };
    return (
        <div className='w-full px-8 '>
            <SectionTitle heading={'add an class'} subHeading={'amazing classes'}></SectionTitle>
            
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className='flex gap-4'>
        <div className="form-control w-1/2 ">
          <label className="label">
            <span className="label-text font-medium text-white">Class Name</span>
          </label>
          <input
            {...register("className", { required: true, maxLength: 80 })}
            type="text"
            placeholder="Class Name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-1/2 ">
          <label className="label">
            <span className="label-text font-medium text-white">Instructor Name</span>
          </label>
          <input
            {...register("instructorName", { required: true, maxLength: 80 })}
            type="text"
            placeholder="Instructor Name"
            className="input input-bordered w-full"
          />
        </div>
        </div>
        <div className='flex gap-4'>
        <div className="form-control w-1/2 ">
          <label className="label">
            <span className="label-text font-medium text-white">Instructor Email</span>
          </label>
          <input defaultValue={user?.email}
            {...register("email", { required: true, maxLength: 80 })}
            type="text"
            placeholder="Instructor Email"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-1/2 ">
          <label className="label">
            <span className="label-text font-medium text-white">Available Seats</span>
          </label>
          <input
            {...register("seats", { required: true, maxLength: 80 })}
            type="number"
            placeholder="Available Seats"
            className="input input-bordered w-full"
          />
        </div>
        </div>
  
        <div className='flex gap-4'>
        <div className='w-1/2'>
          <label className="label">
            <span className="label-text font-medium text-white">Class Image</span>
          </label>
          <input
          {...register("instructorImage", { required: true })}
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-1/2 ">
          <label className="label">
            <span className="label-text font-medium text-white">Price</span>
          </label>
          <input
            {...register("price", { required: true, maxLength: 80 })}
            type="number"
            placeholder="price"
            className="input input-bordered w-full"
          />
        </div>
        </div>
        <input className="btn w-full bg-lime-500 border-none" type="submit" value="Add item" /> 
    </form>
    </div>

    );
};

export default AddClass;