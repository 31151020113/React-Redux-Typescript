import React from "react";
import "./home.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppState } from "../../../redux";
import { LoginReq } from "../../../models/req/login-req";
import actions from "../../../redux/home/actions";
import operations from "../../../redux/home/operations";

interface Props {}

const HomePage: React.FC<Props> = (props) => {
  const loginReq = useSelector<AppState, LoginReq>(
    (state) => state.home.loginReq
  );
  const dispatch = useDispatch();
  const {} = props;

  const handleChange = (event: any) => {
    const { value, name } = event.target;
    const newModel = {} as any;
    newModel[name] = value;
    dispatch(actions.onChangeFormLogin(newModel));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">Home Page</div>
      </div>
      <div className="group mt-3">
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              placeholder="User name"
              value={loginReq.userName}
              name="userName"
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              placeholder="Password"
              value={loginReq.password}
              name="password"
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mt-3 justify-content-center">
          <button
            type="button"
            className="form-control text-center"
            onClick={() => dispatch(operations.loginAsync())}
            style={{ width: "50%" }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
