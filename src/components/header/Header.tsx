import React, { useEffect, useState } from "react";
import "./style.css";
import Navbar from "../navbar/Navbar";
import SearchForm from "../searchForm/SearchForm";
import { useAppSelector } from "../../redux/store";

function Header() {
  const { isOnline, isRequestLoading } = useAppSelector(
    (state) => state.application
  );

  const [loadingOnNetworkRestore, setLoadingOnNetworkRestore] = useState(false);

  useEffect(() => {
    if (isOnline && isRequestLoading && loadingOnNetworkRestore) {
      setLoadingOnNetworkRestore(false);
    }
  }, [isOnline, isRequestLoading, loadingOnNetworkRestore]);

  if (!isOnline) {
    return (
      <>
        <header className="header header-offline">
          <h1 className="header__caption">Поиск</h1>
          <div className="header__text">
            <p>Не могу обновить данные. Проверьте соединение с интернетом.</p>
          </div>
        </header>
        <Navbar />
      </>
    );
  }

  if (isRequestLoading) {
    return (
      <>
        <header className="header header-loading">
          <h1 className="header__caption">Поиск</h1>
          <div className="header__text">
            <p>Секундочку, гружусь...</p>
          </div>
        </header>
        <Navbar />
      </>
    );
  }

  return (
    <header className="header">
      <h1 className="header__caption">Поиск</h1>
      <SearchForm />
      <Navbar />
    </header>
  );
}

export default Header;
