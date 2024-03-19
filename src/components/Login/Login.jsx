import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="login_container">
      <div className="login_box">
        <h3>اهلا بكم في لوحة تحكم Maro Care</h3>
        <div className="login_inputs">
          <input type="text" placeholder="قم بإدخال الايميل" />
          <input type="text" placeholder="قم بإدخال الباسورد" />
        </div>
        <div className="submit_btn">
          <button type="submit">تسجيل دخول</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
