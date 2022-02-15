
// import AdminNavbar from '../../Components/AdminNavbar';
// import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
// import AptInfo from './AptInfo';
// import BillsInfo from './BillsInfo';
// import UserInfo from './UserInfo';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import authAxios from '../../App'

export default function AdminPage() {
  const url = "http://localhost:5000/api/Admin/userInfo";
  const getUsers = () => {
    authAxios.get(url).then(response => {console.log(response)
  }
 
  return(
    <>
    <Button onClick={getUsers}></Button>
    </>
  )
 }














  
 

  return(
    <>
    <Button onClick={getUsers}></Button>
    </>
  )
}





// export default function AdminPage(){
    
    
    
    
//     return(
//     <div>
//         <AdminNavbar />
    
//     <div>


//       <Switch>
//         <Route path="/userInfo" component={UserInfo} />
//         <Route path="/aptInfo" component={AptInfo} />
//         <Route path="/billsInfo" component={BillsInfo} />
//         {/* <Route path={`${path}/:topicId`}>
//           <AptInfo />
//         </Route>
//         <Route path={`${path}/:topicId`}>
//           <BillsInfo />
//         </Route> */}
//       </Switch>
//     </div>
  
//     </div>
//     )
// }
