import CategoryRow from "./CategoryRow";
import CategoryListStyles from "./CategoryList.styled";

const CategoryList = ({categories}) => {
    let rows = [];
    let minColWidth = Number.MAX_SAFE_INTEGER;
    let maxRowLength = Number.MIN_SAFE_INTEGER;

    categories.forEach((cat, key) => {
        let rowToAdd = 0;
        let minLength = Number.MAX_SAFE_INTEGER;

        for (let index = 0; index < 4; index++) {
            let rowCharLength = rows[index] ? rows[index].reduce((total, nextEl) => {
                if (nextEl.display_name.length < minColWidth) {
                    minColWidth = nextEl.display_name.length
                }

                return total + nextEl.display_name.length;
            }, 0) : 0;

            if (rowCharLength > maxRowLength) {
                maxRowLength = rowCharLength;
            }

            if (rowCharLength < minLength) {
                rowToAdd = index;
                minLength = rowCharLength;
                cat = {...cat, offset: rowCharLength, row: rowToAdd};
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