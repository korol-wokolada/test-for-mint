import { useEffect } from "react";
import "./style.css";
import avatar from "../../assets/icons/plug-goose.svg";
import { useAppDispatch } from "../../redux/store";
import { useLocation, useNavigate } from "react-router-dom";
import {
  calculateAge,
  formatBirthday,
  formatPhoneNumber,
} from "../../utils/uiUtils";
import Loader from "../../components/loader/Loader";
import CriticalError from "../../components/criticalError/CriticalError";
import { useQuery } from "react-query";
import { ResponseDataType } from "../../api/types";
import { setWorkersData, setWorkersError } from "../../redux/allWorkers/slice";
import { fetchAllWorker } from "../../api/apiAllWorkers";

export default function ProfilePage() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const queryKey = ["workers", "/"];

  const {
    data: workers,
    error,
    status,
  } = useQuery<ResponseDataType, Error>(queryKey, fetchAllWorker, {
    staleTime: 5 * 60 * 1000, // 5 минут в миллисекундах
    onError: (error) => {
      dispatch(setWorkersError(error.message));
    },
  });

  useEffect(() => {
    if (status === "success") {
      dispatch(setWorkersData(workers));
    }
  }, [status, workers, dispatch]);

  if (error) {
    return <CriticalError pageName="/" />;
  }

  const {
    avatarUrl,
    firstName,
    lastName,
    userTag,
    department,
    birthday,
    phone,
  } = workers?.items.find(({ id }) => id === location.pathname.slice(1)) || {};

  const age = birthday ? calculateAge(birthday) : "";
  const correctBirthdayData = birthday ? formatBirthday(birthday) : "";
  const correctNumber = phone ? formatPhoneNumber(phone) : "";

  const handleGoBack = () => {
    if (location.key === "default") {
      navigate("/");
    } else {
      navigate(-1);
    }
  };

  return (
    <>
      {status === "loading" ? (
        <Loader />
      ) : (
        <main className="wrapper__profile">
          <div className="block__profile">
            <button
              className="block__exit-button"
              onClick={handleGoBack}></button>

            <div className="profile">
              <img
                className="img__avatar"
                alt="Avatar"
                src={avatarUrl ? avatarUrl : avatar}></img>

              <div className="profile__name">
                <p className="name">
                  {firstName} {lastName} <span>{userTag}</span>
                </p>
              </div>

              <div className="profile__department">{department}</div>
            </div>
          </div>

          <div className="block__profile-info">
            <div className="profile-info__birthday">
              <div className="birthday">
                <div></div> {correctBirthdayData}
              </div>

              <div className="age">{age}</div>
            </div>

            <div className="profile-info__telephone">
              <div></div> {correctNumber}
            </div>
          </div>
        </main>
      )}
    </>
  );
}
