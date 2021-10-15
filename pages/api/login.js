import { withIronSession } from "next-iron-session";

async function login(req, res) {
    if (req.method !== 'POST') {
        return res.writeHead(405, {
            'Content-Type': 'application/json'
        }).end(JSON.stringify({success: false, message: `HTTP method [${req.method}] not allowed.`}));
    }

    // Get user details from the database

    // Save user data to request session
    req.session.set('user', {
        id: 1,
        is_admin: true,
        email: 'berzel.best@gmail.com',
    });

    const redirect_url = req.session.get('intended') ?? '/';
    req.session.set('intended', null);
    await req.session.save();

    return res.writeHead(200, {
        'Location' : redirect_url,
        'Content-Type': 'application/json'
    }).end(JSON.stringify({message: "Logged in.", redirect_url}));
}

export default withIronSession(login, {
    password: 'complex_password_at_least_32_characters_long',
    cookieName: 'senza_session',
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production'
    }
})