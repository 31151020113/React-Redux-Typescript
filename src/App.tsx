import React from "react";
import "./App.scss";
import HomePage from "./components/pages/home/home";
import ProductPage from "./components/pages/product/product";
import { BrowserRouter, Switch } from "react-router-dom";
import RouteLayout from "./components/shared/route-layout/route-layout";

export const routes = [
  {
    href: "/",
    exact: true,
    title: "Home",
    component: HomePage,
  },
  {
    href: "/product",
    exact: true,
    title: "Product",
    component: ProductPage,
  },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {routes.map(({ href, exact, component }) => (
            <RouteLayout
              key={href}
              path={href}
              exact={exact}
              component={component}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
