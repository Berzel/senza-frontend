import { useState } from "react";
import JobSummaryStyles from "./JobSummary.styled";
import JobSummaryDetails from "./JobSummaryDetails";
import {DialogOverlay, DialogContent} from '@reach/dialog';
import "@reach/dialog/styles.css";
import Single from "../../pages/job/[slug]";

const JobSummary = ({setActiveJob, job, active}) => {
    const [showJob, setShowJob] = useState(false);

    const updateActiveJob = e => {
        e.preventDefault();
        setActiveJob(job);

        if (window.innerWidth < 1024) {
            setShowJob(true)
            window.history.pushState({}, '', `/job/${job.slug}`)
    
            const handlePopState = e => {
                setShowJob(false);
                setTimeout(() => {
                    window.removeEventListener('popstate', handlePopState)
                }, 50)
            }
    
            window.addEventListener('popstate', handlePopState);
        }
    }

    return (
        <>
            <JobSummaryStyles active={active}>
                <a href={`/job/${job.slug}`} className={`link`} onClick={updateActiveJob}>
                    <JobSummaryDetails job={job} />
                </a>
            </JobSummaryStyles>
            
            {
                showJob && 
                <DialogOverlay isOpen={showJob} onDismiss={() => setShowJob(false)}>
                    <DialogContent aria-label={`${job.title} details`}>
                        <Single job={job} />
                    </DialogContent>
                </DialogOverlay>
            }
        </>
    )
}

export default JobSummary