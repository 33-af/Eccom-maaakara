import React, { FC, useEffect, useState } from 'react';
import { useLoginMutation } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { Path } from '../../Path';


const Login: FC = () => {
    const navigate = useNavigate()
    const [login, { isLoading }] = useLoginMutation();
    const [credentials, setCredentials] = useState<{ email: string; password: string; name: string }>({
        email: 'test@gmail.com',
        password: '12345678',
        name: 'BOSS',
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate(Path.adminPanel, { replace: true })
        }
    }, [navigate])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log("Submitting login:", credentials);

        try {
            const response = await login({
                email: credentials.email,
                password: credentials.password,
                name: credentials.name
            }).unwrap();
            navigate(Path.adminPanel, { replace: true })
            console.log('Response:', response);
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify({ id: response.id, name: response.name, email: response.email }));
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={credentials.name}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login'}
            </button>
        </form>
    );
};

export default Login;