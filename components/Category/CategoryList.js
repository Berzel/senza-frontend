import CategoryRow from "./CategoryRow";
import CategoryListStyles from "./CategoryList.styled";

const CategoryList = ({categories}) => {
    let rows = [];
    let rowCount = 4;
    let perRow = categories.length / rowCount;
    
    for (let i = 0; i < rowCount; i++) {
        if (rowCount - i === 1) {
            rows[i] = categories.slice(perRow*i, categories.length);
            continue;
        }

        rows[i] = categories.slice(perRow*i, perRow*(i+1))
    }

    return (
        <CategoryListStyles>
            {/* <div className="header">
                <h2>Find jobs by industry</h2>
            </div> */}
            <ul className="lists">
                {
                    rows.map((row, index) => (
                        <li key={index}>
                            <CategoryRow items={row} />
                        </li>
                    ))
                }
            </ul>
        </CategoryListStyles>
    )
}

export default CategoryList