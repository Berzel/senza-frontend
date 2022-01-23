import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import Menu from './Menu';
import NavBarStyles from './NavBar.styled';

const NavBar = ({ setShowJob }) => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    setIsServer(false);
  }, []);

  return (
    <NavBarStyles
      sx={{
        boxShadow: 'none',
        flexDirection: 'inherit',
        backgroundColor: 'transparent'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: 1024,
          margin: '0 auto'
        }}
      >
        <Logo setShowJob={setShowJob} />
        {!isServer && <Menu />}
      </Box>
    </NavBarStyles>
  );
};

export default NavBar;
