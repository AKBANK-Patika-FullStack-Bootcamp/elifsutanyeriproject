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


const Routing = () => {
  return(
<>
  <Router>
    <Header/>
    {/* <nav className='navbar'>
      <ul>
        <li><Link to="/login">Home</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/user">User</Link></li>
        <li><Link to="/register">Register</Link></li>
        </ul>
      </nav> */}
      <Switch>
      <Route exact path="/" component={App} />
      <Route path="/admin" component={AdminPage} />
      <Route path="/user" component={UserPage} />
      <Route path="/register" component={Register} />
      {/* <Route path="/userInfo" component={UserInfo} />
      <Route path="/aptInfo" component={AptInfo} />
      <Route path="/billsInfo" component={BillsInfo} /> */}
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
