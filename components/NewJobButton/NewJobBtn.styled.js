import styled from "styled-components";
import tw from "twin.macro";

const NewJobBtnStyles = styled.div`
    @media screen and (min-width: 1024px) {
        display: none;
    }
    
    .icon {
        >svg{
            width: 1.25rem;
            height: 1.25rem;
            ${tw`text-gray-50 fill-current`}
        }
    }
`;

export default NewJobBtnStyles