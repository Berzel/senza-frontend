import { useState } from "react";
import useUser from "../../lib/useUser";
import AuthModal from "../AuthModal/AuthModal";
import ApplyLinkStyles from "./ApplyLink.styled";

const ApplyLink = ({job}) => {
    const { user } = useUser()
    const [showAuthModal, setShowAuthModal] = useState(false);

    return (
        <>
            <ApplyLinkStyles>
                {
                    user && job.application_link && (
                        <a className="link" href={job.application_link} target="_blank">
                            Apply now
                        </a>
                    )
                }

                {
                    user && job.application_email && !job.application_link && (
                        <a className="link" href={`mailto:${job.application_email}`} target="_blank">
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