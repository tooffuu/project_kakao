import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Content_app from "./components/Content_app";
import Notice_app from "./components_notice/Notice_app";
import Rode from "./components/Rode";
import Post_Write from "./components_notice/Post_Write";
import Post_Detail from "./components_notice/Post_Detail";
import Post_Edit from "./components_notice/Post_Edit";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact>
            <Content_app />
          </Route>
          <Route path={"/rodemap"} exact>
            <Rode />
          </Route>
          <Route path={"/notice"} exact>
            <Notice_app />
          </Route>
          <Route path={"/write"} exact>
            <Post_Write />
          </Route>
          <Route path={"/notice/:id"} exact>
            <Post_Detail />
          </Route>
          <Route path={"/notice/edit/:id"} exact>
            <Post_Edit />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
