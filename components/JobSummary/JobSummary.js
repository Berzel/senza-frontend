import Link from "next/link"
import JobSummaryStyles from "./JobSummary.styled"

const JobSummary = () => (
    <JobSummaryStyles>
        <Link href={`/job/software-developer-${Math.random(3).toString(36).substring(9)}`}>
            <a className="link">
                <div className="top">
                    <div className="left">
                        <div className="pills">
                            <span className="type">3 years</span>
                            <span className="type">Full-time</span>
                        </div>
                        <h3 className="title">Software Developer</h3>
                        <div className="salary">$5.5K - $7.5K / month</div>
                    </div>
                    <div className="right">
                        <div className="company-logo"></div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <i className="pin">
                            <svg enableBackground="new 0 0 368.16 368.16" version="1.1" viewBox="0 0 368.16 368.16">
                                <path d="m184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.29c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.3c5.096-7.728 12.144-20.912 15.72-29.4 0.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zm109.72 182.15c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.3c-1.84 2.792-2.424 2.792-4.264 0l-93.256-141.3c-4.568-6.928-11.136-19.2-14.328-26.808-0.136-0.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"/>
                                <path d="m184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z"/>
                            </svg>
                        </i>
                        <p className="location">Harare, Remote</p>
                    </div>
                    <div className="right">
                        <p className="company-name">Maverik Inc</p>
                    </div>
                </div>
            </a>
        </Link>
    </JobSummaryStyles>
)

export default JobSummary