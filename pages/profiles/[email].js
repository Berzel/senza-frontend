import Head from 'next/head';
import styled from '@emotion/styled';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import Container from '../../components/Container/Container';
import tw from 'twin.macro';
// import AddExperienceModal from '../../components/Experience/AddExperienceModal';
// import AddEducationModal from '../../components/Education/AddEducationModal';
// import EditProfileModal from '../../components/Profile/EditProfileModal';
import { useState } from 'react';
import {
  Avatar,
  Box,
  SvgIcon,
  Tab,
  tabClasses,
  Tabs,
  Typography
} from '@mui/material';
import SenzaModal from '../../components/MuiModal/SenzaModal';

const Main = styled.main`
  min-height: calc(100vh - 3rem);

  & > * + * {
    ${tw`mt-7 block`}
  }
`;

const Profile = styled.div`
  ${tw`p-3`}

  & > *+* {
    ${tw`mt-7`}
  }

  .profile {
    &__user_card {
      ${tw`bg-transparent rounded-lg flex flex-col`}

      &_top {
        min-height: 13rem;
        ${tw`flex-grow rounded-t-lg p-3 flex items-center justify-center`}

        @media screen and (min-width: 1024px) {
          min-height: 15rem;
          ${tw`items-start justify-start relative`}
        }

        &_info {
          ${tw`text-center py-5`}

          @media screen and (min-width: 1024px) {
            bottom: -7px;
            ${tw`flex absolute text-left space-x-4 -mb-5 py-0`}
          }

          & > * + * {
            ${tw`mt-4`}
          }
        }
      }

      &_bottom {
        ${tw`bg-white p-3 rounded-b-lg border-b border-l border-r`}

        @media screen and (min-width: 1024px) {
          ${tw`flex justify-end py-4`}
        }
      }
    }

    &__bottom {
      @media screen and (min-width: 1024px) {
        ${tw`flex space-x-4`}
      }

      > * + * {
        ${tw`mt-4`}

        @media screen and (min-width: 1024px) {
          ${tw`mt-0`}
        }
      }

      &_left {
        @media screen and (min-width: 1024px) {
          ${tw`flex-grow`}
        }
      }

      &_right {
        @media screen and (min-width: 1024px) {
          flex-basis: 60%;
          flex-shrink: 0;
        }

        > * + * {
          ${tw`mt-4`}
        }
      }
    }

    &__card {
      ${tw`px-3 py-4 rounded-lg border`}

      > *+* {
        ${tw`mt-6`}
      }

      &_heading {
        ${tw`flex justify-between items-center`}
      }

      &_title {
        ${tw`font-semibold text-lg text-gray-700`}
      }

      &.about {
        @media screen and (min-width: 1024px) {
          ${tw`sticky top-4`}
        }
      }
    }

    &__bullets {
      & > * + * {
        ${tw`mt-3`}
      }
    }

    &__bullet {
      ${tw`flex items-start space-x-3`}

      &_icon {
        padding-top: 0.28rem;

        > svg {
          ${tw`h-4 w-4`}
        }
      }

      &_value {
        ${tw`font-semibold`}
      }
    }

    &__medias {
      > * + * {
        ${tw`border-t`}
      }

      > *:first-child {
        ${tw`pt-0`}
      }

      > *:last-child {
        ${tw`pb-0`}
      }
    }

    &__media {
      ${tw`flex space-x-4 py-5`}

      &_img {
        width: 4rem;
        height: 4rem;
        flex-shrink: 0;
        object-size: cover;
        object-position: center;
        overflow: hidden;
        ${tw`inline-block border rounded-lg`}

        @media screen and (min-width: 1024px) {
          width: 5rem;
          height: 5rem;
        }
      }

      &_body {
        > * + * {
          ${tw`mt-1`}
        }

        > * {
          > * + *::before {
            content: '•';
            ${tw`inline-block text-blue-400 mx-2 text-sm`}
          }
        }
      }

      &_title {
        ${tw`font-semibold`}
      }

      &_company {
        ${tw`text-sm text-black`}

        @media screen and (min-width: 1024px) {
          ${tw`text-base`}
        }
      }

      &_date {
        ${tw`text-gray-500 text-sm`}

        @media screen and (min-width: 1024px) {
          ${tw`text-gray-600 text-base`}
        }
      }

      &_location {
        ${tw`hidden`}

        @media screen and (min-width: 1024px) {
          ${tw`block text-gray-500 text-sm`}
        }
      }
    }
  }
`;

