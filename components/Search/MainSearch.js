import MainSearchStyles from "./MainSearch.styled"

const MainSearch = () => {
    return (
        <MainSearchStyles>
            <form className="form" action="/search">
                <div className="group">
                    <input className="query" type="text" name="q" placeholder="Job title or keyword" />
                </div>
                <div className="group">
                    <input className="location" type="text" name="location" placeholder="Location" />
                </div>
                <div className="group">
                    <button className="btn">Search</button>
                </div>
            </form>
        </MainSearchStyles>
    )
}

export default MainSearch