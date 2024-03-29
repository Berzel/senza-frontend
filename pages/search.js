import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from '@emotion/styled';
import tw from "twin.macro";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import JobSummaryList from "../components/JobSummary/JobSummaryList";
import NavBar from "../components/NavBar/NavBar";
import MainSearch from "../components/Search/MainSearch";

const Main = styled.main`
    & > * {
        ${tw`mt-7 block`}
    }
`;

const SearchPage = ({jobs}) => {

    const { query } = useRouter();
    const title = query.q && query.q.length >= 4 ? `${jobs.total ?? 'No'} result${jobs.total != 1 ? 's':''} for ${query.q.toLowerCase()} jobs` : 'Latest jobs feed';

    return (
        <>
            <Head>
                <title>Senza - {title}</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
    
            <Header>
                <div className="container">
                    <NavBar />
                </div>
            </Header>
            <Container>
                <Main>
                    <MainSearch />
                    <JobSummaryList title={title} jobs={jobs} />
                </Main>
            </Container>
        </>
    )
}

export default SearchPage

export const getServerSideProps = async ({req}) => {
    const jobs = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}${req.url}`).then(r => r.data)

    return {
        props: {
            jobs
        }
    }
}