const socialMeadialLinks = [
  {
    name: 'facebbok',
    href: '',
    Icon: (
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
    )
  },
  {
    name: 'instagram',
    href: '',
    Icon: (
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
    )
  },
  {
    name: 'LinkedIn',
    href: '',
    Icon: (
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
          <rect x="3" y="9.3" width="4.5" height="11.7" rx=".9" ry=".9"></rect>
          <circle cx="5.25" cy="5.25" r="2.25"></circle>
        </g>
      </SvgIcon>
    )
  },
  {
    name: 'twitter',
    href: '',
    Icon: (
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
    )
  }
];

const ProfilePage = () => {
  const [modalState, setModalState] = useState({});
  const [open, setOpen] = useState(false);
  const toggleModal = (modal) => {
    const prevModalState = modalState[modal];
    let newState = {};
    newState[modal] = !prevModalState;
    setModalState(newState);
  };

  const close = (modal) => {
    let newState = {};
    newState[modal] = false;
    setModalState(newState);
  };
  const handleOpen = (n) => setOpen(n);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Head>
        <title>Senza - User Profile</title>
        <meta name="description" content="Senza user profile page" />
      </Head>

      <Header>
        <div className="container">
          <NavBar />
        </div>
      </Header>

      <Container>
        <Main>
          <Profile>
            <Box className="profile__user_card">
              <Box
                className="profile__user_card_top"
                sx={{
                  background: 'linear-gradient(#141E30, #243B55)',
                  backgroundImage:
                    'url(/img/bgPattern.png), linear-gradient(#141E30, #243B55)'
                }}
              >
                <Box className="profile__user_card_top_info" sx={{ ml: { lg: 2 } }}>
                  <Avatar
                    src="https://brendonchirumet.web.app/static/media/profile.8885cbe6.jpg"
                    sx={{
                      height: 124,
                      width: 124,
                      border: '3px solid #fff',
                      margin: { xs: '0 auto', lg: 0 }
                    }}
                  />
                  <Box sx={{ pl: 1 }}>
                    <Typography
                      component="h1"
                      sx={{ color: '#fff', fontWeight: 600 }}
                      variant="h4"
                    >
                      Berzel Best
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 500, color: '#bcc2c7', ml: '1px' }}
                    >
                      Web Developer
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{ py: '8px!important' }}
                className="profile__user_card_bottom"
              >
                <Tabs
                  value={0}
                  TabIndicatorProps={{ sx: { display: 'none' } }}
                  variant="scrollable"
                  scrollButtons="auto"
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  {socialMeadialLinks.map(({ Icon, name, href }) => (
                    <Tab
                      sx={{
                        color: '#637381',
                        fontSize: 16,
                        fontFamily: 'Inter, sans-serif',
                        textTransform: 'capitalize',
                        minHeight: 40,
                        [`&.${tabClasses.selected}`]: {
                          color: '#637381'
                        }
                      }}
                      key={name}
                      icon={Icon}
                      iconPosition="start"
                      label={name}
                    />
                  ))}
                </Tabs>
              </Box>
            </Box>
            <div className="profile__bottom">
              <div className="profile__bottom_left">
                <div className="profile__card about">
                  <div className="profile__card_heading">
                    <h3 className="profile__card_title">About</h3>
                    <button onClick={() => handleOpen('profile')}>Edit</button>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                    voluptas fuga natus fugiat magni aliquam delectus officiis facere
                    illum, tempore vel iusto corrupti, necessitatibus, ratione
                    doloribus porro eum! Impedit, perspiciatis?
                  </p>
                  <ul className="profile__bullets">
                    <li className="profile__bullet">
                      <i className="profile__bullet_icon">
                        <svg
                          enableBackground="new 0 0 368.16 368.16"
                          version="1.1"
                          viewBox="0 0 368.16 368.16"
                        >
                          <path d="m184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.29c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.3c5.096-7.728 12.144-20.912 15.72-29.4 0.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zm109.72 182.15c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.3c-1.84 2.792-2.424 2.792-4.264 0l-93.256-141.3c-4.568-6.928-11.136-19.2-14.328-26.808-0.136-0.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"></path>
                          <path d="m184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z"></path>
                        </svg>
                      </i>
                      <span>
                        <span className="profile__bullet_value">
                          Software Developer
                        </span>{' '}
                        at <span className="profile__bullet_value">Senza</span>
                      </span>
                    </li>
                    <li className="profile__bullet">
                      <i className="profile__bullet_icon">
                        <svg
                          enableBackground="new 0 0 368.16 368.16"
                          version="1.1"
                          viewBox="0 0 368.16 368.16"
                        >
                          <path d="m184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.29c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.3c5.096-7.728 12.144-20.912 15.72-29.4 0.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zm109.72 182.15c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.3c-1.84 2.792-2.424 2.792-4.264 0l-93.256-141.3c-4.568-6.928-11.136-19.2-14.328-26.808-0.136-0.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"></path>
                          <path d="m184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z"></path>
                        </svg>
                      </i>
                      <span>
                        <span className="profile__bullet_value">
                          Bsc Computer Science
                        </span>{' '}
                        at <span className="profile__bullet_value">NUST</span> in
                        Zimbabwe
                      </span>
                    </li>
                    <li className="profile__bullet">
                      <i className="profile__bullet_icon">
                        <svg
                          enableBackground="new 0 0 368.16 368.16"
                          version="1.1"
                          viewBox="0 0 368.16 368.16"
                        >
                          <path d="m184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.29c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.3c5.096-7.728 12.144-20.912 15.72-29.4 0.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zm109.72 182.15c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.3c-1.84 2.792-2.424 2.792-4.264 0l-93.256-141.3c-4.568-6.928-11.136-19.2-14.328-26.808-0.136-0.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"></path>
                          <path d="m184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z"></path>
                        </svg>
                      </i>
                      <span>
                        <span className="profile__bullet_value">26 years</span> old
                      </span>
                    </li>
                    <li className="profile__bullet">
                      <i className="profile__bullet_icon">
                        <svg
                          enableBackground="new 0 0 368.16 368.16"
                          version="1.1"
                          viewBox="0 0 368.16 368.16"
                        >
                          <path d="m184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.29c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.3c5.096-7.728 12.144-20.912 15.72-29.4 0.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zm109.72 182.15c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.3c-1.84 2.792-2.424 2.792-4.264 0l-93.256-141.3c-4.568-6.928-11.136-19.2-14.328-26.808-0.136-0.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"></path>
                          <path d="m184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z"></path>
                        </svg>
                      </i>
                      <span>
                        <span className="profile__bullet_value">
                          berzel.best@gmail.com
                        </span>
                      </span>
                    </li>
                    <li className="profile__bullet">
                      <i className="profile__bullet_icon">
                        <svg
                          enableBackground="new 0 0 368.16 368.16"
                          version="1.1"
                          viewBox="0 0 368.16 368.16"
                        >
                          <path d="m184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.29c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.3c5.096-7.728 12.144-20.912 15.72-29.4 0.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zm109.72 182.15c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.3c-1.84 2.792-2.424 2.792-4.264 0l-93.256-141.3c-4.568-6.928-11.136-19.2-14.328-26.808-0.136-0.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"></path>
                          <path d="m184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z"></path>
                        </svg>
                      </i>
                      <span>
                        Lives in{' '}
                        <span className="profile__bullet_value">
                          Harare, Zimbabwe
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="profile__bottom_right">
                <div className="profile__card">
                  <div className="profile__card_heading">
                    <h3 className="profile__card_title">Work Experience</h3>
                    <button onClick={() => handleOpen('xp')}>Add Experience</button>
                  </div>

                  <ul className="profile__medias">
                    <li className="profile__media">
                      <img
                        className="profile__media_img"
                        src=""
                        alt="Company Logo"
                      />
                      <div className="profile__media_body">
                        <h4 className="profile__media_title">Software Developer</h4>
                        <p className="profile__media_company">
                          <span>Senza</span>
                          <span>Full-time</span>
                        </p>
                        <p className="profile__media_date">
                          <span>Jan 2021 - Present</span>
                          <span>1 month</span>
                        </p>
                        <p className="profile__media_location">Harare, Zimbabwe</p>
                      </div>
                    </li>
                    <li className="profile__media">
                      <img
                        className="profile__media_img"
                        src=""
                        alt="Company Logo"
                      />
                      <div className="profile__media_body">
                        <h4 className="profile__media_title">Software Developer</h4>
                        <p className="profile__media_company">
                          <span>Senza</span>
                          <span>Full-time</span>
                        </p>
                        <p className="profile__media_date">
                          <span>Jan 2021 - Present</span> <span>1 month</span>
                        </p>
                        <p className="profile__media_location">Harare, Zimbabwe</p>
                      </div>
                    </li>
                    <li className="profile__media">
                      <img
                        className="profile__media_img"
                        src=""
                        alt="Company Logo"
                      />
                      <div className="profile__media_body">
                        <h4 className="profile__media_title">Software Developer</h4>
                        <p className="profile__media_company">
                          <span>Senza</span>
                          <span>Full-time</span>
                        </p>
                        <p className="profile__media_date">
                          <span>Jan 2021 - Present</span> <span>1 month</span>
                        </p>
                        <p className="profile__media_location">Harare, Zimbabwe</p>
                      </div>
                    </li>
                    <li className="profile__media">
                      <img
                        className="profile__media_img"
                        src=""
                        alt="Company Logo"
                      />
                      <div className="profile__media_body">
                        <h4 className="profile__media_title">Software Developer</h4>
                        <p className="profile__media_company">
                          <span>Senza</span>
                          <span>Full-time</span>
                        </p>
                        <p className="profile__media_date">
                          <span>Jan 2021 - Present</span> <span>1 month</span>
                        </p>
                        <p className="profile__media_location">Harare, Zimbabwe</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="profile__card">
                  <div className="profile__card_heading">
                    <h3 className="profile__card_title">Education</h3>
                    <button onClick={() => handleOpen('edu')}>Add Education</button>
                  </div>

                  <ul className="profile__medias">
                    <li className="profile__media">
                      <img
                        className="profile__media_img"
                        src=""
                        alt="Company Logo"
                      />
                      <div className="profile__media_body">
                        <h4 className="profile__media_title">
                          National University of Science and Technology
                        </h4>
                        <p className="profile__media_company">
                          <span>Bachelors Degree</span>
                          <span>Computer Science</span>
                        </p>
                        <p className="profile__media_date">
                          <span>2021 - 2022</span>
                        </p>
                      </div>
                    </li>
                    <li className="profile__media">
                      <img
                        className="profile__media_img"
                        src=""
                        alt="Company Logo"
                      />
                      <div className="profile__media_body">
                        <h4 className="profile__media_title">
                          Mzingwane High School
                        </h4>
                        <p className="profile__media_company">
                          <span>A'Level</span>
                          <span>Maths, Physics &amp; Chemistry</span>
                        </p>
                        <p className="profile__media_date">
                          <span>2021 - 2022</span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="profile__card">
                  <h3 className="profile__card_title">
                    Licences &amp; Certifications
                  </h3>
                </div>
                <div className="profile__card">
                  <h3 className="profile__card_title">Projects</h3>
                </div>
                <div className="profile__card">
                  <h3 className="profile__card_title">Career Goals</h3>
                </div>
                <div className="profile__card">
                  <h3 className="profile__card_title">Skills</h3>
                </div>
              </div>
            </div>
          </Profile>
        </Main>
      </Container>
      <SenzaModal handleClose={handleClose} open={open === 'xp'}>
        Add Experience Modal
      </SenzaModal>
      <SenzaModal handleClose={handleClose} open={open === 'edu'}>
        Add Education Modal
      </SenzaModal>
      <SenzaModal handleClose={handleClose} open={open === 'profile'}>
        Add Profile Modal
      </SenzaModal>
      {/* <AddExperienceModal close={() => close('xp')} open={modalState.xp} />
      <AddEducationModal close={() => close('edu')} open={modalState.edu} />
      <EditProfileModal close={() => close('profile')} open={modalState.profile} /> */}
    </>
  );
};

export default ProfilePage;
