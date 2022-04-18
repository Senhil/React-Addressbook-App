import React, { useState } from "react"
import logo from '../../Assets/images/adressbookimage.png'
import cancelButton from '../../Assets/images/cross.png'
import './Adduser.css';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';
const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: '',
        address: '',
        city: '',
        state:'',
        zipcode:'',
        phonenumber:'',
        id: '',
        isUpdate: false,
        errorname:'',
        errorzipcode:'',
        errorphonenumber:'',
        
        }
  );

  
  const onInputChange =  async event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = async event => {
    event.preventDefault();
    console.log('user'+user)
    await axios.post("http://localhost:3001/users", user);
    history.push("/");
  };
  const changeValue = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
}

const firstname_validation = (event)=>{
  const data = event.target.value;
  const Regexp = new RegExp("^[A-Z]{1}[a-z]{2,}$");     
  const test = Regexp.test(data);
  if(!test){
  
      setUser((user)=>({
          ...user,
          errorname : '***Enter Valid Name'
      }))
  }
  else{
      console.log('else')
      setUser((user)=>({
          ...user,
          errorname : '' 
      }))
  }
}
const phonenumber_validation = (event)=>{
  const data = event.target.value;
  const Regexp = new RegExp("[0-9]{10}$");     
  const test = Regexp.test(data);
  if(!test){
  
      setUser((user)=>({
          ...user,
          errorphonenumber : '***Enter Valid Number'
      }))
  }
  else{
      console.log('else')
      setUser((user)=>({
          ...user,
          errorphonenumber : ''
      }))
  }
}
const zipcode_validation = (event)=>{
  const data = event.target.value;
  const Regexp = new RegExp("^[0-9]{6}$");     
  const test = Regexp.test(data);
  if(!test){
  
      setUser((user)=>({
          ...user,
          errorzipcode: '***Enter valid zip'
      }))
  }
  else{
      console.log('else')
      setUser((user)=>({
          ...user,
          errorzipcode : ''
      }))
  }
}
  return (  
    <div className="payroll-main">
        <header className='header-content header'>
            <div className="logo-content">
                <img src={logo} alt="" />
                <div>
                    <span className="emp-text">ADDRESS</span> <br />
                    <span className="emp-text emp-payroll">BOOK</span>
                </div>
            </div>
        </header>
        
        <div className="form-content">
            <form className="form-head" action="#" onSubmit={onSubmit}>
                
            <header className="form-header">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span> PERSON ADDRESS FORM </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>
                            <Link to=''><img className="cancel-img"    src={cancelButton} alt=""  /></Link>
                            </span>
                        </header>
                 <div className="row-content">
                    
                    
              
                </div>
                <div className="row-content">
                    <label className="label text" htmlFor="name">FULLNAME</label><br/>
                    <input className="input" type="text" id="name" name="name" value={user.name} onChange={changeValue} onBlur={firstname_validation} placeholder="Your name.." />
                    <error className="error">{user.errorname}</error>
              
                </div>
                <div className="row-content">
                    <label className="label text" htmlFor="name">ADDRESS</label>
                    <input className="input" type="text" id="address" name="address" value={user.address} onChange={changeValue} placeholder="Your address.." />
                
                </div>
                <div class="row-content">
                <div class="row">
                <div class="label-city">
                        <label class="city" for="city">CITY</label>
                        <input class="input" type="city" id="city" name="city" value={user.city} onChange={changeValue} placeholder="Your city.." />
                
                </div>
                
               <div class="label-state">
                        <label class="state" for="state">STATE</label>
                    <select id="state" name="state" value={user.state} onChange={changeValue}>
                    <option value="">Select State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                </select>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                
                    <div class="label-zip">
                        <label class="zip" for="zipcode">ZIPCODE</label>
                        <input class="input" type="zipcode" id="zipcode" name="zipcode" value={user.zipcode} onChange={changeValue} onBlur={zipcode_validation} placeholder="Your zipcode.." />
                        <error className="error">{user.errorzipcode}</error>
             
                </div>
                </div>
                </div>
                <div className="row-content">
                    <label className="label text" htmlFor="phonenumber">PHONE-NUMBER</label>
                    <input className="input" type="text" id="phonenumber" name="phonenumber" value={user.phonenumber} onChange={changeValue} onBlur={phonenumber_validation} placeholder="Your phone number.." />
                    <error className="error">{user.errorphonenumber}</error>
               
                </div>
                

                <div className="buttonParent">
                <div className="submit-reset">
                        <button type="submit" className="button submitButton" id="submitButton">{user.isUpdate ? 'Update' : 'SUBMIT'}</button>
                    </div>
                    <Link to="/" className="button resetButton">CANCEL</Link>
                    
                </div >
            </form >
        </div >
    </div >
);
};

export default AddUser;