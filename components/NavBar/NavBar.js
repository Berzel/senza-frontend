import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Menu from "./Menu";
import NavBarStyles from "./NavBar.styled";

const NavBar = () => {
    const [isServer, setIsServer] = useState(true);

    useEffect(() => {
        setIsServer(false)
    }, [])

    return (
        <NavBarStyles>
            <div>
                <Logo />
            </div>
            <div className="right">
                {!isServer && <Menu />}
            </div>
        </NavBarStyles>
    )
}

export default NavBar