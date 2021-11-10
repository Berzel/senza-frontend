import styled from "styled-components";
import tw from "twin.macro";

const LogoStyles = styled.div`
    ${tw`font-bold flex items-center`}

    .img {
        > svg {
            ${tw`w-7 h-7 text-gray-50 fill-current`}
        }
    }

    .text {
        ${tw`font-bold text-3xl ml-2`}
    }
`;

export default LogoStyles