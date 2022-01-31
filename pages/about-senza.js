import Head from 'next/head';
import NavBar from '../components/NavBar/NavBar';
import Banner from '../components/Banner/Banner';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import {
  Avatar,
  Box,
  Divider,
  Grid,
  Paper,
  SvgIcon,
  Typography
} from '@mui/material';
import MuiContainer from '@mui/material/Container';
import Footer from '../components/Footer/Footer';
import TeamSlider from '../components/About/TeamSlider';

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
          description="Our vision is to prorate avant Job Board services to the global workforce.."
        />
      </div>
    </Header>
    <Container component={MuiContainer} sx={{ border: 'none' }}>
      <Grid container sx={{ pt: { md: 8, xs: 4 } }}>
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
            src="/img/missionVecImage.jpg"
            sx={{
              height: { md: '100%' },
              width: { md: '80%' }
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography component="h3" fontWeight="bold" variant="h4">
            Mission
          </Typography>
          <Typography component="p" variant="body1" sx={{ pt: 3 }}>
            We drive top talent to companies that want to hire them. Our Job Market
            distributes open jobs from employers to the largest network of recruiters
            on the planet. Our centralized platform serves as a single point of
            contact for job seekers, recruiters, and hiring managers. So book your
            seat right now and get hired. Here we have few special qualities that
            make us different.
            <Box component="ul" sx={{ mt: 3 }}>
              <Box
                component="li"
                sx={{ display: 'flex', alignItems: 'center', my: 1 }}
              >
                <SvgIcon
                  sx={{
                    height: 14,
                    fill: 'currentcolor',
                    color: ({ palette }) => palette.primary.main
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 7H2v6h8v5l8-8-8-8v5z" />
                </SvgIcon>
                <span>Efficient</span>
              </Box>
              <Box
                component="li"
                sx={{ display: 'flex', alignItems: 'center', my: 1 }}
              >
                <SvgIcon
                  sx={{
                    height: 14,
                    fill: 'currentcolor',
                    color: ({ palette }) => palette.primary.main
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 7H2v6h8v5l8-8-8-8v5z" />
                </SvgIcon>
                <span>Free To Join</span>
              </Box>
              <Box
                component="li"
                sx={{ display: 'flex', alignItems: 'center', my: 1 }}
              >
                <SvgIcon
                  sx={{
                    height: 14,
                    fill: 'currentcolor',
                    color: ({ palette }) => palette.primary.main
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 7H2v6h8v5l8-8-8-8v5z" />
                </SvgIcon>
                <span>Dedicated Support</span>
              </Box>
            </Box>
          </Typography>
        </Grid>
      </Grid>
      <Typography
        component="h3"
        fontWeight="bold"
        variant="h4"
        sx={{ pt: 10, pb: 5, textAlign: { xs: 'left', md: 'center' } }}
      >
        About Us
      </Typography>
      <Typography
        variant="body1"
        sx={{ pb: 5, px: { md: 5 }, textAlign: { xs: 'left', md: 'center' } }}
      >
        Senza is a leader among marketing and creative staffing agencies. We
        specialize in connecting talented, creative professionals with companies
        looking to hire interactive, design, marketing, advertising and public
        relations talent. We offer flexible staffing solutions to meet companies’
        project, contract-to-hire and full-time employment needs. <br /> <br />{' '}
        Through our parent company, we also have the resources to support
        organizations’ temporary and full-time staffing needs in the areas of
        technology, accounting, finance, administrative and legal. <br />
        <br />
        Throughout our 15 year history we have successfully headhunted across the
        globe for a range of strategic roles with a 100% success rate. This has been
        achieved through our dedicated staff, industry experience and high level of
        quality control throughout every stage of our detailed process. <br />
        <br />
        Each individual project we undertake is treated with the highest levels of
        service and commitment. We pride ourselves on our exemplary work ethic,
        transparent reporting, accountability and communication – we work 24/7 across
        all global time zones. <br />
        <br />
        We are advisers to the European Parliament on Executive hiring matters. We
        are also the preferred supplier to several prestigious International VC
        Companies. Choose us Headhunting as your Executive Search Partner through
        trust and reputation.
      </Typography>

      <Typography
        component="h3"
        fontWeight="bold"
        variant="h4"
        sx={{ pt: 10, pb: 5, textAlign: 'center' }}
      >
        Our Values
      </Typography>
      <Grid container spacing={{ xs: 2, md: 4 }}>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              p: 3,
              backgroundColor: '#fff'
            }}
          >
            <Box
              sx={{
                height: 180,
                margin: '0 auto',
                width: 180,
                background: 'url(/img/goldcups.jpg) -18px -15px',
                backgroundSize: 631,
                backgroundRepeat: 'no-repeat'
              }}
            />
            <Typography
              sx={{ py: 3 }}
              component="h3"
              textAlign="center"
              fontWeight="bold"
              variant="h6"
            >
              Foster sense of security and belonging
            </Typography>
            <Typography>
              We are committed to achieving fair outcomes for all members of the
              global workforce, beginning with our employees.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              p: 3,
              backgroundColor: '#fff'
            }}
          >
            <Box
              src="/img/belonging.jpg"
              sx={{
                height: 180,
                margin: '0 auto',
                width: 180,
                background: 'url(/img/goldcups.jpg) -447px -230px',
                backgroundSize: 631,
                backgroundRepeat: 'no-repeat'
              }}
            />
            <Typography
              sx={{ py: 3 }}
              component="h3"
              textAlign="center"
              fontWeight="bold"
              variant="h6"
            >
              Foster sense of security and belonging
            </Typography>
            <Typography>
              We are committed to achieving fair outcomes for all members of the
              global workforce, beginning with our employees.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              p: 3,
              backgroundColor: '#fff'
            }}
          >
            <Box
              src="/img/belonging.jpg"
              sx={{
                height: 180,
                margin: '0 auto',
                width: 180,
                background: 'url(/img/goldcups.jpg) -13px -220px',
                backgroundSize: 631,
                backgroundRepeat: 'no-repeat'
              }}
            />
            <Typography
              sx={{ py: 3 }}
              component="h3"
              textAlign="center"
              fontWeight="bold"
              variant="h6"
            >
              Foster sense of security and belonging
            </Typography>
            <Typography>
              We are committed to achieving fair outcomes for all members of the
              global workforce, beginning with our employees.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Typography
        component="h3"
        fontWeight="bold"
        variant="h4"
        sx={{ pt: 10, pb: 5, textAlign: 'center' }}
      >
        Our Services
      </Typography>
      <Grid container spacing={{ xs: 2, md: 4 }}>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              p: 3,
              backgroundColor: '#fff',
              minHeight: { xs: 310, lg: 280 }
            }}
          >
            <Typography component="h3" fontWeight="bold" variant="h6">
              Recruiters
            </Typography>
            <Divider
              sx={{
                mt: 1,
                mb: 3,
                width: '30%',
                borderWidth: 3,
                borderRadius: 4,
                borderColor: ({ palette }) => palette.primary.main
              }}
            />
            <Typography>
              Make more job placements... this is the first place third party
              recruiters should come to execute your internet strategy. We are the
              web presence experts for recruiters.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              p: 3,
              backgroundColor: '#fff',
              minHeight: { xs: 310, lg: 280 }
            }}
          >
            <Typography component="h3" fontWeight="bold" variant="h6">
              Job Seekers
            </Typography>
            <Divider
              sx={{
                mt: 1,
                mb: 3,
                width: '30%',
                borderWidth: 3,
                borderRadius: 4,
                borderColor: ({ palette }) => palette.primary.main
              }}
            />
            <Typography>
              Did you know that the best jobs are often never advertised? Recruiters
              Online Network is is your gateway to this hidden job market.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              p: 3,
              backgroundColor: '#fff',
              minHeight: { xs: 310, lg: 280 }
            }}
          >
            <Typography component="h3" fontWeight="bold" variant="h6">
              Employers
            </Typography>
            <Divider
              sx={{
                mt: 1,
                mb: 3,
                width: '30%',
                borderWidth: 3,
                borderRadius: 4,
                borderColor: ({ palette }) => palette.primary.main
              }}
            />
            <Typography>
              Find A Recruiter provides a portal for Recruiters, Headhunters,
              Executive Search Consultants, Employment Agencies, Staffing Firms &
              Search Professionals.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Typography
        component="h3"
        fontWeight="bold"
        variant="h4"
        sx={{ pt: 10, textAlign: 'center' }}
      >
        Our Team
      </Typography>
      <Typography
        component="h3"
        sx={{
          py: 2.5,
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
      <TeamSlider />
    </Container>
    <Footer />
  </>
);

export default AboutSenza;
