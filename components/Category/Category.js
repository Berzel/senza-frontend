import Link from "next/link";
import CategoryStyles from "./Category.styled";

const Category = ({category}) => (
    <Link href={`/jobs/${category.slug}`} scroll={false}>
        <a>
            <CategoryStyles>
                {category.display_name}
            </CategoryStyles>
        </a>
    </Link>
)

export default Category