import AdminNavbar from "../../Components/AdminNavbar";
import { useState } from "react";
import axios from "axios";


export default function UserInfo(){

    // const [users, setUsers] = useState("");

    // const fetchData = async () => {
    //   const response = await axios.get(
    //     "http://localhost:5000/api/Admin/userInfo"
    //   );
  
    //   setUsers(response.data);
    // };
  
    return (
        
        <AdminNavbar />);
    //   {/* <div>
        
  
    //     {/* Fetch data from API */}
    //     <div>
    //       <button className="fetch-button" onClick={fetchData}>
    //         Tüm Kullanıcı Bilgilerini Getir
    //       </button>
    //       <br />
    //     </div>
  
    //     {/* Display data from API */}
    //     <div>
    //       {users &&
    //         users.map((user, index) => {
    //           ;
  
    //           return (
    //             <div className="book" key={index}>
    //               <h3>Book {index + 1}</h3>
    //               <h2>{user.name}</h2>
  
    //               <div className="details">
                    
    //                 <p>{user.Surname} pages</p>
    //                 <p>{user.TC}</p>
                    
    //               </div>
    //             </div>
    //           );
    //         })}
    //     </div>
    //   </div> */}
      
   

    // return (
    // <>
    // <AdminNavbar />
    
    // <section>
    //     <button>Tüm Kullanıcı Bilgilerini Getir</button>


    
    //   <table className='table table-striped'>
    //     <thead>
    //       <tr>
    //         <th>id</th>
    //         <th>Name</th>
    //         <th>City</th>
    //          <th>Department</th>
          
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {forecasts.map(forecast =>
    //           <tr key={forecast.employeeId}>
    //               <td>{forecast.employeeId}</td>
    //               <td>{forecast.name}</td>
    //               <td>{forecast.city}</td>
    //               <td>{forecast.department}</td>
                 
    //         </tr>
    //       )}
    //     </tbody>
    //   </table>
    // );
  
    // </section>

    // </>
    // );
}