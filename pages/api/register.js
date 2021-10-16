export default async function register(req, res) {
    if (req.method !== 'POST') {
        return res.writeHead(405, {
            'Content-Type': 'application/json'
        }).end(JSON.stringify({success: false, message: `HTTP method [${req.method}] not allowed.`}));
    }

    return res.writeHead(201, {
        'Content-Type': 'application/json'
    }).end(JSON.stringify({message: "User registered."}));
}