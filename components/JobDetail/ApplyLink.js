import ApplyLinkStyles from "./ApplyLink.styled";

const ApplyLink = ({job}) => (
    <ApplyLinkStyles>
        {
            job.application_link && (
                <a className="link" href={job.application_link} target="_blank">
                    Apply now
                </a>
            )
        }
        {
            (job.application_email && !job.application_link) && (
                <a className="link" href={`mailto:${job.application_email}`} target="_blank">
                    Apply with email
                </a>
            )
        }
    </ApplyLinkStyles>
)

export default ApplyLink