import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCategory } from '../Services/allApis';
import CategoryList from './CategoryList';

function Category() {

  const [show, setShow] = useState(false);

  const [addres,setaddres] = useState("")

  const [category,setCategory] = useState({
    catId:"",catName:"",catVideos:[]
  })

  const submitForm=async()=>{
    const {catId,catName}=category
    if(!catId || !catName){
      toast.info("Invalid inputs!!")
    }
    else{
      const res = await addCategory(category)
      if(res.status==201){
        toast.success("Category Added!!")
        handleClose()
        setaddres(addres)
        setCategory({
          catId:"",catName:"",catVideos:[]
        })
      }
      else{
        toast.error("Category Addition Failed!!")
        console.log(res);
      }
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <button className='btn btn-warning w-100' onClick={handleShow}>ADD CATEGORY</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='bg-warning p-5'>
            <FloatingLabel controlId="floatingID" label="category id" className="mb-3" >
              <Form.Control type="text" placeholder="1" onChange={(e)=>{setCategory({...category,catId:e.target.value})}}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingCategory" label="category name">
              <Form.Control type="text" placeholder="music" onChange={(e)=>{setCategory({...category,catName:e.target.value})}}/>
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={submitForm}>Send</Button>
        </Modal.Footer>
      </Modal>



      <CategoryList  addres={setaddres}/>
    </div>



  )
}

export default Category
