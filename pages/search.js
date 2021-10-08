import Head from "next/head";
import styled from "styled-components";
import tw from "twin.macro";
import Container from "../components/Container/Container";
import JobSummaryList from "../components/JobSummary/JobSummaryList";
import NavBar from "../components/NavBar/NavBar";
import MainSearch from "../components/Search/MainSearch";

const Main = styled.main`
    & > * {
        ${tw`mt-7 block`}
    }
`;

const jobs = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {},{}, {}, {},{}, {}, {},{}, {}, {},{}, {},];

const SearchPage = () => (
    <>
        <Head>
            <title>Search Page</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="manifest" href="manifest.json" />
            <meta name="theme-color" content="#4c1d95" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
        </Head>

        <Container>
            <NavBar />

            <Main>
                <MainSearch />
                <JobSummaryList jobs={jobs} />
            </Main>
        </Container>
    </>
)

export default SearchPage