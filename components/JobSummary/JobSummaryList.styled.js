import tw from "twin.macro";
import styled from "styled-components";

const JobListStyles = styled.div`
    > .title {
        ${tw`px-3 font-semibold py-2 bg-gray-50 border-b border-t sticky top-0`}
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
            }
        
            > *+* {
                ${tw`mt-3`}
            }
        }

        .detail {
            display: none;

            @media screen and (min-width: 1024px) {
                ${tw`block flex-grow bg-gray-50 border rounded-lg p-2 sticky`}
                top: 3.3rem;
                height: 94vh;
            }
        }

        .more {
            ${tw`block w-full rounded-lg bg-gray-800 mb-2 p-3 shadow-lg text-white font-semibold`}
        }
    }
`;

export default JobListStyles