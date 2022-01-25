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
    const [username, setUsername] = useState('email');
    const [usernameValue, setUsernameValue] = useState('');
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
    }

    const onPhoneChange = e => {
        let phone = e.target.value;
        setPhone(phone)
        setUsername("phone");
        setUsernameValue(phone);
    }

    const onPasswordChange = e => {
        let value = e.target.value
        setPassword(value)
        setPasswordConfirmation(value)
    }

    const onUsernameChange = e => {
        const value = e.target.value;
        isNaN(value.replaceAll(/\+|\s/g, "")) 
            ? setUsername('email') 
            : setUsername('phone');

        setUsernameValue(value);
    }

    const handleError = err => {
        if (err.response && err.response.status === 422) {
            let newValidationErrors = {...validationErrors};

            Object.keys(err.response.data.errors).forEach(key => {
                newValidationErrors[key] = err.response.data.errors[key][0]; // Only take the first error message to display
            })

            newValidationErrors.username = newValidationErrors?.phone ?? newValidationErrors.email;
            setValidationErrors(newValidationErrors)
        }
    }

    const handleSubmit = async event => {
        setLoading(true);
        event.preventDefault();
        setValidationErrors({});
        await axios.get(`/sanctum/csrf-cookie`);

        if (mode === "register") {
            try {
                await axios.post(`/register`, {name, email, phone, password, password_confirmation});
            } catch (err) {
                handleError(err);
                setLoading(false);
                return;
            }
        }

        try {
            let loginData = {};
            loginData['password'] = password;
            loginData['email'] = usernameValue;
            loginData['remember'] = true;
            await axios.post(`/login`, loginData).then(r => r.data);
            setTimeout(() => mutateUser('/user'), 1);
            router.back();
            close();

            if (window.location.pathname.startsWith('/job/')) return; // this stops the job details modal from closing on mobile
            localStorage.removeItem('authModalOpen')
            setLoading(false);
        } catch (err) {
            handleError(err)
            setLoading(false);
        }
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
                    <h2 className="title">{mode}</h2>
                    <p className="body">You must log in first or create an account to continue.</p>
                </div>
                <div className="section">
                    {
                        mode === "login" && (
                            <div className="form_group">
                                <label htmlFor="username" className="label">Email</label>
                                <input type={username === 'phone' ? 'text' : 'email'} className={`input ${validationErrors?.username ? 'has-error' : ''}`} name={username} value={usernameValue} onChange={onUsernameChange} id="username" placeholder="you@email.com" required/>
                                { validationErrors?.username && <span className="error-msg">{validationErrors?.username}</span> }
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
                        <button type="submit" className="input submit" disabled={loading ? "disabled" : ""}>
                            {
                                loading 
                                    ? (<BeatLoader color="#fff" />)
                                    : (<span>{mode}</span>)
                            }
                        </button>
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