import Link from "next/link"
import JobSummaryDetails from "./JobSummaryDetails"

const MobileJobSummary = () => {
    return (
        <Link href={`/job/software-developer-${Math.random(3).toString(36).substring(9)}`}>
            <a className="link mobile">
                <JobSummaryDetails />
            </a>
        </Link>
    )
}

export default MobileJobSummary