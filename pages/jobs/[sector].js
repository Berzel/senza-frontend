import axios from "axios";
import Head from "next/head";
import styled from '@emotion/styled';
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
                <title>Senza - {sector.display_name} Jobs in Zimbabwe</title>
                <meta name="description" content={`${sector.display_name} jobs in Zimbabwe.`} />
            </Head>
    
            <Header>
                <div className="container">
                    <NavBar />
                </div>
            </Header>
            <Container>
                <Main>
                    <MainSearch />
                    <JobSummaryList title={`${sector.display_name} Jobs`} jobs={sector.latestJobs} />
                </Main>
            </Container>
        </>
    )
}

export default CategoryPage

export async function getStaticPaths() {
    const allSectors = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/sectors?_size=5000`).then(r => r.data.data)
    const paths = allSectors?.map((sector) => ({
        params: { sector: sector.slug },
    }));

    return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
    try {
        const sector = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/sectors/${params.sector}`).then(r => r.data)
        sector.latestJobs = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/sectors/${params.sector}/jobs?_sort=latest`).then(r => r.data)

        return {
            props: {sector},
            revalidate: 30
        }
    } catch (error) {
        return {
            notFound: true
        }
    }
}