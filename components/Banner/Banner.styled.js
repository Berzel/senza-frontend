import styled from "styled-components";
import tw from "twin.macro";

const BannerStyles = styled.div`
    ${tw`px-3 py-8 pb-12 bg-purple-800 text-gray-50`}

    > .title {
        ${tw`font-bold text-2xl`}
        line-height: 1.75rem;
    }

    > .text {
        ${tw`mt-5 text-gray-100`}
        max-width: 95%;
    }
`;

export default BannerStyles