import React, { useEffect, useState } from 'react'
import axois from 'axios'
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow
} from 'mdb-react-ui-kit';

import { Link, useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


function ViewAllContacts() {

  const base_url= 'http://localhost:8000'
  const location = useNavigate()

  const [allcontacts,setAllContacts]= useState([])
  const fetchData=async()=>{
    const result = await axois.get(`${base_url}/get-all-contact`)
    console.log(result.data.contacts);
    setAllContacts(result.data.contacts)
  }

  console.log(allcontacts);

  const DeleteContact=async(id)=>{
    const result = await axois.delete(`${base_url}/delete-contact/${id}`)
    alert(result.data.message)
    fetchData()
  }

  useEffect (()=>{
    fetchData()
  },[])
  return (
    <div>

  <div className="container">
    <Row className='mt-5'>
      <Col>
      <h2>All Contacts</h2>
      </Col>

      <Col className='text-end'>
      <Link to={'/add'}>
            <MDBBtn   className=' btn-primary ms-5'>
              Add New <i class="fa-solid fa-plus fa-bounce mx-1"></i>
            </MDBBtn>
            </Link>
      </Col>
    </Row>
     
   
  <MDBRow className='mt-5 mb-5'>
      
    {
      allcontacts.map((item)=>(
        <MDBCol xl={6} className='mb-4'>
        <MDBCard>
          <MDBCardBody>
            
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
              <i class="fa-solid fa-user mx-2 fs-4"></i>
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>{item.name}</p>
                  <p className='text-muted mb-0'>{item.phone}</p>
                </div>
              </div>
            
            </div>
          </MDBCardBody>
          <MDBCardFooter background='light' border='0' className='p-2 d-flex justify-content-around'>
          
            <Link to={`/view/${item.id}`}>
            <div className='text-primary'>
            <MDBBtn style={{textDecoration:'none'}} color='link' rippleColor='primary' className='text-reset m-0'>
              View <i class="fa-solid fa-eye mx-1 "></i>
            </MDBBtn>
            </div>
            </Link>
  
            <Link to={`/edit/${item.id}`}>
            <div className='text-primary'>
            <MDBBtn style={{textDecoration:'none'}} color='link' rippleColor='primary' className='text-reset m-0'>
              Edit <i class="fa-solid fa-pen mx-1 "></i>
            </MDBBtn>
            </div>
            </Link>
  
            
            <div className='text-primary'>
            <MDBBtn onClick={()=>DeleteContact(item.id)} style={{textDecoration:'none'}} color='link' rippleColor='primary' className='text-reset m-0'>
              delete <i class="fa-solid fa-trash text-danger mx-1"></i>
            </MDBBtn>
            </div>
            
           
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      ))
    }
    
  
   
    
  </MDBRow> 
  </div>
  <div>
  </div>

  
    </div>
  )
}

export default ViewAllContacts