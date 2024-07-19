import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Footer() {
  return (
      <div className='container-fluid'>
        <Row className='bg-secondary p-3'>

            <Col>
                <h5>Media player</h5>
                <p style={{textAlign:'justify'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque non cumque dolorum alias, magni tenetur sunt aut quisquam iusto nobis cupiditate minima architecto maiores corrupti dignissimos consectetur eveniet dolorem error!
                </p>
            </Col>

            <Col className='p-2'>
                <h5 className='text-center'>Links</h5>
                <ul style={{listStyle:'none'}} className='mt-3 text-center'>
                    <li>
                        <Link className='text-success text-decoration-none' to={'/'}>Landing</Link>
                    </li>

                    <li>
                    <Link className='text-success text-decoration-none' to={'/home'}>Home</Link>
                    </li>

                    <li>
                    <Link className='text-success text-decoration-none' to={'/history'}>History</Link>
                    </li>
                </ul>
            </Col> 

            <Col>
                <h4>Contact Us</h4>
                <p>mediaplayer@gmail.com</p>
                <p>+917356644734</p>
                <div>
                <textarea name="" id="" className='form-control' placeholder='comment your feedback...'></textarea>
                <button className='btn btn-warning border shadow rounded mt-3'>Send</button>
                </div>
            </Col>
            
            <p style={{textAlign:'center',color:'yellow'}}>copyright &copy; 2024 All rights Reserved</p>
        </Row>
      </div>
  )
}

export default Footer
