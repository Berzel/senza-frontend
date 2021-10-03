import styled from "styled-components";
import tw from "twin.macro";

const LogoStyles = styled.div`
    ${tw`font-bold flex items-center`}

    .img {
        > svg {
            width: 1.5rem;
            height: 1.5rem;
            ${tw`text-gray-50 fill-current`}
        }
    }

    .text {
        ${tw`font-bold text-2xl ml-2`}
    }
`;

export default LogoStyles