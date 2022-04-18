import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
    const [user, setUser] = useState({
        name: '',
          address:'',
          city:'',
          state:'',
          zipcode:'',
          phonenumber:'',

            id: '',
            isUpdate: false,
            error: {
                name: '',
                address:'',
               city:'',
              state:'',
            zipcode:'',
            phonenumber:'',
          
            }
      });
      const { id } = useParams();
    useEffect(() => {
      loadUser();
    }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(res.data);
  };
  // return (
  //   <div className="">
  //         <div>
  //             <h1 className="display-4">User Id: {user.id}</h1>
              
  //         </div>
  //         <div>
               
                
  //                   <h4><b> {user.name}</b></h4> 
  //                   <p>ADDRESS : <b>{user.address}</b></p> 
  //                   <p>CITY : <b>{user.city}</b></p>
  //                   <p>STATE : <b>{user.state}</b></p>
  //                   <p>ZIPCODE : <b>{user.zipcode}</b></p>
  //                   <p>PHONE-NUMBER : <b>{user.phonenumber}</b></p>
              
  //         </div>
         
  //     <div style={{"margin":"20px"}}>
  //       <Link className="backbutton" to="/">Back</Link> 
  //     </div>
  //   </div>
  // );
};

export default User;