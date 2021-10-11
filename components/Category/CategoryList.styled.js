import styled from "styled-components";
import tw from "twin.macro";

const CategoryListStyles = styled.div`

    :first-child {
        @media screen and (min-width: 1280px) {
            ${tw`mt-0 pt-6`}
        }
    }

    .header {
        display: none;
        @media screen and (min-width: 1280px) {
            display: block;
            ${tw`px-3 mb-5 py-2 font-semibold flex justify-between border-t border-b`}
        }
    }

    .lists {
        cursor: grab;
        overflow: hidden;

        & > * + * {
            ${tw`mt-2`}
        }
    }
`;

export default CategoryListStyles