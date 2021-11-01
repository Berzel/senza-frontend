import styled from "styled-components";
import tw from "twin.macro";

const CategoryListStyles = styled.div`

    @media screen and (min-width: 1024px) {
        ${tw`relative`}
    }

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
        ${tw`py-10 -my-10 overflow-auto`}

        @media screen and (min-width: 1024px) {
            ${tw`overflow-hidden`}
        }

        & > * + * {
            ${tw`mt-3`}
        }
    }

    .pagination {
        ${tw`hidden`}

        @media screen and (min-width: 1024px) {
            top: calc(50% - 0.95rem);
            ${tw`inline-block absolute w-12 h-12 bg-gray-800 shadow-lg rounded-full text-white p-2 flex items-center justify-center`}
        }

        > svg {
            ${tw`hidden`}

            @media screen and (min-width: 1024px) {
                ${tw`fill-current w-3 h-3 text-white inline`}
            }
        }
    }

    .pagination.prev {
        left: 0.5rem;
        transform: rotate(180deg);
    }

    .pagination.next {
        right: 0.5rem;
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