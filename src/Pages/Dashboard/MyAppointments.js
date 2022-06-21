import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const MyAppointments = () => {
    const [appointments,setAppointments] = useState([]);
    console.log('apo',appointments)
    const [user,loading] = useAuthState(auth);
    
    useEffect(()=>{
        fetch(`http://localhost:5000/appointment?patient=${user.email}`,{
          method: 'GET',
          headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res=>res.json())
        .then(data=>setAppointments(data))
    },[user])
    if(loading){
      return <Loading></Loading>;
    }
    return (
      <div class="overflow-x-auto">
        {appointments.length !==0 ? (
          <table class="table table-compact w-full">
            <thead>
              <tr>
                <th>SL</th>
                <th>Date</th>
                <th>Name</th>
                <th>Treatment</th>
                <th>Time</th>
                <th>Phone</th>
                <th>Email</th>
                <th>AppointmentID</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.patientName}</td>
                  <td>{appointment.appointmentFor}</td>
                  <td>{appointment.slot}</td>
                  <td>{appointment.phone}</td>
                  <td>{appointment.patient}</td>
                  <td>{appointment.appointmentId}</td>
                </tr>
              ))}
            </tbody>
            {/* <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>company</th>
              <th>location</th>
              <th>Last Login</th>
              <th>Favorite Color</th>
            </tr>
          </tfoot> */}
          </table>
        ) : (
          <div className="flex justify-center">
            <div class="alert alert-warning shadow-lg  w-[50%]">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>Currently no appointment is available!</span>
              </div>
            </div>
          </div>

          //   <p className='text-red-400'>Currently no appointment is available</p>
        )}
      </div>
    );
};

export default MyAppointments;