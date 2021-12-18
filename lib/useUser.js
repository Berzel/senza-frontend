import useSWR from "swr";
import axios from "../lib/axios";

const useUser = () => {
    const fetcher = (...args) => axios.get('/api/user').then(r => r.data);
    const response = useSWR("/user", fetcher);
    return {
        user: response.data,
        error: response.error,
        mutateUser: response.mutate,
    };
}

export default useUser