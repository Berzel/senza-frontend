import tw from 'twin.macro'
import Head from 'next/head'
import styled from 'styled-components'
import JobSummaryList from '../components/JobSummary/JobSummaryList';
import PostJobBanner from '../components/PostJob/PostJobBanner';
import CategoryList from '../components/Category/CategoryList';
import SearchBar from '../components/Search/SearchBar';
import NavBar from '../components/NavBar/NavBar';
import Banner from '../components/Banner/Banner';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import axios from 'axios';

const Main = styled.main`
  & > * {
    ${tw`mt-7 block`}
  }
`;

export default function Home({sectors, latestJobs}) {

  return (
    <>
      <Head>
        <title>Senza - Zimbabwe's favourite job board</title>
        <meta name="description" content="Zimbabwe's favourite job board." />
      </Head>

      <Header>
        <div className="container">
          <NavBar />
          <Banner title="Zimbabwe's favourite job board." description="Instantly search over 250,000 live vacancies from all industries across the nation and find the perfect job you desire." />
          <SearchBar />
        </div>
      </Header>
      <Container>
        <Main>
          <CategoryList categories={sectors} />
          <PostJobBanner />
          <JobSummaryList title='Latest jobs feed' jobs={latestJobs}/>
        </Main>
      </Container>
    </>
  )
}

export async function getStaticProps(context) {
  const sectors = await axios.get(`${process.env.NEXT_PUBLIC_CORE_SERVICE_ENDPOINT}/sectors/all`).replace('http', 'https').then(r => r.data)
  const latestJobs = await axios.get(`${process.env.NEXT_PUBLIC_CORE_SERVICE_ENDPOINT}/jobs/latest`.replace('http', 'https')).then(r => r.data)

  return {
      props: {
          sectors,
          latestJobs
      },
      revalidate: 60
  }
}
