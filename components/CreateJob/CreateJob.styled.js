import styled from "styled-components";
import tw from "twin.macro";

const CreateJobStyles = styled.div`
.input_required {
    ${tw`text-red-500`}
}

.error-msg {
    ${tw`text-red-500 text-sm inline-block ml-1`}
}

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

    @media screen and (min-width: 1024px) {
        ${tw`flex justify-between space-x-3 mt-24`}
    }

    .left {
        display: none;

        @media screen and (min-width: 1024px) {
            display: block;
        }

        .sidebar {
            ${tw`sticky top-3 block w-full border rounded-lg p-2`}

            >*+*{
                ${tw`mt-4`}
            }

            .title {
                ${tw`font-semibold mb-4 text-xl`}
            }

            .link {
                ${tw`text-blue-400`}
            }
        }
    }

    .right {
        flex-basis: 100%;

        @media screen and (min-width: 1024px) {
            flex-basis: 65%;
            flex-shrink: 0;
        }
    }
}

.form {
    @media screen and (min-width: 1024px) {
        ${tw`-mt-16 bg-gray-50`}
    }

    >*+*{
        ${tw`mt-5`}
    }

    .section {
        @media screen and (min-width: 1024px) {
            ${tw`border p-3 rounded-lg`}
        }

        >*+*{
            ${tw`mt-5`}
        }

        .title {
            ${tw`font-semibold text-2xl border-b pb-4 pt-2`}

            @media screen and (min-width: 1024px) {
                ${tw`border-none`}
            }
        }
    }

    .company_list {
        ${tw`flex flex-wrap mt-1`}

        @media screen and (min-width: 1024px) {
            ${tw`-mt-3`}
        }

        &_item {
            ${tw`rounded-full text-blue-900 border-2 border-blue-100 py-1 px-3 bg-blue-100 mr-2 mt-3 cursor-pointer`}
        }

        &_item.active {
            ${tw`border-blue-300`}
        }
    }

    .sub-section {
        &_heading {
            ${tw`ml-0.5 mb-4 border-b pb-2`}

            &_title {
                ${tw`font-semibold mb-1`}
            }

            &_text {
                ${tw`text-sm`}
            }
        }

        >*+*{
            ${tw`mt-3`}
        }
    }

    .row {
        ${tw`space-x-3 flex items-start`}

        >*{
            flex-grow: 1;
            flex-shrink: 1;
            flex-basis: 50%;
        }
    }

    .group {

        .label {
            ${tw`ml-0.5 block mb-1 text-sm`}
        }

        .input {
            ${tw`block w-full p-3 rounded-lg border bg-white`}
        }

        .input[disabled] {
            ${tw`bg-gray-200 cursor-not-allowed`}
        }

        .submit {
            ${tw`bg-blue-400 border-blue-400 text-white font-semibold shadow-lg cursor-pointer`}
        }
    }

    .check-group {
        ${tw`ml-1 my-3 flex items-center`}

        .check-label {
            ${tw`inline-block ml-2`}
        }
    }

    .more-btn {
        ${tw`text-center text-white`}

        > a {
            ${tw`bg-gray-800 rounded-full p-4 inline-block h-12 w-12 mb-10 flex items-center justify-center mx-auto shadow-lg cursor-pointer`}
        }
    }

    .list {
        ${tw`flex items-center space-x-2 relative`}

        .remove-btn {
            ${tw`bg-gray-600 shadow-lg rounded-full w-6 h-6 flex items-center justify-center text-white cursor-pointer font-semibold absolute right-2`}
        }
    }
}
`;

export default CreateJobStyles