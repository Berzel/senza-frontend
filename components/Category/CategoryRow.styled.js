import styled from "styled-components";
import tw from "twin.macro";

const CategoryRowStyles = styled.div`
    .row {
        ${tw`px-2`}
        display: flex;

        & > * + * {
            ${tw`ml-2`}
        }
    }
`;

export default CategoryRowStyles