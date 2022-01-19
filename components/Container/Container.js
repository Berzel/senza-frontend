import styled from '@emotion/styled';
import { Box } from '@mui/material';
import tw from 'twin.macro';

const Container = styled(Box)`
  @media screen and (min-width: 1024px) {
    margin: 0 auto;
    max-width: 1024px;
    position: relative;
    ${tw`border-l border-r`}
  }
`;

export default Container;
