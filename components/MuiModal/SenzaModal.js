import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { Close } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const SenzaModal = ({ open, title, children, scroll, handleClose }) => {
  const descriptionElementRef = React.useRef(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll={scroll}
      maxWidth="md"
      fullScreen={fullScreen}
      aria-labelledby="senza-dialog"
      aria-describedby="senza-dialog"
    >
      <DialogTitle sx={{ fontFamily: 'Inter, sans-serif' }}>
        {title}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 10,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent
        dividers={scroll === 'paper'}
        sx={{ minWidth: { sm: 500, md: 600 } }}
      >
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

SenzaModal.defaultProps = {
  scroll: 'paper'
};
SenzaModal.propTypes = {
  open: PropTypes.bool.isRequired,
  scroll: PropTypes.oneOf(['paper', 'body']),
  title: PropTypes.string.isRequired,
  sx: PropTypes.shape({}),
  dialogProps: PropTypes.shape({}),
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.object, PropTypes.array])
    .isRequired
};

export default SenzaModal;
