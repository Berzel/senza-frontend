import axios from "axios";
import withSession from "../../lib/session";

export default withSession(async (req, res) => {
  const tokenData = req.session.get("token");
  const token = tokenData?.data?.token;
  
  if (!token) {
    return res.json(null);
  }

  try {
    const response = await axios.get(`${process.env.AUTH_SERVICE_URL}/user`, {headers: {
        'Authorization': `Bearer ${token}`
    }}).then(r => r.data)

    return res.json(response.data)
  } catch (error) {
    return res.json(null);
  }
});