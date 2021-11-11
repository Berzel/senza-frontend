import tw from "twin.macro";
import styled from "styled-components";

const JobListStyles = styled.div`
    > .title {
        ${tw`px-3 font-semibold py-2 bg-gray-50 border-b border-t sticky top-0`}
    }

    .scroll_thumb {
        ${tw`bg-blue-200 rounded-lg`}
        width: 3px;
        cursor: pointer;

        &:hover {
            width: 5px;
            ${tw`bg-blue-300`}
        }
    }

    .jobs {
        ${tw`m-3`}

        @media screen and (min-width: 1024px) {
            ${tw`flex m-3 mb-0`}
        }

        >*+*{
            @media screen and (min-width: 1024px) {
                ${tw`ml-3`}
            }
        }

        .list {
            @media screen and (min-width: 1024px) {
                width: 25rem;
                flex-shrink: 0;
            }
        
            > *+* {
                ${tw`mt-3`}
            }

            >*:last-child {
                ${tw`mb-5`}
            }
        }

        .scrollbars {
            display: none;

            @media screen and (min-width: 1024px) {
                ${tw`block flex-grow bg-gray-50 border rounded-lg p-3 sticky overflow-auto`}
                height: calc(100vh - 3.8rem);
                top: 3.3rem;
            }
        }

        .detail {
            display: none;

            @media screen and (min-width: 1024px) {
                ${tw`block p-3`}
            }

            >*+*{
                ${tw`mt-8`}
            }

            &_title {
                ${tw`font-semibold text-2xl`}
            }

            &_sub_title {
                ${tw`font-semibold`}
            }

            &_body {
                ${tw`mt-2`}

                >*+*{
                    ${tw`mt-4`}
                }
            }

            &_items {
                >*+*{
                    ${tw`mt-2`}
                }
            }

            &_item {
                ${tw`flex items-start space-x-2`}

                &_pointer {
                    ${tw`inline-block w-3 fill-current text-blue-400 mt-1 flex-shrink-0`}
                }
            }

            &_apply_btn {
                ${tw`bg-blue-400 text-white p-4 rounded-lg shadow-lg block w-full text-center font-semibold mb-4`}
            }
        }

        .more {
            ${tw`block w-full text-center rounded-lg bg-gray-800 mb-2 p-3 shadow-lg text-white font-semibold`}
        }
    }
`;

export default JobListStyles