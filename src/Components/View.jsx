import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const base_url= 'http://localhost:8000'


function View() {
  const [contactdata,setContactData]=useState({})

  const {id}=useParams()
  console.log(id);
  const getContact= async(id)=>{
    const result = await axios.get(`${base_url}/get-an-contact/${id}`)
    console.log(result.data.contacts);
    setContactData(result.data.contacts)
  }
console.log(contactdata);
  useEffect (()=>{
    getContact(id)

  },[])

  return (
    <div>
    <div className="container shadow rounded-9" style={{width:'1500px',height:'100%'}} >
    {
      <Row className='mt-5 mb-5' >
      <Col>
      <div className='mt-4'>
        <img width={'800px'} height={'500px'} src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/31ad4c76244561.5c90a7fe64754.gif" alt="" />
      </div>
      </Col>
      <Col className='ms-2'>
      <div className='ms-2'>
      <ListGroup className='m-5' style={{width:'320px'}}>
    
    <ListGroup.Item className='m-2 text-center'>Name : {contactdata.name}
         </ListGroup.Item>
     <ListGroup.Item className='m-2'> <i class="fa-solid fa-phone mx-2"></i> : {contactdata.phone}</ListGroup.Item>
     <ListGroup.Item className='m-2'><i class="fa-solid fa-envelope mx-2"></i> :  {contactdata.email}</ListGroup.Item>
  
    

   

   </ListGroup>
      </div>
      <div>
      <ListGroup className='m-5 mb-5' style={{width:'320px'}}>
      <ListGroup.Item className='m-1 text-center'>Address</ListGroup.Item>
      <ListGroup.Item className='m-1'><i class="fa-solid fa-city mx-2"></i>: {contactdata.city}</ListGroup.Item>
      <ListGroup.Item className='m-1'><i class="fa-solid fa-location-dot mx-2"></i>  : {contactdata.street}</ListGroup.Item>
      <ListGroup.Item className='m-1'><i class="fa-solid fa-hashtag mx-2"></i> : {contactdata.zipcode}</ListGroup.Item>
    
    </ListGroup>
      </div>
      </Col>
     </Row>
    }
    </div>
    <div className='text-center m-3'>
        <Link to={'/contacts'}>
        <button className='btn btn-primary'>
          Back to contacts
        </button>
        </Link>
      </div>
    </div>
  )
}

export default View