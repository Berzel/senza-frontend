import styled from "styled-components";
import tw from "twin.macro";

const MainSearchStyles = styled.div`
    :first-child {
        ${tw`mx-3 my-0 pt-6`}
    }

    .title {
        ${tw`mb-3 font-semibold`}

        @media screen and (min-width: 1024px) {
            display: none;
        }
    }

    .form {
        ${tw` border-2 border-gray-800 rounded-lg`}

        @media screen and (min-width: 1024px) {
            ${tw`flex justify-between bg-gray-800 overflow-hidden`}
        }

        .group {
            ${tw`flex-grow flex`}

            &:first-child{
                flex-basis: 40%;
            }

            > input {
                ${tw`block w-full p-3 px-1 rounded-r-lg outline-none`} 

                @media screen and (min-width: 1024px) {
                    ${tw`p-2 px-3`}
                }

                ::placeholder{
                    ${tw`text-gray-800`}
                }
            }
        }

        .group.btn {
            display: none;

            @media screen and (min-width: 1024px) {
               ${tw`bg-gray-800 flex flex-grow`}
            }
        }

        .group .icon {
            width: 2rem;
            ${tw`p-2 flex bg-white rounded-l-lg`}

            @media screen and (min-width: 1024px) {
                width: 2.5rem;
                ${tw`p-3`}
            }

            > svg {
                ${tw`fill-current text-black`}
            }
        }

        .group.query {
            .icon {
                @media screen and (min-width: 1024px) {
                    ${tw`rounded-r-none`}
                }
            }

            input {
                @media screen and (min-width: 1024px) {
                    ${tw`rounded-none`}
                }
            }
        }

        .group.location {
            ${tw`border-t border-gray-300`}

            @media screen and (min-width: 1024px) {
                ${tw`border-l-2 border-t-0 border-gray-800 rounded-none`}
            }

            .icon {
                @media screen and (min-width: 1024px) {
                    ${tw`rounded-none`}
                }
            }

            input {
                @media screen and (min-width: 1024px) {
                    ${tw`rounded-none`}
                }
            }
        }

        .group .btn {
            ${tw`p-2 px-3 border-none bg-gray-800 w-full block text-gray-50 text-lg font-semibold`}
        }
    }

    .filters {
        ${tw`block w-full bg-gray-800 rounded-lg p-3 mt-3 text-white font-semibold`}

        @media screen and (min-width: 1024px) {
            display: none;
        }
    }
`;

export default MainSearchStyles