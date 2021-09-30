import Category from "./Category"
import CategoryRowStyles from "./CategoryRow.styled"

const CategoryRow = ({items}) => (
    <CategoryRowStyles>
        <ul className="row">
            {
                items.map(item => (
                    <li>
                        <Category category={item} />
                    </li>
                ))
            }
        </ul>
    </CategoryRowStyles>
)

export default CategoryRow