import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useClass from "../../../hook/useClass";

const DisplayClass = ({ classs }) => {
    const [, refetch] = useClass();
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
  const { classImage,instructorName,  className, seats, price, _id } = classs;

  const handleAddToClass = () => {
    if(user){
        const selectedClass = {classId: _id, classImage, email: user.email, className, price, seats, instructorName}
        fetch('https://wolves-server.vercel.app/class', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(selectedClass)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Class Successfully Added!',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    else{
        Swal.fire({
            title: 'Please Login To Select The Class!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login Now'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login')
            }
          })
    }
  }

  return (
    <div className={`card w-86 ${seats === 0 ? "bg-red-100" : "bg-base-100"} shadow-xl`} >
      <figure>
        <img
        style={{width: '100%', height: '300px'}}
          src={classImage}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title"><span>Class:</span> {className}</h2>
        <h2 className="card-title"><span>Instructor:</span> {instructorName}</h2>
        <h2 className="card-title"><span>Seats:</span> {seats}</h2>
        <h2 className="card-title"><span>Price:</span> ${price}</h2>
        
        <div className="card-actions justify-end">
          <button onClick={handleAddToClass} disabled={seats === 0} className="btn btn-primary">Select Class</button>
        </div>
      </div>
    </div>
  );
};

export default DisplayClass;
