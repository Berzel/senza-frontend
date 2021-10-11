import Link from "next/link";
import JobSummaryStyles from "./JobSummary.styled";
import JobSummaryDetails from "./JobSummaryDetails";

const updateActiveJob = e => {
    if (window.innerWidth >= 1280) {
        console.log('Desktop')
        e.preventDefault()
    }
}

const JobSummary = () => {
    return (
        <JobSummaryStyles>
            <Link href={`/job/software-developer-${Math.random(3).toString(36).substring(9)}`}>
                <a className="link" onClick={updateActiveJob}>
                    <JobSummaryDetails />
                </a>
            </Link>
        </JobSummaryStyles>
    )
}

export default JobSummary