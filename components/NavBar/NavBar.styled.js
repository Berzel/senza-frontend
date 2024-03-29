import styled from '@emotion/styled';
import tw from "twin.macro";

const NavBarStyles = styled.div`
    ${tw`p-3 pr-4 bg-gray-800 flex justify-between items-center text-gray-50`}

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