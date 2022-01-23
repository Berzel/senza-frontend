import tw from "twin.macro"
import styled from '@emotion/styled';

const JobSummaryStyles = styled.div`
    ${tw`border rounded-lg`}
    ${props => props.active ? tw`border border-blue-300` : ''}

    &:hover {
        ${tw`bg-gray-100`}
    }

    .link {
        ${tw`block`}        
    }

    .top {
        ${tw`flex space-x-4 p-3`}

        &_logo {
            width: 3.5rem;
            flex-shrink: 0;
            ${tw`rounded-lg mt-0.5 flex items-start`}

            > svg {
                ${tw`fill-current text-gray-200`}
            }

            > img {
                ${tw`rounded-lg`}
                object-position: top;
                object-fit: contain;
                max-width: 100%;
            }
        }

        .left {
            overflow: hidden;
        }
    }

    .location {
        ${tw`text-sm text-gray-600 ml-1`}
    }

    .company-name {
        ${tw`text-sm text-gray-600 whitespace-nowrap`}
    }

    .pills {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        >*+*{
            ${tw`ml-2`}
        }
    }

    .type {
        ${tw`text-black bg-blue-100 px-2 py-1 rounded-lg inline-block`}
        font-size: 0.8rem;
    }

    .title {
        font-size: 1.05rem;
        ${tw`text-black font-semibold mb-2 mt-0.5 text-blue-400`}
    }

    .salary {
        ${tw`text-gray-600 mt-0.5`};
        font-size: 0.95rem;
    }

    .pin {
        > svg {
            width: 0.8em;
            height: 0.8em;
            ${tw`text-gray-600 fill-current`}
        }
    }

    .bottom {
        ${tw`mt-6 flex justify-between border-t p-3`}
        ${props => props.active ? tw`border-blue-300` : ''}

        .left {
            ${tw`flex items-center`}
        }
    }
`;

export default JobSummaryStyles