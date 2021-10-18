import LoginModalStyles from "./LoginModal.styled"
import Link from "next/link"
import { useState } from "react"
import useUser from "../../lib/useUser"
import axios from "axios"

const AuthModal = ({close}) => {
    const [mode, setMode] = useState('login');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const {user, setUser, loginError} = useUser();
    const [validationErrors, setValidationErrors] = useState({});
    const [validationTimers, setValidationTimers] = useState({});

    // We don't wan't to show the modals if user is 
    // already logged in
    if (user) close();

    const toggleMode = () => {
        if (mode === "login") setMode("register")
        if (mode === "register") setMode("login")
    }

    const onEmailChange = e => {
        setEmail(e.target.value)
    
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
        setPhone(e.target.value)
    
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

    const handleSubmit = async event => {
        event.preventDefault();

        if (mode === "register") {
            try {
                const registerResponse = await axios.post('/api/register', {email, phone, password, password_confirmation});
            } catch (err) {
                if (err.response && err.response.status === 422) {
                    let newValidationErrors = {...validationErrors};

                    Object.keys(err.response.data.errors).forEach(key => {
                        newValidationErrors[key] = err.response.data.errors[key][0]; // Only take the first error message to display
                    })

                    setValidationErrors(newValidationErrors)
                }

                return; // If an error happens there's no need to try and log in automatically
            }
        }

        const loginResponse = await axios.post('/api/login', {email, phone, password}).then(r => r.data);
        localStorage.setItem('token', loginResponse.data.token);
        setTimeout(() => setUser('/api/user'), 1);
        close();
    }

    return (
        <LoginModalStyles onClick={close}>
            <form action="#" method="POST" className="form" onClick={e => e.stopPropagation()} onSubmit={handleSubmit}>
                <div className="heading">
                    <h2 className="title">{mode}</h2>
                    <p className="body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non dolores asperiores.</p>
                </div>
                <div className="section">
                    {
                        mode === "login" && (
                            <div className="group">
                                <label htmlFor="username" className="label">Email / Phone</label>
                                <input type="text" className={`input ${validationErrors?.username ? 'has-error' : null}`} name="username" value={username} onChange={e => setUsername(e.target.value)} id="username" placeholder="you@email.com" required/>
                                { validationErrors?.username && <span className="error-msg">{validationErrors?.username}</span> }
                            </div>
                        )
                    }
                    {
                        mode === "register" && (
                            <>
                                <div className="group">
                                    <label htmlFor="email" className="label">Email</label>
                                    <input type="email" className={`input ${validationErrors?.email ? 'has-error' : null}`} name="email" value={email} onChange={onEmailChange} id="email" placeholder="you@email.com" required/>
                                    { validationErrors?.email && <span className="error-msg">{validationErrors?.email}</span> }
                                </div>
                                <div className="group">
                                    <label htmlFor="phone" className="label">Phone number</label>
                                    <input type="text" className={`input ${validationErrors?.phone ? 'has-error' : null}`} name="phone" value={phone} onChange={onPhoneChange} id="phone" placeholder="+263783632563" required/>
                                    { validationErrors?.phone && <span className="error-msg">{validationErrors?.phone}</span> }
                                </div>
                            </>
                        )
                    }
                    <div className="group">
                        <label htmlFor="password" className="label">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={password} 
                            onChange={e => setPassword(e.target.value)} 
                            className={`input ${validationErrors?.password ? 'has-error' : null}`}
                            placeholder="********" 
                            required />
                        { validationErrors?.password && <span className="error-msg">{validationErrors?.password}</span> }
                        {
                            mode === "login" && (
                                <div className="forgot-password">
                                    <Link href="#">
                                        <a>
                                            Forgot password?
                                        </a>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                    {
                        mode === 'register' && (
                            <div className="group">
                                <label htmlFor="password_confirmation" className="label">Password Confirmation</label>
                                <input 
                                    type="password"  
                                    id="password_confirmation" 
                                    name="password_confirmation" 
                                    value={password_confirmation} 
                                    onChange={e => setPasswordConfirmation(e.target.value)} 
                                    className={`input ${validationErrors?.password_confirmation ? 'has-error' : null}`}
                                    placeholder="********"
                                    required />
                                { validationErrors?.password_confirmation && <span className="error-msg">{validationErrors?.password_confirmation}</span> }
                            </div>
                        )
                    }
                    <div className="group">
                        <input type="submit" className="input submit" value={mode} />
                    </div>
                    <div className="group register">
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