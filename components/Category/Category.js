import Link from "next/link";
import CategoryStyles from "./Category.styled";

const Category = ({category}) => (
    <Link href="/cat/cat-slug">
        <a>
            <CategoryStyles>
                {category}
            </CategoryStyles>
        </a>
    </Link>
)

export default Category