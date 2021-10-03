import tw from "twin.macro"
import styled from "styled-components"

const JobSummaryStyles = styled.div`
    ${tw`py-3 bg-gray-50`}

    .link {
        ${tw`bg-gray-50`}
    }

    .top, .bottom {
        ${tw`flex justify-between`}
    }

    .location, .company-name {
        ${tw`text-xs`}
    }

    .title {
        ${tw`text-black font-semibold`}
    }

    .salary {
        ${tw`text-sm text-gray-600 mt-0.5`}
    }

    .pin {
        > svg {
            width: 0.75em;
            height: 0.75em;
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
        ${tw`text-purple-700`}
    }

    .company-logo {
        width: 3em;
        height: 3em;
        ${tw`bg-purple-700 rounded-lg`}
    }
`;

export default JobSummaryStyles