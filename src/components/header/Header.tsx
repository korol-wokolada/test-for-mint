import "./style.css";
import Navbar from "../navbar/Navbar";
import SearchForm from "../searchForm/SearchForm";

function Header() {
  return (
    <header className="header">
      <h1 className="header__caption">Поиск</h1>

      <SearchForm />

      <Navbar />
    </header>
  );
}

export default Header;
