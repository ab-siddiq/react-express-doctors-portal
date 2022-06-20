import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [appointments,setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(()=>{
        fetch(`http://localhost:5000/appointment?patient${user}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
        My Appointment: 
            {appointments.length}
        </div>
    );
};

export default MyAppointments;