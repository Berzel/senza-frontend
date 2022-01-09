import styled from '@emotion/styled';
import tw from "twin.macro";

const LoginModalStyles = styled.div`
    ${tw`fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center flex-col`}
    background-color: rgba(31,41,55,0.95);
    z-index: 20;

    .form {
        ${tw`relative mt-auto w-full max-h-screen overflow-y-auto rounded-t-xl`}

        @media screen and (min-width: 1024px) {
            max-width: 400px;
            ${tw`m-auto rounded-t-lg rounded-b-lg bg-transparent shadow-lg`}
        }

        .heading {
            ${tw`bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-xl px-3 pt-6 pb-10 text-white`}

            @media screen and (min-width: 1024px) {
                ${tw`rounded-none`}
            }

            .title {
                ${tw`font-semibold text-2xl mb-2 capitalize`}
                @media screen and (min-width: 1024px) {
                    ${tw`text-3xl mb-4`}
                }
            }
        }

        .section {
            ${tw`py-8 mt-0  bg-gray-50`}

            @media screen and (min-width: 1024px) {
                ${tw`border-0 mt-0 pt-8 rounded-t-none bg-gray-50 mb-0 pb-8 px-0`}
            }

            >*+*{
                ${tw`mt-4`}
            }
        }

        &_group {
            ${tw`px-3 text-gray-800`}

            .label {
                ${tw`text-sm ml-1 mb-1 block text-gray-800`}
            }
            .input {
                ${tw`block w-full border p-3 rounded-lg`}
            }
            .input.has-error {
                ${tw`border-red-500 outline-none`}
            }
            .submit {
                ${tw`bg-blue-400 font-semibold text-white shadow-lg block mt-8 border-none capitalize cursor-pointer`}
            }
            .error-msg {
                ${tw`text-red-500 text-sm inline-block ml-1`}
            }
        }

        .forgot-password {
            ${tw`text-right mr-1 text-blue-400 mt-1`}
        }

        .register {
            ${tw`text-center mt-8 text-gray-800`}

            &-btn {
                ${tw`text-blue-400`}
            }
        }
    }
`

export default LoginModalStyles