import styled from "styled-components";
import tw from "twin.macro";

const LogoStyles = styled.div`
    ${tw`font-bold flex items-center`}

    .img {
        > svg {
            ${tw`w-6 h-6 text-gray-50 fill-current`}
        }
    }

    .text {
        ${tw`font-bold text-2xl ml-2`}
    }
`;

export default LogoStyles