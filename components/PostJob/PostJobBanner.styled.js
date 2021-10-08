import tw from "twin.macro";
import styled from "styled-components";

const PostJobBannerStyles = styled.div`
    ${tw`px-3 bg-purple-700 p-4 text-white shadow-lg text-center bg-gradient-to-t from-purple-700 to-purple-800`}

    @media screen and (min-width: 1280px) {
        ${tw`text-left mx-3 rounded-lg flex items-end justify-between`}
    }

    >*+*{
        ${tw`mt-4`}
    }

    .title {
        ${tw`font-bold text-2xl`}
    }

    .body {
        @media screen and (min-width: 1280px) {
            max-width: 35em;
            ${tw`mt-6`}
        }
    }

    .button {
        ${tw`text-white bg-pink-500 rounded-lg p-3 block w-full font-semibold`}

        @media screen and (min-width: 1280px) {
            ${tw`px-5`}
        }
    }
`;

export default PostJobBannerStyles