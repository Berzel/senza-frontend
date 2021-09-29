import tw from "twin.macro";
import styled from "styled-components";

const JobListStyles = styled.ul`
    ${tw`mx-2`}
    
    > * + * {
        ${tw`border-t`}
    }
`;

export default JobListStyles