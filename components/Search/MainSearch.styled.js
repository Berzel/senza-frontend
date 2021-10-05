import styled from "styled-components";
import tw from "twin.macro";

const MainSearchStyles = styled.div`
    ${tw`m-3 mt-5`}

    .form {
        ${tw`flex justify-between border-2 border-purple-800 rounded-lg`}

        .group {
            ${tw`flex-grow flex`}

            &:first-child{
                flex-basis: 40%;
            }

            > input {
                ${tw`block w-full p-2 px-3 outline-none`} 

                ::placeholder{
                    ${tw`text-gray-800`}
                }
            }
        }

        .group .icon {
            width: 2.5rem;
            ${tw`p-3 flex bg-white rounded-l-lg`}

            > svg {
                ${tw`fill-current text-black`}
            }
        }

        .group.location {
            ${tw`border-l-2 border-purple-800`}
        }

        .group .btn {
            ${tw`p-2 px-3 bg-purple-800 w-full block text-gray-50 text-lg font-semibold`}
        }
    }
`;

export default MainSearchStyles