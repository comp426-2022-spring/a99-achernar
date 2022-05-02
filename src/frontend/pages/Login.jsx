import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

import sty from './login.module.css';

import {
    useNavigate,
} from "react-router-dom";

export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPwd] = useState('');

    const [name, setName] = useState('');
    const [emailaddr, setEmailaddr] = useState('');
    const [age, setAge] = useState('');
    const [county, setCounty] = useState('');

    const [isLogin, setIsLogin] = useState(true);
    let navigate = useNavigate();
    const handleSubmit = () => {
        // Jump to the home page
        if (!username) {
            alert('username must be required!')
            return;
        }
        if (!password) {
            alert('password must be required!')
            return;
        }
        if (isLogin) {
            // Call the signin interface
            axios.post("/app/login", {
                username,
                password
            }).then((res) => {
                if (res.data.code === -1) {
                    alert(res.data.msg)
                } else {
                    alert(res.data.msg)
                    navigate("/")
                }
            }).catch(() => {
                alert("An error has occurred.")
            })

        } else {
            // Call the signup interface
            axios.post("/app/register", {
                username,
                password,
                name, emailaddr, age, county
            }).then((res) => {
                if (res.data.code === -1) {
                    alert(res.data.msg)
                } else {
                    alert(res.data.msg)
                    setIsLogin(true)
                }
            }).catch(() => {
                alert("An error has occurred.")
            })
        }
    }
    return (
        <div className={sty.box}>
            <div className={sty.loginBox}>
                <h1 className={sty.h1}>{isLogin ? 'LOGIN' : 'REGISTER'}</h1>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                            style={{
                                width: '60%'
                            }}
                            label="username"
                        />
                    </div>
                    <div style={{
                        marginTop: 5
                    }}>
                        <TextField
                            style={{
                                width: '60%'
                            }}
                            value={password}
                            onChange={(e) => {
                                setPwd(e.target.value)
                            }}
                            type="password"
                            label="password"
                        />
                    </div>
                    {!isLogin && (
                        <div>
                            <div style={{
                                marginTop: 5
                            }}>
                                <TextField
                                    style={{
                                        width: '60%'
                                    }}
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value)
                                    }}
                                    label="name"
                                />
                            </div>
                            <div style={{
                                marginTop: 5
                            }}>
                                <TextField
                                    style={{
                                        width: '60%'
                                    }}
                                    value={emailaddr}
                                    onChange={(e) => {
                                        setEmailaddr(e.target.value)
                                    }}
                                    label="emailaddr"
                                />
                            </div>
                            <div style={{
                                marginTop: 5
                            }}>
                                <TextField
                                    style={{
                                        width: '60%'
                                    }}
                                    value={age}
                                    onChange={(e) => {
                                        setAge(e.target.value)
                                    }}
                                    label="age"
                                />
                            </div>
                            <div style={{
                                marginTop: 5
                            }}>
                                <TextField
                                    style={{
                                        width: '60%'
                                    }}
                                    value={county}
                                    onChange={(e) => {
                                        setCounty(e.target.value)
                                    }}
                                    label="county"
                                />
                            </div>
                        </div>
                    )}
                </Box>

                <div style={{
                    marginTop: 40
                }}>
                    <Button onClick={handleSubmit} variant="contained">{isLogin ? 'Login' : 'register'}</Button>
                </div>
                <div style={{
                    textAlign: 'right',

                }}>
                    <Button onClick={() => {
                        setIsLogin(!isLogin)
                    }} variant="text">{isLogin ? 'to register' : 'to login'}</Button>
                </div>

            </div>


        </div>
    );

}