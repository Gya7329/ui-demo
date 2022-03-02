import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import { AuthUser } from "../../../omsClient/authUser";
export const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const [login, setLogin] = useState([]);

  const [error, setError] = useState();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const navigate = useNavigate();
  const handleNavigateToHome = () => {
    AuthUser((result, err, data = { ...form }) => {
      if (err) {
        setError(err);
        return;
      }
      setLogin(result);
      setUser({ loggedIn: true });
      navigate("/");
    });
  };

  return (
    <div style={{ marginTop: "200px", marginLeft: "200px" }}>
      <label>Email Address</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <br />
      <br />
      <br />
      <div>
        <label>Password</label>
        <input
          type="text"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        onClick={() => {
          handleNavigateToHome();
        }}
      >
        <Link to="/">Login</Link>
      </button>
    </div>
  );
};
