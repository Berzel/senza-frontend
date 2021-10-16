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

    // We don't wan't to show the modals if user is 
    // already logged in
    if (user) close();

    const toggleMode = () => {
        if (mode === "login") setMode("register")
        if (mode === "register") setMode("login")
    }

    const handleSubmit = async event => {
        event.preventDefault();

        if (mode === "register") {
            await axios.post('/api/register', {email, phone, password, password_confirmation});
        }

        await axios.post('/api/login', {username, password});
        setUser('/api/user');
        close();
    }

    return (
        <LoginModalStyles>
            <form action="#" method="POST" className="form" onSubmit={handleSubmit}>
                <div className="heading">
                    <h2 className="title">{mode}</h2>
                    <p className="body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non dolores asperiores.</p>
                </div>
                <div className="section">
                    {
                        mode === "login" && (
                            <div className="group">
                                <label htmlFor="username" className="label">Email / Phone</label>
                                <input type="text" className="input" name="username" id="username" placeholder="you@email.com" />
                            </div>
                        )
                    }
                    {
                        mode === "register" && (
                            <>
                                <div className="group">
                                    <label htmlFor="email" className="label">Email</label>
                                    <input type="email" className="input" name="email" id="email" placeholder="you@email.com" />
                                </div>
                                <div className="group">
                                    <label htmlFor="phone" className="label">Phone number</label>
                                    <input type="text" className="input" name="phone" id="phone" placeholder="+263783632563" />
                                </div>
                            </>
                        )
                    }
                    <div className="group">
                        <label htmlFor="password" className="label">Password</label>
                        <input type="password"  id="password" name="password" className="input" placeholder="********" />
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
                                <input type="password"  id="password_confirmation" name="password_confirmation" className="input" placeholder="********" />
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