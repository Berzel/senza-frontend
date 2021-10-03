import SearchBarStyles from "./SearchBar.styled"

const SearchBar = () => (
    <SearchBarStyles>
        <form action="#" className="form">
            <i className="icon">
                <svg enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <g xmlns="http://www.w3.org/2000/svg">
                        <path d="m141.37 116.52c-7.384-7.39-19.364-7.39-26.748 0-27.416 27.416-40.891 65.608-36.975 104.79 0.977 9.761 9.2 17.037 18.803 17.037 0.631 0 1.267-0.032 1.898-0.095 10.398-1.04 17.983-10.316 16.943-20.707-2.787-27.845 6.722-54.92 26.079-74.278 7.39-7.383 7.39-19.364 0-26.747z" fill="#333" data-original="#000000"/>
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                        <path d="m216.28 0c-119.26 0-216.28 97.021-216.28 216.28s97.021 216.28 216.28 216.28 216.28-97.021 216.28-216.28-97.022-216.28-216.28-216.28zm0 394.72c-98.396 0-178.44-80.047-178.44-178.44s80.047-178.44 178.44-178.44c98.39 0 178.44 80.047 178.44 178.44s-80.047 178.44-178.44 178.44z" fill="#333" data-original="#000000"/>
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                        <path d="m506.46 479.71-137.46-137.46c-7.39-7.39-19.358-7.39-26.748 0-7.39 7.384-7.39 19.364 0 26.748l137.46 137.46c3.695 3.695 8.531 5.542 13.374 5.542s9.679-1.847 13.374-5.542c7.389-7.384 7.389-19.364 0-26.748z" fill="#333" data-original="#000000"/>
                    </g>
                </svg>
            </i>
            <input className="query" type="text" placeholder="Find your job here..." />
        </form>
    </SearchBarStyles>
)

export default SearchBar