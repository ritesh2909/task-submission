import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { NavLink } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios';
function Navbar() {


  const [data, setData] = useState({
    name:"",
    email:"",
    phone:"",
    dob:"",

  });


  const handleSubmit = (e) => {
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData);

  };

  // data.append("myjsonkey", JSON.stringify(payload));


  function submit(e){

        e.preventDefault();
        Axios.post("http://localhost:8080/user-form",{
          name: data.name,
          phone: data.phone,
          email: data.email,
          dob: data.dob
        })

        .then(res=>{
          console.log(res.data);
        })
  }




  return (

    <>
      <form className='container form' onSubmit={(e)=>submit(e)}>

        <h2 className='heading'>Contact Us</h2>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label" >Name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          value={data.name} id="name"
            onChange= {(e) => handleSubmit(e)}

          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
          value={data.email} id="email"
           onChange= {(e) => handleSubmit(e)}
           />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
          <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              value={data.phone}  id="phone"
              onChange= {(e) => handleSubmit(e)}

          />

        </div>

        <br />

        <input type="date"  value={data.dob}  id="dob"
              onChange= {(e) => handleSubmit(e)} placeholder=''
        />
        <br /><br />
          <button type="submit" className="btn btn-primary"><NavLink to="data" className="color-btn">Submit</NavLink></button>
      </form>
    </>

  );
}

export default Navbar;
