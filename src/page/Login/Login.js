import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import userList from "../../common/fakeData/userList";
import { getCurrentUser } from "../../features/netflixSlice";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.netflix.auth);
  console.log(auth);
  const [input, setInput] = useState({ logName: "", logPw: "" });
  const [error, setError] = useState(false);
  const handleSubmit = () => {
    userList.map((user) => {
      if (user.logName === input.logName && user.logPw === input.logPw) {
        dispatch(
          getCurrentUser({
            logName: input.logName,
            logPw: input.logPw,
            avt: user.avt,
          })
        );
        navigate("/welcome");
      } else {
        setError(true);
      }
      return 0;
    });
  };

  return (
    <div className="login-container">
      <div className="login-cover">
        <p className="login-header">Sign In</p>
        <div className="login-input-field">
          <input
            className="login-name log"
            type="text"
            placeholder="Name"
            onChange={(e) => setInput({ ...input, logName: e.target.value })}
          />
          <input
            className="login-password log"
            type="password"
            placeholder="Password"
            onChange={(e) => setInput({ ...input, logPw: e.target.value })}
          />
          <button
            className="login-btn"
            onClick={() => setTimeout(handleSubmit, 2000)}
          >
            Login
          </button>
          {error && (
            <h4 style={{ color: "#E50914", textAlign: "center", marginTop: 4 }}>
              Wrong name or password! Please try again!
            </h4>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
