import Head from "next/head";
import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Container from "../../components/Container/Container";

const Main = styled.main`
    & > *+* {
        ${tw`mt-7 block`}
    }
`;

const CreateJob = styled.div`

.top {
    ${tw`pt-8 px-3`}

    >*+*{
        ${tw`mt-10`}
    }

    .title {
        ${tw`font-bold text-3xl`}
    }
}

    .form-container {
        ${tw`flex justify-between space-x-16 mt-12 p-3 border-t`}

        .right {
            flex-basis: 65%;
        }
    }

    .form {
        >*+*{
            ${tw`mt-5`}
        }

        .section {
            ${tw`border p-3 rounded-lg`}

            >*+*{
                ${tw`mt-5`}
            }

            .title {
                ${tw`font-semibold text-2xl border-b pb-4 pt-2`}
            }
        }

        .row {
            display: flex;
            ${tw`space-x-3`}

            >*{
                flex-grow: 1;
                flex-basis: 50%;
            }
        }

        .group {

            .label {
                ${tw`ml-0.5 block mb-1`}
            }

            .input {
                ${tw`block w-full p-3 rounded-lg border bg-white`}
            }

            .submit {
                ${tw`bg-blue-500 border-blue-500 text-white font-semibold shadow-lg cursor-pointer`}
            }
        }
    }
`;

const NewJobPage = () => {
    
    return (
        <>
            <Head>
                <title>Senza - New Job</title>
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
                    <CreateJob>
                        <div className="top">
                            <div>
                                <button className="back">
                                    Back
                                </button>
                            </div>
                            <h1 className="title">
                                New Job Listing
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quo ad nostrum culpa, aperiam numquam animi enim, dolores, neque veritatis eius deleniti voluptas alias reiciendis ab dignissimos unde velit rem.
                            </p>
                        </div>
                        <div className="form-container">
                            <div>
                                Left
                            </div>
                            <div className="right">
                                <form action="" className="form">
                                    <div className="section">
                                        <h2 className="title">
                                            Company Details
                                        </h2>
                                        <div className="row">
                                            <div className="group">
                                                <label htmlFor="company_name" className="label">
                                                    Company name
                                                </label>
                                                <input className="input" type="text" id="company_name" name="company_name" placeholder="Company Name"/>
                                            </div>
                                            <div className="group">
                                                <label htmlFor="company_logo" className="label">
                                                    Company logo
                                                </label>
                                                <input className="input" type="text" id="company_logo" name="company_logo" placeholder="Click upload company logo"/>
                                            </div>
                                        </div>

                                        <div className="group">
                                            <label htmlFor="company_description" className="label">
                                                Company description
                                            </label>
                                            <textarea rows="5" className="input" name="company_description" id="company_description" placeholder="Briefly describe your company">

                                            </textarea>
                                        </div>
                                        <div className="row">
                                            <div className="group">
                                                <label htmlFor="company_name" className="label">
                                                    Contact email
                                                </label>
                                                <input className="input" type="text" id="company_name" name="company_name" placeholder="someone@company.com"/>
                                            </div>
                                            <div className="group">
                                                <label htmlFor="company_logo" className="label">
                                                    Twitter handle
                                                </label>
                                                <input className="input" type="text" id="company_logo" name="company_logo" placeholder="@CompanyName"/>
                                            </div>
                                        </div>
                                        <div className="group">
                                            <input type="button" className="input submit" name="action" value="Save company details" />
                                        </div>
                                    </div>
                                    <div className="section">
                                        <h2 className="title">
                                            Job Details
                                        </h2>
                                        <div className="row">
                                            <div className="group">
                                                <label htmlFor="job_title" className="label">
                                                    Job title / role
                                                </label>
                                                <input className="input" type="text" id="job_title" name="job_title" placeholder="Web Developer, etc"/>
                                            </div>
                                            <div className="group">
                                                <label htmlFor="job_sector" className="label">
                                                    Job sector
                                                </label>
                                                <input className="input" type="text" id="job_sector" name="job_sector" placeholder="Pick a sector"/>
                                            </div>
                                        </div>
                                        <div className="group">
                                            <label htmlFor="job_description" className="label">
                                                Job description
                                            </label>
                                            <textarea rows="5" className="input" name="job_description" id="job_description" placeholder="Job description goes here">

                                            </textarea>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </CreateJob>
                </Main>
            </Container>
        </>
    )
}

export default NewJobPage