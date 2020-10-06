import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Alert from "./component/utils/Alert/Alert";
import {useSelector} from "react-redux";
import AddItem from "./component/AddItem/AddItem";
import AddPropertyContainer from "./component/AddProperty/AddPropertyContainer";
import AllItemsContainer from "./component/AllItems/AllItemsContainer";
import ChangeItemContainer from "./component/ChangeItem/ChangeItemContainer";
import ItemCardContainer from "./component/ItemCard/ItemCardContainer";
import LoginContainer from "./component/login/LoginContainer";
import AllPropertyContainer from "./component/AllProperty/AllPropertyContainer";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";

function App() {
    let alert = useSelector(state => state.items.alert)

    return (
        <div className="App">
            {alert && <Alert text={alert}/>}
            <BrowserRouter>
                <PrivateRoute exact path={'/AllProperty'} component={AllPropertyContainer}/>
                <PrivateRoute exact path={'/AddProperty'} component={AddPropertyContainer}/>
                <PrivateRoute exact path={'/'} component={AllItemsContainer}/>
                <PrivateRoute exact path={'/AddItem'} component={AddItem}/>
                <PrivateRoute exact path={`/ChangeItem/:userId?`} component={ChangeItemContainer}/>
                <Route exact path={'/login'} component={LoginContainer}/>
                <Route exact path={`/ItemCard/:userId?`} component={ItemCardContainer}/>
            </BrowserRouter>

        </div>
    );
}

export default App;

