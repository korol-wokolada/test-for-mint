// NetworkStatusProvider.tsx

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type NetworkStatusContextProps = {
  isOnline: boolean;
};

const NetworkStatusContext = createContext<
  NetworkStatusContextProps | undefined
>(undefined);

type NetworkStatusProviderProps = {
  children: ReactNode;
};

export const NetworkStatusProvider: React.FC<NetworkStatusProviderProps> = ({
  children,
}) => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <NetworkStatusContext.Provider value={{ isOnline }}>
      {children}
    </NetworkStatusContext.Provider>
  );
};

export const useNetworkStatus = () => {
  const context = useContext(NetworkStatusContext);

  if (!context) {
    throw new Error(
      "useNetworkStatus must be used within a NetworkStatusProvider"
    );
  }

  return context;
};
