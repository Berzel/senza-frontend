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

const Main = styled.main`
  & > * {
    ${tw`mt-7 block`}
  }
`;

const Header = styled.div`
  @media screen and (min-width: 1280px) {
    ${tw`bg-purple-800 bg-gradient-to-t from-purple-900 to-purple-700`}
  }

  .container {
    @media screen and (min-width: 1280px) {
        margin: 0 auto;
        max-width: 980px;
        position: relative;
        ${tw`pb-5`}
    }
  }
`;

export default function Home() {
  const jobs = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {},{}, {}, {},{}, {}, {},{}, {}, {},{}, {},];

  // Hint: Category names should make sense when someone searches for {category} jobs in {location}
  const categories = [
    'Accounting', 'Administrative & Clerical', 'Banking & Mortgage', 'Biotech & Pharmaceutical', 'Construction', 'Customer Service', 'Design', 'Education', 'Engineering',
    'Finance', 'Web Development', 'Programming', 'Mobile Application Development', 'Software Engineering', 'Human Resource Management', 'Driving', 'Mining', 'Marketing', 'Receptionist',
    'Administrative & Clerical', 'Banking & Mortgage', 'Biotech & Pharmaceutical', 'Construction', 'Customer Service', 'Design', 'Education', 'Engineering',
    'Finance', 'Web Development', 'Programming', 'Mobile Application Development', 'Software Engineering', 'Human Resource Management', 'Driving', 'Mining', 'Marketing', 'Receptionist'
  ];

  return (
    <>
      <Head>
        <title>Homepage</title>
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
          <Banner />
          <SearchBar />
        </div>
      </Header>
      <Container>
        <Main>
          <CategoryList categories={categories} />
          <PostJobBanner />
          <JobSummaryList jobs={jobs}/>
        </Main>
      </Container>
    </>
  )
}
