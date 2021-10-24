import tw from 'twin.macro'
import Head from 'next/head'
import styled from 'styled-components'
import ApplyLink from '../../components/JobDetail/ApplyLink';
import NavBar from '../../components/NavBar/NavBar';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import { useRouter } from 'next/router';
import axios from 'axios';

const Main = styled.div`
    ${tw`min-h-screen bg-blue-50 flex`}
    flex-direction: column;
`;

const Top = styled.div`
    ${tw`px-3 py-4`}

    .icons {
        ${tw`mb-8`}

        .back {
            width: 0.85rem;
            height: 0.85rem;

            > svg {
                ${tw`fill-current text-gray-800`}
            }
        }
    }

    .details {
        ${tw`flex justify-between`}

        .pills {
            ${tw`flex`}
            >*+*{
                ${tw`ml-1`}
            }
        }

        .type {
            ${tw`text-xs text-black bg-blue-200 inline-block rounded-lg px-2 py-1`}
        }
        .title {
            ${tw`font-semibold mt-2 text-lg`}
        }
        .range{
            ${tw`text-sm text-gray-800 mt-0.5`}
        }
        .logo {
            width: 4rem;
            height: 4rem;
            font-size: 3.2rem;
            ${tw`bg-gray-700 text-gray-100 font-bold flex justify-center items-center rounded-lg shadow-md`}
        }
    }

    .location {
        ${tw`flex justify-between text-xs mt-3 text-gray-800 mb-3`}

        .company-name {
            ${tw`text-gray-900`}
        }
    }
`;

const Bottom = styled.div`
    ${tw`px-3 py-4 bg-gray-50 rounded-t-xl pb-20`}
    flex-grow: 1;

    & > *+* {
        ${tw`mt-6`}
    }

    .title {
        ${tw`font-semibold`}
    }

    .body {
        ${tw`mt-2 text-gray-800`}
        max-width: 45rem;

        & > *+* {
            ${tw`mt-2`}
        }

        .item {
            display: flex;

            .left {
                flex-shrink: 0;
                margin-right: 0.35rem;

                .item-icon {
                    width: 0.75rem;
                    margin-top: 0.3rem;
                    display: inline-block;

                    > svg {
                        ${tw`fill-current text-blue-400`}
                    }
                }
            }
        }
    }
`;

const Single = ({job}) => {
    const router = useRouter()
    const formatter = Intl.NumberFormat('en', { notation: 'compact' });
    const formatPeriod = period => {
        const values = {
            hourly: 'hour',
            daily: 'day',
            weekly: 'week',
            'bi-weekly': 'fortnight',
            monthly: 'month',
            yearly: 'year'
        };

        return values[period];
    }

    return (
        <>
            <Head>
                <title>Senza - Job Details Page</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
    
            <Header>
                <div className="container">
                    <NavBar />
                </div>
            </Header>
    
            <Container>
                <Main>
                    <Top>
                        <div className="icons">
                            <div className="left">
                                <button className="back" onClick={e => router.back()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M3.828 9l6.071-6.071-1.414-1.414L0 10l.707.707 7.778 7.778 1.414-1.414L3.828 11H20V9H3.828z"/></svg>
                                </button>
                            </div>
                        </div>
                        <div className="details">
                            <div className="left">
                                <div className="pills">
                                    <p className="type">{job.level.display_name}</p>
                                    <p className="type">{job.contract_type.display_name}</p>
                                </div>
                                <h1 className="title">{job.title}</h1>
                                <p className="range">${formatter.format(job.salary.min)} - ${formatter.format(job.salary.max)} / {`${formatPeriod(job.salary.period)}`}</p>
                            </div>
                            <div className="right">
                                <div className="logo">
                                    {job.company.name[0].toUpperCase()}
                                </div>
                            </div>
                        </div>
                        <div className="location">
                            <p>{job.country.name}, {`${job.is_remote ? 'Remote' : job.city}`}</p>
                            <p className="company-name">{job.company.name}</p>
                        </div>
                    </Top>
                    <Bottom>
                        <div>
                            <h2 className="title">
                                Job Description
                            </h2>
                            <div className="body">
                                {job.description}
                            </div>
                        </div>
                        <div>
                            <h2 className="title">
                                Duties &amp; Responsibilities
                            </h2>
                            <ul className="body">
                                {
                                    job.responsibilities.map(res => (
                                        <li key={res.id} className="item">
                                            <div className="left">
                                                <i className="item-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 7H2v6h8v5l8-8-8-8v5z"/></svg>
                                                </i>
                                            </div>
                                            <div>
                                                {res.value}
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <h2 className="title">
                                Qualifications &amp; Experience
                            </h2>
                            <ul className="body">
                                {
                                    job.qualifications.map(qualification => (
                                        <li key={qualification.id} className="item">
                                            <div className="left">
                                                <i className="item-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 7H2v6h8v5l8-8-8-8v5z"/></svg>
                                                </i>
                                            </div>
                                            <div>
                                                {qualification.value}
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <h2 className="title">
                                How to apply
                            </h2>
                            <div className="body">
                                {job.application_instructions}
                            </div>
                        </div>
                    </Bottom>
                </Main>
                <ApplyLink />
            </Container>
        </>
    )
}

export default Single

export async function getStaticPaths() {
    const latestJobs = await axios.get(`${process.env.NEXT_PUBLIC_CORE_SERVICE_ENDPOINT}/jobs/latest`).then(r => r.data)
    const paths = latestJobs?.data?.map((job) => ({
        params: { slug: job.slug },
    }));

    return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
    const job = await axios.get(`${process.env.NEXT_PUBLIC_CORE_SERVICE_ENDPOINT}/jobs/${params.slug}`).then(r => r.data)

    return {
        props: {
            job
        },

        revalidate: 60
    }
}