import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { DataType, ResponseDataType } from "../api/types";
import { filterWorkers } from "../utils/uiUtils";

interface WorkersData {
  currentPath: string;
  error: string | undefined;
  sortType: string;
  showSkeleton: boolean;
  showNotFound: boolean;
  workersArray: DataType[];
  handleRetry: () => void;
}

export function useDataWorkers(
  fetchWorkers: () => Promise<ResponseDataType>,
  actionError: (payload: string) => { payload: string; type: string },
  actionSuccess: (payload: ResponseDataType) => {
    payload: ResponseDataType;
    type: string;
  }
): WorkersData {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const currentPath = location.pathname;

  const { findWorkersValue, sortType } = useAppSelector(
    (state) => state.application
  );

  const queryKey = ["workers", currentPath];

  const [isQueryEnabled, setQueryEnabled] = useState(true);

  const {
    data: workers,
    error,
    status,
    refetch,
  } = useQuery<ResponseDataType, Error>(queryKey, fetchWorkers, {
    staleTime: 5 * 60 * 1000, // 5 минут в миллисекундах
    enabled: isQueryEnabled,
    onError: (error) => {
      dispatch(actionError(error.message));
    },
  });

  useEffect(() => {
    if (status === "success") {
      dispatch(actionSuccess(workers));
    }
  }, [status, workers, dispatch, actionSuccess]);

  const isLoading = status === "loading";
  const hasSearchValue = findWorkersValue.length >= 2;
  const workersArray = hasSearchValue
    ? filterWorkers(workers?.items || [], findWorkersValue)
    : workers?.items || [];
  const showSkeleton = isLoading && !hasSearchValue;
  const showNotFound = hasSearchValue && workersArray.length === 0;

  const handleRetry = () => {
    setQueryEnabled(true);
    refetch(); // Вручную запускаем повторный запрос
  };

  return {
    currentPath,
    error: error?.message,
    sortType,
    showSkeleton,
    showNotFound,
    workersArray,
    handleRetry,
  };
}
