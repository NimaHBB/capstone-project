import { NavLink } from "react-router-dom";

const Footer = () => {
  const imagesPath = "https://nimahabibi.de/shop/image/";
  return (
    <footer>
      <ul>
        <NavLink to="/">
          <li className="Home">
            <img src={imagesPath + "icon/home.svg"} alt="home icon" />
          </li>
        </NavLink>
        <NavLink to="login">
          <li>
            <img src={imagesPath + "icon/person.svg"} alt="person icon" />
          </li>
        </NavLink>
        <NavLink to="favourites">
          <li>
            <img
              src={imagesPath + "icon/favorite_menue.svg"}
              alt="favorite icon"
            />
          </li>
        </NavLink>
        <NavLink to="product-detail">
          <li>
            <img src={imagesPath + "icon/menu.svg"} alt="menu icon" />
          </li>
        </NavLink>
      </ul>
    </footer>
  );
};

export default Footer;
