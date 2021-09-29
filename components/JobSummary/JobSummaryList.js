import JobSummary from "./JobSummary";
import JobListStyles from "./JobSummaryList.styled";

const JobSummaryList = ({jobs}) => (
    <JobListStyles>
        {
            jobs.map(job => (
                <li>
                    <JobSummary job={job} />
                </li>)
            )
        }
    </JobListStyles>
)

export default JobSummaryList