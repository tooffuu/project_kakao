import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Topbar from "./components/Topbar";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
import Content4 from "./components/Content4";
import Content5 from "./components/Content5";
import Content6 from "./components/Content6";
import Content7 from "./components/Content7";
import Content8 from "./components/Content8";
import Content9 from "./components/Content9";
import Foot from "./components/Foot";
import Rode from "./components/Rode";
import Notice from "./components_notice/Notice";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact>
            <Topbar />
            <Content1 />
            <Content2 />
            <Content3 />
            <Content4 />
            <Content5 />
            <Content6 />
            <Content7 />
            <Content8 />
            <Content9 />
            <Foot />
          </Route>
          <Route path={"/rodemap"} exact>
            <Rode />
          </Route>
          <Route path={"/notice"} exact>
            <Notice />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
