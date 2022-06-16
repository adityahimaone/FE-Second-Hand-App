import React, { useState } from "react";
import loginimg from "../../assets/image/loginimg.png"
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";


function Login() {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
        role: '',
    });

    return (
        <section className="vh-100">
            <div className="container-fluid ">
                <div className="container ">
                    <div className="row ">
                        <div className="col-lg-6 col-md-12" >
                            <img src={loginimg} alt="login image" className="img-fluid lg" />
                        </div>

                        <div className="form col-4 offset-1" >
                            <section className="form-content my-1">
                                <h1>Masuk</h1>
                                <p>Email</p>
                                <input className="form-label"
                                    required
                                    style={{ marginButtom: '1rem' }}
                                    placeholder="Contoh: johndee@gmail.com"
                                    value={loginData.email}
                                    onChange={(e) =>
                                        setLoginData({
                                            ...loginData,
                                            email: e.target.value,
                                        })
                                    }
                                />
                                <p>Password</p>
                                <input className="form-label"
                                    required
                                    style={{ marginButtom: '1rem' }}
                                    placeholder='Masukkan password'
                                    type='password'
                                    value={loginData.password}
                                    onChange={(e) =>
                                        setLoginData({
                                            ...loginData,
                                            password: e.target.value,
                                        })
                                    }
                                />
                                <Button className="button my-3 text-masuk" href="#">Masuk</Button>

                            </section>
                            <section className="account">
                                <p style={{ textAlign: 'center ' }}>
                                    Belum punya akun? <a href="Daftar"> <span className="fw-bold daftar"> Daftar di sini</span></a>
                                </p>
                            </section>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;