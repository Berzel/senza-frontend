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
        ${tw`mt-12 p-3 border-t`}

        @media screen and (min-width: 1280px) {
            ${tw`flex justify-between space-x-16 mt-24`}
        }

        .left {
            display: none;

            @media screen and (min-width: 1280px) {
                display: block;
            }
        }

        .right {
            flex-basis: 100%;

            @media screen and (min-width: 1280px) {
                flex-basis: 65%;
            }
        }
    }

    .form {
        ${tw`pb-10`}
        @media screen and (min-width: 1280px) {
            ${tw`-mt-16 bg-gray-50`}
        }

        >*+*{
            ${tw`mt-5`}
        }

        .section {
            @media screen and (min-width: 1280px) {
                ${tw`border p-3 rounded-lg`}
            }

            >*+*{
                ${tw`mt-5`}
            }

            .title {
                ${tw`font-semibold text-2xl border-b pb-4 pt-2`}

                @media screen and (min-width: 1280px) {
                    ${tw`border-none`}
                }
            }
        }

        .row {
            ${tw`space-x-3 flex items-center`}

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

        .small-title {
            ${tw`font-semibold ml-0.5 border-b pb-2`}
        }

        .check-group {
            ${tw`ml-1 my-3 flex items-center`}

            .check-label {
                ${tw`inline-block ml-2`}
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
                <meta name="theme-color" content="#1f2937" />
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
                            <div className="left">
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
                                                    Industry sector
                                                </label>
                                                <input className="input" type="text" id="job_sector" name="job_sector" placeholder="Pick a sector"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="group">
                                                <label htmlFor="job_level" className="label">
                                                    Job level
                                                </label>
                                                <input className="input" type="text" id="job_level" name="job_level" placeholder="Entry, Intermediate, etc"/>
                                            </div>
                                            <div className="group">
                                                <label htmlFor="job_type" className="label">
                                                    Contract type
                                                </label>
                                                <input className="input" type="text" id="job_type" name="job_type" placeholder="full-time, part-time, etc"/>
                                            </div>
                                        </div>
                                        <div className="group">
                                            <label htmlFor="job_description" className="label">
                                                Job description
                                            </label>
                                            <textarea rows="5" className="input" name="job_description" id="job_description" placeholder="Job description goes here">

                                            </textarea>
                                        </div>

                                        <div>
                                            <h3 className="small-title">Renumeration</h3>
                                            <div className="check-group">
                                                <input type="checkbox" name="is_salary_negotiable" id="is_salary_negotiable" checked />
                                                <label htmlFor="is_salary_negotiable" className="check-label">Salary is negotiable?</label>
                                            </div>
                                            <div className="row">
                                                <div className="group">
                                                    <label htmlFor="salary_min" className="label">
                                                        Min Salary
                                                    </label>
                                                    <input className="input" type="text" id="salary_min" name="salary_min" placeholder="10,000"/>
                                                </div>
                                                <div className="group">
                                                    <label htmlFor="salary_max" className="label">
                                                        Max Salary
                                                    </label>
                                                    <input className="input" type="text" id="salary_max" name="salary_max" placeholder="300,000"/>
                                                </div>
                                                <div className="group">
                                                    <label htmlFor="salary_currency" className="label">
                                                        Currency
                                                    </label>
                                                    <input className="input" type="text" id="salary_currency" name="salary_currency" placeholder="USD"/>
                                                </div>
                                                <div className="group">
                                                    <label htmlFor="salary_interval" className="label">
                                                        Interval (Per)
                                                    </label>
                                                    <input className="input" type="text" id="salary_interval" name="salary_interval" placeholder="Year"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="small-title">Residential preference</h3>
                                            <div className="check-group">
                                                <input type="checkbox" name="is_remote" id="is_remote" checked />
                                                <label htmlFor="is_remote" className="check-label">This role allows working from home?</label>
                                            </div>
                                            <div className="row">
                                                <div className="group">
                                                    <label htmlFor="job_country" className="label">
                                                        Country
                                                    </label>
                                                    <input className="input" type="text" id="job_country" name="job_country" placeholder="Zimbabwe"/>
                                                </div>
                                                <div className="group">
                                                    <label htmlFor="job_city" className="label">
                                                        City
                                                    </label>
                                                    <input className="input" type="text" id="job_city" name="job_city" placeholder="Harare"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group">
                                            <input type="button" className="input submit" name="action" value="Post your job" />
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