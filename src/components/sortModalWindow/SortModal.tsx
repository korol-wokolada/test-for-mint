// Modal.tsx
import React from "react";
import "./style.css";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setSortType } from "../../redux/applicationState/slice";

interface ModalProps {
  isOpen: boolean;
  onClose: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLDivElement>
      | React.MouseEvent<HTMLInputElement>
  ) => void;
}

function Modal({ isOpen, onClose }: ModalProps) {
  const dispatch = useAppDispatch();
  const { sortType } = useAppSelector((state) => state.application);

  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(setSortType(value));
  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClose(event);
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose(event);
    }
  };

  return (
    <>
      {isOpen && <div className="overlay" onClick={handleOverlayClick}></div>}

      <div className={`modal ${isOpen ? "open" : ""}`}>
        <div className="modal--content">
          <div className="modal--header">
            <h2 className="modal--title">Сортировка</h2>

            <button
              className="modal__close-button"
              onClick={handleClose}></button>
          </div>

          <div className="modal__body">
            <div className="form-radio">
              <input
                type="radio"
                id="alphabetical"
                value="alphabetical"
                checked={sortType === "alphabetical"}
                onChange={handleSortChange}
                className="hidden-input"
                onClick={onClose}
              />

              <label htmlFor="alphabetical" className="input__label"></label>

              <div>По алфавиту</div>
            </div>

            <div className="form-radio">
              <input
                type="radio"
                id="birthday"
                value="birthday"
                checked={sortType === "birthday"}
                onChange={handleSortChange}
                className="hidden-input"
                onClick={onClose}
              />
              <label htmlFor="birthday" className="input__label"></label>

              <div>По дню рождения</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
