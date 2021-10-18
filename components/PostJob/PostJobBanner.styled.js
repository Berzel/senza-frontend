import tw from "twin.macro";
import styled from "styled-components";

const PostJobBannerStyles = styled.div`
    ${tw`px-3 pt-8 pb-8 text-center bg-gradient-to-b from-blue-50 to-gray-50`}

    @media screen and (min-width: 1024px) {
        background-size: cover;
        background-image: linear-gradient(to right, rgba(96,165,250,0.97), rgb(31 41 55)), url('/img/circuit.jpg');
        ${tw`text-left text-white mx-3 rounded-lg flex items-end justify-between`}
    }

    .title {
        ${tw`font-bold text-2xl`}
    }

    .body {
        ${tw`mt-3`}
        @media screen and (min-width: 1024px) {
            max-width: 35em;
            ${tw`mt-6`}
        }
    }

    .button {
        ${tw`text-white bg-blue-400 rounded-lg p-3 block w-full font-semibold mt-8`}

        @media screen and (min-width: 1024px) {
            ${tw`px-5`}
        }
    }
`;

export default PostJobBannerStyles