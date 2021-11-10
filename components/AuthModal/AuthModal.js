import LoginModalStyles from "./LoginModal.styled"
import Link from "next/link"
import { useEffect, useState } from "react"
import useUser from "../../lib/useUser"
import axios from "axios"

const AuthModal = ({close}) => {
    const [mode, setMode] = useState('login');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('email');
    const [usernameValue, setUsernameValue] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const {user, setUser, loginError} = useUser();
    const [validationErrors, setValidationErrors] = useState({});
    const [validationTimers, setValidationTimers] = useState({});

    useEffect(() => {
        localStorage.setItem('authModalOpen', true)

        const handlePopStateChange = e => {
            close();
        }

        window.addEventListener('popstate', handlePopStateChange);

        return () => {
            window.removeEventListener('popstate', handlePopStateChange);
        }
    }, [])

    if (user) close();

    const toggleMode = () => {
        setValidationErrors({});
        if (mode === "login") setMode("register")
        if (mode === "register") setMode("login")
    }

    const onEmailChange = e => {
        let email = e.target.value;
        setEmail(email)
        setUsername("email");
        setUsernameValue(email);
    
        // We do not wan't to perfom any validation if input length is < 5
        if (e.target.value.length < 5) {
            return;
        }

        // If we had previously set a timer we should clear it
        if (validationTimers?.emailTimer) {
            clearTimeout(validationTimers?.emailTimer)
        }

        // Set the new timer
        setValidationTimers({...validationTimers, emailTimer: setTimeout(async () => {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_AUTH_ENDPOINT}/helpers/check-email?email=${e.target.value}`).then(r => r.data)
            if (response.exists) setValidationErrors({...validationErrors, email: response.message})
            if (!response.exists) setValidationErrors({...validationErrors, email: null})
        }, 50)})
    }

    const onPhoneChange = e => {
        let phone = e.target.value;
        setPhone(phone)
        setUsername("phone");
        setUsernameValue(phone);
    
        // We do not wan't to perfom any validation if input length is < 5: Phone numbers inc country code should be longer than 5
        if (e.target.value.length < 5) {
            return;
        }

        // If we had previously set a timer we should clear it
        if (validationTimers?.phoneTimer) {
            clearTimeout(validationTimers?.phoneTimer)
        }

        // Set the new timer
        setValidationTimers({...validationTimers, phoneTimer: setTimeout(async () => {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_AUTH_ENDPOINT}/helpers/check-phone?phone=${encodeURIComponent(e.target.value)}`).then(r => r.data)
            if (response.exists) setValidationErrors({...validationErrors, phone: response.message})
            if (!response.exists) setValidationErrors({...validationErrors, phone: null})
        }, 50)})
    }

    const onPasswordChange = e => {
        let value = e.target.value
        setPassword(value)
        setPasswordConfirmation(value)

        if (value.length < 6) {
            return setValidationErrors({...validationErrors, password: 'The password must be at least 6 characters long.'})
        }

        setValidationErrors({...validationErrors, password: null})
    }

    const onUsernameChange = e => {
        const value = e.target.value;
        isNaN(value.replaceAll(/\+|\s/g, "")) 
            ? setUsername('email') 
            : setUsername('phone');

        setUsernameValue(value);
    }

    const handleSubmit = async event => {
        event.preventDefault();
        setValidationErrors({});

        if (mode === "register") {
            try {
                const registerResponse = await axios.post('/api/register', {email, phone, password, password_confirmation});
            } catch (err) {
                if (err.response && err.response.status === 422) {
                    let newValidationErrors = {...validationErrors};

                    Object.keys(err.response.data.errors).forEach(key => {
                        newValidationErrors[key] = err.response.data.errors[key][0];
                    })

                    setValidationErrors(newValidationErrors)
                }

                return;
            }
        }

        try {
            let loginData = {};
            loginData['password'] = password;
            loginData[username] = usernameValue;
            const loginResponse = await axios.post('/api/login', loginData).then(r => r.data);
            localStorage.setItem('auth_token', loginResponse.data.token);
            setTimeout(() => setUser('/api/user'), 1);
            close();
        } catch (err) {
            if (err.response && err.response.status === 422) {
                let newValidationErrors = {...validationErrors};

                Object.keys(err.response.data.errors).forEach(key => {
                    newValidationErrors[key] = err.response.data.errors[key][0]; // Only take the first error message to display
                })

                newValidationErrors.username = newValidationErrors?.phone ?? newValidationErrors.email;
                setValidationErrors(newValidationErrors)
            }
        }
    }

    return (
        <LoginModalStyles style={{margin: 0}} onClick={e => close()}>
            <form action="#" method="POST" className="form" onClick={e => e.stopPropagation()} onSubmit={handleSubmit}>
                <div className="heading">
                    <h2 className="title">{mode}</h2>
                    <p className="body">You must log in first or create an account to continue.</p>
                </div>
                <div className="section">
                    {
                        mode === "login" && (
                            <div className="form_group">
                                <label htmlFor="username" className="label">Email / Phone</label>
                                <input type={username === 'phone' ? 'text' : 'email'} className={`input ${validationErrors?.username ? 'has-error' : ''}`} name={username} value={usernameValue} onChange={onUsernameChange} id="username" placeholder="you@email.com" required/>
                                { validationErrors?.username && <span className="error-msg">{validationErrors?.username}</span> }
                            </div>
                        )
                    }
                    {
                        mode === "register" && (
                            <>
                                <div className="form_group">
                                    <label htmlFor="email" className="label">Email</label>
                                    <input type="email" className={`input ${validationErrors?.email ? 'has-error' : ''}`} name="email" value={email} onChange={onEmailChange} id="email" placeholder="you@email.com" required/>
                                    { validationErrors?.email && <span className="error-msg">{validationErrors?.email}</span> }
                                </div>
                                <div className="form_group">
                                    <label htmlFor="phone" className="label">Phone number</label>
                                    <input type="text" className={`input ${validationErrors?.phone ? 'has-error' : ''}`} name="phone" value={phone} onChange={onPhoneChange} id="phone" placeholder="+263783632563" required/>
                                    { validationErrors?.phone && <span className="error-msg">{validationErrors?.phone}</span> }
                                </div>
                            </>
                        )
                    }
                    <div className="form_group">
                        <label htmlFor="password" className="label">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={password} 
                            onChange={onPasswordChange} 
                            className={`input ${validationErrors?.password ? 'has-error' : ''}`}
                            placeholder="********" 
                            required />
                        { validationErrors?.password && <span className="error-msg">{validationErrors?.password}</span> }
                        {
                            mode === "login" && (
                                <div className="forgot-password">
                                    <Link href="#" scroll={false}>
                                        <a>
                                            Forgot password?
                                        </a>
                                    </Link>
                                </div>
                            )
                        }
                    </div>

                    <div className="form_group">
                        <input type="submit" className="input submit" value={mode} />
                    </div>
                    <div className="form_group register">
                        {mode === 'login' ? "Don't" : "Already"} have an account? <br />
                        <button className="register-btn" onClick={e => {e.preventDefault(); toggleMode()}}>
                            {mode === "login" ? "Register" : "Login"} now.
                        </button>
                    </div>
                </div>
            </form>
        </LoginModalStyles>
    )
}

export default AuthModal