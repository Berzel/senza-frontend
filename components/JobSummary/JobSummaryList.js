import axios from "axios";
import { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import JobSummary from "./JobSummary";
import JobListStyles from "./JobSummaryList.styled";
import Link from "next/link";
import useUser from "../../lib/useUser";
import AuthModal from "../AuthModal/AuthModal";

const JobSummaryList = ({title, jobs}) => {
    const { user } = useUser();
    const [allPages, setAllPages] = useState([jobs]);
    const [scrolledDown, setscrolledDown] = useState(0);
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [awaitingResponse, setAwaitingResrponse] = useState(false)
    const getAllJobs = () => allPages.filter(el => !!el).reduce((allJobs, el) => allJobs.concat(el?.data), []);
    const [activeJob, setActiveJob] = useState(getAllJobs().length > 0 ? getAllJobs()[0] : null)

    const getNextPage = async () => {
        const previousPage = allPages[allPages.length - 1];
        if (awaitingResponse) return;
        if (!previousPage?.next_page_url) return;
        setAwaitingResrponse(true);
        const nextPage = await axios.get(`${previousPage.next_page_url}`).then(r => {setAwaitingResrponse(false); return r.data})
        setAllPages([...allPages, nextPage]);
    }

    /**
     * Setting listeners for infinite scroll
     * 
     * @returns
     */
    useEffect(() => {
        let timer = null;
        let lastScrollPos = 0;
        const scrollListener = () => {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                let currentPos = window.scrollY;
                if (currentPos > lastScrollPos) setscrolledDown(currentPos)
                lastScrollPos =  window.scrollY;
            }, 500)
        };

        document.addEventListener('scroll', scrollListener)

        return () => {
            document.removeEventListener('scroll', scrollListener)
            clearTimeout(timer)
        }
    }, [])

    /**
     * Just to make sure we're up to date with changing props
     * 
     * @returns
     */
    useEffect(() => {
        setAllPages([jobs])
        setActiveJob([jobs].filter(el => !!el).reduce((allJobs, el) => allJobs.concat(el?.data), [])[0])
    }, [jobs])

    /**
     * Whenever someone scrolls down we want to fetch the next page
     * 
     * @returns
     */
    useEffect(() => {
        getNextPage()
    }, [scrolledDown])

    /**
     * Whenever the active job is changed we wanna scroll the job details container to the top
     * 
     * @returns
     */
    useEffect(() => {
        let timer = null;

        timer = setTimeout(() => {
            document.getElementById('job.details.container').firstChild.scrollTop = 0
        }, 0);

        return () => {
            if (timer) clearTimeout(timer)
        }
    }, [activeJob])

    /**
     * This one is how the custom scroll bar looks
     * 
     * @returns 
     */
    const renderThumb = () => {
        return (
            <div className="scroll_thumb"></div>
        )
    }

    return (
        <JobListStyles>
            <h2 className="title">{title}</h2>
            <div className="jobs">
                <ul className="list">
                    {
                        getAllJobs().length > 0 && getAllJobs().map(job => (
                            <li key={job?.id}>
                                <JobSummary setActiveJob={setActiveJob} job={job} active={activeJob?.id === job?.id} />
                            </li>)
                        )
                    }
                </ul>
                <Scrollbars id="job.details.container" renderThumbVertical={renderThumb} autoHide autoHideTimeout={2000} className="scrollbars" style={{height: 'calc(100vh - 4rem)', flexGrow: '1', position: 'sticky', top: '3.5rem'}} universal>
                    {
                        activeJob && (
                            <div className="detail">
                                <div>
                                    <h3 className="detail_title">
                                        {activeJob.title}
                                    </h3>
                                </div>
                                <div>
                                    <h4 className="detail_sub_title">Job Description</h4>
                                    <div className="detail_body">
                                        {
                                            activeJob.description.split('\n\n').map((text, key) => (
                                                <div className="detail_text" key={key}>
                                                    {text.split('\n').map((e, key) => (<p key={key}>{e}</p>))}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div>
                                    <h4 className="detail_sub_title">Duties &amp; Responsibilities</h4>
                                    <ul className="detail_body detail_items">
                                        {
                                            activeJob.responsibilities.map(r => (
                                                <li className="detail_item" key={r.id}>
                                                    <svg className="detail_item_pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 7H2v6h8v5l8-8-8-8v5z"/></svg>
                                                    <span>
                                                        {r.description}
                                                    </span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="detail_sub_title">Experience &amp; Qualifications</h4>
                                    <ul className="detail_body detail_items">
                                        {
                                            activeJob.qualifications.map(q => (
                                                <li className="detail_item" key={q.id}>
                                                    <svg className="detail_item_pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 7H2v6h8v5l8-8-8-8v5z"/></svg>
                                                    <span>
                                                        {q.description}
                                                    </span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                {
                                    user && (
                                        <div>
                                            <h4 className="detail_sub_title">How to apply</h4>
                                            <div className="detail_body">
                                                {
                                                    activeJob.application_instructions.split('\n\n').map((text, key) => (
                                                        <div className="detail_text" key={key}>
                                                            {text.split('\n').map((e, key) => (<p key={key}>{e}</p>))}
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                                <div>
                                    {
                                        user && activeJob.application_link && (
                                            <a className="detail_apply_btn" href={activeJob.application_link} target="_blank">
                                                Apply now
                                            </a>
                                        )
                                    }
                                    {
                                        user && activeJob.application_email && !activeJob.application_link && (
                                            <a className="detail_apply_btn" href={`mailto:${activeJob.application_email}`} target="_blank">
                                                Apply with email
                                            </a>
                                        )
                                    }
                                    {
                                        !user && (
                                            <a className="detail_apply_btn" href="#" onClick={e => {e.preventDefault(); setShowAuthModal(true)}}>
                                                Login to apply
                                            </a>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                    {
                        !activeJob && (
                            <h1>
                                Nothing to show
                            </h1>
                        )
                    }
                </Scrollbars>
            </div>
            { showAuthModal && (<AuthModal close={() => setShowAuthModal(false)} />) }
        </JobListStyles>
    )
}

export default JobSummaryList