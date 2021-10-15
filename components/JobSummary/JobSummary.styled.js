import tw from "twin.macro"
import styled from "styled-components"

const JobSummaryStyles = styled.div`
    ${tw`px-2 py-3 bg-gray-50 border rounded-lg`}
    
    &:hover {
        ${tw`bg-gray-100`}
    }

    .link {
        ${tw`block`}        
    }

    .top, .bottom {
        ${tw`flex justify-between`}
    }

    .location, .company-name {
        ${tw`text-xs`}
    }

    .pills {
        >*+*{
            ${tw`ml-2`}
        }
    }

    .type {
        ${tw`text-xs text-black bg-blue-200 px-2 py-1 rounded inline-block`}
    }

    .title {
        ${tw`text-black font-semibold mt-1`}
    }

    .salary {
        ${tw`text-sm text-gray-600 mt-0.5`}
    }

    .pin {
        > svg {
            width: 0.75em;
            height: 0.75em;
            ${tw`text-gray-600 fill-current`}
        }
    }

    .location {
        ${tw`text-gray-600 ml-1`}
    }

    .bottom {
        ${tw`mt-2`}

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