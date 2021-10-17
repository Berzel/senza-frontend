import axios from "axios";
import { withIronSession } from "next-iron-session";

async function login(req, res) {
    if (req.method !== 'POST') {
        return res.writeHead(405, {
            'Content-Type': 'application/json'
        }).end(JSON.stringify({success: false, message: `HTTP method [${req.method}] not allowed.`}));
    }

    const response = await axios.post(`${process.env.AUTH_SERVICE_URL}/token`, req.body, {auth: {
        username: process.env.APP_NAME,
        password: process.env.APP_SECRET
    }}).then(r => r.data)

    req.session.set('token', response);

    const redirect_url = req.session.get('intended') ?? '/';
    req.session.set('intended', null);
    await req.session.save();

    return res.writeHead(200, {
        'Location' : redirect_url,
        'Content-Type': 'application/json'
    }).end(JSON.stringify({...response, redirect_url}));
}

export default withIronSession(login, {
    password: 'complex_password_at_least_32_characters_long',
    cookieName: 'senza_session',
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production'
    }
})