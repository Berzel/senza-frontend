import styled from '@emotion/styled';
import tw from "twin.macro";

const BannerStyles = styled.div`
    ${tw`px-3 py-8 pb-12 text-gray-50`}
    ${tw`bg-gradient-to-b from-gray-800 to-gray-700`}


    @media screen and (min-width: 1024px) {
        ${tw`py-16`}
        background-image: none;
        background-color: transparent;
    }

    > .title {
        ${tw`font-bold text-3xl`}
        line-height: 1.75rem;
        max-width: 12em;

        @media screen and (min-width: 1024px) {
            ${tw`text-5xl`}
            max-width: 12em;
        }
    }

    > .text {
        ${tw`mt-8 text-gray-100`}
        max-width: 20em;

        @media screen and (min-width: 1024px) {            
            ${tw`mt-10 text-xl`}
            max-width: 25em;
        }
    }
`;

export default BannerStyles