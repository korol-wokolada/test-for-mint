import "./style.css";
import Header from "./components/header/Header";
import AppRoutes from "./routes/AppRoutes";
import { useLocation } from "react-router";
import { QueryClient, QueryClientProvider } from "react-query";
import { useAppDispatch } from "./redux/store";
import { handleNetworkChange } from "./redux/applicationState/thunk";
import { useEffect } from "react";

export const queryClient = new QueryClient();

function App() {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    const handleOnline = () => dispatch(handleNetworkChange());
    const handleOffline = () => dispatch(handleNetworkChange());

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [dispatch]);

  const regex: RegExp = /497f6eca-6276-4993-bfeb-[a-zA-Z0-9]+/;

  const shouldShowHeader = regex.test(location.pathname);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        {shouldShowHeader ? null : <Header />}
        <AppRoutes />
      </div>
    </QueryClientProvider>
  );
}

export default App;
