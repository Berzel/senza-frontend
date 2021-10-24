import Link from "next/link";
import JobSummaryStyles from "./JobSummary.styled";
import JobSummaryDetails from "./JobSummaryDetails";

const JobSummary = ({setActiveJob, job, active}) => {

    const updateActiveJob = e => {
        if (window.innerWidth >= 1024) {
            e.preventDefault();
            setActiveJob(job);
        }
    }

    return (
        <JobSummaryStyles active={active}>
            <Link href={`/job/${job.slug}`} scroll={true}>
                <a className={`link`} onClick={updateActiveJob}>
                    <JobSummaryDetails job={job} />
                </a>
            </Link>
        </JobSummaryStyles>
    )
}

export default JobSummary