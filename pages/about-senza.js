import Head from 'next/head';
import NavBar from '../components/NavBar/NavBar';
import Banner from '../components/Banner/Banner';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import { Avatar, Box, Grid, Paper, Typography } from '@mui/material';
import Footer from '../components/Footer/Footer';
// import TeamSlider from '../components/About/TeamSlider';

const AboutSenza = () => (
  <>
    <Head>
      <title>Senza - About Us</title>
      <meta name="description" content="Senza about us" />
    </Head>

    <Header>
      <div className="container">
        <NavBar />
        <Banner
          title="Creating Job opotunities to Job Seekers"
          description=" Together, we&rsquo;re building the future where jobs, locumns and
              interviews are easily accessible."
        />
      </div>
    </Header>
    <Container sx={{ border: 'none' }}>
      <Grid container sx={{ pt: { md: 10, xs: 4 } }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: { xs: 'none', md: 'block' }
          }}
        >
          <Avatar
            variant="square"
            src="/img/mission_statement.png"
            sx={{
              height: { md: 250 },
              boxShadow: 10,
              borderRadius: 4,
              width: { md: 360 }
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography component="h3" fontWeight="bold" variant="h4">
            Mission
          </Typography>
          <Typography component="p" variant="body1" sx={{ pt: 3 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora
            nam eveniet, totam facere a quisquam repudiandae mollitia aperiam eaque,
            dicta praesentium commodi laboriosam eum! Quam maxime eos quaerat ea.
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          width: '100%',
          height: { xs: 'fit-content', md: '50vh', lg: '80vh' },
          mt: 10,
          borderRadius: 4,
          position: 'relative',
          backgroundImage: {
            xs: '',
            md: "url('https://minimal-assets-api.vercel.app/assets/images/about/vision.jpg')"
          },
          backgroundAttachment: 'fixed',
          backgroundSize: 'contain'
        }}
      >
        <Typography
          component="h3"
          sx={{
            fontWeight: 'bold',
            textAlign: { xs: 'center', md: 'left' },
            fontSize: { xs: '1.75rem', md: '2.3rem' },
            pt: { xs: 0, md: 10 },
            width: { xs: '100%', md: 700 },
            color: { xs: 'initial', md: '#e5e5e5' },
            position: { xs: 'static', md: 'absolute' },
            bottom: '5%',
            left: '3%'
          }}
          variant="h4"
        >
          Our vision is to prorate avant Job Board services to the global workforce.
        </Typography>
      </Box>
      <Typography
        component="h3"
        fontWeight="bold"
        textAlign="center"
        variant="h4"
        sx={{ pt: 10, pb: 5 }}
      >
        Values
      </Typography>
      <Grid container spacing={8} item xs={12} sx={{ py: 3 }}>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              boxShadow: 0,
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <Avatar variant="square" sx={{ height: 120, width: 120 }} />
            <Typography
              sx={{ py: 2 }}
              component="h3"
              textAlign="center"
              fontWeight="bold"
              variant="body1"
            >
              Foster sense of security and belonging
            </Typography>
            <Typography variant="body2" sx={{ px: 3 }}>
              We are committed to achieving fair outcomes for all members of the
              global workforce, beginning with our employees.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              boxShadow: 0,
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <Avatar variant="square" sx={{ height: 120, width: 120 }} />
            <Typography sx={{ py: 3 }} component="h3" fontWeight="bold" variant="h6">
              Reliability
            </Typography>
            <Typography variant="body2" sx={{ px: 3 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ut
              quasi nulla nobis exercitationem. Nesciunt sint dolores reprehenderit,
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              boxShadow: 0,
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <Avatar variant="square" sx={{ height: 120, width: 120 }} />
            <Typography sx={{ py: 3 }} component="h3" fontWeight="bold" variant="h6">
              Effectiveness
            </Typography>
            <Typography variant="body2" sx={{ px: 3 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ut
              quasi nulla nobis exercitationem. Nesciunt sint dolores reprehenderit,
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ pt: 10, pb: 3 }}>
        <Typography component="h3" fontWeight="bold" textAlign="center" variant="h4">
          Great team is the key
        </Typography>

        <Typography
          component="h3"
          sx={{
            py: 3,
            margin: '0 auto',
            width: { md: '80%' },
            color: 'textSecondary',
            textAlign: 'center'
          }}
          variant="body1"
        >
          Minimal will provide you support if you have any problems, our support team
          will reply within a day and we also have detailed documentation.{' '}
        </Typography>
      </Grid>{' '}
      <Grid container spacing={3} item xs={12} sx={{ py: 3 }}>
        {/* <TeamSlider /> */}
      </Grid>
    </Container>
    <Footer />
  </>
);

export default AboutSenza;
