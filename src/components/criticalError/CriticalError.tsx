import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export type CriticalErrorPropsType = {
  pageName: string;
};

export default function CriticalError({ pageName }: CriticalErrorPropsType) {
  return (
    <div className="wrapper__error">
      <div className="error__icon"></div>
      <p className="error__caption--black">Какой-то сверхразум все сломал</p>
      <p className="error__caption--grey">Постараемся быстро починить</p>
      <Link to={pageName} className="error__link--refresh">
        Попробовать снова
      </Link>
    </div>
  );
}
