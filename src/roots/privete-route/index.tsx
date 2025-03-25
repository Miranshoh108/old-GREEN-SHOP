import { useIsAuthenticated } from "react-auth-kit";
import { Navigate, Outlet } from "react-router-dom";

const PriveteRoute = () => {
  const isAuth: boolean = useIsAuthenticated()();
  if (!isAuth) {
    return <Navigate to={"/"} replace />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default PriveteRoute;
