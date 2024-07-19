// video card for video list

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addHistory, deleteVideo } from '../Services/allApis';
import { toast } from 'react-toastify';


function VideoCard({video,setDel,cat}) {

    const [show, setShow] = useState(false);



    const removeVideo = async(id) =>{
        const result = await deleteVideo(id)
        console.log(result);
        if(result.status==200){
            toast.success("video Deleted")
            setDel(result)
        }
        else{
            toast.error("Something went wrong")
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = async () =>{
        const dt=new Date()
        const data={videoId:video.id,videoUrl:video.videoUrl,datatime:dt,caption:video.caption}
        const res= await addHistory(data)
        setShow(true);
    } 


    const handleDrag=(ev,val)=>{
        console.log("draging...");
        console.log(val);
        ev.dataTransfer.setData("video",JSON.stringify(val))
    }


    return (
        <>
            <Card style={cat ? { width: '100%', cursor: 'pointer' } : {width: '18rem'}} className='rounded shadow border mb-3 ms-3' draggable={true} onDragStart={(e)=>{handleDrag(e,video)}}>
                <Card.Img variant="top" onClick={handleShow} src={video.image}/>
                <Card.Body >
                    <Card.Title>{video.caption}</Card.Title>
                    {
                        !cat &&
                        <Button variant="white" onClick={()=>{removeVideo(video.id)}}><i className="fa-solid fa-trash" style={{color: "#ff0000",}} /></Button>
                    }
                </Card.Body>
            </Card>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{video.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <iframe width="100%" height="315" src={video.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default VideoCard
