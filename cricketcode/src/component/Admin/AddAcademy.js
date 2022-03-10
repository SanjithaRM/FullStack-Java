import React from 'react'
import { useState, useEffect } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import Academy_Service from '../../services/Academy_Service'

const AddAcademy = () => {
    const [addAcademy, setAddAcademy] = useState({
        img_url: "",
        instituteName: "",
        email: "",
        instituteAddress: "",
        mobile: "",
        instituteDescription: ""
    })
    const navigate = useNavigate()
    const { instituteId } = useParams()
    const InputEvent = (e) => {

        const { name, value } = e.target
        setAddAcademy((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log(addAcademy)
        if (instituteId) {
            Academy_Service.update(instituteId, addAcademy)
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log("An error occured!!")
                })
        } else {
            Academy_Service.create(addAcademy)
                .then((response) => {
                    console.log(response)
                    navigate('/admin-dashboard')
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    useEffect(() => {
        console.log(instituteId)
        Academy_Service.getuserbyId(instituteId)
            .then((response) => {
                const res_data = response.data;
                console.log(res_data)
                setAddAcademy(res_data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])


    return (
        <>
            <div className='container d-flex align-items-center'>
                <div className="mb-3">
                    <input type="text"
                        className="form-control"
                        id="academyName"
                        name="instituteName"
                        placeholder="Enter Academy Name"
                        onChange={InputEvent}
                        value={addAcademy.instituteName}
                    />
                </div>
                <div className="mb-3">

                    <input type="email"
                        className="form-control"
                        id="emailId"
                        name="email"
                        placeholder="Enter Academy Email"
                        value={addAcademy.email}
                        onChange={InputEvent}
                    />
                </div>
                <div className="mb-3">

                    <input type="text"
                        className="form-control"
                        id="academyLocation"
                        name="instituteAddress"
                        placeholder="Enter Academy Location"
                        value={addAcademy.instituteAddress}
                        onChange={InputEvent}
                    />
                </div>
                <div className="mb-3">

                    <input type="text"
                        className="form-control"
                        id="contactNumber"
                        name="mobile"
                        placeholder="Enter Academy Contact Number"
                        value={addAcademy.mobile}
                        onChange={InputEvent}
                    />
                </div>
                <div className="mb-3 flex-nowrap">

                    <input className="form-control"
                        id="academyDescription"
                        name="instituteDescription"
                        placeholder="Enter Academy Description"
                        value={addAcademy.instituteDescription}
                        onChange={InputEvent}
                    />
                </div>
                <div className="mb-3">
                    <input className="form-control"
                        id="img_url" //need to change
                        name="img_url"
                        placeholder="Enter Image url "
                        value={addAcademy.img_url}
                        onChange={InputEvent}
                    />
                </div>
                <button type="button" id="adminEnrolledCourse" className="btn btn-success" onClick={(e) => handleSubmit(e)}>
                    Submit
                </button>
            </div>
        </>
    )
}

export default AddAcademy