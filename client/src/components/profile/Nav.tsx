import { Link } from "react-router-dom";
import { profileNavLinkInterface } from "../../interfaces";

const Nav = ({
  path,
  name,
  newPath,
  handleClicked,
  activeColor,
}: profileNavLinkInterface) => (
  <Link
    to={path}
    onClick={() => handleClicked(path)}
    className={newPath === path ? activeColor : undefined}
  >
    {name}
  </Link>
);

export default Nav;
