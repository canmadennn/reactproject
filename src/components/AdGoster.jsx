// src/Login.js

import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [scc, setSCC] = useState('');

    const handleLogin = () => {
        // Kullanıcı adı ve şifre kontrolü (Sadece basit bir örnek, gerçek uygulamada sunucu ile kontrol edilir.)
        if (username === 'kullanici' && password === 'sifre') {
            setSCC("başarlı")
            setTimeout(() => {
                setSCC('');
            }, 1000);
        } else {
            setError('Kullanıcı adı veya şifre hatalı');
            setTimeout(() => {
                setError('');
            }, 1000);
        }

    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Kullanıcı Girişi</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {scc && <div className="alert alert-success" >{scc}</div>}
            <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        Kullanıcı Adı:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Şifre:
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleLogin}
                >
                    Giriş Yap
                </button>
            </form>
        </div>
    );
};

export default Login;