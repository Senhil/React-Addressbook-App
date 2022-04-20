import React, { useState } from "react"
import './Adduser.css';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';
import cancelButton from '../../Assets/images/cross.png'
import logo from "../../Assets/images/adressbookimage.png"
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
        
  });
  const[validation,setvalidaton]=useState({
      nameerror:false,
      zipcodeerror:false,
      phonenumbererror:false,

  })

  
  const onInputChange =  async event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = async event => {
    event.preventDefault();
    if(validation.nameerror==false && validation.zipcodeerror==false&&validation.phonenumbererror==false){
        console.log('user'+user)
        await axios.post("http://localhost:3001/users", user);
        history.push("/");
    }
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
            setvalidaton((validation)=>({
                ...validation,
                nameerror : true
            }))

        }
        else{
            console.log('else')
            setUser((user)=>({
                ...user,
                errorname : ''
                
            }))
            setvalidaton((validation)=>({
                ...validation,
                nameerror : false
            }))
        }
    }
    const phonenumber_validation = (event)=>{
        const data = event.target.value;
        const Regexp = new RegExp("^[0-9]{10}$");     
        const test = Regexp.test(data);
        if(!test){
        
            setUser((user)=>({
                ...user,
                errorphonenumber : '***Enter Valid Number'
            }))
            setvalidaton((validation)=>({
                ...validation,
                nameerror : true
            }))
        }
        else{
            console.log('else')
            setUser((user)=>({
                ...user,
                errorphonenumber : ''
            }))
            setvalidaton((validation)=>({
                ...validation,
                nameerror : false
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
                errorzipcode: '***Enter valid ZIP'
            }))
            setvalidaton((validation)=>({
                ...validation,
                nameerror : true
            }))
        }
        else{
            console.log('else')
            setUser((user)=>({
                ...user,
                errorzipcode : ''
            }))
            setvalidaton((validation)=>({
                ...validation,
                nameerror : false
            }))
        }
    }
  return (  
    <div className="payroll-main">
        <header className='header-content header'>
            <div className="logo-content">
                <img src={logo} alt="" />
                <div><Link to="/" className="button">
                    <span className="emp-text">ADDRESS</span> <br />
                    <span className="emp-text emp-payroll">BOOK</span>
                    </Link>
                </div>
                
            </div>
        </header>
        
        <div className="form-content">
            <form className="form-head" action="#" onSubmit={onSubmit}>
                
            <header className="form-header">
                            <span>PERSON ADDRESS FORM </span>
                            <span>
                                <Link to=''><img className="cancel-img" src={cancelButton} alt="" /></Link>
                            </span>
                        </header>
                <div className="row-content">
                    <label className="label text" htmlFor="name">FULL NAME</label><br/>
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
                    <option value="Delhi">Delhi</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="West Bengal">West Bengal</option>
                </select>
                </div>
                
                
                    <div class="label-zip">
                        <label class="zip" for="zipcode">ZIP-CODE</label>
                        <input class="input" type="zipcode" id="zipcode" name="zipcode" value={user.zipcode} onChange={changeValue} onBlur={zipcode_validation} placeholder="Your zipcode.." />
                        <error className="error">{user.errorzipcode}</error>
         
                </div>
                </div>
                </div>
                <div className="row-content">
                    <label className="label text" htmlFor="phonenumber">PHONE-NUMBER</label>
                    <input className="input" type="text" id="phonenumber" name="phonenumber" value={user.phonenumber} onChange={changeValue} onBlur={phonenumber_validation} placeholder="phonenumber.." />
                    <error className="error">{user.errorphonenumber}</error>
              
                </div>

                <div className="buttonParent">
                    
                    <Link to="/" className="button resetButton">CANCEL</Link>
                    <div className="submit-reset">
                        <button type="submit" className="button submitButton" id="submitButton">{user.isUpdate ? 'Update' : 'SUBMIT'}</button>
                    </div>
                </div >
            </form >
        </div >
    </div >
);
};

export default AddUser;