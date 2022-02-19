import { Route, Redirect } from "react-router-dom";
import App from "../App";
import UserPage from "../Pages/UserPageController/UserPage";
import AdminPage from "../Pages/AdminPageController/AdminPage";
import setIsAdmin from '../App';
import UserInfo from "../Pages/AdminPageController/UserInfo";
import BillsInfo from "../Pages/AdminPageController/BillsInfo";

const ProtectedRoute = ({ isadmin, component: Component, ...rest}) => {

  return (
    <Route
      {...rest}
      render={(props) => {
        if(setIsAdmin === true){
          console.log("I am working");
            return (
            <>
            <Component />

            </>
              
              ) 
        }    
        
        else
        {
            return(
                <Redirect to={{pathname: "/user", state: {from: props.location}}} />
            )
        }
      }
        
      }
    />
  );
}




export default ProtectedRoute;
