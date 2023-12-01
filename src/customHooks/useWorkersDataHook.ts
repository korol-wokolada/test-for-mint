// hooks/useWorkersData.ts
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RootState, useAppDispatch, useAppSelector } from "../redux/store";
import { DataType, ResponseDataType } from "../api/types";
import { filterWorkers } from "../utils/uiUtils";
import { AsyncThunk } from "@reduxjs/toolkit";

interface WorkersData {
  currentPath: string;
  error: string | undefined;
  sortType: string;
  showSkeleton: boolean;
  showNotFound: boolean;
  workersArray: DataType[];
}

function useWorkersData(
  workersSelector: (state: RootState) => {
    workers: ResponseDataType;
    error: string | undefined;
    status: string;
  },
  fetchThunk: AsyncThunk<ResponseDataType, void, any>
): WorkersData {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const currentPath = location.pathname;

  const { workers, error, status } = useAppSelector(workersSelector);

  const { findWorkersValue, sortType } = useAppSelector(
    (state) => state.application
  );

  useEffect(() => {
    dispatch(fetchThunk());
  }, [dispatch]);

  const isLoading = status === "pending";
  const hasSearchValue = findWorkersValue.length >= 2;
  const workersArray = hasSearchValue
    ? filterWorkers(workers.items, findWorkersValue)
    : workers.items;
  const showSkeleton = isLoading && !hasSearchValue;
  const showNotFound = hasSearchValue && workersArray.length === 0;

  return {
    currentPath,
    error,
    sortType,
    showSkeleton,
    showNotFound,
    workersArray,
  };
}

export default useWorkersData;
