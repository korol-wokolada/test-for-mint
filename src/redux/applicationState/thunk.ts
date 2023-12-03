import { setNetworkStatus, setRequestLoading } from "./slice";
import { queryClient } from "../../App";

export const handleNetworkChange = () => async (dispatch: any) => {
  const isOnline = window.navigator.onLine;

  dispatch(setNetworkStatus(isOnline));

  if (isOnline) {
    try {
      // Сначала устанавливаем isRequestLoading в true
      dispatch(setRequestLoading(true));

      // Выполняем запрос
      await queryClient.refetchQueries(["workers"]);
    } catch (error) {
      console.error("Error while handling network change:", error);
    } finally {
      // Ждем небольшую задержку (например, 100 мс) перед установкой isRequestLoading в false
      setTimeout(() => {
        dispatch(setRequestLoading(false));
      }, 1000);
    }
  }
};
