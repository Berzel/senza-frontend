import tw from "twin.macro";
import styled from "styled-components";

const JobListStyles = styled.div`
    > .title {
        ${tw`px-3 font-semibold py-2 border-b border-t`}
    }

    .jobs {
        ${tw`m-3`}

        @media screen and (min-width: 1280px) {
            ${tw`flex m-3`}
        }

        >*+*{
            @media screen and (min-width: 1280px) {
                ${tw`ml-3`}
            }
        }

        .list {
            @media screen and (min-width: 1280px) {
                width: 25rem;
            }
        
            > *+* {
                ${tw`mt-3`}
            }
        }

        .detail {
            display: none;

            @media screen and (min-width: 1280px) {
                ${tw`block flex-grow border rounded-lg p-2`}
            }
        }
    }
`;

export default JobListStyles