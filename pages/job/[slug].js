import tw from 'twin.macro'
import Head from 'next/head'
import styled from 'styled-components'
import ApplyLink from '../../components/JobDetail/ApplyLink';
import NavBar from '../../components/NavBar/NavBar';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import { useRouter } from 'next/router';

const Main = styled.div`
    ${tw`min-h-screen bg-gray-50 flex`}
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
            ${tw`text-xs text-gray-800 bg-gray-200 inline-block rounded px-2 py-1`}
            font-weight: 500;
        }
        .title {
            ${tw`font-semibold mt-1`}
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
                        ${tw`fill-current text-gray-800`}
                    }
                }
            }
        }
    }
`;

const Single = () => {
    const router = useRouter()

    return (
        <>
            <Head>
                <title>Job Details Page</title>
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
                                    <p className="type">3 years</p>
                                    <p className="type">Full-time</p>
                                </div>
                                <h1 className="title">Software developer</h1>
                                <p className="range">$5.5K - $7.5K / month</p>
                            </div>
                            <div className="right">
                                <div className="logo">
                                    M
                                </div>
                            </div>
                        </div>
                        <div className="location">
                            <p>Harare, Remote</p>
                            <p className="company-name">Maverik Inc</p>
                        </div>
                    </Top>
                    <Bottom>
                        <div>
                            <h2 className="title">
                                Job Description
                            </h2>
                            <div className="body">
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error eos reprehenderit praesentium ad sit, enim illo iusto debitis voluptates! Est similique quibusdam ex? Voluptate, eveniet.
                                </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas voluptatem at adipisci, quam nostrum facilis illo pariatur quibusdam dicta! Quia illum sit minima ad ab laborum eligendi cupiditate inventore!</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="title">
                                Responsibilities
                            </h2>
                            <ul className="body">
                                <li className="item">
                                    <div className="left">
                                        <i className="item-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 7H2v6h8v5l8-8-8-8v5z"/></svg>
                                        </i>
                                    </div>
                                    <div>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    </div>
                                </li>
                                <li className="item">
                                    <div className="left">
                                        <i className="item-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 7H2v6h8v5l8-8-8-8v5z"/></svg>
                                        </i>
                                    </div>
                                    <div>
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                </li>
                                <li className="item">
                                    <div className="left">
                                        <i className="item-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 7H2v6h8v5l8-8-8-8v5z"/></svg>
                                        </i>
                                    </div>
                                    <div>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed officia consequatur modi.
                                    </div>
                                </li>
                                <li className="item">
                                    <div className="left">
                                        <i className="item-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 7H2v6h8v5l8-8-8-8v5z"/></svg>
                                        </i>
                                    </div>
                                    <div>
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="title">
                                Required Skills
                            </h2>
                            <ul className="body">
                                <li className="item">
                                    <div className="left">
                                        <i className="item-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 7H2v6h8v5l8-8-8-8v5z"/></svg>
                                        </i>
                                    </div>
                                    <div>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores ratione perferendis explicabo officia voluptates veniam inventore modi quibusdam quas doloremque.
                                    </div>
                                </li>
                                <li className="item">
                                    <div className="left">
                                        <i className="item-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 7H2v6h8v5l8-8-8-8v5z"/></svg>
                                        </i>
                                    </div>
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </div>
                                </li>
                                <li className="item">
                                    <div className="left">
                                        <i className="item-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 7H2v6h8v5l8-8-8-8v5z"/></svg>
                                        </i>
                                    </div>
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur.
                                    </div>
                                </li>
                                <li className="item">
                                    <div className="left">
                                        <i className="item-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 7H2v6h8v5l8-8-8-8v5z"/></svg>
                                        </i>
                                    </div>
                                    <div>
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="title">
                                Qualifications
                            </h2>
                            <ul className="body">
                                <li className="item">
                                    <div className="left">
                                        <i className="item-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 7H2v6h8v5l8-8-8-8v5z"/></svg>
                                        </i>
                                    </div>
                                    <div>
                                        Lorem, ipsum dolor sit amet consectetur.
                                    </div>
                                </li>
                                <li className="item">
                                    <div className="left">
                                        <i className="item-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 7H2v6h8v5l8-8-8-8v5z"/></svg>
                                        </i>
                                    </div>
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </div>
                                </li>
                                <li className="item">
                                    <div className="left">
                                        <i className="item-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 7H2v6h8v5l8-8-8-8v5z"/></svg>
                                        </i>
                                    </div>
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur.
                                    </div>
                                </li>
                                <li className="item">
                                    <div className="left">
                                        <i className="item-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 7H2v6h8v5l8-8-8-8v5z"/></svg>
                                        </i>
                                    </div>
                                    <div>
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Bottom>
                </Main>
                <ApplyLink />
            </Container>
        </>
    )
}

export default Single