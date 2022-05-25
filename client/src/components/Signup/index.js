import './style.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import React, { useState } from "react";
import { useNavigate } from "react-router";


// name password email
function Signup(props) {

    const [signup, setSignup] = useState({
        user_name: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    function updateUser(value) {
        return setSignup((prev) => {
            return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newPerson = { ...signup };

        await fetch("http://localhost:5000/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        })
            .catch(error => {
                window.alert(error);
                return;
            });

        setSignup({ user_name: "", email: "", password: "" });
        navigate("/dashboard");
        props.setTrigger(false)
    }

    return (props.trigger) ? (
        <div className='signup-popup'>
            <div className='signup-popup-item'>
                {props.children}
                <FontAwesomeIcon className='fa-lg signup-close-btn' onClick={() => props.setTrigger(false)} icon={faXmark} />
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3 signup-label" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="username"
                            placeholder="Enter username"
                            value={signup.user_name}
                            onChange={(e) => updateUser({ user_name: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3 signup-label" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={signup.email}
                            onChange={(e) => updateUser({ email: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3 signup-label" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={signup.password}
                            onChange={(e) => updateUser({ password: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3 signup-label" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Your Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    ) : ""
}

export default Signup;
