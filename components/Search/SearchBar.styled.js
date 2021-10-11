import tw from "twin.macro";
import styled from "styled-components";

const SearchBarStyles = styled.div`
  ${tw`mx-3 -mt-5 rounded-lg shadow-lg overflow-hidden`}

  @media screen and (min-width: 1280px) {
      ${tw`shadow-none py-10 mx-0 px-3`}
      width: 80%;
  }

  .form {
    ${tw`flex justify-between`}

    >*+*{
        @media screen and (min-width: 1280px) {
            ${tw`ml-4`}
        }
    }

      .group {
        ${tw`flex flex-grow`}

        @media screen and (min-width: 1280px) {
            ${tw`rounded-lg shadow-lg`}
        }

        > input {
            @media screen and (min-width: 1280px) {
                ${tw`rounded-r-lg`}
            }
        }
      }

      .group.location, .group.submit {
          ${tw`hidden`}

          @media screen and (min-width: 1280px) {
              ${tw`flex`}
          }
      }

      .group .icon {
        width: 2em;
        ${tw`flex items-center bg-gray-50 justify-center`}

        @media screen and (min-width: 1280px) {
            ${tw`rounded-l-lg`}
        }

        > svg {
            width: 3em;
            height: 1em;
        }
      }

      .group input {
          ${tw`px-1 py-3 block w-full flex-grow bg-gray-50 outline-none border-none text-gray-900`}

          &::placeholder {
              ${tw`text-gray-700`}
          }
      }

      .group .submit {
          ${tw`p-3 bg-pink-500 block w-full rounded-lg text-white font-semibold`}
      }
  }
`;

export default SearchBarStyles