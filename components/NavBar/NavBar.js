import Logo from "../Logo/Logo";
import NewJobButton from "../NewJobButton/NewJobButton";
import Menu from "./Menu";
import NavBarStyles from "./NavBar.styled";

const NavBar = () => (
    <NavBarStyles>
        <div>
            <Logo />
        </div>
        <div className="right">
            <NewJobButton />
            <Menu />
        </div>
    </NavBarStyles>
)

export default NavBar