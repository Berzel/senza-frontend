import Link from "next/link";
import { useState } from "react";
import JobSummaryStyles from "./JobSummary.styled";
import JobSummaryDetails from "./JobSummaryDetails";
import {DialogOverlay, DialogContent} from '@reach/dialog';
import "@reach/dialog/styles.css";

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
                <DialogOverlay isOpen={showJob} onDismiss={() => setShowJob(false)}>
                    <DialogContent>
                        {job.title}
                        <button onClick={() => setShowJob(false)}>
                            Close
                        </button>
                    </DialogContent>
                </DialogOverlay>
            }
        </>
    )
}

export default JobSummary