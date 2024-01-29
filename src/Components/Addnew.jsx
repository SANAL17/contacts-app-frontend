import React, { useState } from 'react'
import {
  MDBInputGroup,
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Addnew() {

  const [id,setId]=useState('')
  const [name,setName]=useState('')
  const [phone,setPhone]=useState('')
  const [email,setEmail]=useState('')
  const [city,setCity]=useState('')
  const [street,setStreet]=useState('')
  const [zipcode,setZip]=useState('')

  const base_url= 'http://localhost:8000/add-contact'

  const location = useNavigate() 

  const Addcontact=(e)=>{
    e.preventDefault()
    console.log(id,name,email,phone,city,street,zipcode);
    // api call
    const body={
      id,name,email,phone,city,street,zipcode
      
    }
   const result = axios.post(base_url,body).then((response)=>{
    console.log(response);
     alert(response.data.message)
     location('/contacts')
    
   })
   .catch((error)=>{
    alert("Please enter a unique contact id")
   })
   
   

  }

  return (
    <div className='container'>
      <div className='m-5 shadow rounded-6 text-center' style={{height:'600px'}}>
        <h3 className=' text-center m-5 p-3'>Add Your Contact Details</h3>
      <MDBInputGroup  textBefore='ID   ' style={{width:'1150px'}} className='m-4 '>
      <input  onChange={(e)=>setId(e.target.value)}  className='form-control' type='number' />
   
    </MDBInputGroup>
      <MDBInputGroup textBefore='Name 'style={{width:'1150px'}}  className='m-4'>
      <input   onChange={(e)=>setName(e.target.value)} className='form-control' type='text' />
   
    </MDBInputGroup>
    <MDBInputGroup textBefore='Email 'style={{width:'1150px'}}  className='m-4'>
      <input  onChange={(e)=>setEmail(e.target.value)}  className='form-control' type='text' />
   
    </MDBInputGroup>
    <MDBInputGroup  textBefore='Phone No' style={{width:'1150px'}} className='m-4 '>
      <input  onChange={(e)=>setPhone(e.target.value)}  className='form-control' type='number' />
   
    </MDBInputGroup>
   
  
    <h4 className='m-4 p -3'>Add Your Address Details</h4>
    <MDBInputGroup textBefore='City 'style={{width:'1150px'}}  className='m-4'>
      <input  onChange={(e)=>setCity(e.target.value)} className='form-control' type='text' />
   
    </MDBInputGroup>
    <MDBInputGroup textBefore='Stret ' style={{width:'1150px'}} className='m-4'>
      <input  onChange={(e)=>setStreet(e.target.value)} className='form-control' type='text' />
   
    </MDBInputGroup>
    <MDBInputGroup textBefore='Zipcode 'style={{width:'1150px'}}  className='m-4'>
      <input  onChange={(e)=>setZip(e.target.value)} className='form-control' type='number' />
   
    </MDBInputGroup>
      </div>
      <div className='text-center m-4'>
          <button  onClick={(e)=>Addcontact(e)} className='btn btn-info m-2'>Add To Contact</button>
          <Link to={'/contacts'}>
        <button className='btn btn-primary'>
          Back to contacts
        </button>
        </Link>
        </div>
    </div>
  )
}

export default Addnew