import React from "react";
import "./home.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import actions from "../../../redux/home/actions";
import operations from "../../../redux/home/operations";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { RootState } from "../../../store";

interface Props {}

const HomePage: React.FC<Props> = (props) => {
  const homeState = (state: RootState) => state.home;
  const loginReq = useSelector(homeState).loginReq;
  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    const { value, name } = event.target;
    const newModel = {} as any;
    newModel[name] = value;
    dispatch(actions.onChangeFormLogin(newModel));
  };

  const { width, height } = useWindowDimensions();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          Home Page, width: {width}, height: {height}
        </div>
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
