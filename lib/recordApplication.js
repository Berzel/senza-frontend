import axios from "./axios";

const recordApplication = async (job) => {
    const response = await axios.post('/applications', {'job_id': job.id}).then(res => res.data);
    console.log(response);
}

export default recordApplication;