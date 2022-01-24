import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Avatar,
  ButtonGroup,
  IconButton,
  Paper,
  SvgIcon,
  Tooltip,
  Typography
} from '@mui/material';
import 'swiper/css/navigation';

import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

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
    <Swiper
      navigation
      style={{ marginLeft: 24, px: 3 }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          centeredSlides: true
        },
        600: {
          centeredSlides: true,
          slidesPerView: 2
        },
        900: {
          slidesPerView: 3,
          centeredSlides: false
        },
        1200: {
          slidesPerView: 3,
          centeredSlides: false
        }
      }}
    >
      {array(5).map((i) => (
        <SwiperSlide key={i}>
          <Paper
            sx={{
              borderRadius: 4,
              p: 2,
              boxShadow: 0,
              mb: 1,
              border: ({ palette }) => palette.border,
              maxWidth: 270,
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              margin: { xs: '0 auto' },
              flexDirection: 'column'
            }}
          >
            <Typography component="h3" variant="body1">
              Founder
            </Typography>
            <Typography component="h3" color="textSecondary" variant="body2">
              Berzel Best
            </Typography>
            <Avatar
              variant="square"
              src="https://brendonchirumet.web.app/static/media/profile.8885cbe6.jpg"
              sx={{
                borderRadius: 4,
                margin: '16px auto',
                height: 259,
                width: '100%',
                maxWidth: 259
              }}
            />
            <ButtonGroup>
              <Tooltip placement="top" title="facebook">
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
              </Tooltip>
              <Tooltip placement="top" title="LinkeIn">
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
              </Tooltip>
              <Tooltip placement="top" title="twiter">
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
              </Tooltip>
            </ButtonGroup>
          </Paper>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default TeamSlider;
