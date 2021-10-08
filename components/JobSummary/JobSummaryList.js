import JobSummary from "./JobSummary";
import JobListStyles from "./JobSummaryList.styled";

const JobSummaryList = ({jobs}) => (
    <JobListStyles>
        <h2 className="title">Newest job listings</h2>
        <div className="jobs">
            <ul className="list">
                {
                    jobs.map(job => (
                        <li>
                            <JobSummary job={job} />
                        </li>)
                    )
                }
                <button className="more">
                    More
                </button>
            </ul>
            <div className="detail">
                Selected Job Details
            </div>
        </div>
    </JobListStyles>
)

export default JobSummaryList