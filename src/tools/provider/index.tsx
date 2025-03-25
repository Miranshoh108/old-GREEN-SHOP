import { ReactElement } from "react";
import Modals from "../../components/modals";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { AuthProvider } from "react-auth-kit";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const ProviderConfg = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider
          authType={"cookie"}
          authName={"_auth"}
          cookieDomain={window.location.hostname}
          cookieSecure={window.location.protocol === "https:"}
        >
          <Provider store={store}>
            <Modals /> {children}
          </Provider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
};

export default ProviderConfg;
