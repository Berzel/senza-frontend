import tw from "twin.macro"
import styled from "styled-components"

const JobSummaryStyles = styled.div`
    ${tw`px-2 py-3 bg-gray-50 border rounded-lg`}
    ${props => props.active ? tw`shadow border-blue-300` : ''}

    &:hover {
        ${tw`bg-gray-100`}
    }

    .link.active {
        ${tw`bg-gray-100`}
    }

    .link {
        ${tw`block`}        
    }

    .top, .bottom {
        ${tw`flex justify-between`}
    }

    .location, .company-name {
        ${tw`text-sm text-gray-600 ml-1`}
    }

    .pills {
        >*+*{
            ${tw`ml-2`}
        }
    }

    .type {
        ${tw`text-black bg-blue-100 px-2 py-1 rounded-lg inline-block`}
        font-size: 0.8rem;
    }

    .title {
        ${tw`text-black font-semibold mt-2`}
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
        ${tw`mt-3`}

        .left {
            ${tw`flex items-center`}
        }
    }

    .company-logo {
        width: 4rem;
        height: 4rem;
        ${tw`border rounded-lg flex items-center justify-center text-3xl text-gray-500 font-bold overflow-hidden`}
    }
`;

export default JobSummaryStyles