import React, { useState, useEffect } from 'react'
import Academy_Service from '../../services/Academy_Service'
import AcademyCard from './AcademyCard'
import { NavLink, useNavigate } from 'react-router-dom'
const AcademyList = () => {
    const [academies, setAcademies] = useState([])
    const navigate = useNavigate()
    const listAcademies = () => {
        Academy_Service.get()
            .then(response => {
                console.log(response.data)
                setAcademies(response.data)
            })
            .catch(error => {
                console.log("Something went wrong " + error)
            })
    }
    useEffect(() => {
        listAcademies()
    }, [])

    const handleDelete = (id) => {
        //console.log(id)
        Academy_Service.delete(id)
            .then((response) => {
                listAcademies()
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <>
            <div class="row justify-content-md-center">
                {
                    academies.map(academy => (
                        <div class="card col col-lg-2 p-3 mx-5" id="userAcademyGrid1" key={academy.instituteId}>
                            <AcademyCard name={academy.instituteName} address={academy.instituteAddress} icon={academy.img_url} />
                            <div className="d-flex">
                                <NavLink className="btn btn-warning" to={`/edit-academy/${academy.instituteId}`}>
                                    Edit
                                </NavLink>
                                {/*<NavLink className="btn btn-sm btn-danger">
                                    Delete
                    </NavLink>*/}
                                <button className='btn btn-danger' onClick={() => handleDelete(academy.instituteId)}>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default AcademyList