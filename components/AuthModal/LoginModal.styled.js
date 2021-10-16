import styled from "styled-components";
import tw from "twin.macro";

const LoginModalStyles = styled.div`
    ${tw`fixed top-0 bottom-0 right-0 left-0 flex flex-col`}

    .form {
        ${tw`relative mt-auto max-h-screen overflow-y-auto bg-gray-50 rounded-t-xl`}

        .heading {
            ${tw`bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-xl px-3 py-4 text-white`}

            .title {
                ${tw`font-semibold text-xl mb-2 capitalize`}
            }
        }

        .section {
            ${tw`my-6`}
            >*+*{
                ${tw`mt-4`}
            }
        }

        .group {
            ${tw`px-3`}
            .label {
                ${tw`text-sm ml-1 mb-1 block`}
            }
            .input {
                ${tw`block w-full border p-3 rounded-lg`}
            }
            .submit {
                ${tw`bg-blue-400 font-semibold text-white shadow-lg block mt-8 border-none capitalize`}
            }
        }

        .forgot-password {
            ${tw`text-right mr-1 text-blue-400 mt-1`}
        }

        .register {
            ${tw`text-center mt-8`}

            &-btn {
                ${tw`text-blue-400`}
            }
        }
    }
`

export default LoginModalStyles