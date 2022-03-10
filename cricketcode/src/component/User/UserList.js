import React, { useState, useEffect } from 'react'
import { Link, } from 'react-router-dom'
import User_Service from '../../services/User_Service'
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const UserList = (props) => {
 //   const navigate = useNavigate()

    const [academyList, setAcademyList] = useState([]);
    const filteredData = academyList.filter((academy) => {
        if (props.input === "") {
          return academy;
        } else {
          return academy.academy_name.toLowerCase().includes(props.input);
        }
      });
   
   
    useEffect(() => {
        User_Service.get()
        .then(response => {
            setAcademyList(response.data);
        })
        .catch(error => {
            console.log("Something went wrong " + error)
        })
    }, [])

   
    return (
        <>
        <div className='container mt-2'>
           <div className='row'  >
                {  
                    filteredData.map(academy => (
                      
                            <div className="col-4 mb-3">
    <div className="card" style={{ width: "18rem" }}>
   
                <img src={academy.image_url} alt="" className='' />
                <div className="card-body ">
                <p className="card-text" ><strong> Name : {academy.academy_name}</strong></p>
          
                <p className="card-text" ><strong> Location : {academy.academy_location}</strong></p>
          
           
                <p className="card-text" ><strong>Email : {academy.academy_email}</strong></p>
         
                <p className="card-text" ><strong>Description : {academy.academy_description}</strong></p>
            
                <p className="card-text" ><strong>phonenumber : {academy.phonenumber}</strong></p>

                <p className="card-text" ><strong>phonenumber : {academy.academy_id}</strong></p>
               <Link to=
               {
                   `/user-courses/${academy.academy_id}`
               } className="card-link">
            <ArrowForwardIcon />
          </Link>
        
            </div>
            
    </div>
    </div>   
                            
                       
                    ))
                }
                </div>
                </div>
            
        </>
    )
}

export default UserList