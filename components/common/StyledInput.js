import { styled, TextField } from '@mui/material';

export default styled(TextField)({
  '& .MuiInputBase-input': {
    '&::placeholder': {
      fontWeight: 400,
      color: '#3e444b'
    }
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: '0.5rem',
      padding: '0.75rem',
      borderColor: 'rgb(229, 231, 235)'
    }
  }
});
