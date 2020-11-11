import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Alert } from "./component/utils/Alert/Alert";
import { useSelector } from "react-redux";
import { AddPropertyContainer } from "./containers/AddPropertyContainer";
import { AllItemsContainer } from "./containers/AllItemsContainer";
import { ChangeItemContainer } from "./containers/ChangeItemContainer";
import { ItemCardContainer } from "./containers/ItemCardContainer";
import { LoginContainer } from "./containers/LoginContainer";
import { AllPropertyContainer } from "./containers/AllPropertyContainer";
import { PrivateRoute } from "./component/PrivateRoute/PrivateRoute";
import { AddItemContainer } from "./containers/AddItemContainer";

function App() {
  let alert = useSelector((state) => state.items.alert);

  return (
    <div className="App">
      {alert && <Alert text={alert} />}
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="`/Items/:page?`" />
          <PrivateRoute
            exact
            path={"/AllProperty"}
            component={AllPropertyContainer}
          />
          <PrivateRoute
            exact
            path={"/AddProperty"}
            component={AddPropertyContainer}
          />
          <PrivateRoute
            exact
            path={`/Items/:page?`}
            component={AllItemsContainer}
          />
          <PrivateRoute exact path={"/AddItem"} component={AddItemContainer} />
          <PrivateRoute
            exact
            path={`/ChangeItem/:userId?`}
            component={ChangeItemContainer}
          />
          <Route exact path={"/login"} component={LoginContainer} />
          <Route
            exact
            path={`/ItemCard/:itemId?`}
            component={ItemCardContainer}
          />
          <Route path="*" component={AllItemsContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
