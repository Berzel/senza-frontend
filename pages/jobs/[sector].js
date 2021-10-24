import axios from "axios";
import Head from "next/head";
import styled from "styled-components";
import tw from "twin.macro";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import JobSummaryList from "../../components/JobSummary/JobSummaryList";
import NavBar from "../../components/NavBar/NavBar";
import MainSearch from "../../components/Search/MainSearch";

const Main = styled.main`
    & > * {
        ${tw`mt-7 block`}
    }
`;

const CategoryPage = ({sector}) => {

    return (
        <>
            <Head>
                <title>Senza - {sector.display_name} Jobs</title>
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
                    <JobSummaryList title={`${sector.display_name} Jobs`} jobs={sector.latestJobs} isSector={true} />
                </Main>
            </Container>
        </>
    )
}

export default CategoryPage

export async function getStaticPaths() {
    const allSectors = await axios.get(`${process.env.NEXT_PUBLIC_CORE_SERVICE_ENDPOINT}/sectors/all`).then(r => r.data)
    const paths = allSectors?.map((sector) => ({
        params: { sector: sector.slug },
    }));

    return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
    const sector = await axios.get(`${process.env.NEXT_PUBLIC_CORE_SERVICE_ENDPOINT}/sectors/${params.sector}`).then(r => r.data)
    sector.latestJobs = await axios.get(`${process.env.NEXT_PUBLIC_CORE_SERVICE_ENDPOINT}/sectors/${params.sector}/jobs`).then(r => r.data)

    return {
        props: {
            sector
        },
        revalidate: 60
    }
}