import React from "react";
import "./style.css";

export default function NotFoundWorker() {
  return (
    <div className="wrapper__not-found">
      <div className="not-found__icon"></div>
      <p className="not-found__caption--black">Мы никого не нашли</p>
      <p className="not-found__caption--grey">
        Попробуй скорректировать запрос
      </p>
    </div>
  );
}
