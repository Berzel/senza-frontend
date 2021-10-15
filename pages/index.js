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

const Main = styled.main`
  & > * {
    ${tw`mt-7 block`}
  }
`;

export default function Home() {
  const jobs = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {},{}, {}, {},{}, {}, {},{}, {}, {},{}, {},];

  // Hint: Category names should make sense when someone searches for {category} jobs in {location}
  const categories = [
    'Accountancy & Accounting',
    'Admin & Administration',
    'Automotive',
    'Aviation',
    'Banking',
    'Charity & Volunteer',
    'Cleaning',
    'Construction',
    'Customer Services',
    'Design',
    'Education',
    'Engineering',
    'Environmental',
    'Finance',
    'Healthcare',
    'Hospitality',
    'Information Technology',
    'Legal',
    'Leisure & Sports',
    'Logistics, Transport & Distribution',
    'Managerial',
    'Manufacturing',
    'Marketing',
    'Multilingual',
    'Health Services',
    'Procurement',
    'Public Sector',
    'Recruitment',
    'Retail',
    'Sales',
    'Science',
    'Seasonal',
    'Security & Emergency',
    'Travel & Tourism',
    'Warehouse',
    'Work from Home'
  ];

  return (
    <>
      <Head>
        <title>Senza - Zimbabwe's favourite job board</title>
        <meta name="description" content="Zimbabwe's favourite job board." />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1f2937" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
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
          <CategoryList categories={categories} />
          <PostJobBanner />
          <JobSummaryList title='Latest jobs feed' jobs={jobs}/>
        </Main>
      </Container>
    </>
  )
}
