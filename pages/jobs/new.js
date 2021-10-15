import Head from "next/head";
import styled from "styled-components";
import tw from "twin.macro";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Container from "../../components/Container/Container";
import { useRouter } from "next/router";
import { useState } from "react";
import CreateJobStyles from "../../components/CreateJob/CreateJob.styled";

const Main = styled.main`
    & > *+* {
        ${tw`mt-7 block`}
    }
`;

const NewJobPage = () => {
    const router = useRouter()

    const [company_name, setCompanyName] = useState('');
    const [job_title, setJobTitle] = useState('');
    const [skills, setSkills] = useState(['', '', ''])
    const [responsibilities, setResponsibilities] = useState(['', '', ''])

    const addSkill = e => {
        if (skills.length > 30) return;
        e.preventDefault()
        setSkills([...skills, '']);
    }

    const updateSkill = (key, value) => {
        let newSkills = [...skills]
        newSkills[key] = value
        setSkills(newSkills)
    }

    const removeSkill = key => {
        if (skills.length < 4) return;
        let newSkills = [...skills]
        newSkills = newSkills.filter((skill, index) => key !== index)
        setSkills(newSkills)
    }

    const addResponsibitity = e => {
        if (responsibilities.length > 30) return;
        e.preventDefault()
        setResponsibilities([...responsibilities, ''])
    }

    const updateResponsibility = (key, value) => {
        let newResponsibilities = [...responsibilities]
        newResponsibilities[key] = value
        setResponsibilities(newResponsibilities)
    }

    const removeResponsibility = key => {
        if (responsibilities.length < 4) return;
        let newResponsibilities = [...responsibilities]
        newResponsibilities = newResponsibilities.filter((res, index) => key !== index)
        setResponsibilities(newResponsibilities)
    }
    
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
                    <CreateJobStyles>
                        <div className="top">
                            <div>
                                <button className="back" onClick={e => router.back()}>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M3.828 9l6.071-6.071-1.414-1.414L0 10l.707.707 7.778 7.778 1.414-1.414L3.828 11H20V9H3.828z"/>
                                        </svg>
                                    </span>
                                    <span>
                                        Back
                                    </span>
                                </button>
                            </div>
                            <h1 className="title">
                                New Job Listing
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quo ad nostrum culpa, 
                                aperiam numquam animi enim, dolores, neque veritatis eius deleniti voluptas alias reiciendis ab dignissimos unde velit rem.
                            </p>
                        </div>
                        <div className="form-container">
                            <div className="left">
                                <div className="sidebar">
                                    Left
                                </div>
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
                                                <input 
                                                    className="input" 
                                                    type="text" 
                                                    id="company_name" 
                                                    name="company_name" 
                                                    value={company_name} 
                                                    onChange={e => setCompanyName(e.target.value)} 
                                                    placeholder="Company name"/>
                                            </div>
                                            <div className="group">
                                                <label htmlFor="company_logo" className="label">
                                                    Company logo
                                                </label>
                                                <input className="input" type="text" id="company_logo" name="company_logo" placeholder="Upload logo"/>
                                            </div>
                                        </div>

                                        <div className="group">
                                            <label htmlFor="company_description" className="label">
                                                Company description
                                            </label>
                                            <textarea 
                                                rows="5" 
                                                className="input" 
                                                name="company_description" 
                                                id="company_description" 
                                                placeholder="Briefly describe your company">
                                            </textarea>
                                        </div>
                                        <div className="row">
                                            <div className="group">
                                                <label htmlFor="company_website" className="label">
                                                    Company website
                                                </label>
                                                <input className="input" type="text" id="company_website" name="company_website" placeholder="www.company.com"/>
                                            </div>
                                            <div className="group">
                                                <label htmlFor="company_email" className="label">
                                                    Contact email
                                                </label>
                                                <input className="input" type="text" id="company_email" name="company_email" placeholder="someone@company.com"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="group">
                                                <label htmlFor="company_twitter" className="label">
                                                    Twitter handle
                                                </label>
                                                <input className="input" type="text" id="company_twitter" name="company_twitter" placeholder="@CompanyName"/>
                                            </div>
                                            <div className="group">
                                                <label htmlFor="company_facebook" className="label">
                                                    Facebook
                                                </label>
                                                <input className="input" type="text" id="company_facebook" name="company_facebook" placeholder="Facebook page"/>
                                            </div>
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
                                                <input 
                                                    className="input" 
                                                    type="text" 
                                                    id="job_title" 
                                                    name="job_title" 
                                                    value={job_title} 
                                                    onChange={e => setJobTitle(e.target.value)} 
                                                    placeholder="Web Developer, etc"/>
                                            </div>
                                            <div className="group">
                                                <label htmlFor="job_sector" className="label">
                                                    Industry sector
                                                </label>
                                                <select className="input" name="job_sector" id="job_sector">
                                                    <option value={null}>Pick a sector</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="group">
                                                <label htmlFor="job_level" className="label">
                                                    Job level
                                                </label>
                                                <select className="input" name="job_level" id="job_level">
                                                    <option value="intern">Internship</option>
                                                    <option value="graduate-trainee">Graduate Trainee</option>
                                                    <option value="entry-level">Entry-Level</option>
                                                    <option value="intermediate">Intermediate</option>
                                                    <option value="mid-level">Mid-Level</option>
                                                    <option value="senior">Senior</option>
                                                </select>
                                            </div>
                                            <div className="group">
                                                <label htmlFor="job_type" className="label">
                                                    Contract type
                                                </label>
                                                <select className="input" name="contract_type" id="contract_type">
                                                    <option value="fixed-term">Fixed Term</option>
                                                    <option value="part-time">Part Time</option>
                                                    <option value="full-time">Full Time</option>
                                                    <option value="temporary">Temporary</option>
                                                    <option value="zero-hours">Zero Hours</option>
                                                    <option value="apprenticeship">Apprenticeship</option>
                                                </select>
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
                                            <h3 className="small-title">Salary details</h3>
                                            <div className="check-group">
                                                <input type="checkbox" name="is_salary_negotiable" id="is_salary_negotiable" checked />
                                                <label htmlFor="is_salary_negotiable" className="check-label">Salary is negotiable?</label>
                                            </div>
                                            <div className="row">
                                                <div className="group">
                                                    <label htmlFor="salary_min" className="label">
                                                        Min
                                                    </label>
                                                    <input className="input" type="text" id="salary_min" name="salary_min" placeholder="10,000"/>
                                                </div>
                                                <div className="group">
                                                    <label htmlFor="salary_max" className="label">
                                                        Max
                                                    </label>
                                                    <input className="input" type="text" id="salary_max" name="salary_max" placeholder="300,000"/>
                                                </div>
                                                <div className="group">
                                                    <label htmlFor="salary_currency" className="label">
                                                        Currency
                                                    </label>
                                                    <select className="input" name="salary_currency" id="salary_currency">
                                                        <option value="usd">USD</option>
                                                        <option value="usd">ZWL</option>
                                                        <option value="usd">EUR</option>
                                                        <option value="usd">GBP</option>
                                                    </select>
                                                </div>
                                                <div className="group">
                                                    <label htmlFor="salary_interval" className="label">
                                                        Interval
                                                    </label>
                                                    <select className="input" name="salary_interval" id="salary_interval">
                                                        <option value="hourly">Hourly</option>
                                                        <option value="daily">Daily</option>
                                                        <option value="weekly">Weekly</option>
                                                        <option value="bi-weekly">Bi-Weekly</option>
                                                        <option value="monthly">Monthly</option>
                                                        <option value="yearly">Yearly</option>
                                                    </select>
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
                                                    <select className="input" name="job_country" id="job_country">
                                                        <option value="">Anywhere</option>
                                                        <option value="zambia">Zambia</option>
                                                        <option value="zimbabwe">Zimbabwe</option>
                                                    </select>
                                                </div>
                                                <div className="group">
                                                    <label htmlFor="job_city" className="label">
                                                        City / Town
                                                    </label>
                                                    <input className="input" type="text" id="job_city" name="job_city" placeholder="Harare"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sub-section">
                                            <h3 className="small-title">Responsibilities</h3>
                                            {
                                                responsibilities && responsibilities.map((res, key) => (
                                                    <div className="group list" key={key}>
                                                        <input 
                                                            className="input" 
                                                            value={res} 
                                                            onChange={e => updateResponsibility(key, e.target.value)} 
                                                            type="text" 
                                                            id={`job-responsibility-${key}`} 
                                                            name={`responsibilities[${key}]`} 
                                                            placeholder={`Responsibility #${key+1}`}/>
                                                        <a className="action-btn" onClick={() => removeResponsibility(key)}>
                                                            x
                                                        </a>
                                                    </div>
                                                ))
                                            }
                                            <div className="more-btn">
                                                <a onClick={addResponsibitity}>
                                                    +1 Responsibility
                                                </a>
                                            </div>
                                        </div>
                                        <div className="sub-section">
                                            <h3 className="small-title">Skills &amp; Qualifications</h3>
                                            {
                                                skills && skills.map((skill, key) =>(
                                                    <div className="group list" key={key}>
                                                        <input 
                                                            className="input" 
                                                            value={skill} 
                                                            onChange={e => updateSkill(key, e.target.value)} 
                                                            type="text" 
                                                            id={`job-skill-${key}`} 
                                                            name={`skills[${key}]`} 
                                                            placeholder={`Qualification #${key+1}`}/>
                                                        <a className="action-btn" onClick={() => removeSkill(key)}>
                                                            x
                                                        </a>
                                                    </div>
                                                ))
                                            }
                                            <div className="more-btn">
                                                <a onClick={addSkill}>
                                                    +1 Qualification / Skill
                                                </a>
                                            </div>
                                        </div>
                                        <div className="sub-section">
                                            <h3 className="small-title">How to apply</h3>
                                            <div className="group">
                                                <label htmlFor="company_description" className="label">
                                                    Application instructions
                                                </label>
                                                <textarea rows="5" className="input" name="company_description" id="company_description" placeholder="How should candidates apply?">

                                                </textarea>
                                            </div>
                                            <div className="row">
                                            <div className="group">
                                                <label htmlFor="application_email" className="label">
                                                    Application email
                                                </label>
                                                <input className="input" type="text" id="application_email" name="application_email" placeholder="Application email"/>
                                            </div>
                                            <div className="group">
                                                <label htmlFor="application_link" className="label">
                                                    Application link
                                                </label>
                                                <input className="input" type="text" id="application_link" name="application_link" placeholder="Application link"/>
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
                    </CreateJobStyles>
                </Main>
            </Container>
        </>
    )
}

export default NewJobPage