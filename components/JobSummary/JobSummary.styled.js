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
        ${tw`text-xs text-gray-800 bg-gray-200 px-2 py-1 rounded inline-block`}
        font-weight: 500;
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

    .company-name {
        ${tw`text-gray-700`}
    }

    .company-logo {
        width: 4em;
        height: 4em;
        ${tw`bg-gray-700 rounded-lg`}
    }
`;

export default JobSummaryStyles