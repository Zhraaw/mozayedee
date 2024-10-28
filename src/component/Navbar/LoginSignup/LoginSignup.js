import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './LoginSignup.css';
import user_icon from '../../assets/person.png';
import email_icon from '../../assets/email.png';
import password_icon from '../../assets/password.png';

const LoginSignup = ({ closeModal, userType }) => {
    const [action, setAction] = useState('Login');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 
    const [successMessage, setSuccessMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false); 
    const [rotate, setRotate] = useState(false);

    const validateInputs = () => {
        if (action === 'Sign Up' && name.trim() === '') {
            return 'Name is required.';
        }
        if (!email.includes('@')) {
            return 'Please enter a valid email.';
        }
        if (password.length < 6) {
            return 'Password must be at least 6 characters long.';
        }
        return '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationError = validateInputs();

        if (validationError) {
            setError(validationError);
        } else {
            setError('');

            if (action === 'Login') {
                const registeredEmail = localStorage.getItem('registeredEmail');
                const registeredPassword = localStorage.getItem('registeredPassword');

                if (email !== registeredEmail) {
                    setError('email is incorrect! ');
                    setEmail(''); 
                } else if (password !== registeredPassword) {
                    setError(' password is incorrect! ');
                    setPassword(''); 
                } else {
                    setSuccessMessage(' You have successfully entered! ');
                    setTimeout(() => {
                        closeModal();
                    }, 2000);  
                }
            } else if (action === 'Sign Up') {
                localStorage.setItem('registeredEmail', email);
                localStorage.setItem('registeredPassword', password);
                setSuccessMessage('  Registration was done successfully! ');
                setTimeout(() => {
                    closeModal();
                }, 2000); 
            }
        }
    };

    const handleActionToggle = () => {
        setRotate(true);
        setTimeout(() => {
            setAction(action === 'Login' ? 'Sign Up' : 'Login');
            setRotate(false);
        }, 1000);
    };

    return (
        <div className='modal'>
            <div className={`modal-content ${rotate ? 'rotate' : ''}`}>
                <div className='header'>
                    <div className='text'>{action} {userType}</div>
                    <button className='close-button' onClick={closeModal}>✖️</button>
                    <div className='underline'></div>
                </div>
                <form className='inputs' onSubmit={handleSubmit}>
                    {error && <p className='error-message'>{error}</p>} 
                    {successMessage && <p className='success-message'>{successMessage}</p>}
                    {action === 'Sign Up' && (
                        <div className='input'>
                            <img src={user_icon} alt='User Icon' />
                            <input
                                type='text'
                                placeholder='Name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    )}
                    <div className='input'>
                        <img src={email_icon} alt='Email Icon' />
                        <input
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='input'>
                        <img src={password_icon} alt='Password Icon' />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <i
                            className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                            onClick={() => setShowPassword(!showPassword)}

                        ></i>
                    </div>
                    <div className='submit-container'>
                        <button
                            type='submit'
                            className='submit'
                        >
                            {action}
                        </button>
                    </div>
                </form>
                <p className="toggle-action" onClick={handleActionToggle}>
                    {action === 'Login' ? "Don't have an account? Sign Up" : "Already have an account? Login"}
                </p>
            </div>
        </div>
    );
};

export default LoginSignup;
