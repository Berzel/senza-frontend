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

const Home = ({sectors, latestJobs}) => {

  return (
    <>
      <Head>
        <title>Senza - Zimbabwe's favourite job board</title>
        <meta name="description" content="Zimbabwe's favourite job board." />
      </Head>

      <Header>
        <div className="container">
          <NavBar />
          <Banner title="Job hunters, rest and let the jobs find you." description="Instantly search over thousands of live vacancies from all industries across the nation and find the perfect job you desire." />
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

export default Home;

export async function getStaticProps(context) {
  const latestJobs = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/jobs?_sort=latest`).then(r => r.data)
  const sectors = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/sectors?_size=5000`).then(r => r.data.data)

  return {
      props: {
          sectors,
          latestJobs
      },
      revalidate: 30
  }
}
