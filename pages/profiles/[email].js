import Head from 'next/head';
import styled from '@emotion/styled';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import Container from '../../components/Container/Container';
import tw from 'twin.macro';
import AddExperienceModal from '../../components/Experience/AddExperienceModal';
import AddEducationModal from '../../components/Education/AddEducationModal';
import EditProfileModal from '../../components/Profile/EditProfileModal';
import { useState } from 'react';
import { Avatar, Box, Tab, tabClasses, Tabs, Typography } from '@mui/material';
import Icons from '../../components/common/Icons';

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
        ${tw`inline-block rounded-lg`}

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
    Icon: Icons.Facebook()
  },
  {
    name: 'instagram',
    href: '',
    Icon: Icons.Instagram()
  },
  {
    name: 'LinkedIn',
    href: '',
    Icon: Icons.LinkedIn()
  },
  {
    name: 'twitter',
    href: '',
    Icon: Icons.Twitter()
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
                      <Icons.Location sx={{ width: 16, height: 16, mt: 0.5 }} />
                      <span>
                        <span className="profile__bullet_value">
                          Software Developer
                        </span>{' '}
                        at <span className="profile__bullet_value">Senza</span>
                      </span>
                    </li>
                    <li className="profile__bullet">
                      <Icons.Location sx={{ width: 16, height: 16, mt: 0.5 }} />
                      <span>
                        <span className="profile__bullet_value">
                          Bsc Computer Science
                        </span>{' '}
                        at <span className="profile__bullet_value">NUST</span> in
                        Zimbabwe
                      </span>
                    </li>
                    <li className="profile__bullet">
                      <Icons.Location sx={{ width: 16, height: 16, mt: 0.5 }} />
                      <span>
                        <span className="profile__bullet_value">26 years</span> old
                      </span>
                    </li>
                    <li className="profile__bullet">
                      <Icons.Location sx={{ width: 16, height: 16, mt: 0.5 }} />
                      <span>
                        <span className="profile__bullet_value">
                          berzel.best@gmail.com
                        </span>
                      </span>
                    </li>
                    <li className="profile__bullet">
                      <Icons.Location sx={{ width: 16, height: 16, mt: 0.5 }} />
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
                      <Icons.Avatar className="profile__media_img" />
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
                      <Icons.Avatar className="profile__media_img" />
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
                      <Icons.Avatar className="profile__media_img" />
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
                      <Icons.Avatar className="profile__media_img" />
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
                      <Icons.Avatar className="profile__media_img" />
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
                      <Icons.Avatar className="profile__media_img" />
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

      <AddExperienceModal handleClose={handleClose} open={open} />
      <AddEducationModal handleClose={handleClose} open={open} />
      <EditProfileModal handleClose={handleClose} open={open} />
    </>
  );
};

export default ProfilePage;
