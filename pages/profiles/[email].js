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
            ${tw`bg-transparent shadow-lg rounded-lg flex flex-col`}

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
                ${tw`bg-white p-3 rounded-b-lg`}

                @media screen and (min-width: 1024px) {
                    ${tw`flex justify-end py-4`}
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
                                Bottom
                            </div>
                        </div>
                        <div>
                            <div>
                                Bottom Left
                            </div>
                            <div>
                                Bottom Right
                            </div>
                        </div>
                    </Profile>
                </Main>
            </Container>
        </>
    )
}

export default ProfilePage