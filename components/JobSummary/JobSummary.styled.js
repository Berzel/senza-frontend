import tw from "twin.macro"
import styled from "styled-components"

const JobSummaryStyles = styled.div`
    ${tw`py-3`}

    & .top, .bottom {
        ${tw`flex justify-between`}
    }

    .location, .company-name {
        ${tw`text-xs`}
    }

    .title {
        ${tw`text-black`}
    }

    .salary {
        ${tw`text-sm text-gray-600`}
    }

    .location {
        ${tw`text-gray-600`}
    }

    .bottom {
        ${tw`mt-1`}
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