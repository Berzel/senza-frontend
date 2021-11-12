import tw from 'twin.macro'
import Head from 'next/head'
import styled from 'styled-components'
import ApplyLink from '../../components/JobDetail/ApplyLink';
import NavBar from '../../components/NavBar/NavBar';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import { useRouter } from 'next/router';
import axios from 'axios';
import useUser from '../../lib/useUser';

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
        .left {
            ${tw`flex-grow`}
        }

        .pills {
            ${tw`flex`}
            >*+*{
                ${tw`ml-1`}
            }
        }

        .type {
            ${tw`text-sm text-black bg-blue-200 inline-block rounded-lg px-2 py-1`}
        }
        .title {
            ${tw`font-semibold mt-2 text-lg`}
            max-width: 92%;
        }
        .range{
            ${tw`text-gray-800 mt-2`}
            font-size: 0.95rem;
        }
    }

    .location {
        ${tw`flex justify-between text-sm text-gray-600 my-4`}

        > * {
            ${tw`flex items-center space-x-1`}
        }

        svg {
            width: 0.8em;
            height: 0.8em;
            ${tw`fill-current`}
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

const Single = ({job, setShowJob}) => {
    const router = useRouter()
    const { user } = useUser()

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

    const jobSummary = 
`${job.company.name} \
is looking for a ${job.is_remote ? 'Remote' : `${job.city} based`}, \
${job.title} (${job.level.display_name}) \
to join their team on a ${job.contract_type.display_name.toLowerCase()} basis.`;

    return (
        <>
            <Head>
                <title>
                    {`${job.is_remote ? 'Remote' : ''} ${job.title} ${job.city ? `in ${job.city}, ${job.country.name}`:''} | ${job.level.display_name} | ${job.contract_type.display_name}`} - Senza 
                </title>
                <meta name="description" content={jobSummary} />
            </Head>
    
            <Header>
                <div className="container">
                    <NavBar setShowJob={setShowJob} />
                </div>
            </Header>
    
            <Container>
                <Main>
                    <Top>
                        <div className="icons">
                            <div className="left">
                                <button className="back" onClick={e => router.back() }>
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
                        </div>
                        <div className="location">
                            <p>
                                <svg enableBackground="new 0 0 368.16 368.16" version="1.1" viewBox="0 0 368.16 368.16">
                                    <path d="m184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.29c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.3c5.096-7.728 12.144-20.912 15.72-29.4 0.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zm109.72 182.15c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.3c-1.84 2.792-2.424 2.792-4.264 0l-93.256-141.3c-4.568-6.928-11.136-19.2-14.328-26.808-0.136-0.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"/>
                                    <path d="m184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z"/>
                                </svg>
                                <span>
                                    {job.country.name}, {`${job.is_remote ? 'Remote' : job.city}`}
                                </span>
                            </p>
                            <p>1 day ago</p>
                        </div>
                    </Top>
                    <Bottom>
                        <div>
                            <h2 className="title">
                                Job Description
                            </h2>
                            <div className="body">
                                {
                                    job.description.split('\n\n').map((text, key) => (
                                        <div className="detail_text" key={key}>
                                            {text.split('\n').map((e, key) => (<p key={key}>{e}</p>))}
                                        </div>
                                    ))
                                }
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
                        {
                            user && (
                                <div>
                                    <h2 className="title">
                                        How to apply
                                    </h2>
                                    <div className="body">
                                        {
                                            job.application_instructions.split('\n\n').map((text, key) => (
                                                <div className="detail_text" key={key}>
                                                    {text.split('\n').map((e, key) => (<p key={key}>{e}</p>))}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </Bottom>
                </Main>
                <ApplyLink job={job} />
            </Container>
        </>
    )
}

export default Single

export async function getStaticPaths() {
    const latestJobs = await axios.get(`${process.env.NEXT_PUBLIC_CORE_SERVICE_ENDPOINT}/jobs?_sort=latest`).then(r => r.data)
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
        revalidate: 10
    }
}
