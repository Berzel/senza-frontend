import tw from "twin.macro";
import styled from "styled-components";

const JobListStyles = styled.div`
    > .title {
        ${tw`mx-2 font-semibold mb-2`}
    }

    .list {
        ${tw`mx-2`}
    
        > * {
            ${tw`border-t`}
        }
    }
`;

export default JobListStyles