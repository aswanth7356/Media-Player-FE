import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <div>
      <>
        <div className='container-fluid p-5'>
          
            <div>
              <Row>
                <Col sm={12} md={6} className='d-flex flex-column justify-content-center p-5'>
                  <h1 className='text-primary'>MEDIA PLAYER</h1>
                  <p>
                    media player is an online platform for video uploads and management
                  </p>
                  <Link to={'/home'} className='btn btn-warning w-50 border shadow rounded'>Lets Go..</Link>
                </Col>

                <Col sm={12} md={6}>
                  <img style={{width:'100%'}} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/317b3233-97e7-4abe-b365-6d02b5862313/d277ol1-84f41fa1-3deb-4297-957d-5457456b32bb.png" alt="" />
                </Col>
              </Row>
            </div>

            <div className='mt-5 p-5'>
              <h2 className='text-center text-white'>FEATURES</h2>
              <div className='d-flex justify-content-around mt-5'>

                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" style={{height:'230px'}} src="https://bevologyinc.com/blog/wp-content/uploads/2019/01/Metrics-gif.gif" />
                  <Card.Body>
                    <Card.Title>Manage Videos</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" style={{height:'230px'}} src="https://cdn.dribbble.com/users/652746/screenshots/1844317/upload_animation.gif" />
                  <Card.Body>
                    <Card.Title>Upload Video</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" style={{height:'230px'}} src="https://www.dyspatch.io/wp-content/uploads/2020/09/gif-vs-video.gif" />
                  <Card.Body>
                    <Card.Title>Watch History</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>

              </div>
            </div>

            <div className='mt-5 p-5'>
              <Row>
                <Col sm={12} md={8}>
                  <h4 className='text-info'>Simple and Fast</h4>
                  <p style={{textAlign:'justify'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim similique perspiciatis, laborum itaque exercitationem asperiores quos, quidem quo ad voluptatum, debitis dolore dolor aspernatur minus magni eaque nam in quod?
                  </p>
                </Col>

                <Col sm={12} md={4}>
                  <iframe width="100%" height="315" src="https://www.youtube.com/embed/SjkcA2ZCmDU?si=6BcwQ0LmyHx8zJIn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Col>
              </Row>
            </div>

        </div>
      </>
    </div>
  )
}

export default Landing
