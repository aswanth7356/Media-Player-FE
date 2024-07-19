import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import AddVideo from '../components/AddVideo'
import Catogory from '../components/Category'
import Videolist, {} from '../components/Videolist'
import { Link } from 'react-router-dom'

function Home() {

  const [addResponse,setAddResponse] = useState("")
  return (
    <>
      <div className='container-fluid bg-light p-3'>
        <div className='d-flex justify-content-between'>
          <h4 className='text-white mt-3'>ALL VIDEO</h4>
          <Link to={'/history'} className='me-5 mt-3'>Watch History</Link>
        </div>
       
          
        <Row className='my-5'>
          <Col sm={12} md={1}>
            <AddVideo setAdd={setAddResponse}/>
          </Col>

          <Col sm={12} md={8}>
            <Videolist addRes={addResponse}/>
          </Col>

          <Col sm={12} md={3}>
            <Catogory/>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Home
