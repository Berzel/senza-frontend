import styled from "styled-components";
import tw from "twin.macro";

const Header = styled.div`
  @media screen and (min-width: 1280px) {
    ${tw`bg-purple-800 bg-gradient-to-t from-purple-900 to-purple-700`}
  }

  .container {
    @media screen and (min-width: 1280px) {
        margin: 0 auto;
        max-width: 980px;
        position: relative;
    }
  }
`;

export default Header