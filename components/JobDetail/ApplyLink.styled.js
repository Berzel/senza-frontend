import styled from "styled-components";
import tw from "twin.macro";

const ApplyLinkStyles = styled.div`
    ${tw`rounded-lg shadow-lg fixed left-3 bottom-4 right-3`}

    .link {
        ${tw`block text-white bg-purple-700 rounded-lg shadow-lg p-3 text-center font-semibold`}
    }
`;

export default ApplyLinkStyles