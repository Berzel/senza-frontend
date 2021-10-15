import styled from "styled-components";
import tw from "twin.macro";

const CreateJobStyles = styled.div`
.top {
    ${tw`pt-8 px-3`}

    >*+*{
        ${tw`mt-10`}
    }

    .title {
        ${tw`font-bold text-3xl`}
    }

    .back {
        ${tw`flex items-center space-x-2`}

        svg {
            width: 0.85rem;
            height: 0.85rem;
            ${tw`fill-current text-gray-800`}
        }
    }
}

.form-container {
    ${tw`mt-12 p-3 border-t`}

    @media screen and (min-width: 1280px) {
        ${tw`flex justify-between space-x-3 mt-24`}
    }

    .left {
        display: none;

        @media screen and (min-width: 1280px) {
            display: block;
            flex-grow: 1;
        }

        .sidebar {
            ${tw`sticky top-3 block w-full border rounded-lg p-2`}
        }
    }

    .right {
        flex-basis: 100%;

        @media screen and (min-width: 1280px) {
            flex-basis: 65%;
        }
    }
}

.form {
    @media screen and (min-width: 1280px) {
        ${tw`-mt-16 bg-gray-50`}
    }

    >*+*{
        ${tw`mt-5`}
    }

    .section {
        @media screen and (min-width: 1280px) {
            ${tw`border p-3 rounded-lg`}
        }

        >*+*{
            ${tw`mt-5`}
        }

        .title {
            ${tw`font-semibold text-2xl border-b pb-4 pt-2`}

            @media screen and (min-width: 1280px) {
                ${tw`border-none`}
            }
        }
    }

    .sub-section {
        >*+*{
            ${tw`mt-3`}
        }
    }

    .row {
        ${tw`space-x-3 flex items-center`}

        >*{
            flex-grow: 1;
            flex-shrink: 1;
            flex-basis: 50%;
        }
    }

    .group {

        .label {
            ${tw`ml-0.5 block mb-1`}
        }

        .input {
            ${tw`block w-full p-3 rounded-lg border bg-white`}
        }

        .submit {
            ${tw`bg-blue-400 border-blue-400 text-white font-semibold shadow-lg cursor-pointer`}
        }
    }

    .small-title {
        ${tw`font-semibold ml-0.5 border-b pb-2`}
    }

    .check-group {
        ${tw`ml-1 my-3 flex items-center`}

        .check-label {
            ${tw`inline-block ml-2`}
        }
    }

    .more-btn {
        ${tw`text-right text-white`}

        > a {
            ${tw`bg-gray-800 rounded p-2 px-4 cursor-pointer`}
        }
    }

    .list {
        ${tw`flex items-center space-x-2 relative`}

        .action-btn {
            ${tw`bg-red-500 p-2 rounded-full w-6 h-6 flex items-center justify-center text-white cursor-pointer font-bold absolute right-2`}
        }
    }
}
`;

export default CreateJobStyles