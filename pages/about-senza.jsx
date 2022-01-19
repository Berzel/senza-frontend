import React from 'react';
import Head from 'next/head';
import { Avatar, Box, Grid, Paper, Typography } from '@mui/material';
import NavBar from '../components/NavBar/NavBar';
import Container from '../components/Container/Container';

const AboutSenze = () => {
  return (
    <>
      <Head>
        <title>Senza - About Us</title>
        <meta name="description" content="Senza about us" />
      </Head>

      <Box
        sx={{
          boxShadow: 5,
          background: `linear-gradient(to bottom, #1118275e, #374151e3), url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/owl1.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <Container sx={{ border: 'none' }}>
          <NavBar />
          <Box sx={{ pt: { xs: 4, md: 7 }, px: 2, pb: { xs: 3, md: 5 } }}>
            <Typography
              component="h1"
              variant="body1"
              sx={{ py: 3, color: '#fff', fontSize: { md: 20 }, maxWidth: 450 }}
            >
              Abour Senza
            </Typography>
            <Typography
              component="h1"
              variant="h4"
              sx={{
                fontWeight: 500,
                color: '#fff',
                maxWidth: { xs: 480, md: 550 }
              }}
            >
              Making Jobs and Job Seekers accessible to everyone
            </Typography>
            <Typography
              component="h1"
              variant="body1"
              sx={{ py: 3, color: '#fff', maxWidth: 450 }}
            >
              Together, we&rsquo;re building the future where jobs, locumns and
              interviews are easily accessible.
            </Typography>
          </Box>
        </Container>
      </Box>
      <Grid container sx={{ pt: 7, px: 2, border: 'none' }} component={Container}>
        <Grid container item xs={12} sx={{ flexDirection: { xs: 'row-reverse' } }}>
          <Grid item xs={12} lg={6}>
            <Typography component="h3" fontWeight="bold" variant="h4">
              Mission
            </Typography>
            <Typography component="p" variant="body1" sx={{ pt: 3 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              tempora nam eveniet, totam facere a quisquam repudiandae mollitia
              aperiam eaque, dicta praesentium commodi laboriosam eum! Quam maxime
              eos quaerat ea.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Avatar variant="square" sx={{ height: 120, width: 120 }} />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ pt: 10, pb: 3 }}>
          <Typography
            component="h3"
            fontWeight="bold"
            textAlign="center"
            variant="h4"
          >
            Values
          </Typography>
        </Grid>
        <Grid container spacing={8} item xs={12} sx={{ py: 3 }}>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 2,
                boxShadow: 0,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
              }}
            >
              <Avatar variant="square" sx={{ height: 120, width: 120 }} />
              <Typography
                sx={{ py: 3 }}
                component="h3"
                fontWeight="bold"
                variant="h5"
              >
                Building for IT
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ut
                quasi nulla nobis exercitationem. Nesciunt sint dolores
                reprehenderit,
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 2,
                boxShadow: 0,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
              }}
            >
              <Avatar variant="square" sx={{ height: 120, width: 120 }} />
              <Typography
                sx={{ py: 3 }}
                component="h3"
                fontWeight="bold"
                variant="h5"
              >
                Making things better
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ut
                quasi nulla nobis exercitationem. Nesciunt sint dolores
                reprehenderit,
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 2,
                boxShadow: 0,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
              }}
            >
              <Avatar variant="square" sx={{ height: 120, width: 120 }} />
              <Typography
                sx={{ py: 3 }}
                component="h3"
                fontWeight="bold"
                variant="h5"
              >
                Staying open and connected
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ut
                quasi nulla nobis exercitationem. Nesciunt sint dolores
                reprehenderit,
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ pt: 10, pb: 3 }}>
          <Typography
            component="h3"
            fontWeight="bold"
            textAlign="center"
            variant="h4"
          >
            Team
          </Typography>
        </Grid>{' '}
        <Grid container spacing={3} item xs={12} sx={{ py: 3 }}>
          <Grid item xs={6}>
            <Paper
              sx={{
                p: 2,
                boxShadow: 0,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
              }}
            >
              <Avatar variant="square" sx={{ height: 120, width: 120 }} />
              <Typography
                sx={{ pt: 3 }}
                component="h3"
                fontWeight="bold"
                variant="h6"
              >
                Founder
              </Typography>
              <Typography
                sx={{ py: 2 }}
                component="h3"
                color="textSecondary"
                variant="body1"
              >
                Berzel Best
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ut
                quasi nulla nobis exercitationem. Nesciunt sint dolores
                reprehenderit,
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
              sx={{
                p: 2,
                boxShadow: 0,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
              }}
            >
              <Avatar variant="square" sx={{ height: 120, width: 120 }} />
              <Typography
                sx={{ pt: 3 }}
                component="h3"
                fontWeight="bold"
                variant="h6"
              >
                Designer
              </Typography>
              <Typography
                sx={{ py: 2 }}
                component="h3"
                color="textSecondary"
                variant="body1"
              >
                Brendon Chirume
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ut
                quasi nulla nobis exercitationem. Nesciunt sint dolores
                reprehenderit,
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutSenze;
