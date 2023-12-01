import React from "react";
import { Route, Routes } from "react-router-dom";
import { appRoute } from "./constants";
import MainPage from "../pages/main/MainPage";
import DesignersPage from "../pages/designers/DesignersPage";
import AnalystsPage from "../pages/analysts/AnalystsPage";
import ManagersPage from "../pages/managers/ManagersPage";
import IosPage from "../pages/ios/IosPage";
import AndroidPage from "../pages/android/AndroidPage";
import ProfilePage from "../pages/profilePage/ProfilePage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={appRoute.main} Component={MainPage} />
      <Route path={appRoute.designers} Component={DesignersPage} />
      <Route path={appRoute.analysts} Component={AnalystsPage} />
      <Route path={appRoute.managers} Component={ManagersPage} />
      <Route path={appRoute.ios} Component={IosPage} />
      <Route path={appRoute.android} Component={AndroidPage} />
      <Route path={appRoute.profilePage} Component={ProfilePage} />
    </Routes>
  );
}
