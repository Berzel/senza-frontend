import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  IconButton,
  Stack,
  SvgIcon,
  Typography
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from '../../lib/Link';

const links = {
  Senza: [
    {
      title: 'About us',
      href: '/about-senza'
    },
    {
      title: 'Contact us',
      href: '/contact-us'
    },
    {
      title: 'FAQs',
      href: '/faqs'
    }
  ],
  Legal: [
    {
      title: 'Terms and Condition',
      href: '/tcs'
    },
    {
      title: 'Privacy Policy',
      href: '/privacy-policy'
    }
  ]
};
export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: ({ palette }) => palette.background.primary,
        mt: 5,
        pt: 8
      }}
    >
      <Container sx={{ px: { lg: 5 } }}>
        <Grid
          container
          spacing={{ xs: 2, md: 8 }}
          columns={{ xs: 4, sm: 12, md: 12, lg: 12 }}
          sx={{ textAlign: { xs: 'left', md: 'initial' } }}
        >
          <Grid item xs={12} md={5} lg={6}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <SvgIcon
                sx={{
                  color: '#fff',
                  fill: 'currentcolor',
                  height: 25,
                  width: 25,
                  mb: 0.3
                }}
                version="1.0"
                viewBox="0 0 128 128"
              >
                <g transform="translate(0 128) scale(.1 -.1)">
                  <path d="m500 1265c-301-68-514-351-497-660 18-321 281-584 602-602 319-18 598 200 661 517 62 311-119 618-428 727-92 32-241 40-338 18zm220-139c78-39 139-94 206-187 107-148 149-186 212-191 18-1 32-7 32-13 0-5 3-20 6-31 5-18-1-24-39-39-38-14-51-15-81-5-53 17-136 98-207 203-34 50-80 114-102 140-39 47-140 126-188 147-19 8-10 10 42 6 46-2 82-12 119-30zm343-154c34-47 67-105 67-118 0-15-45 35-96 107-29 42-60 82-69 89-8 7-15 17-15 22 0 17 78-52 113-100zm-525 72c68-34 148-115 218-222 80-122 126-175 189-216 62-42 142-61 193-47 39 12 42-1 10-49-29-42-100-80-149-80-101 0-198 70-318 229-49 65-115 140-145 168-102 90-219 130-310 104-22-6-41-9-43-7-11 10 78 90 129 115 80 41 152 42 226 5zm-162-228c73-34 125-84 219-211 97-131 163-193 253-237 58-29 76-33 150-33h83l-29-26c-72-64-205-86-306-50-94 33-156 83-287 231-86 97-150 134-236 135-48 0-68-5-92-23l-31-23v38c0 87 40 163 105 200 52 29 107 29 171-1zm-65-320c20-14 69-63 108-110 116-137 210-201 342-235l74-19-79-17c-212-47-436 41-558 220-57 84-63 130-22 172 21 21 32 24 61 20 20-4 53-17 74-31z" />
                </g>
              </SvgIcon>
              <Typography
                variant="h5"
                component="h5"
                sx={{
                  flexGrow: 1,
                  fontWeight: 'bold',
                  color: '#fff',
                  ml: { xs: 0.5, md: 1 }
                }}
              >
                Senza
              </Typography>
            </Box>
            <Typography
              variant="subtitle1"
              sx={{
                py: 3,
                display: 'block',
                color: '#fff',
                width: { xs: '70%', sm: '70%', md: '70%' }
              }}
            >
              Get all your dream jobs and efficient employees brought together by in
              one place by Senza!
            </Typography>
            <Button
              component={Link}
              href="/post-new-job"
              variant="contained"
              sx={{
                width: 120,
                mt: 1,
                color: '#fff',
                display: { xs: 'none', md: 'block' },
                backgroundColor: ({ palette }) => palette.background.secondary
              }}
            >
              Post a Job!
            </Button>
          </Grid>
          {Object.keys(links).map((section) => (
            <Grid item lg={2} md={2} xs={4} key={section}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 500, color: '#fff', mt: { md: 6 } }}
              >
                {section}
              </Typography>
              {links[section].map(({ title, href }) => (
                <Link
                  sx={{
                    color: '#ffffffd4',
                    '&:hover': {
                      color: '#fff'
                    },
                    textDecoration: 'none',
                    display: 'block',
                    my: 2,
                    fontWeight: 400,
                    whiteSpace: 'nowrap',
                    fontSize: 14
                  }}
                  href={href}
                  key={href}
                >
                  {title}
                </Link>
              ))}
            </Grid>
          ))}
          <Grid item lg={2} md={3} xs={4}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 500, color: '#fff', mt: { md: 6 } }}
            >
              Contact
            </Typography>
            <Typography
              sx={{
                color: '#ffffffd4',
                '&:hover': {
                  color: '#fff'
                },
                whiteSpace: 'nowrap',
                fontSize: 14,
                my: 2,
                fontWeight: 400
              }}
            >
              support@senza.cc
            </Typography>
            <Typography
              component="address"
              sx={{
                color: '#ffffffd4',
                '&:hover': {
                  color: '#fff'
                },
                fontSize: 14,
                my: 2,
                fontWeight: 400,
                fontStyle: 'unset'
              }}
            >
              Los Angeles, 359 Hidden Valley Road
            </Typography>
          </Grid>
        </Grid>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ borderTop: '1px solid gray', mt: 4 }}
        >
          <Typography variant="body2" sx={{ mt: 3, color: '#fff', m: 0 }}>
            &#169; 2022. All rights reserved
          </Typography>
          <ButtonGroup variant="contained" sx={{ boxShadow: 0, py: 3 }}>
            <IconButton
              size="large"
              sx={{
                color: '#c6cdd0',
                '&:hover': {
                  color: '#fff',
                  backgroundColor: '#262c3a'
                }
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              size="large"
              sx={{
                color: '#c6cdd0',
                '&:hover': {
                  color: '#fff',
                  backgroundColor: '#262c3a'
                }
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              size="large"
              sx={{
                color: '#c6cdd0',
                '&:hover': {
                  color: '#fff',
                  backgroundColor: '#262c3a'
                }
              }}
            >
              <GoogleIcon />
            </IconButton>
            <IconButton
              size="large"
              sx={{
                color: '#c6cdd0',
                '&:hover': {
                  color: '#fff',
                  backgroundColor: '#262c3a'
                }
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </ButtonGroup>
        </Stack>
      </Container>
    </Box>
  );
};
