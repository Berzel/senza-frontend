import { Grid, Stack, Typography } from '@mui/material';
import Icons from '../common/Icons';
import AsyncAutocomplete from '../Experience/AsyncAutocomplete';
import SenzaModal from '../MuiModal/SenzaModal';

const AddEducationModal = ({ open, handleClose }) => {
  return (
    <SenzaModal
      title="Add Education"
      handleClose={handleClose}
      sx={{ py: 3, px: 3.5, width: { xs: '80%', md: '50%' } }}
      open={open === 'edu'}
    >
      <Grid container spacing={3} sx={{ mb: 5 }}>
        <Grid item xs={12}>
          <AsyncAutocomplete
            list={[
              { logo: '', name: 'University of Zimbabwe' },
              {
                logo: '',
                name: 'National University of Science and Technology of Zimbabwe'
              },
              {
                logo: '',
                name: 'Midlands State University'
              },
              {
                logo: '',
                name: 'Bindura State University'
              },
              {
                logo: '',
                name: 'Africa University'
              }
            ]}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            getOptionLabel={(option) => option.name}
            renderOption={(renderProps, { logo, name }) => (
              <Stack flexDirection="row" sx={{ px: 2, py: 1 }} {...renderProps}>
                <Icons.ImgAlt
                  sx={{
                    height: 30,
                    width: 30,
                    fill: 'currentcolor',
                    color: '#e5e7eb'
                  }}
                />

                <Typography variant="body1" sx={{ ml: 1 }}>
                  {name}
                </Typography>
              </Stack>
            )}
            placeholder="School or College/University"
          />
        </Grid>
        <Grid item xs={12}>
          <AsyncAutocomplete
            list={[
              { logo: '', name: 'University of Zimbabwe' },
              {
                logo: '',
                name: 'National University of Science and Technology of Zimbabwe'
              },
              {
                logo: '',
                name: 'Midlands State University'
              },
              {
                logo: '',
                name: 'Bindura State University'
              },
              {
                logo: '',
                name: 'Africa University'
              }
            ]}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            getOptionLabel={(option) => option.name}
            renderOption={(renderProps, { logo, name }) => (
              <Stack flexDirection="row" sx={{ px: 2, py: 1 }} {...renderProps}>
                <Icons.ImgAlt
                  sx={{
                    height: 30,
                    width: 30,
                    fill: 'currentcolor',
                    color: '#e5e7eb'
                  }}
                />

                <Typography variant="body1" sx={{ ml: 1 }}>
                  {name}
                </Typography>
              </Stack>
            )}
            placeholder="Degree"
          />
        </Grid>
        <Grid item xs={12}>
          <AsyncAutocomplete
            list={[
              { logo: '', name: 'University of Zimbabwe' },
              {
                logo: '',
                name: 'National University of Science and Technology of Zimbabwe'
              },
              {
                logo: '',
                name: 'Midlands State University'
              },
              {
                logo: '',
                name: 'Bindura State University'
              },
              {
                logo: '',
                name: 'Africa University'
              }
            ]}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            getOptionLabel={(option) => option.name}
            renderOption={(renderProps, { logo, name }) => (
              <Stack flexDirection="row" sx={{ px: 2, py: 1 }} {...renderProps}>
                <Icons.ImgAlt
                  sx={{
                    height: 30,
                    width: 30,
                    fill: 'currentcolor',
                    color: '#e5e7eb'
                  }}
                />

                <Typography variant="body1" sx={{ ml: 1 }}>
                  {name}
                </Typography>
              </Stack>
            )}
            placeholder="Specialisation"
          />
        </Grid>
        <Grid item xs={12}>
          <AsyncAutocomplete
            list={[
              { logo: '', name: 'University of Zimbabwe' },
              {
                logo: '',
                name: 'National University of Science and Technology of Zimbabwe'
              },
              {
                logo: '',
                name: 'Midlands State University'
              },
              {
                logo: '',
                name: 'Bindura State University'
              },
              {
                logo: '',
                name: 'Africa University'
              }
            ]}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            getOptionLabel={(option) => option.name}
            renderOption={(renderProps, { logo, name }) => (
              <Stack flexDirection="row" sx={{ px: 2, py: 1 }} {...renderProps}>
                <Icons.ImgAlt
                  sx={{
                    height: 30,
                    width: 30,
                    fill: 'currentcolor',
                    color: '#e5e7eb'
                  }}
                />

                <Typography variant="body1" sx={{ ml: 1 }}>
                  {name}
                </Typography>
              </Stack>
            )}
            placeholder="Degree"
          />
        </Grid>
      </Grid>
    </SenzaModal>
  );
};

export default AddEducationModal;
