import { DataType } from "../../api/types";
import {
  alphabetSortWorkers,
  sortWorkersByBirthday,
} from "../../utils/uiUtils";
import Card from "../personsCard/Card";

export default function CardWrapper({
  sortType,
  workersArray,
}: {
  sortType: string;
  workersArray: DataType[];
}) {
  if (sortType === "alphabetical") {
    const sortArr = alphabetSortWorkers(workersArray);

    return (
      <>
        {sortArr.map(
          ({ id, avatarUrl, department, firstName, lastName, userTag }) => (
            <Card
              key={id}
              avatarImage={avatarUrl}
              department={department}
              firstName={firstName}
              lastName={lastName}
              meta={userTag}
              id={id}
            />
          )
        )}
      </>
    );
  } else {
    const { upcomingBirthdays, pastBirthdays } =
      sortWorkersByBirthday(workersArray);

    return (
      <>
        {upcomingBirthdays.map(
          ({
            id,
            avatarUrl,
            department,
            firstName,
            lastName,
            userTag,
            birthday,
          }) => (
            <Card
              key={id}
              avatarImage={avatarUrl}
              department={department}
              firstName={firstName}
              lastName={lastName}
              meta={userTag}
              birthday={birthday}
              id={id}
            />
          )
        )}

        <div className="card__devider">{new Date().getFullYear() + 1}</div>

        {pastBirthdays.map(
          ({
            id,
            avatarUrl,
            department,
            firstName,
            lastName,
            userTag,
            birthday,
          }) => (
            <Card
              key={id}
              avatarImage={avatarUrl}
              department={department}
              firstName={firstName}
              lastName={lastName}
              meta={userTag}
              birthday={birthday}
              id={id}
            />
          )
        )}
      </>
    );
  }
}
