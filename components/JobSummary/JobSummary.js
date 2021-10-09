import DesktopJobSummary from "./DesktopJobSummary"
import JobSummaryStyles from "./JobSummary.styled"
import MobileJobSummary from "./MobileJobSummary"

const JobSummary = () => (
    <JobSummaryStyles>
        <MobileJobSummary />
        <DesktopJobSummary />
    </JobSummaryStyles>
)

export default JobSummary