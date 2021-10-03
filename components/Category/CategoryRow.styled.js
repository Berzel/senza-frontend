import styled from "styled-components";
import tw from "twin.macro";

const CategoryRowStyles = styled.div`
    .row {
        ${tw`px-3`}
        display: flex;

        & > * + * {
            ${tw`ml-2`}
        }
    }
`;

export default CategoryRowStyles