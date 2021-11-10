import { withIronSession } from "next-iron-session";

async function logout(req, res) {
    if (req.method !== 'POST') {
        return res.writeHead(405, {
            'Content-Type': 'application/json'
        }).end(JSON.stringify({success: false, message: `HTTP method [${req.method}] not allowed.`}));
    }

    try {    
        req.session.destroy();
    
        return res.writeHead(200, {
            'Content-Type': 'application/json'
        }).end(JSON.stringify({success: true, message: `Logged out`}));
    } catch (err) {
        if (err.response) {
            return res.writeHead(err.response.status, {
                ...err.response.headers
            }).end(JSON.stringify(err.response.data))
        }
    }
}

export default withIronSession(logout, {
    password: 'complex_password_at_least_32_characters_long',
    cookieName: 'senza_session',
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production'
    }
})