import React from 'react'
import Auth_Service from '../../services/Auth_Service'
import { useNavigate } from 'react-router-dom'
function AdminNavbar() {
    const navigate = useNavigate()

    const handleLogout = () => {
        Auth_Service.logout()
        navigate('/')
    }
    return (
        <div>
            <nav class="navbar navbar-fixed-top">
                <div className="container-fluid d-flex justify-content-between">
                    <ul class="nav"></ul>
                    <ul class="nav">
                        <li class="nav-item">
                            <a class="navbar-brand fw-bold" aria-current="page" href="#" style={{ color: "white" }}>Cricket Academy</a>
                        </li>
                    </ul>
                    <ul class="nav">
                        <li class="nav-item">
                            <button type="button" id="logout" class="btn btn-outline-light" onClick={
                                handleLogout
                            }>Log Out</button>
                        </li>
                    </ul>
                </div>
            </nav>

            <div >
                <div class="row my-4">
                    <div class="col btn-group mx-5">

                        <button type="button" id="adminAcademy" class="btn btn-outline-light ">Academies</button>
                        <button type="button" id="adminStudent" class="btn btn-outline-light ">Students</button>
                        <button type="button" id="adminEnrolledCourse" class="btn btn-outline-light ">Courses</button>

                    </div>
                    <div class="col mx-5">
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
                            <button class="btn btn-outline-light" id="searchButton" type="submit" >Search</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdminNavbar