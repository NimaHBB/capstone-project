import { NavLink } from "react-router-dom";
import homeIcon from "../../images/icon/home.svg";
import favorite_menue from "../../images/icon/favorite_menue.svg";
import personIcon from "../../images/icon/person.svg";

const Footer = () => {
  const imagesPath = "https://nimahabibi.de/shop/image/";
  return (
    <footer>
      <ul>
        <NavLink to="/">
          <li className="Home">
            <img src={homeIcon} alt="home icon" />
          </li>
        </NavLink>
        <NavLink to="favourites">
          <li>
            <img src={favorite_menue} alt="favorite icon" />
          </li>
        </NavLink>
        <NavLink to="login">
          <li>
            <img src={personIcon} alt="person icon" />
          </li>
        </NavLink>

        {/* <NavLink to="product-detail">
          <li>
            <img src={imagesPath + "icon/menu.svg"} alt="menu icon" />
          </li>
        </NavLink> */}
      </ul>
    </footer>
  );
};

export default Footer;
