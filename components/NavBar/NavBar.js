import Logo from "../Logo/Logo";
import Menu from "./Menu";
import NavBarStyles from "./NavBar.styled";

const NavBar = () => (
    <NavBarStyles>
        <div>
            <Logo />
        </div>
        <div className="right">
            <Menu />
        </div>
    </NavBarStyles>
)

export default NavBar