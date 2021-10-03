import Logo from "../Logo/Logo";
import NewJobButton from "../NewJobButton/NewJobButton";
import NavBarStyles from "./NavBar.styled";

const NavBar = () => (
    <NavBarStyles>
        <div>
            <Logo />
        </div>
        <div className="right">
            <NewJobButton />
        </div>
    </NavBarStyles>
)

export default NavBar