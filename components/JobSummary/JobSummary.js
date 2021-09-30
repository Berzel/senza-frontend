import Link from "next/link"
import JobSummaryStyles from "./JobSummary.styled"

const JobSummary = () => (
    <JobSummaryStyles>
        <Link href={`/job/software-developer-${Math.random(3).toString(36).substring(9)}`}>
            <a>
                <div className="top">
                    <div className="left">
                        <h3 className="title">Software Developer</h3>
                        <div className="salary">$5.5K - $7.5K / month</div>
                    </div>
                    <div className="right">
                        <div className="company-logo"></div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <p className="location">Harare, Remote</p>
                    </div>
                    <div className="right">
                        <p className="company-name">Maverik Inc</p>
                    </div>
                </div>
            </a>
        </Link>
    </JobSummaryStyles>
)

export default JobSummary