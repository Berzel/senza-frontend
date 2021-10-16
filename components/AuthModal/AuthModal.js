import LoginModalStyles from "./LoginModal.styled"
import Link from "next/link"
import { useState } from "react"

const AuthModal = ({close}) => {
    const [mode, setMode] = useState('login')
    const toggleMode = () => {
        if (mode === "login") setMode("register")
        if (mode === "register") setMode("login")
    }

    return (
        <LoginModalStyles>
            <form action="/login" method="POST" className="form">
                <div className="heading">
                    <div className="close-btn" draggable="true" onDragStart={() => {}} onDragEnd={close}>
                        <button>
                            Close
                        </button>
                    </div>
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