import "./App.css";
import Header from "./components/header/Header";
import AppRoutes from "./routes/AppRoutes";
import { useLocation } from "react-router";

function App() {
  const location = useLocation();

  const regex: RegExp = /497f6eca-6276-4993-bfeb-[a-zA-Z0-9]+/;

  const shouldShowHeader = regex.test(location.pathname);

  return (
    <div className="app">
      {shouldShowHeader ? null : <Header />}
      <AppRoutes />
    </div>
  );
}

export default App;
