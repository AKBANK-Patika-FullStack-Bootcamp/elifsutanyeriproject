import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header';
import AdminPage from './Pages/AdminPageController/AdminPage';
import UserPage from './Pages/UserPageController/UserPage';
import  ProtectedRoute from './Components/ProtectedRoute';
import setIsAdmin from './App';
import UserInfo from './Pages/AdminPageController/UserInfo';
import aptInfo from './Pages/AdminPageController/AptInfo';
import BillsInfo from './Pages/AdminPageController/BillsInfo';


const Routing = () => {
  return(
<>
  <Router>
    <Header/>
      <Switch>
      <Route exact path="/" component={App} />
      <ProtectedRoute>
          <Route path="/admin" component={AdminPage} isadmin={setIsAdmin}>
            {/* <Route path="/admin/userInfo" component={UserInfo}></Route>
            <Route path="/admin/billsInfo" component={BillsInfo}></Route> */}
          </Route>
        <Route path="/user" component={UserPage} isadmin={setIsAdmin} />
      </ProtectedRoute>
      </Switch>
    </Router>
</>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

