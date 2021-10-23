import { useEffect, useState } from "react";
import JobSummary from "./JobSummary";
import JobListStyles from "./JobSummaryList.styled";

const JobSummaryList = ({title, jobs}) => {

    const [activeJob, setActiveJob] = useState(jobs.data.length > 0 ? jobs.data[0] : null)

    useEffect(() => {
        if (jobs.data.length > 0) {
            setActiveJob(jobs.data[0])
        }
    }, [])

    return (
        <JobListStyles>
            <h2 className="title">{title}</h2>
            <div className="jobs">
                <ul className="list">
                    {
                        jobs.data.map(job => (
                            <li key={job.id}>
                                <JobSummary setActiveJob={setActiveJob} job={job} active={activeJob.id === job.id} />
                            </li>)
                        )
                    }
                    <button className="more">
                        More
                    </button>
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
                                No job selected
                            </h1>
                        )
                    }
                </div>
            </div>
        </JobListStyles>
    )
}

export default JobSummaryList