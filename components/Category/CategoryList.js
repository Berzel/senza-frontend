import CategoryRow from "./CategoryRow";
import CategoryListStyles from "./CategoryList.styled";

const CategoryList = ({categories}) => {
    let rows = [];

    categories.forEach((cat, key) => {
        let rowToAdd = 0;
        let minLength = Number.MAX_SAFE_INTEGER;

        for (let index = 0; index < 4; index++) {
            let rowCharLength = rows[index] ? rows[index].reduce((total, nextEl) => (total + nextEl.display_name.length), 0) : 0;

            if (rowCharLength < minLength) {
                rowToAdd = index;
                minLength = rowCharLength;
            }
        }

        rows[rowToAdd] = rows[rowToAdd] ? rows[rowToAdd].concat([cat]) : [cat];
    })

    return (
        <CategoryListStyles>
            {/* <div className="header">
                <h2>Find jobs by industry</h2>
            </div> */}
            <ul className="lists" id="listsContainer">
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