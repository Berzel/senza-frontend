import Link from "next/link";
import { useState } from "react";
import JobSummaryStyles from "./JobSummary.styled";
import JobSummaryDetails from "./JobSummaryDetails";

const JobSummary = ({setActiveJob, job, active}) => {
    const [showJob, setShowJob] = useState(false);

    const updateActiveJob = e => {
        e.preventDefault();

        if (window.innerWidth >= 1024) {
            setActiveJob(job);
        }

        else {
            setShowJob(true)
        }
    }

    return (
        <>
            <JobSummaryStyles active={active}>
                <Link href={`/job/${job.slug}`} scroll={true}>
                    <a className={`link`} onClick={updateActiveJob}>
                        <JobSummaryDetails job={job} />
                    </a>
                </Link>
            </JobSummaryStyles>
            
            {
                showJob && 
                <div style={{position: 'fixed', top:0, right: 0, left: 0, bottom: 0, backgroundColor: 'white'}}>
                    {job.title}
                    <button onClick={e => setShowJob(false)}>
                        Close
                    </button>
                </div>
            }
        </>
    )
}

export default JobSummary