import CategoryRow from "./CategoryRow";
import CategoryListStyles from "./CategoryList.styled";
import { useEffect, useState } from "react";
import anime from "animejs";

const CategoryList = ({categories}) => {
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrolledToEnd, setScrolledToEnd] = useState(false);

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

            setScrollLeft(el.scrollLeft)
            setScrolledToEnd(el.scrollLeft === (el.scrollWidth - el.offsetWidth))
        }
    
        const onMouseDown = e => {
            pos = {
                x: e.clientX,
                left: el.scrollLeft
            }

            setScrollLeft(el.scrollLeft)
            setScrolledToEnd(el.scrollLeft === (el.scrollWidth - el.offsetWidth))

            el.style.cursor = 'grabbing';
            el.style.userSelect = 'none';
            el.addEventListener('mousemove', onMouseMove)
        }
    
        const onMouseUp = () => {
            el.style.cursor = 'grab';
            el.style.userSelect = 'auto';
            el.removeEventListener('mousemove', onMouseMove)
        }

        el.addEventListener('mousedown', onMouseDown)
        document.addEventListener('mouseup', onMouseUp)
    }, [])

    const updateScroll = () => {
        setTimeout(() => {
            const el = document.getElementById('listsContainer')
            setScrollLeft(el.scrollLeft);
            setScrolledToEnd(el.scrollLeft === (el.scrollWidth - el.offsetWidth))
        }, 200)
    }

    const onPrevClick = e => {
        const el = document.getElementById('listsContainer')

        anime({
            targets: el,
            scrollLeft: el.scrollLeft - 350,
            round: 1,
            easing: 'easeOutElastic(1, .6)'
        });

        updateScroll()
    }

    const onNextClick = e => {
        const el = document.getElementById('listsContainer')

        anime({
            targets: el,
            scrollLeft: el.scrollLeft + 350,
            round: 1,
            easing: 'easeOutElastic(1, .6)'
        });

        updateScroll()
    }

    return (
        <CategoryListStyles>
            <ul className="lists" id="listsContainer">
                {
                    rows.map((row, index) => (
                        <li key={index}>
                            <CategoryRow items={row} />
                        </li>
                    ))
                }
                
            </ul>
            <button className="pagination prev" onClick={onPrevClick} style={{display: scrollLeft <= 0 ? 'none' : 'flex'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
            </button>

            <button className="pagination next" onClick={onNextClick} style={{display: scrolledToEnd ? 'none' : 'flex'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
            </button>
        </CategoryListStyles>
    )
}

export default CategoryList