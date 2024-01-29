import React from 'react'
import { Link } from 'react-router-dom'
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function Home() {
  return (
    <div>
       <div className=' d-flex  mt-4 mb-4 ' style={{width:'100%', height:'590px'}}>
        <div className="justify-content-center " style={{marginTop:'60px'}}>
          <h2 className='ms-5 text-primary mt-4 '>
            Add Your  Contacts
          </h2>
          <p className='text-align-justif text-dark p-5 m-2' style={{justifyContent:"center",alignItems:'center',textAlign:'justify'}}>
           A ontacts app is keeps phone numbers, addresses, and other contact information right atyour fingertips, tied to your  account. Everything is collected in a single place so you never have to  spend more than a few minutes looking for the right way to reach somebody.
          </p>

          <div className=''>
       
            <Link to={'/add'}>
            <MDBBtn   className=' btn-primary ms-5'>
              Add New <i class="fa-solid fa-plus fa-bounce mx-1"></i>
            </MDBBtn>
            </Link>
            <Link to={'/contacts'}>
            <MDBBtn   className=' btn-primary ms-4'>
             View All <i class="fa-solid fa-eye fa-bounce mx-2"></i>
            </MDBBtn>
            </Link>

        </div>
        </div>
        <div style={{marginLeft:'60px'}} className="col-6  ">
          <img  width={'880px'} height={'580px'} src="https://i.pinimg.com/originals/1b/1e/37/1b1e37721cf248b07ae7ed07966df60b.gif" alt="" />
        </div>

      </div>
      <div className=' d-flex  mt-4 mb-4 ' style={{width:'100%', height:'700px'}}>
      <div style={{marginLeft:'60px'}} className="col-6  ">
          <img  width={'880px'} height={'700px'} src="https://www.appther.com/assets/images/Group%2019323.png" alt="" />
        </div>
        <div className="justify-content-center " style={{marginTop:'60px'}}>
         
          <p className='text-align-justif text-dark p-5 m-2' style={{justifyContent:"center",alignItems:'center',textAlign:'justify'}}>
          To use contacts on your cell phone, you can save names, email addresses, phone numbers, and more in your phone’s contact list. You can also import contacts from other sources like Google Contacts  A ontacts app is keeps phone numbers, addresses, and other contact information right atyour fingertips, tied to your  account. Everything is collected in a single place so you never have to  spend more than a few minutes looking for the right way to reach somebody.
          If you’re using an Android phone, you can add, move, or import contacts to your Google Contacts account. Contacts saved to your Google Account will sync with Google Contacts and all your Android devices 
          </p>

          <div className='text-center'>
       
            <Link to={'/add'}>
            <MDBBtn   className=' btn-primary ms-5'>
              Add New <i class="fa-solid fa-plus fa-bounce mx-1"></i>
            </MDBBtn>
            </Link>
          

        </div>
        </div>
       

      </div>
    </div>
  )
}

export default Home