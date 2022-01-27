import LoginModalStyles from "./LoginModal.styled"
import Link from "next/link"
import { useEffect, useState } from "react"
import useUser from "../../lib/useUser"
import axios from "../../lib/axios";
import { useRouter } from "next/dist/client/router"
import BeatLoader from "react-spinners/BeatLoader";

const AuthModal = ({close}) => {
    const router = useRouter();
    const [name, setName] = useState('');
    const {user, mutateUser} = useUser();
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [mode, setMode] = useState('login');
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const [validationErrors, setValidationErrors] = useState({});

    useEffect(() => {
        localStorage.setItem('authModalOpen', true)
        window.history.pushState({}, '', '#auth-modal')

        const handlePopStateChange = e => {
            close();
        }

        window.addEventListener('popstate', handlePopStateChange);

        return () => {
            window.removeEventListener('popstate', handlePopStateChange);
        }
    }, [])

    if (user) close();

    const toggleMode = mode => {
        setPassword("");
        setValidationErrors({});
        if (mode === "login") setMode("login")
        if (mode === "register") setMode("register")
        if (mode === "forgot_password") setMode("forgot_password")
    }

    const onEmailChange = e => {
        setEmail(e.target.value)
    }

    const onPhoneChange = e => {
        setPhone(e.target.value)
    }

    const onPasswordChange = e => {
        let value = e.target.value
        setPassword(value)
        setPasswordConfirmation(value)
    }

    const handleError = err => {
        setLoading(false);

        if (err.response && err.response.status === 422) {
            let newValidationErrors = {...validationErrors};

            Object.keys(err.response.data.errors).forEach(key => {
                newValidationErrors[key] = err.response.data.errors[key][0]; // Only take the first error message to display
            })

            setValidationErrors(newValidationErrors)
        }
    }

    const login = async () => {
        try {
            setLoading(true);
            await axios.post(`/login`, {email, password, remember: true}).then(r => {
                setLoading(false);
                close();
                return r.data;
            });
            
            mutateUser('/user');
            router.back();

            if (window.location.pathname.startsWith('/job/')) return; // this stops the job details modal from closing on mobile
            localStorage.removeItem('authModalOpen')
        } catch (err) {
            return handleError(err);
        }
    }

    const register = async () => {
        try {
            setLoading(true);    
            await axios.post(`/register`, {name, email, phone, password, password_confirmation});
            await login();
        } catch (err) {
            return handleError(err);
        }
    }

    const forgot_password = async () => {
        try {
            setLoading(true);
            await axios.post(`/password_reset_codes`, {email}).then(r => r.data);
            toggleMode("reset_password");
            setLoading(false);
        } catch (err) {
            return handleError(err);
        }
    }

    const handleSubmit = async event => {
        event.preventDefault();
        setValidationErrors({});
        await axios.get(`/sanctum/csrf-cookie`);
        return {register, login, forgot_password}[mode]();
    }

    const handleOverlayClick = e => {
        router.back(); 
        close();

        if (window.location.pathname.startsWith('/job/')) return;
        localStorage.removeItem('authModalOpen')
    }

    return (
        <LoginModalStyles style={{margin: 0}} onClick={handleOverlayClick}>
            <form action="#" method="POST" className="form" onClick={e => e.stopPropagation()} onSubmit={handleSubmit}>
                <div className="heading">
                    <h2 className="title">
                        {
                            {
                                login: "Login",
                                register: "Register",
                                forgot_password: "Forgot Password"
                            }[mode]
                        }
                    </h2>
                    <p className="body">
                        {
                            (mode === "login" || mode === "register") && (
                                <>
                                    You must log in first or create an account to continue.
                                </>
                            )
                        }

                        {
                            mode === "forgot_password" && (
                                <>
                                    Enter your registered email address to recieve password reset code.
                                </>
                            )
                        }
                    </p>
                </div>
                <div className="section">
                    {
                        mode === "login" && (
                            <div className="form_group">
                                <label htmlFor="email" className="label">Email</label>
                                <input type="email" className={`input ${validationErrors?.email ? 'has-error' : ''}`} name={email} value={email} onChange={onEmailChange} id="email" placeholder="you@email.com" required/>
                                { validationErrors?.email && <span className="error-msg">{validationErrors?.email}</span> }
                            </div>
                        )
                    }

                    {
                        mode === "forgot_password" && (
                            <div className="form_group">
                                <label htmlFor="email" className="label">Email</label>
                                <input type="email" className={`input ${validationErrors?.email ? 'has-error' : ''}`} name={email} value={email} onChange={onEmailChange} id="email" placeholder="you@email.com" required/>
                                { validationErrors?.email && <span className="error-msg">{validationErrors?.email}</span> }
                            </div>
                        )
                    }

                    {
                        mode === "register" && (
                            <>
                                <div className="form_group">
                                    <label htmlFor="name" className="label">Name</label>
                                    <input type="text" className={`input ${validationErrors?.name ? 'has-error' : ''}`} name="name" value={name} onChange={e => setName(e.target.value)} id="name" placeholder="Fullname" required/>
                                    { validationErrors?.name && <span className="error-msg">{validationErrors?.name}</span> }
                                </div>
                                <div className="form_group">
                                    <label htmlFor="email" className="label">Email</label>
                                    <input type="email" className={`input ${validationErrors?.email ? 'has-error' : ''}`} name="email" value={email} onChange={onEmailChange} id="email" placeholder="you@email.com" required/>
                                    { validationErrors?.email && <span className="error-msg">{validationErrors?.email}</span> }
                                </div>
                                <div className="form_group">
                                    <label htmlFor="phone" className="label">Phone number</label>
                                    <input type="text" className={`input ${validationErrors?.phone ? 'has-error' : ''}`} name="phone" value={phone} onChange={onPhoneChange} id="phone" placeholder="+2637XXXXXXXX" required/>
                                    { validationErrors?.phone && <span className="error-msg">{validationErrors?.phone}</span> }
                                </div>
                            </>
                        )
                    }
                    {
                        (mode === "login" || mode === "register") && (
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
                                            <button type="button" onClick={e => {e.preventDefault(); toggleMode("forgot_password")}}>
                                                Forgot password?
                                            </button>
                                        </div>
                                    )
                                }
                            </div>
                        )
                    }

                    <div className="form_group">
                        {
                            mode === "login" && (
                                <button type="submit" className="input submit" disabled={loading ? "disabled" : ""}>
                                    {
                                        loading 
                                            ? (<BeatLoader color="#fff" />)
                                            : (<span>Login</span>)
                                    }
                                </button>
                            )
                        }
                        {
                            mode === "register" && (
                                <button type="submit" className="input submit" disabled={loading ? "disabled" : ""}>
                                    {
                                        loading 
                                            ? (<BeatLoader color="#fff" />)
                                            : (<span>Register</span>)
                                    }
                                </button>
                            )
                        }

                        {
                            mode === "forgot_password" && (
                                <button type="submit" className="input submit" disabled={loading ? "disabled" : ""}>
                                    {
                                        loading 
                                            ? (<BeatLoader color="#fff" />)
                                            : (<span>Continue</span>)
                                    }
                                </button>
                            )
                        }
                    </div>
                    <div className="form_group register">
                        {
                            (mode === "login" || mode === "forgot_password") && (
                                <>
                                    Don't have an account? <br />
                                    <button className="register-btn" onClick={e => {e.preventDefault(); toggleMode("register")}}>
                                        Register now.
                                    </button>
                                </>
                            )
                        }

                        {
                            mode === "register" && (
                                <>
                                    Already have an account? <br />
                                    <button className="register-btn" onClick={e => {e.preventDefault(); toggleMode("login")}}>
                                        Login now.
                                    </button>
                                </>
                            )
                        }
                    </div>
                </div>
            </form>
        </LoginModalStyles>
    )
}

export default AuthModal