import JobSummary from "./JobSummary";
import JobListStyles from "./JobSummaryList.styled";

const JobSummaryList = ({jobs}) => (
    <JobListStyles>
        <h2 className="title">New jobs</h2>
        <div className="jobs">
            <ul className="list">
                {
                    jobs.map(job => (
                        <li>
                            <JobSummary job={job} />
                        </li>)
                    )
                }
            </ul>
            <div className="detail">
                Selected Job Details
            </div>
        </div>
    </JobListStyles>
)

export default JobSummaryList