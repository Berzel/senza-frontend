import axios from "axios";

export default async function register(req, res) {
    if (req.method !== 'POST') {
        return res.writeHead(405, {
            'Content-Type': 'application/json'
        }).end(JSON.stringify({success: false, message: `HTTP method [${req.method}] not allowed.`}));
    }

    try {
        const response = await axios.post(`${process.env.AUTH_SERVICE_URL}/register`, req.body, {auth: {
            username: process.env.APP_NAME,
            password: process.env.APP_SECRET
        }}).then(r => r.data)
    
        return res.writeHead(201, {
            'Content-Type': 'application/json'
        }).end(JSON.stringify(response));
    } catch (err) {
        if (err.response) {
            return res.writeHead(err.response.status, {
                ...err.response.headers
            }).end(JSON.stringify(err.response.data))
        }
    }
}