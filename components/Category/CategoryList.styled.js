import styled from "styled-components";
import tw from "twin.macro";

const CategoryListStyles = styled.div`

    :first-child {
        ${tw`py-3`}
        @media screen and (min-width: 1024px) {
            ${tw`mt-0 pt-8`}
        }
    }

    .header {
        display: none;
        @media screen and (min-width: 1024px) {
            display: block;
            ${tw`px-3 mb-5 py-2 font-semibold flex justify-between border-t border-b`}
        }
    }

    .lists {
        cursor: grab;
        overflow: auto;

        @media screen and (min-width: 1024px) {
            overflow: hidden;
        }

        & > * + * {
            ${tw`mt-3`}
        }
    }

    .columns {
        ${tw`flex`}
        height: 15rem;
        overflow: hidden;
        position: relative;
    }

    .column {
        &_item {
            white-space: nowrap;
            position: relative;
        }
    }
`;

export default CategoryListStyles