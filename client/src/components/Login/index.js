import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

async function loginUser(credentials) {
    return fetch('http://localhost:5000/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

function Login(props, { setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        console.log(token)
        setToken(token);
    }

    let navigate = useNavigate();
    const loginRedirect = () => {
        let path = `/dashboard`;
        navigate(path);
    };

    return (props.trigger) ? (
        <div className="login-popup">
            <div className="login-popup-item">
                <FontAwesomeIcon
                    className="fa-lg login-close-btn"
                    onClick={() => props.setTrigger(false)}
                    icon={faXmark}
                />
                <Form className="login-form" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="login-label">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={e => setUserName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="login-label">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={(e) => {loginRedirect(); props.setTrigger(false)}}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    ) : (
        ""
    );
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;