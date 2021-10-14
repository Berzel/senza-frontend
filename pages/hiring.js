import Head from "next/head";
import styled from "styled-components";
import tw from "twin.macro";
import Banner from "../components/Banner/Banner";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Link from "next/link";

const Main = styled.main`
    & > * {
        ${tw`mt-7 block`}
    }
`;

const NewJobLink = styled.div`
    ${tw`px-3 bg-purple-700 pb-5`}

    @media screen and (min-width: 1280px) {
        ${tw`bg-transparent pb-8`}
    }

    .link {
        ${tw`text-white bg-pink-500 rounded-lg p-3 px-5 inline-block font-semibold`}
    }
`;

const Hiring = () => {
    const description = "Senza's flexible and scalable solutions make it easier for companies of all sizes to find the best talent in no time while saving costs."
    
    return (
        <>
            <Head>
                <title>Senza - For Employers</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="manifest" href="manifest.json" />
                <meta name="theme-color" content="#4c1d95" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
            </Head>
    
            <Header>
                <div className="container">
                    <NavBar />
                    <Banner title="We're here to make hiring easier." description={description}/>
                    <NewJobLink>
                        <Link href="/jobs/new">
                            <a className="link">
                                Post a job now
                            </a>
                        </Link>
                    </NewJobLink>
                </div>
            </Header>
            <Container>
                <Main>
                    TODO: Brag about how we're good for employers
                </Main>
            </Container>
        </>
    )
}

export default Hiring