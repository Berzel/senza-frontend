import useSWR from "swr";

const useUser = () => {
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const response = useSWR("/api/user", fetcher);
    return {
        user: response.data,
        error: response.error,
        setUser: response.mutate,
    };
}

export default useUser