import styled from "styled-components";
import tw from "twin.macro";

const NavBarStyles = styled.div`
    ${tw`p-3 bg-purple-800 flex justify-between items-center text-gray-50`}

    .right {
        display: flex;

        >*+*{
            ${tw`ml-3`}
        }
    }
`;

export default NavBarStyles