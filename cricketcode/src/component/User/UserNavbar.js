import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Auth_Service from '../../services/Auth_Service'
function UserNavbar() {

    const navigate = useNavigate()

    const handleLogout = () => {
        Auth_Service.logout()
        navigate('/')
    }

    return (
        <div>
            <nav class="navbar navbar-fixed-top">
                <div className="container-fluid d-flex justify-content-between">
                    <ul class="nav">
                        <li class="">
                            <h3   className='nav-element' >Cricket Academy</h3>
                        </li>
                    </ul>
                    <ul class="nav">
                        <li class="nav-item">
                            <Link to ={"/user-dashboard"} class="nav-link " id="userAcademy">Academy</Link>
                        </li>
                    </ul>
                    <ul class="nav">
                        <li class="nav-item">
                            {/* <a class="navbar-brand fw-bold" aria-current="page" href="#" style={{ color: "white" }}> Enrolled Courses</a> */}
                            <Link to ={"/user-enrolledcourse"} class="nav-link " id="userAcademy">Enrolled Courses</Link>
                        </li>
                    </ul>
                    <ul class="nav">
                        <li class="nav-item">
                            <button type="button" id="logout" className="btn btn-outline-light" onClick={handleLogout}>Log Out</button>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* <div >
                <div class="row my-4">
                    <div class="col btn-group mx-5">

                        <button type="button" id="userAcademy" class="btn btn-outline-light ">Academy</button>
                        <button type="button" id="userEnrolledCourse" class="btn btn-outline-light ">Enrolled Course</button>


                    </div>
                    <div class="col mx-5">
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
                            <button class="btn btn-outline-light" id="searchButton" type="submit" >Search</button>
                        </form>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default UserNavbar;