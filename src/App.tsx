import "./style.css";
import Header from "./components/header/Header";
import AppRoutes from "./routes/AppRoutes";
import { useLocation } from "react-router";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  const location = useLocation();

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
