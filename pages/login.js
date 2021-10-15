import { useRouter } from "next/router"
import axios from "axios";
import { useState } from "react";

const Login = () => {
    const router = useRouter()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = async event => {
        event.preventDefault()
        
        try {
            const response = await  axios.post('/api/login', {username, password})
            router.push(response.data.redirect_url)
        } catch (err) {
            console.log(err.response.data)
        }
    }

    return (
        <div>
            <form action="/api/login" method="POST" onSubmit={login}>
                <button>
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login