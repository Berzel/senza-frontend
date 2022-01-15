import ApplyLinkStyles from "./ApplyLink.styled";
import AuthModal from "../AuthModal/AuthModal";
import { useState } from "react";
import recordApplication from "../../lib/recordApplication";
import useUser from "../../lib/useUser";

const ApplyLink = ({job}) => {
    const { user } = useUser()
    const [showAuthModal, setShowAuthModal] = useState(false);

    return (
        <>
            <ApplyLinkStyles>
                {
                    user && job.application_link && (
                        <a className="link" href={job.application_link} onClick={() => recordApplication(job)} target="_blank">
                            Apply now
                        </a>
                    )
                }

                {
                    user && job.application_email && !job.application_link && (
                        <a className="link" href={`mailto:${job.application_email}`} onClick={() => recordApplication(job)} target="_blank">
                            Apply with email
                        </a>
                    )
                }

                {
                    !user && (
                        <a className="link" href='#' onClick={e => {e.preventDefault(); setShowAuthModal(true)}}>
                            Login to apply
                        </a>
                    )
                }
            </ApplyLinkStyles>
            { showAuthModal && (<AuthModal close={() => setShowAuthModal(false)} />) }
        </>
    )
}

export default ApplyLink