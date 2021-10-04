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
                ${tw`block w-full p-3`} 

                ::placeholder{
                    ${tw`text-gray-800`}
                }
            }
        }

        .group .query {
            ${tw`rounded-l-lg`}
        }

        .group .location {
            ${tw`border-l-2 border-purple-800`}
        }

        .group .btn {
            ${tw`p-3 bg-purple-800 w-full block text-gray-50 text-lg font-semibold`}
        }
    }
`;

export default MainSearchStyles