import React from "react";
import "./style.css";
import plug from "../../assets/icons/plug-goose.svg";
import { useNavigate } from "react-router-dom";

export type CardPropsType = {
  avatarImage?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
  meta?: string | undefined;
  department?: string | undefined;
  birthday?: string | undefined;
  id?: string | undefined;
};

export default function Card({
  avatarImage,
  firstName,
  lastName,
  meta,
  department,
  birthday,
  id,
}: CardPropsType) {
  const navigate = useNavigate();

  const dateString: string | undefined = birthday || "";
  const date: Date | null = dateString ? new Date(dateString) : null;
  let formattedDate = undefined as string | undefined;

  if (date) {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
    };
    formattedDate = date.toLocaleDateString("ru-RU", options);
  }

  const handleCardClick = () => {
    navigate(`/${id}`);
  };

  return (
    <div className="wrapper__card" onClick={handleCardClick}>
      {avatarImage ? (
        <img className="card__image" src={avatarImage} alt="avatar"></img>
      ) : (
        <img className="card__image" src={plug} alt="avatar"></img>
      )}

      <div className="card__information">
        <div className="information">
          <p className="information__FIO">{`${firstName} ${lastName}`}</p>

          <div className="information__meta">{meta}</div>
        </div>

        <p className="card__depatrment">{department}</p>
      </div>
      {formattedDate && <div className="card__bithday">{formattedDate}</div>}
    </div>
  );
}
