import { useState, useEffect } from "react";
import AuthService from '../services/Auth_Service';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';
function Login() {
    const initialValues = { username: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState();
    let navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        if (Object.keys(formErrors).length === 0) {
            AuthService.login(formValues.username, formValues.password).then(
                (response) => {
                    const role = response.roles[0]
                    setSuccess(true)
                    if (role === "ROLE_ADMIN")
                        navigate('/admin-dashboard')
                    else if (role === "ROLE_USER")
                        navigate('/user-dashboard')
                    else
                        console.log("Error")
                },
                () => {
                    setSuccess(false)
                    setMessage("Invalid username or password!!")
                }
            );
        }
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        if (!values.username) {
            errors.username = "Username is required";
        }
        // else if (values.username.length < 4) {
        //     errors.username = "Username must be more than 4 characters";
        // }
        // else if (values.username.length > 12) {
        //     errors.username = "Username must be less than 12 characters";
        // }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
    };

    return (
        <div className="container" style={{ display: " flex" }}>

            <div>
                <h1 style={{ textAlign: "center" }} className="fw-bold">Cricket Academy</h1>
            </div>

            <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
                <h3 className="fw-bold">Login</h3>

                <div className="ui form">

                    <div className="field rounded my-3 ">
                        <input

                            type="text"
                            name="username"
                            id="username"
                            placeholder="Enter Username..."
                            value={formValues.username}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{formErrors.username}</p>
                    <div className="field my-3">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter Password..."
                            value={formValues.password}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{formErrors.password}</p>

                    <button type="submit" class="btn btn-primary  mb-2 pb-3" id="loginButton" >Login</button>

                    <div className="d-flex justify-content-center my-3">

                        <h6 className="mx-2">New User? </h6>
                        <Link to={"/signup"}  id="signupLink">Sign Up</Link>
                    </div>

                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}

export default Login;

