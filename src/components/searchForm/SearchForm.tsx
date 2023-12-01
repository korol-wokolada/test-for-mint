import React, { useEffect, useState } from "react";
import "./style.css";
import Modal from "../sortModalWindow/SortModal";
import { debounce } from "lodash";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setFindWorkersValue } from "../../redux/applicationState/slice";
import { useLocation } from "react-router";

export default function SearchForm() {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState("");
  const [searhState, setSaerchState] = useState("blur");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { findWorkersValue } = useAppSelector((state) => state.application);

  useEffect(() => {
    setSearchTerm(findWorkersValue);
  }, [location.pathname]);

  const handleCloseModal = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLDivElement>
  ) => {
    event.preventDefault();

    setIsModalOpen(false);
  };

  const handleOpenModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setIsModalOpen(true);
  };

  const handleInputFocus = () => {
    setSaerchState("focus");
  };

  const handleInputBlur = () => {
    setSaerchState("blur");
  };

  const debouncedFunction = debounce((inputValue: string) => {
    dispatch(setFindWorkersValue(inputValue));
  }, 400);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearchTerm(value);

    debouncedFunction(value);
  };

  return (
    <form className="form">
      <div
        className={`form__search-icon form__search-icon--${searhState}`}></div>

      <input
        className="form__input"
        placeholder="Введи имя, тег, почту..."
        type="search"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={searchTerm}
        onChange={(e) => handleChange(e)}></input>

      <button className="form__sort-button" onClick={handleOpenModal}></button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}></Modal>
    </form>
  );
}
