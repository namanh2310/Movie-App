import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.png";
import { removeCurrentUser } from "../../features/netflixSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.netflix.currentUser);
  const auth = useSelector((state) => state.netflix.auth);

  return (
    <div className="header">
      <Link to={auth ? "/welcome" : "/"}>
        <div className="header-title">
          <img src={logo} alt="" height={40} />
        </div>
      </Link>
      {auth && (
        <div className="header-user">
          <div className="header-user-title">
            <h3 className="header-user-name">{currentUser[0].logName}</h3>
            <button
              className="header-user-logout"
              onClick={() => {
                dispatch(removeCurrentUser());
                navigate("/");
              }}
            >
              Log out
            </button>
          </div>
          <img className="header-img" src={currentUser[0].avt} alt="avatar" />
        </div>
      )}
    </div>
  );
}

export default Header;
