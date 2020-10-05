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

function App() {
    let alert = useSelector(state => state.items.alert)
    return (
        <div className="App">
            {alert && <Alert text={alert}/>}
            <BrowserRouter>
                <Route exact path={`/login`} render={() => <LoginContainer/>}/>
                <Route exact path={`/`} render={() => <AllItemsContainer/>}/>
                <Route exact path={`/ItemCard/:userId?`} render={() => <ItemCardContainer/>}/>
                <Route exact path={`/AddItem`} render={() => <AddItem/>}/>
                <Route exact path={`/ChangeItem/:userId?`} render={() => <ChangeItemContainer/>}/>
                <Route exact path={`/AllProperty`} render={() => <AllPropertyContainer/>}/>
                <Route exact path={`/AddProperty`} render={() => <AddPropertyContainer/>}/>

            </BrowserRouter>

        </div>
    );
}

export default App;
// <BrowserRouter>
//     <div className='app-wrapper'>
//         <Header/>
//         <Navbar/>
//         <FooterPage/>
//         <div className='app-wrapper-content'>
//             <Route path='/main/:userId?' render={() => <Main/>}/>
//             <Route path='/WithUrlDataContainer/:userId?' render={() => <WithUrlDataContainer/>}/>
//             <Route path='/basket' render={() => <Basket/>}/>
//             <Route path='/admin' render={() => <AdminPage/>}/>
//             <Route path='/login' render={() => <Login/>}/>
//
//
//         </div>
//     </div>
// </BrowserRouter>
