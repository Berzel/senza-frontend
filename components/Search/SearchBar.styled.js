import tw from "twin.macro";
import styled from "styled-components";

const SearchBarStyles = styled.div`
  ${tw`mx-2 -mt-5 rounded-xl shadow-lg overflow-hidden`}

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
          ${tw`flex-grow bg-gray-50 outline-none border-none`}
      }

      .submit {
          ${tw`px-4 py-2 text-gray-50 bg-purple-800`}
      }
  }
`;

export default SearchBarStyles