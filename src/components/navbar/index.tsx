import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import searchLogo from "../../assets/icons/search-icon.svg";
import cartLogo from "../../assets/icons/cart.svg";
import { Badge } from "antd";
import { BellOutlined, LoginOutlined } from "@ant-design/icons";
import { useReduxDispatch, useReduxSelector } from "../../hooks/useRedux";
import { setAuthorizationModalVisibility } from "../../redux/modal-slice";
import { AuthUser } from "../../@types";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";

const Navbar = () => {
  const dispatch = useReduxDispatch();

  const navigate = useNavigate();

  const { shop } = useReduxSelector((state) => state.shopSlice);
  const auth: AuthUser = useAuthUser()() ?? {};
  const isAuth = useIsAuthenticated()();

  return (
    <>
      <header className="navbar container w-[90%] m-auto ">
        <div className="flex items-center justify-between p-[3rem] border-b border-green-500 border-opacity-50  ">
          <Link className="header-left" to={"/"}>
            <img className="w-[15rem] h-[3.4rem] " src={logo} alt="" />{" "}
          </Link>
          <nav className="header-center h-full font-normal text-[1.6rem] text-[#3D3D3D] flex items-center gap-[5rem]">
            <h3
              onClick={() => navigate("/")}
              className="font-bold !text-[#46A358] menu-item active cursor-pointer"
            >
              Home
            </h3>
            <h3 onClick={() => navigate("/blog")} className="cursor-pointer">
              Blog
            </h3>
          </nav>
          <nav className="header-right flex items-center gap-[3rem]">
            <button>
              <img src={searchLogo} alt="search" />
            </button>
            <button className="text-[2.4rem]">
              <BellOutlined />
            </button>
            <button onClick={() => navigate("/products-shop")}>
              <Badge count={shop.length || 0} showZero>
                <img src={cartLogo} alt="cart" />
              </Badge>
            </button>
            <button
              onClick={() => {
                if (isAuth) {
                  navigate("/profile");
                } else {
                  dispatch(
                    setAuthorizationModalVisibility({
                      open: true,
                      isLoading: false,
                    })
                  );
                }
              }}
              className="bg-[#46a358] w-[10rem] h-[3.5rem] rounded-[0.6rem] flex items-center justify-center gap-[0.4rem] font-medium text-[1.6rem] text-[#fff] "
            >
              <p>
                {isAuth ? (
                  auth.name
                ) : (
                  <>
                    <LoginOutlined /> Login
                  </>
                )}
              </p>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
