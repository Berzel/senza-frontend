import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import MainSearchStyles from "./MainSearch.styled"

const MainSearch = () => {
    const router = useRouter();
    const [query, setQuery] = useState('');
    const [location, setLocation] = useState('');

    useEffect(() => {
        setQuery(router.query.q ?? '')
        setLocation(router.query.location ?? '')
    }, [router])

    const handleSubmit = e => {
        e.preventDefault();
        router.push(`/search?q=${query}&location=${location}`);
    }

    return (
        <MainSearchStyles>
            <h1 className="title">
                Find jobs
            </h1>
            <form id="search-form" className="form" action="/search" onSubmit={handleSubmit}>
                <div className="group query">
                    <i className="icon">
                        <svg enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512">
                            <g>
                                <path d="m141.37 116.52c-7.384-7.39-19.364-7.39-26.748 0-27.416 27.416-40.891 65.608-36.975 104.79 0.977 9.761 9.2 17.037 18.803 17.037 0.631 0 1.267-0.032 1.898-0.095 10.398-1.04 17.983-10.316 16.943-20.707-2.787-27.845 6.722-54.92 26.079-74.278 7.39-7.383 7.39-19.364 0-26.747z"/>
                            </g>
                            <g>
                                <path d="m216.28 0c-119.26 0-216.28 97.021-216.28 216.28s97.021 216.28 216.28 216.28 216.28-97.021 216.28-216.28-97.022-216.28-216.28-216.28zm0 394.72c-98.396 0-178.44-80.047-178.44-178.44s80.047-178.44 178.44-178.44c98.39 0 178.44 80.047 178.44 178.44s-80.047 178.44-178.44 178.44z"/>
                            </g>
                            <g>
                                <path d="m506.46 479.71-137.46-137.46c-7.39-7.39-19.358-7.39-26.748 0-7.39 7.384-7.39 19.364 0 26.748l137.46 137.46c3.695 3.695 8.531 5.542 13.374 5.542s9.679-1.847 13.374-5.542c7.389-7.384 7.389-19.364 0-26.748z"/>
                            </g>
                        </svg>
                    </i>
                    <input className="query" type="text" name="q" value={query} onChange={e => setQuery(e.target.value)} placeholder="Job title or keyword" />
                </div>
                <div className="group location">
                    <i className="icon">
                        <svg enableBackground="new 0 0 368.16 368.16" version="1.1" viewBox="0 0 368.16 368.16">
                            <path d="m184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.29c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.3c5.096-7.728 12.144-20.912 15.72-29.4 0.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zm109.72 182.15c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.3c-1.84 2.792-2.424 2.792-4.264 0l-93.256-141.3c-4.568-6.928-11.136-19.2-14.328-26.808-0.136-0.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"/>
                            <path d="m184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z"/>
                        </svg>
                    </i>
                    <input className="location" type="text" name="location" value={location} onChange={e => setLocation(e.target.value)} placeholder="Location" />
                </div>
                <div className="group btn">
                    <button className="btn">Search</button>
                </div>
            </form>
            <div>
                <button form="search-form" className="filters">
                    Search
                </button>
            </div>
        </MainSearchStyles>
    )
}

export default MainSearch