import { Link } from "react-router-dom";
import logoImg from "../../../assets/images/logo.png";
import MenuDropdown from "./MenuDropdown";
import Container from "../Container";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-50 shadow-sm">
      <div className="py-3 border-b-[1px]">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Link to="/">
              <img
                className="hidden md:block"
                src={logoImg}
                alt="logo"
                width="85"
                height="85"
              />
            </Link>
            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
