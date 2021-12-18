import Link from "next/link"
import PostJobBannerStyles from "./PostJobBanner.styled"

const PostJobBanner = () => (
    <Link href="/post-new-job">
        <a>
            <PostJobBannerStyles>
                <div>
                    <h1 className="title">We make hiring easy!</h1>
                    <p className="body">
                        Finding the right talent is hard. Senza's flexible and scalable solutions makes it easier for companies of all sizes to 
                        find the best talent in no time while saving costs.
                    </p>
                </div>
                <div>
                    <button className="button">
                        Post a job now
                    </button>
                </div>
            </PostJobBannerStyles>
        </a>
    </Link>
)

export default PostJobBanner