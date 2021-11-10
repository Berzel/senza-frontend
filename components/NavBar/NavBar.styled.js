import styled from "styled-components";
import tw from "twin.macro";

const NavBarStyles = styled.div`
    ${tw`p-3 bg-gray-800 flex justify-between items-center text-gray-50`}

    @media screen and (min-width: 1024px) {
        ${tw`bg-transparent`}
    }

    .right {
        ${tw`flex items-center`}

        >*+*{
            ${tw`ml-3`}
        }
    }
`;

export default NavBarStyles