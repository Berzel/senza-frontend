import tw from "twin.macro";
import styled from "styled-components";

const JobListStyles = styled.div`
    > .title {
        ${tw`px-3 font-semibold py-1 border-b border-t`}
    }

    .list {
        ${tw`mx-3`}
    
        > * {
            ${tw`mt-4`}
        }
    }
`;

export default JobListStyles