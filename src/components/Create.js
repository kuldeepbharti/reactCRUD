import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';


function Create() {
   const [name, setName]= useState('');
   const [age, setAge]= useState('');
   const [email, setEmail]= useState('');

   const navigate =  useNavigate();

   const handelSubmit = (e) => {
    e.preventDefault();
    axios.post("https://65116b11829fa0248e4005f5.mockapi.io/crud", {
      e_name: name,
      e_age: age,
      e_email: email
    }).then(() => {
      navigate('/')
    }).catch((err) => {
      console.log(err)
  });
   }
  return (
   <>
   <div className='row'>
    <div className='col-md-4'>
    <div className='mb-2 mt-2'>
         <div>
         <Link to='/'>
          <button className='btn btn-primary'>Read Data</button>
          </Link>
         </div>
        </div>
      <div className='bg-primary p-4 text-center'>
        <h1>Create Data</h1>

      </div>
    <form onSubmit={handelSubmit}>
        <div className='from-group'>
        <label>Enter Name:</label>
        <input type='text' placeholder='Name' className='form-control' onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className='from-group'>
        <label>Enter Age:</label>
        <input type='numder' placeholder='Age' className='form-control' onChange={(e) => setAge(e.target.value)}/>
        </div>
        <div className='from-group'>
        <label>Enter Email:</label>
        <input type='email' placeholder='Email' className='form-control' onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <br/>
        <div className='d-grid'>
        <input type='submit' value="Submit" className='btn btn-primary'/>
        </div>
        
    </form>

    {name}
    <br/>
    {age}
    <br/>
    {email}

    </div>
   
   </div>
   </>
  )
}

export default Create
