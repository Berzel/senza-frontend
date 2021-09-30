import Link from "next/link";
import ApplyLinkStyles from "./ApplyLink.styled";

const ApplyLink = () => (
    <ApplyLinkStyles>
        <Link href={`/job/software-developer-${Math.random(3).toString(36).substring(9)}/apply`}>
            <a className="link">
                Apply Now
            </a>
        </Link>
    </ApplyLinkStyles>
)

export default ApplyLink