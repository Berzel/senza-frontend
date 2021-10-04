import tw from "twin.macro";
import styled from "styled-components";

const SearchBarStyles = styled.div`
  ${tw`mx-3 -mt-5 rounded-lg shadow-lg overflow-hidden`}

  .form {
      ${tw`flex`}

      .icon {
          width: 2em;
          ${tw`flex items-center bg-gray-50 justify-center`}

          > svg {
              width: 1em;
              height: 1em;
          }
      }

      .query {
          width: 2em;
          ${tw`px-1 py-3 flex-grow bg-gray-50 outline-none border-none text-gray-900`}

          &::placeholder {
              ${tw`text-gray-700`}
          }
      }
  }
`;

export default SearchBarStyles