import JobSummary from "./JobSummary";
import JobListStyles from "./JobSummaryList.styled";

const JobSummaryList = ({jobs}) => (
    <JobListStyles>
        <h2 className="title">Recommended Jobs</h2>
        <ul className="list">
            {
                jobs.map(job => (
                    <li>
                        <JobSummary job={job} />
                    </li>)
                )
            }
        </ul>
    </JobListStyles>
)

export default JobSummaryList