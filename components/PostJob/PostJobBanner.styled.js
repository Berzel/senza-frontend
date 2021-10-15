import tw from "twin.macro";
import styled from "styled-components";

const PostJobBannerStyles = styled.div`
    background-size: 200%;
    ${tw`px-3 bg-gray-700 p-4 text-white shadow-lg text-center bg-gradient-to-t from-gray-700 to-gray-800`}
    background-image: linear-gradient(to bottom, rgba(59,130,246,0.95), rgb(31 41 55)), url('/img/circuit.jpg');

    @media screen and (min-width: 1280px) {
        background-size: cover;
        background-image: linear-gradient(to right, rgba(59,130,246,0.95), rgb(31 41 55)), url('/img/circuit.jpg');
        ${tw`text-left mx-3 rounded-lg flex items-end justify-between`}
    }

    .title {
        ${tw`font-bold text-2xl`}
    }

    .body {
        ${tw`mt-3`}
        @media screen and (min-width: 1280px) {
            max-width: 35em;
            ${tw`mt-6`}
        }
    }

    .button {
        ${tw`text-white bg-blue-500 rounded-lg p-3 block w-full font-semibold mt-8`}

        @media screen and (min-width: 1280px) {
            ${tw`px-5`}
        }
    }
`;

export default PostJobBannerStyles