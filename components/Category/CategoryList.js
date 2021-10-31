import CategoryRow from "./CategoryRow";
import CategoryListStyles from "./CategoryList.styled";
import { useEffect, useState } from "react";

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

    useEffect(() => {
        const el = document.getElementById('listsContainer')

        let pos = {
            x: 0,
            left: 0
        };

        const onMouseMove = e => {
            let dx = e.clientX - pos.x;
            el.scrollLeft = pos.left - dx

            pos = {
                x: e.clientX,
                left: el.scrollLeft
            }
        }
    
        const onMouseDown = e => {
            pos = {
                x: e.clientX,
                left: el.scrollLeft
            }

            el.style.cursor = 'grabbing';
            el.style.userSelect = 'none';
            el.addEventListener('mousemove', onMouseMove)
        }
    
        const onMouseUp = e => {
            console.log("Mouse released")
            el.style.cursor = 'grab';
            el.style.userSelect = 'auto';
            el.removeEventListener('mousemove', onMouseMove)
        }

        el.addEventListener('mousedown', onMouseDown)
        el.addEventListener('mouseup', onMouseUp)
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