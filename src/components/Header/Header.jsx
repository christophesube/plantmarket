import "./Header.css";
import logo from "../../../public/assets/leaf.png";

const Header = () => {
  return (
    <header className='header__container'>
      <img src={logo} alt='logo' />
      <h1>La maison Jungle</h1>
    </header>
  );
};

export default Header;
