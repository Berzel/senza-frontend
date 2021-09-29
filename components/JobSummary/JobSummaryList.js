import tw from "twin.macro";
import JobSummary from "./JobSummary";
import styled from "styled-components";

const JobListStyles = styled.ul`
    ${tw`mx-2`}
    
    > * + * {
        ${tw`border-t`}
    }
`;

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