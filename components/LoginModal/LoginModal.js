import LoginModalStyles from "./LoginModal.styled"
import Link from "next/link"

const LoginModal = () => {
    return (
        <LoginModalStyles>
            <form action="/login" method="POST" className="form">
                <div className="heading">
                    <h2 className="title">Login</h2>
                    <p className="body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non dolores asperiores.</p>
                </div>
                <div className="section">
                    <div className="group">
                        <label htmlFor="username" className="label">Email / Phone</label>
                        <input type="text" className="input" name="username" id="username" placeholder="you@email.com" />
                    </div>
                    <div className="group">
                        <label htmlFor="password" className="label">Password</label>
                        <input type="password"  id="password" name="password" className="input" placeholder="********" />
                        <div className="forgot-password">
                            <Link href="#">
                                <a>
                                    Forgot password?
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="group">
                        <input type="submit" name="password" className="input submit" value="Login" />
                    </div>
                </div>
            </form>
        </LoginModalStyles>
    )
}

export default LoginModal