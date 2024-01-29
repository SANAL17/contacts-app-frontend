import React, { useEffect, useState } from 'react'
import {
  MDBInputGroup,
} from 'mdb-react-ui-kit';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';



function Edit() {

  const base_url= 'http://localhost:8000'


  const [cntid,setId]=useState('')
  const [cntname,setName]=useState('')
  const [cntphone,setPhone]=useState('')
  const [cntemail,setEmail]=useState('')
  const [cntcity,setCity]=useState('')
  const [cntstreet,setStreet]=useState('')
  const [cntzipcode,setZip]=useState('')

  const {id}=useParams()
  console.log(id);
  
  const getContact= async(id)=>{
    const result = await axios.get(`${base_url}/get-an-contact/${id}`)
    console.log(result.data.contacts);
    setId(result.data.contacts.id)
    setName(result.data.contacts.name)
    setPhone(result.data.contacts.phone)
    setEmail(result.data.contacts.email)
    setCity(result.data.contacts.city)
    setStreet(result.data.contacts.street)
    setZip(result.data.contacts.zipcode)
  }

  useEffect (()=>{
    getContact(id)

  },[])

  const location=useNavigate()
  const udpdateContact=async(e)=>{
    e.preventDefault()
    const body={
      id:cntid,
      name:cntname,
      phone:cntphone,
      email:cntemail,
      city:cntcity,
      street:cntstreet,
      zipcode:cntzipcode
    }
    const result =await axios.post(`${base_url}/update-an-contact/${id}`,body)
    console.log(result);
    alert(result.data.message)
    location('/contacts')

  }

  return (
    <div>
      
      <div className='container'>
      <div className='m-5 shadow rounded-6 text-center' style={{height:'600px'}}>
        <h3 className=' text-center m-5 p-3'>Update Your Contact Details</h3>
      <MDBInputGroup   textBefore='ID   ' style={{width:'1150px'}} className='m-4 '>
      <input  value={cntid} onChange={(e)=>setId(e.target.value)} className='form-control' type='number' />
   
    </MDBInputGroup>
      <MDBInputGroup textBefore='Name 'style={{width:'1150px'}}  className='m-4'>
      <input value={cntname} onChange={(e)=>setName(e.target.value)}  className='form-control' type='text' />
   
    </MDBInputGroup>
    <MDBInputGroup  textBefore='Phone No' style={{width:'1150px'}} className='m-4 '>
      <input value={cntphone} onChange={(e)=>setPhone(e.target.value)} className='form-control' type='text' />
   
    </MDBInputGroup>
    <MDBInputGroup textBefore='Email 'style={{width:'1150px'}}  className='m-4'>
      <input value={cntemail} onChange={(e)=>setEmail(e.target.value)} className='form-control' type='text' />
   
    </MDBInputGroup>
  
    <h4 className='m-4 p -3'>Update Address</h4>
    <MDBInputGroup textBefore='City 'style={{width:'1150px'}}  className='m-4'>
      <input value={cntcity} onChange={(e)=>setCity(e.target.value)} className='form-control' type='text' />
   
    </MDBInputGroup>
    <MDBInputGroup textBefore='Stret ' style={{width:'1150px'}} className='m-4'>
      <input value={cntstreet} onChange={(e)=>setStreet(e.target.value)} className='form-control' type='text' />
   
    </MDBInputGroup>
    <MDBInputGroup textBefore='Zipcode 'style={{width:'1150px'}}  className='m-4'>
      <input value={cntzipcode} onChange={(e)=>setZip(e.target.value)} className='form-control' type='text' />
   
    </MDBInputGroup>
      </div>
      <div className='text-center m-4'>
          <button  onClick={(e)=>udpdateContact(e)} className='btn btn-info m-2'>Upadte</button>
          <Link to={'/contacts'}>
        <button className='btn btn-primary'>
          Back
        </button>
        </Link>
        </div>
    </div>
    </div>
  )
}

export default Edit