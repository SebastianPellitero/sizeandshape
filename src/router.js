/*------------------------------------------------*/
/* LIBRARIES
/*------------------------------------------------*/
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
/*------------------------------------------------*/
/* INTERNAL DEPENDENCIES
/*------------------------------------------------*/
// Components
import CanvasBoard from "./components/board/board";
import About from "./components/about/about";
import Header from "./components/header/header";
import Tutorial from "./components/tutorial/tutorial";
// Constants
import { ROOT, ABOUT, TUTORIAL } from "./constants/routes";

const AppRouter = () => (
  <Router basename="/">
    <Header />
    <Switch>
      <Route path={ROOT} exact component={CanvasBoard} />
      <Route path={ABOUT} component={About} />
      <Route path={TUTORIAL} component={Tutorial} />
    </Switch>
  </Router>
);

export default AppRouter;
