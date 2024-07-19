import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addVideo } from '../Services/allApis';



function AddVideo({setAdd}) {
  const [show, setShow] = useState(false);


  const [video , setVideo] = useState({
    videoId:"",caption:"",image:"",videoUrl:""
  })
  // console.log(video);

  const submitForm=async()=>{
      const {videoId,caption,image,videoUrl}=video
      if(!videoId || !caption || !image || !videoUrl){
        toast.info("Enter Invalid Inputs!!")
      }else{

        // Change watching url to embed url
        const code = videoUrl.split("v=")[1]
        const embedUrl = `https://www.youtube.com/embed/${code}?si=_2QpmklsDbHhgfRj&autoplay=1`
        video.videoUrl=embedUrl


        const result= await addVideo(video)
        console.log(result);
        if(result.status===201){
          setVideo({videoId:'',caption:'',image:'',videoUrl:''})
          toast.success("Video Upload Successsfully!!")
          setAdd(result)
          handleClose()
        }else{
          console.log(result);
          toast.error("Video Uploading Failed")
        }
    }
  }



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <button className='m-3'><i className="fa-regular fa-square-plus fa-xl" style={{ color: "#f00000", }} onClick={handleShow} /></button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video Details</Modal.Title>
        </Modal.Header>

        <Modal.Body className='bg-warning'>
          <FloatingLabel
            controlId="floatingId" label="Video ID" onChange={(e)=>{setVideo({...video,videoId:e.target.value})}} className="mb-3">
            <Form.Control type="text" placeholder="1" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingCaption" onChange={(e)=>{setVideo({...video,caption:e.target.value})}} label="Caption" className="mb-3">
            <Form.Control type="text" placeholder="Caption" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingImage" onChange={(e)=>{setVideo({...video,image:e.target.value})}} label="Video Image URL" className="mb-3">
            <Form.Control type="text" placeholder="imageURL" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingVideo" onChange={(e)=>{setVideo({...video,videoUrl:e.target.value})}} label="Youtube Video URL" className="mb-3">
            <Form.Control type="text" placeholder="videoURL" />
          </FloatingLabel>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitForm}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddVideo
