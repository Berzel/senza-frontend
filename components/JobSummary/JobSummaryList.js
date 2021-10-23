import axios from "axios";
import { useEffect, useState } from "react";
import JobSummary from "./JobSummary";
import JobListStyles from "./JobSummaryList.styled";

const JobSummaryList = ({title, jobs}) => {

    const [allPages, setAllPages] = useState([jobs]);
    const [scrolledTo, setScrolledTo] = useState(0);
    const getAllJobs = () => allPages.reduce((allJobs, el) => allJobs.concat(el.data), []);
    const [activeJob, setActiveJob] = useState(getAllJobs().length > 0 ? getAllJobs()[0] : null)

    const getNextPage = async () => {
        const previousPage = allPages[allPages.length - 1];
        if (!previousPage.next_page_url) return;
        const nextPage = await axios.get(`${previousPage.next_page_url}&size=${previousPage.per_page}`).then(r => r.data)
        setAllPages([...allPages, nextPage]);
    }

    useEffect(() => {
        if (getAllJobs().length > 0) {
            setActiveJob(getAllJobs()[0])
        }

        document.addEventListener('scroll', () => {
            let ticking = false;
            let lastScrollPos = 0;

            if (!ticking) {
                setTimeout(() => {
                    let currentPos = window.scrollY;
                    if (currentPos > lastScrollPos) setScrolledTo(currentPos)
                    lastScrollPos =  window.scrollY;
                    ticking = false;
                }, 2000)
            }

            ticking = true;
        })
    }, [])

    useEffect(() => {
        getNextPage()
    }, [scrolledTo])

    const fetchNextJobs = e => {
        getNextPage()
    }

    return (
        <JobListStyles>
            <h2 className="title">{title}</h2>
            <div className="jobs">
                <ul className="list">
                    {
                        getAllJobs().map(job => (
                            <li key={job.id}>
                                <JobSummary setActiveJob={setActiveJob} job={job} active={activeJob.id === job.id} />
                            </li>)
                        )
                    }
                    <li>
                        <button className="more" onClick={fetchNextJobs}>
                            More
                        </button>
                    </li>
                </ul>
                <div className="detail">
                    {
                        activeJob && (
                            <div>
                                {activeJob.title}
                            </div>
                        )
                    }
                    {
                        !activeJob && (
                            <h1>
                                Nothing to show
                            </h1>
                        )
                    }
                </div>
            </div>
        </JobListStyles>
    )
}

export default JobSummaryList