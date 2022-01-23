import Head from "next/head";
import styled from '@emotion/styled';
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Container from "../../components/Container/Container";
import tw from "twin.macro";

const Main = styled.main`
    min-height: calc(100vh - 3rem);

    & > *+* {
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
                ${tw`flex-grow bg-blue-400 rounded-t-lg p-3 flex items-center justify-center`}

                @media screen and (min-width: 1024px) {
                    min-height: 15rem;
                    ${tw`items-start justify-start relative`}
                }

                &_info {
                    ${tw`text-center py-5`}

                    @media screen and (min-width: 1024px) {
                        bottom: 0;
                        ${tw`flex absolute text-left space-x-4 -mb-5 py-0`}
                    }

                    & > *+*{
                        ${tw`mt-4`}
                    }

                    &_img {
                        width: 6rem;
                        height: 6rem;
                        object-size: cover;
                        object-position: center;
                        ${tw`rounded-full inline-block border-white border-2`}
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

            > *+* {
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

                > *+* {
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
            & > *+* {
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
            > *+* {
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
                > *+* {
                    ${tw`mt-1`}
                }

                > * {
                    > *+*::before {
                        content: "•";
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
`

const ProfilePage = () => {

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
                        <div className="profile__user_card">
                            <div className="profile__user_card_top">
                                <div className="profile__user_card_top_info">
                                    <div>
                                        <img className="profile__user_card_top_info_img" src="" alt="Profile Image" />
                                    </div>
                                    <div>
                                        <h1>Berzel Best</h1>
                                        <p>Web Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="profile__user_card_bottom">
                                Social Media Links
                            </div>
                        </div>
                        <div className="profile__bottom">
                            <div className="profile__bottom_left">
                                <div className="profile__card about">
                                    <h3 className="profile__card_title">About</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptas fuga natus fugiat magni aliquam delectus 
                                        officiis facere illum, tempore vel iusto corrupti, necessitatibus, ratione doloribus porro eum! Impedit, perspiciatis?
                                    </p>
                                    <ul className="profile__bullets">
                                        <li className="profile__bullet">
                                            <i className="profile__bullet_icon">
                                                <svg enableBackground="new 0 0 368.16 368.16" version="1.1" viewBox="0 0 368.16 368.16">
                                                    <path d="m184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.29c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.3c5.096-7.728 12.144-20.912 15.72-29.4 0.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zm109.72 182.15c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.3c-1.84 2.792-2.424 2.792-4.264 0l-93.256-141.3c-4.568-6.928-11.136-19.2-14.328-26.808-0.136-0.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"></path>
                                                    <path d="m184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z"></path>
                                                </svg>
                                            </i>
                                            <span>
                                                <span className="profile__bullet_value">Software Developer</span> at <span className="profile__bullet_value">Senza</span>
                                            </span>
                                        </li>
                                        <li className="profile__bullet">
                                            <i className="profile__bullet_icon">
                                                <svg enableBackground="new 0 0 368.16 368.16" version="1.1" viewBox="0 0 368.16 368.16">
                                                    <path d="m184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.29c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.3c5.096-7.728 12.144-20.912 15.72-29.4 0.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zm109.72 182.15c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.3c-1.84 2.792-2.424 2.792-4.264 0l-93.256-141.3c-4.568-6.928-11.136-19.2-14.328-26.808-0.136-0.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"></path>
                                                    <path d="m184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z"></path>
                                                </svg>
                                            </i>
                                            <span>
                                                <span className="profile__bullet_value">Bsc Computer Science</span> at <span className="profile__bullet_value">NUST</span> in Zimbabwe
                                            </span>
                                        </li>
                                        <li className="profile__bullet">
                                            <i className="profile__bullet_icon">
                                                <svg enableBackground="new 0 0 368.16 368.16" version="1.1" viewBox="0 0 368.16 368.16">
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
                                                <svg enableBackground="new 0 0 368.16 368.16" version="1.1" viewBox="0 0 368.16 368.16">
                                                    <path d="m184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.29c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.3c5.096-7.728 12.144-20.912 15.72-29.4 0.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zm109.72 182.15c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.3c-1.84 2.792-2.424 2.792-4.264 0l-93.256-141.3c-4.568-6.928-11.136-19.2-14.328-26.808-0.136-0.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"></path>
                                                    <path d="m184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z"></path>
                                                </svg>
                                            </i>
                                            <span>
                                                <span className="profile__bullet_value">berzel.best@gmail.com</span>
                                            </span>
                                        </li>
                                        <li className="profile__bullet">
                                            <i className="profile__bullet_icon">
                                                <svg enableBackground="new 0 0 368.16 368.16" version="1.1" viewBox="0 0 368.16 368.16">
                                                    <path d="m184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.29c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.3c5.096-7.728 12.144-20.912 15.72-29.4 0.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zm109.72 182.15c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.3c-1.84 2.792-2.424 2.792-4.264 0l-93.256-141.3c-4.568-6.928-11.136-19.2-14.328-26.808-0.136-0.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"></path>
                                                    <path d="m184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z"></path>
                                                </svg>
                                            </i>
                                            <span>
                                                Lives in <span className="profile__bullet_value">Harare, Zimbabwe</span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="profile__bottom_right">
                                <div className="profile__card">
                                    <div className="profile__card_heading">
                                        <h3 className="profile__card_title">Work Experience</h3>
                                        <button>
                                            Add Experience
                                        </button>
                                    </div>

                                    <ul className="profile__medias">
                                        <li className="profile__media">
                                            <img className="profile__media_img" src="" alt="Company Logo" />
                                            <div className="profile__media_body">
                                                <h4 className="profile__media_title">Software Developer</h4>
                                                <p className="profile__media_company"><span>Senza</span><span>Full-time</span></p>
                                                <p className="profile__media_date"><span>Jan 2021 - Present</span><span>1 month</span></p>
                                                <p className="profile__media_location">Harare, Zimbabwe</p>
                                            </div>
                                        </li>
                                        <li className="profile__media">
                                            <img className="profile__media_img" src="" alt="Company Logo" />
                                            <div className="profile__media_body">
                                                <h4 className="profile__media_title">Software Developer</h4>
                                                <p className="profile__media_company"><span>Senza</span><span>Full-time</span></p>
                                                <p className="profile__media_date"><span>Jan 2021 - Present</span> <span>1 month</span></p>
                                                <p className="profile__media_location">Harare, Zimbabwe</p>
                                            </div>
                                        </li>
                                        <li className="profile__media">
                                            <img className="profile__media_img" src="" alt="Company Logo" />
                                            <div className="profile__media_body">
                                                <h4 className="profile__media_title">Software Developer</h4>
                                                <p className="profile__media_company"><span>Senza</span><span>Full-time</span></p>
                                                <p className="profile__media_date"><span>Jan 2021 - Present</span> <span>1 month</span></p>
                                                <p className="profile__media_location">Harare, Zimbabwe</p>
                                            </div>
                                        </li>
                                        <li className="profile__media">
                                            <img className="profile__media_img" src="" alt="Company Logo" />
                                            <div className="profile__media_body">
                                                <h4 className="profile__media_title">Software Developer</h4>
                                                <p className="profile__media_company"><span>Senza</span><span>Full-time</span></p>
                                                <p className="profile__media_date"><span>Jan 2021 - Present</span> <span>1 month</span></p>
                                                <p className="profile__media_location">Harare, Zimbabwe</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="profile__card">
                                    <div className="profile__card_heading">
                                        <h3 className="profile__card_title">Education</h3>
                                        <button>
                                            Add Education
                                        </button>
                                    </div>

                                    <ul className="profile__medias">
                                        <li className="profile__media">
                                            <img className="profile__media_img" src="" alt="Company Logo" />
                                            <div className="profile__media_body">
                                                <h4 className="profile__media_title">National University of Science and Technology</h4>
                                                <p className="profile__media_company"><span>Bachelors Degree</span><span>Computer Science</span></p>
                                                <p className="profile__media_date"><span>2021 - 2022</span></p>
                                            </div>
                                        </li>
                                        <li className="profile__media">
                                            <img className="profile__media_img" src="" alt="Company Logo" />
                                            <div className="profile__media_body">
                                                <h4 className="profile__media_title">Mzingwane High School</h4>
                                                <p className="profile__media_company"><span>A'Level</span><span>Maths, Physics &amp; Chemistry</span></p>
                                                <p className="profile__media_date"><span>2021 - 2022</span></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="profile__card">
                                    <h3 className="profile__card_title">Licences &amp; Certifications</h3>
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
        </>
    )
}

export default ProfilePage