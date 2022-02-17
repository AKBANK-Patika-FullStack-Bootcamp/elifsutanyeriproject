import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from './Components/Register';
import Header from './Components/Header';
import AdminPage from './Pages/AdminPageController/AdminPage';
// import UserInfo from './Pages/AdminPageController/UserInfo';
// import AptInfo from './Pages/AdminPageController/AptInfo';
// import BillsInfo from './Pages/AdminPageController/BillsInfo';
import UserPage from './Pages/UserPageController/UserPage';
import  ProtectedRoute from './Components/ProtectedRoute';
import setIsAdmin from './App'
import userInfo from './Pages/AdminPageController/UserInfo'

const Routing = () => {
  return(
<>
  <Router>
    <Header/>
      <Switch>
      <Route exact path="/" component={App} />
      <ProtectedRoute path="/admin" component={AdminPage} isAdmin={setIsAdmin}/>
      <Route path="/user" component={UserPage} />

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
