import JobSummaryDetails from "./JobSummaryDetails"

const updateActiveJob = e => {e.preventDefault(); console.log(e)}

const DesktopJobSummary = () => {
    return (
        <a className="link desktop" href="#" onClick={updateActiveJob}>
            <JobSummaryDetails />
        </a>
    )
}

export default DesktopJobSummary