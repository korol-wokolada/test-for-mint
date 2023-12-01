import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import allWorkersReducer from "./allWorkers/slice";
import analystWorkersReducer from "./analystWorkers/slice";
import androidWorkersReducer from "./androidWorkers/slice";
import designerWorkersReducer from "./designerWorkers/slice";
import iosWorkersReducer from "./iosWorkers/slice";
import managerWorkersReducer from "./managerWorkers/slice";
import applicationReducer from "./applicationState/slice";

export const store = configureStore({
  reducer: {
    allWorkers: allWorkersReducer,
    designers: designerWorkersReducer,
    analysts: analystWorkersReducer,
    managers: managerWorkersReducer,
    ios: iosWorkersReducer,
    android: androidWorkersReducer,
    application: applicationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
