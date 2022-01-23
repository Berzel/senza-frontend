import styled from '@emotion/styled';
import { Box } from '@mui/material';
import tw from 'twin.macro';

const Header = styled(Box)`
  @media screen and (min-width: 900px) {
    ${tw`bg-gray-800 bg-gradient-to-t from-gray-900 to-gray-700`}
  }

  .container {
    @media screen and (min-width: 1024px) {
      margin: 0 auto;
      max-width: 1024px;
      position: relative;
    }
  }
`;

export default Header;
