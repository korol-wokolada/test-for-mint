import { DataType } from "../api/types";

export const alphabetSortWorkers = (items: DataType[]): DataType[] => {
  const sortedItems = [...items];

  sortedItems.sort((a, b) => a.firstName.localeCompare(b.firstName));

  return sortedItems;
};

function daysUntilBirthday(birthday: string): number {
  const currentDate: Date = new Date();
  const nextBirthday: Date = new Date(
    currentDate.getFullYear(),
    new Date(birthday).getMonth(),
    new Date(birthday).getDate()
  );
  return Math.floor(
    (nextBirthday.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
  );
}

export const sortWorkersByBirthday = (
  items: DataType[]
): {
  upcomingBirthdays: DataType[];
  pastBirthdays: DataType[];
} => {
  const today = new Date();
  const currentYear = today.getFullYear();

  const upcomingBirthdays = [] as DataType[];
  const pastBirthdays = [] as DataType[];

  items.forEach((worker) => {
    const workerBirthday = new Date(worker.birthday);
    workerBirthday.setFullYear(currentYear);

    if (workerBirthday > today) {
      upcomingBirthdays.push(worker);
    } else {
      pastBirthdays.push(worker);
    }
  });

  // Сортируем каждый массив по дате рождения
  upcomingBirthdays.sort(
    (a, b) => daysUntilBirthday(a.birthday) - daysUntilBirthday(b.birthday)
  );
  pastBirthdays.sort(
    (a, b) => daysUntilBirthday(a.birthday) - daysUntilBirthday(b.birthday)
  );

  return {
    upcomingBirthdays,
    pastBirthdays,
  };
};

export function calculateAge(birthdayString: string): string | null {
  // Преобразование строки в объект Date
  const birthdayDate = new Date(birthdayString);

  // Получение текущей даты
  const currentDate = new Date();

  // Проверка, что введенная строка является корректной датой
  if (isNaN(birthdayDate.getTime())) {
    return null;
  }

  // Вычисление разницы в годах
  const age = currentDate.getFullYear() - birthdayDate.getFullYear();

  // Учитываем случай, когда день рождения еще не наступил в текущем году
  if (
    currentDate.getMonth() < birthdayDate.getMonth() ||
    (currentDate.getMonth() === birthdayDate.getMonth() &&
      currentDate.getDate() < birthdayDate.getDate())
  ) {
    return `${age - 1} years`;
  }

  return `${age} years`;
}

export function formatBirthday(birthdayString: string): string | null {
  // Преобразование строки в объект Date
  const birthdayDate = new Date(birthdayString);

  // Проверка, что введенная строка является корректной датой
  if (isNaN(birthdayDate.getTime())) {
    return null;
  }

  // Получение дня, месяца и года
  const day = birthdayDate.getDate();
  const month = birthdayDate.toLocaleString("en-us", { month: "long" });
  const year = birthdayDate.getFullYear();

  // Форматирование в 'day month yyyy'
  const formattedDate = `${day} ${month} ${year}`;

  return formattedDate;
}

export function formatPhoneNumber(phoneNumber: string): string | null {
  // Очистка строки от ненужных символов (оставляем только цифры)
  const cleanedNumber = phoneNumber.replace(/\D/g, "");

  // Проверка наличия 11 цифр (предполагаем, что входной формат +79999009090)
  if (cleanedNumber.length !== 11) {
    return null;
  }

  // Разделение номера на части
  const countryCode = cleanedNumber.slice(0, 1);
  const areaCode = cleanedNumber.slice(1, 4);
  const firstPart = cleanedNumber.slice(4, 7);
  const secondPart = cleanedNumber.slice(7, 9);
  const thirdPart = cleanedNumber.slice(9);

  // Форматирование в нужную строку
  const formattedNumber = `+${countryCode} (${areaCode}) ${firstPart} ${secondPart} ${thirdPart}`;

  return formattedNumber;
}

export function filterWorkers(
  workers: DataType[],
  searchValue: string
): DataType[] {
  const uniqWorkers = new Set<DataType>();

  workers.forEach((worker) => {
    const { firstName, lastName, userTag } = worker;

    const firstNameMatch = firstName
      .toLowerCase()
      .includes(searchValue.toLowerCase());
    const lastNameMatch = lastName
      .toLowerCase()
      .includes(searchValue.toLowerCase());
    const userTagMatch = userTag
      .toLowerCase()
      .includes(searchValue.toLowerCase());

    if (firstNameMatch || lastNameMatch || userTagMatch) {
      uniqWorkers.add(worker);
    }
  });

  return Array.from(uniqWorkers);
}
