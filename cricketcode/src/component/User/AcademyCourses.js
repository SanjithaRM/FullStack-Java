import React, { useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import User_Service from '../../services/User_Service';
import UserNavbar from './UserNavbar';



function AcademyCourses(props) {

 
    
    const { input } = useParams()
    console.log(input)
    useEffect(() =>
    {
        User_Service.getcourse(input)
        .then(response => {
            console.log(response.data)
          
        })
        .catch(error => {
            console.log("Something went wrong " + error)
        })
    },[])
    return (
        <div>
            <UserNavbar />
          
        </div>
    );
}

export default AcademyCourses;