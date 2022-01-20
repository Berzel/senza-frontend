import Head from "next/head";
import styled from '@emotion/styled';
import tw from "twin.macro";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Container from "../components/Container/Container";
import { useRouter } from "next/router";
import { useState } from "react";
import CreateJobStyles from "../components/CreateJob/CreateJob.styled";
import useUser from "../lib/useUser";
import AuthModal from "../components/AuthModal/AuthModal";
import axios from "../lib/axios";
import useDebounce from "../lib/useDebounce";

const Main = styled.main`
    & > *+* {
        ${tw`mt-7 block`}
    }
`;

const NewJobPage = ({countries, sectors, jobLevels, contractTypes}) => {
    const jobDefaults = {
        title: '',
        description: '',
        min_wage: '250',
        max_wage: '2000',
        wage_period: 'month',
        wage_currency: 'usd',
        wage_negotiable: true,
        level_id: jobLevels.filter(l => l.slug === 'intermediate')[0]?.id,
        sector_id: sectors.filter(s => s.slug === 'work-from-home')[0]?.id,
        contract_type_id: contractTypes.filter(c => c.slug === 'full-time')[0]?.id,
        country_id: countries.filter(c => c.slug === 'zimbabwe')[0]?.id,
        is_remote: true,
        city: 'Harare',
        responsibilities: ['', '', ''],
        qualifications: ['', '', ''],
        application_instructions: '',
        application_email: '',
        application_link: '',
        application_deadline: '',
    };

    const companyDefaults = {
        name: '',
        about: '',
        website: '',
        contact_email: '',
        twitter_handle: '',
        facebook_page: '',
        country_id: countries.filter(c => c.slug === 'zimbabwe')[0]?.id
    };

    const router = useRouter();
    const { user } = useUser();
    const [typed, setTyped] = useState(false);
    const [job, setJob] = useState(jobDefaults);
    const [company_name, setCompanyName] = useState('');
    const [company, setCompany] = useState(companyDefaults);
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    const [companySuggestions, setCompanySuggestions] = useState([]);
    const [skills, setSkills] = useState(jobDefaults.qualifications);
    const [application_method, setApplicationMethod] = useState({type: 'link', value: ''});
    const [responsibilities, setResponsibilities] = useState(jobDefaults.responsibilities);

    useDebounce(async () => {
        if (typed) {
            if (company_name.length < 3) {
                setCompanySuggestions([])
            } else {
                const companies = await axios.get(`/companies?name=${company_name}&_size=5`).then(r => r.data.data)
                setCompanySuggestions(companies)
            }
        }
    }, 500, [company_name])

    const addSkill = e => {
        e.preventDefault();
        if (skills.length > 30) return;
        const newSkills = [...skills, ''];
        setSkills(newSkills);
        setJob({...job, qualifications: newSkills})
    }

    const updateSkill = (key, value) => {
        let newSkills = [...skills]
        newSkills[key] = value
        setSkills(newSkills)
        setJob({...job, qualifications: newSkills})
    }

    const removeSkill = key => {
        if (skills.length <= 3) return;
        let newSkills = [...skills]
        newSkills = newSkills.filter((skill, index) => key !== index)
        setSkills(newSkills)
        setJob({...job, qualifications: newSkills})
    }

    const addResponsibitity = e => {
        e.preventDefault()
        if (responsibilities.length > 30) return;
        const newResponsibilities = [...responsibilities, ''];
        setResponsibilities(newResponsibilities)
        setJob({...job, responsibilities: newResponsibilities})
    }

    const updateResponsibility = (key, value) => {
        let newResponsibilities = [...responsibilities]
        newResponsibilities[key] = value
        setResponsibilities(newResponsibilities)
        setJob({...job, responsibilities: newResponsibilities})
    }

    const removeResponsibility = key => {
        if (responsibilities.length <= 3) return;
        let newResponsibilities = [...responsibilities]
        newResponsibilities = newResponsibilities.filter((res, index) => key !== index)
        setResponsibilities(newResponsibilities)
        setJob({...job, responsibilities: newResponsibilities})
    }

    const onApplicationMethodChange = value => {
        if (value.startsWith("https://") || value.startsWith("http://")) {
            setApplicationMethod({type: 'link', value});
            setJob({...job, application_email: "", application_link: value});
        } else {
            setApplicationMethod({type: 'email', value});
            setJob({...job, application_link: "", application_email: value});
        }
    }

    const selectCompany = company => {
        setTyped(false)
        setCompany(company)
        setCompanySuggestions([])
        setCompanyName(company.name)
    }

    const onCompanyNameChange = e => {
        setTyped(true);

        if (e.target.value.length < 3) {
            setCompany(companyDefaults);
        }

        setCompanyName(e.target.value)
    }

    const handleValidationErrors = err => {
        if (err.response && err.response.status === 422) {
            let newValidationErrors = {};

            Object.keys(err.response.data.errors).forEach(key => {
                newValidationErrors[key] = err.response.data.errors[key][0]; // Only take the first error message to display
            })

            setValidationErrors(newValidationErrors)
        }
    }
    
    const postJob = async e => {
        e.preventDefault()
        setValidationErrors({});

        if (!user && !showAuthModal) {
            return setShowAuthModal(true)
        }

        if (!user) {
            return;
        };

        try {
            let jobDetails = await axios.post(`/jobs`, {...job,  company_id: company?.id}).then(r => r.data);
            setJob(jobDefaults)
            setSkills(jobDefaults.qualifications)
            setResponsibilities(jobDefaults.responsibilities)
            router.push(`/job/${jobDetails?.slug}`);
        } catch (err) {
            handleValidationErrors(err)
        }
    }
    
    return (
        <>
            <Head>
                <title>Senza - Post New Job</title>
                <meta name="description" content="Post new job on Senza" />
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
                                Post New Job
                            </h1>
                            <p>
                                In order to create a new job posting you must first add or select the company details that you are creating the job offer for.
                                Job listings will expire after 30 days on our website and after that applications will be closed. 
                                Fields marked with an asterisk (<span className="input_required">*</span>) are required.
                            </p>
                        </div>
                        <div className="form-container">
                            <div className="left">
                                <div className="sidebar">
                                    <h1 className="title">
                                        Take note
                                    </h1>
                                    <p>
                                        To create a new job posting you must first add or select the company details that you are creating the job offer for.
                                    </p>
                                    <p>
                                        Fields marked with an asterisk (<span className="input_required">*</span>) are required.
                                    </p>
                                    <p>
                                        You won't be able to edit jobs after posting. For help please contact Berzel Best at <a href="mailto:berzel.best@gmail.com" className="link"> berzel.best@gmail.com</a>
                                    </p>
                                    <p>
                                        Job listings will expire after 30 days on our website and after that applications will be closed.
                                    </p>
                                </div>
                            </div>
                            <div className="right">
                                <form action="/jobs" id="post_job_form" method="POST" encType="multipart/form-data" className="form" onSubmit={postJob}>
                                    <div className="section">
                                        <h2 className="title">
                                            Job Details
                                        </h2>
                                        <div className="row">
                                            <div className="group">
                                                <label htmlFor="title" className="label">
                                                    Job title / role <span className="input_required">*</span>
                                                </label>
                                                <input 
                                                    className="input" 
                                                    type="text" 
                                                    id="title" 
                                                    name="title" 
                                                    value={job?.title} 
                                                    onChange={e => setJob({...job, title: e.target.value})} 
                                                    placeholder="Web Developer, etc" required/>
                                                { validationErrors?.title && <span className="error-msg">{validationErrors?.title}</span> }
                                            </div>
                                            <div className="group">
                                                <label htmlFor="sector_id" className="label">
                                                    Industry sector <span className="input_required">*</span>
                                                </label>
                                                <select 
                                                    className="input" 
                                                    name="sector_id" 
                                                    value={job?.sector_id}
                                                    onChange={e => setJob({...job, sector_id: e.target.value})}
                                                    id="sector_id" required>
                                                        {
                                                            sectors && sectors.map(sector => (
                                                                <option key={sector.id} value={sector.id}>{sector.display_name}</option>
                                                            ))
                                                        }
                                                </select>
                                                { validationErrors?.sector_id && <span className="error-msg">{validationErrors?.sector_id.replace('sector id', 'sector')}</span> }
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="group">
                                                <label htmlFor="level_id" className="label">
                                                    Job level <span className="input_required">*</span>
                                                </label>
                                                <select 
                                                    className="input" 
                                                    name="level_id"
                                                    value={job?.level_id}
                                                    onChange={e => setJob({...job, level_id: e.target.value})}
                                                    id="level_id" required>
                                                        {
                                                            jobLevels && jobLevels.map(level => (
                                                                <option key={level.id} value={level.id}>{level.display_name}</option>
                                                            ))
                                                        }
                                                </select>
                                                { validationErrors?.level_id && <span className="error-msg">{validationErrors?.level_id.replace('level id', 'level')}</span> }
                                            </div>
                                            <div className="group">
                                                <label htmlFor="contract_type_id" className="label">
                                                    Contract type <span className="input_required">*</span>
                                                </label>
                                                <select 
                                                    className="input" 
                                                    name="contract_type_id"
                                                    value={job?.contract_type_id}
                                                    onChange={e => setJob({...job, contract_type_id: e.target.value})} 
                                                    id="contract_type_id" required>
                                                        {
                                                            contractTypes && contractTypes.map(type => (
                                                                <option key={type.id} value={type.id}>{type.display_name}</option>
                                                            ))
                                                        }
                                                </select>
                                                { validationErrors?.contract_type_id && <span className="error-msg">{validationErrors?.contract_type_id.replace('contract type id', 'job type')}</span> }
                                            </div>
                                        </div>
                                        <div className="group company_suggestions">
                                            <label htmlFor="company_name" className="label">
                                                Company name
                                            </label>
                                            <input 
                                                className="input" 
                                                name="company_name" 
                                                id="company_name"
                                                value={company_name}
                                                onChange={onCompanyNameChange} 
                                                placeholder="Company name" required/>
                                            {
                                                companySuggestions.length > 0 &&
                                                (
                                                    <ul className="company_suggestions_list">
                                                        {
                                                            companySuggestions.map(c => (
                                                                <li key={c.id}>
                                                                    <button onClick={(e) => {e.preventDefault(); selectCompany(c)}}>
                                                                        {c.name}
                                                                    </button>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                )
                                            }
                                            { validationErrors?.company_name && <span className="error-msg">{validationErrors?.company_name}</span> }
                                        </div>
                                        <div className="group">
                                            <label htmlFor="description" className="label">
                                                Job description <span className="input_required">*</span>
                                            </label>
                                            <textarea 
                                                rows="8" 
                                                className="input" 
                                                name="description" 
                                                id="description"
                                                value={job?.description}
                                                onChange={e => setJob({...job, description: e.target.value})} 
                                                placeholder="Job description goes here" required/>
                                            { validationErrors?.description && <span className="error-msg">{validationErrors?.description}</span> }
                                        </div>

                                        <div>
                                            <div className="sub-section_heading">
                                                <h3 className="sub-section_heading_title">Salary details</h3>
                                                <p className="sub-section_heading_text">Please provide a salary range for this role.</p>
                                            </div>
                                            <div className="check-group">
                                                <input 
                                                    type="checkbox" 
                                                    name="wage_negotiable"
                                                    checked={!!job?.wage_negotiable} 
                                                    onChange={e => setJob({...job, wage_negotiable: e.target.checked})} 
                                                    id="wage_negotiable" />
                                                <label htmlFor="wage_negotiable" className="check-label">Salary is negotiable?</label>
                                            </div>
                                            <div className="row">
                                                <div className="group">
                                                    <label htmlFor="salary.min" className="label">
                                                        Min
                                                    </label>
                                                    <input 
                                                        className="input" 
                                                        type="number" 
                                                        id="salary.min" 
                                                        name="salary.min" 
                                                        value={job?.min_wage}
                                                        onChange={e => setJob({...job, min_wage: e.target.value})}
                                                        placeholder="250"/>
                                                </div>
                                                <div className="group">
                                                    <label htmlFor="salary.max" className="label">
                                                        Max
                                                    </label>
                                                    <input 
                                                        className="input" 
                                                        type="number"
                                                        id="salary.max" 
                                                        name="salary.max" 
                                                        value={job?.max_wage}
                                                        onChange={e => setJob({...job, max_wage: e.target.value})}
                                                        placeholder="10000"/>
                                                </div>
                                                <div className="group">
                                                    <label htmlFor="salary.currency" className="label">
                                                        Currency
                                                    </label>
                                                    <select 
                                                        className="input" 
                                                        name="salary.currency" 
                                                        value={job?.wage_currency}
                                                        onChange={e => setJob({...job, wage_currency: e.target.value})}
                                                        id="salary.currency">
                                                            <option value="usd">USD</option>
                                                            <option value="zwl">ZWL</option>
                                                            <option value="eur">EUR</option>
                                                            <option value="gbp">GBP</option>
                                                    </select>
                                                </div>
                                                <div className="group">
                                                    <label htmlFor="salary.period" className="label">
                                                        Interval
                                                    </label>
                                                    <select 
                                                        className="input" 
                                                        name="salary.period"
                                                        value={job?.wage_period}
                                                        onChange={e => setJob({...job, wage_period: e.target.value})} 
                                                        id="salary.period">
                                                            <option value="hour">Hourly</option>
                                                            <option value="day">Daily</option>
                                                            <option value="week">Weekly</option>
                                                            <option value="month">Monthly</option>
                                                            <option value="year">Yearly</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="sub-section_heading">
                                                <h3 className="sub-section_heading_title">Residential preference</h3>
                                                <p className="sub-section_heading_text">Remote workers can work from anywhere.</p>
                                            </div>
                                            <div className="check-group">
                                                <input 
                                                    type="checkbox" 
                                                    name="is_remote"
                                                    checked={!!job?.is_remote} 
                                                    onChange={e => setJob({...job, is_remote: e.target.checked})} 
                                                    id="is_remote" />
                                                <label htmlFor="is_remote" className="check-label">This role allows working from home?</label>
                                            </div>
                                            <div className="row">
                                                <div className="group">
                                                    <label htmlFor="country_id" className="label">
                                                        Country
                                                    </label>
                                                    <select 
                                                        className="input" 
                                                        name="country_id" 
                                                        value={job?.country_id}
                                                        onChange={e => setJob({...job, country_id: e.target.value})}
                                                        id="country_id">
                                                            {
                                                                countries && countries.map(country => (
                                                                    <option key={country.id} value={country.id}>{country.name}</option>
                                                                ))
                                                            }
                                                    </select>
                                                </div>
                                                <div className="group">
                                                    <label htmlFor="city" className="label">
                                                        City / Town
                                                    </label>
                                                    <input 
                                                        className="input" 
                                                        type="text" 
                                                        id="city" 
                                                        name="city" 
                                                        value={job?.city}
                                                        onChange={e => setJob({...job, city: e.target.value})}
                                                        placeholder="Enter town or city name" required={job?.is_remote ? "" : "required"}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sub-section">
                                            <div className="sub-section_heading">
                                                <h3 className="sub-section_heading_title">Responsibilities</h3>
                                                <p className="sub-section_heading_text">A minimum of 3 responsibilities</p>
                                            </div>
                                            {
                                                responsibilities && responsibilities.map((res, key) => (
                                                    <div key={key}>
                                                        <div className="group list">
                                                            <input 
                                                                className="input" 
                                                                value={res} 
                                                                onChange={e => updateResponsibility(key, e.target.value)} 
                                                                type="text" 
                                                                id={`responsibilities[${key}]`} 
                                                                name={`responsibilities[${key}]`} 
                                                                placeholder={`Responsibility #${key+1}`} required/>
                                                            {
                                                                responsibilities.length > 3 && <a href="#" className="remove-btn" onClick={e => {e.preventDefault(); removeResponsibility(key)}}>x</a>
                                                            }
                                                        </div>
                                                        { validationErrors[`responsibilities.${key}`] && <span className="error-msg">{validationErrors[`responsibilities.${key}`].replace(`responsibilities.${key}`, `responsibility #${key+1}`)}</span> }
                                                    </div>
                                                ))
                                            }
                                            <div className="more-btn">
                                                <a href="#" onClick={addResponsibitity}>
                                                    +
                                                </a>
                                            </div>
                                        </div>
                                        <div className="sub-section">
                                            <div className="sub-section_heading">
                                                <h3 className="sub-section_heading_title">Experience &amp; Qualifications</h3>
                                                <p className="sub-section_heading_text">A minimum of 3 Qualifications</p>
                                            </div>
                                            {
                                                skills && skills.map((skill, key) =>(
                                                    <div  key={key}>
                                                        <div className="group list">
                                                            <input 
                                                                className="input" 
                                                                value={skill} 
                                                                onChange={e => updateSkill(key, e.target.value)} 
                                                                type="text" 
                                                                id={`qualifications[${key}]`} 
                                                                name={`qualifications[${key}]`} 
                                                                placeholder={`Qualification #${key+1}`} required/>
                                                            {
                                                                skills.length > 3 && <a href="#" className="remove-btn" onClick={e => {e.preventDefault(); removeSkill(key)}}>x</a>
                                                            }
                                                        </div>
                                                        { validationErrors[`qualifications.${key}`] && <span className="error-msg">{validationErrors[`qualifications.${key}`].replace(`qualifications.${key}`, `qualification #${key+1}`)}</span> }
                                                    </div>
                                                ))
                                            }
                                            <div className="more-btn">
                                                <a href="#" onClick={addSkill}>
                                                    +
                                                </a>
                                            </div>
                                        </div>
                                        <div className="sub-section">
                                            <div className="sub-section_heading">
                                                <h3 className="sub-section_heading_title">How to apply</h3>
                                                <p className="sub-section_heading_text">One of application email / link is required</p>
                                            </div>
                                            <div className="group">
                                                <label htmlFor="application_instructions" className="label">
                                                    Application instructions
                                                </label>
                                                <textarea 
                                                    rows="5" 
                                                    className="input" 
                                                    name="application_instructions" 
                                                    id="application_instructions"
                                                    value={job?.application_instructions}
                                                    onChange={e => setJob({...job, application_instructions: e.target.value})} 
                                                    placeholder="How should candidates apply?" required/>
                                                { validationErrors?.application_instructions && <span className="error-msg">{validationErrors?.application_instructions}</span> }
                                            </div>
                                            <div className="row">
                                            <div className="group">
                                                <label htmlFor="application_method" className="label">
                                                    Application email / link
                                                </label>
                                                <input 
                                                    className="input" 
                                                    type="text"
                                                    id="application_method" 
                                                    value={application_method.value}
                                                    onChange={e => onApplicationMethodChange(e.target.value.toLowerCase())} 
                                                    placeholder="Application email / link" required/>
                                                { validationErrors?.application_email && <span className="error-msg">{validationErrors?.application_email}</span> }
                                                { validationErrors?.application_link && <span className="error-msg">{validationErrors?.application_link}</span> }
                                            </div>
                                            <div className="group">
                                                <label htmlFor="application_deadline" className="label">
                                                    Application deadline
                                                </label>
                                                <input 
                                                    className="input" 
                                                    type="date"
                                                    id="application_deadline" 
                                                    name="application_deadline"
                                                    value={job?.application_deadline}
                                                    onChange={e => setJob({...job, application_deadline: e.target.value})} 
                                                    placeholder="Application deadline" required/>
                                                { validationErrors?.application_deadline && <span className="error-msg">{validationErrors?.application_deadline}</span> }
                                            </div>
                                            </div>
                                        </div>
                                        <div className="group">
                                            <input type="submit" className="input submit" name="action" value="Post your job" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        { showAuthModal && (<AuthModal close={() => setShowAuthModal(false)} />) }
                    </CreateJobStyles>
                </Main>
            </Container>
        </>
    )
}

export default NewJobPage

export async function getStaticProps(context) {
    const countries = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/countries`).then(r => r.data.data)
    const sectors = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/sectors?_size=5000`).then(r => r.data.data)
    const jobLevels = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/levels`).then(r => r.data.data)
    const contractTypes = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/contract_types`).then(r => r.data.data)

    return {
        props: {
            countries,
            sectors,
            jobLevels,
            contractTypes
        },
        revalidate: 60
    }
}