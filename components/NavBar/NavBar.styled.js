import styled from "styled-components";
import tw from "twin.macro";

const NavBarStyles = styled.div`
    ${tw`px-3 py-2 bg-purple-800 flex justify-between items-center text-gray-50`}

    .right {
        display: flex;

        >*+*{
            ${tw`ml-3`}
        }
    }
`;

export default NavBarStyles