import React from 'react'
import AcademyList from './AcademyList'
import AdminNavbar from './AdminNavbar'
import { NavLink } from 'react-router-dom'

const AdminDashboard = () => {
    return (
        <>
            <AdminNavbar />
            <button type="button" id="adminEnrolledCourse" className="btn btn-outline-light">
                <NavLink to="/add-academy" className="link">
                    Add Institute
                </NavLink>
            </button>
            <AcademyList />
        </>
    )
}

export default AdminDashboard