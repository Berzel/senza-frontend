import Link from "next/link"
import PostJobBannerStyles from "./PostJobBanner.styled"

const PostJobBanner = () => (
    <Link href="/new-job">
        <a>
            <PostJobBannerStyles>
                Create Job CTA
            </PostJobBannerStyles>
        </a>
    </Link>
)

export default PostJobBanner