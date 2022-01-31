import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Navigation } from 'swiper';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  styled,
  SvgIcon,
  Typography
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { blueGrey } from '@mui/material/colors';

SwiperCore.use([Navigation]);

const NavButton = styled(Button)(({ theme }) => ({
  zIndex: theme.zIndex.mobileStepper,
  top: '50%',
  transform: ' translateY(-50%)',
  borderRadius: '50%',
  minWidth: 40,
  height: 40,
  padding: 0,
  color: theme.palette.getContrastText('#121928b8'),
  backgroundColor: '#121928b8',
  '&:hover': {
    backgroundColor: blueGrey[700]
  },
  [theme.breakpoints.up('md')]: {
    position: 'absolute'
  },
  [theme.breakpoints.down('md')]: {
    position: 'initial',
    margin: '10px 3px 0 0',
    minWidth: 35,
    height: 35
  }
}));

const TeamSlider = () => {
  const array = (n) => {
    if (n < 1) {
      return [];
    }
    const countArray = array(n - 1);
    countArray.push(n);
    return countArray;
  };

  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        '& .swiper-slide:first-child': {
          ml: { xs: '0 !important', md: '16px !important' }
        }
      }}
    >
      <NavButton variant="contained" sx={{ left: 0 }} className="swiper-button-prev">
        <ArrowLeftIcon fontSize="large" />
      </NavButton>

      <NavButton
        variant="contained"
        sx={{ right: 0 }}
        className="swiper-button-next"
      >
        <ArrowRightIcon fontSize="large" />
      </NavButton>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={32}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        breakpoints={{
          0: {
            centeredSlides: true
          },
          600: {
            centeredSlides: false
          },
          960: {
            centeredSlides: false
          }
        }}
      >
        {array(5).map((key) => (
          <SwiperSlide data-slide key={key} style={{ width: 'fit-content' }}>
            <Box
              sx={{
                borderRadius: 4,
                pb: 2,
                px: 2.5,
                pt: 2.5,
                mb: 3,
                backgroundColor: '#fff',
                width: '100%',
                maxWidth: { xs: 350, sm: 291 }
              }}
            >
              <Avatar
                variant="square"
                src="https://brendonchirumet.web.app/static/media/profile.8885cbe6.jpg"
                sx={{
                  maxWidth: { xs: 'calc(100vw - 80px)', sm: 259 },
                  maxHeight: { xs: 300, sm: 259 },
                  width: '100%',
                  height: '100%',
                  mb: 3,
                  margin: '0 auto',
                  borderRadius: 4
                }}
              />
              <Box textAlign="center">
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 'bold', whiteSpace: 'nowrap', pt: 2 }}
                >
                  Brendon Chirume
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ fontWeight: 'bold' }}
                >
                  Developer
                </Typography>
              </Box>
              <Box textAlign="center" sx={{ pt: 2 }}>
                <IconButton>
                  <SvgIcon
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z"
                    ></path>
                  </SvgIcon>
                </IconButton>
                <IconButton>
                  <SvgIcon
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3S645.3 585.4 645.3 512S585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9S717.1 398.5 717.1 512S625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9s47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"
                      fill="currentColor"
                    ></path>
                  </SvgIcon>
                </IconButton>
                <IconButton>
                  <SvgIcon
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <g fill="currentColor">
                      <path d="M15.15 8.4a5.83 5.83 0 0 0-5.85 5.82v5.88a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a1.94 1.94 0 0 1 2.15-1.93a2 2 0 0 1 1.75 2v5.81a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a5.83 5.83 0 0 0-5.85-5.82z"></path>
                      <rect
                        x="3"
                        y="9.3"
                        width="4.5"
                        height="11.7"
                        rx=".9"
                        ry=".9"
                      ></rect>
                      <circle cx="5.25" cy="5.25" r="2.25"></circle>
                    </g>
                  </SvgIcon>
                </IconButton>
                <IconButton>
                  <SvgIcon
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M8.08 20A11.07 11.07 0 0 0 19.52 9A8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51a1.88 1.88 0 0 1-2.16-.38a3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24a9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20"
                    ></path>
                  </SvgIcon>
                </IconButton>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
export default TeamSlider;
