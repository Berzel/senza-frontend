import styled from "styled-components";
import tw from "twin.macro";

const BannerStyles = styled.div`
    ${tw`px-3 py-8 pb-12 bg-purple-800 text-gray-50`}

    > .title {
        ${tw`font-bold text-2xl`}
        line-height: 1.75rem;
        max-width: 15em;

        @media screen and (min-width: 1280px) {
            ${tw`text-3xl`}
        }
    }

    > .text {
        ${tw`mt-5 text-gray-100`}
        max-width: 20em;

        @media screen and (min-width: 1280px) {            
            ${tw`mt-10 text-lg`}
        }
    }
`;

export default BannerStyles