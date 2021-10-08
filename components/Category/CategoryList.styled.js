import styled from "styled-components";
import tw from "twin.macro";

const CategoryListStyles = styled.div`
    cursor: grab;

    :first-child {
        @media screen and (min-width: 1280px) {
            ${tw`mt-0 pt-6`}
        }
    }

    .lists {
        overflow: hidden;

        & > * + * {
            ${tw`mt-2`}
        }
    }
`;

export default CategoryListStyles