import headerLogo from "../assets/images/header-logo.svg"
import hamburger from "../assets/icons/hamburger.svg"
const Nav = () => {
    return (
        <div>
            <header>
                <nav>
                    <a href="/" >
                        <img src={headerLogo} alt="" title="" />
                    </a>
                </nav>
            </header>
        </div>
    );
};

export default Nav;