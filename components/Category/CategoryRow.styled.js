import styled from '@emotion/styled';
import tw from "twin.macro";

const CategoryRowStyles = styled.div`
    .row {
        ${tw`px-3`}
        display: flex;

        & > * + * {
            ${tw`ml-3`}
        }

        >*:last-child{
            ${tw`pr-8`}
        }
    }
`;

export default CategoryRowStyles