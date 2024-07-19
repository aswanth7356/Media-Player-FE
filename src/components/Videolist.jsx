import React, { useState } from 'react'
import VideoCard from './VideoCard'
import { getVideo } from '../Services/allApis'
import { useEffect } from 'react'

function Videolist({addRes}) {

  const [videoData, setVideoData] = useState([])
  const [deleteResponse,setDeleteResponse] = useState("")

  useEffect(() => {
    getData()
  }, [addRes,deleteResponse])

  const getData = async () => {
    const videos = await getVideo()
    // console.log(videos.data);
    setVideoData(videos.data)
  }




  return (
    <>
      {
        videoData.length > 0 ?
          <div className='bg-primary p-3 shadow border border-3 rounded row '>
            {videoData.map((item) => (
              <VideoCard video={item} setDel={setDeleteResponse}/>
            ))}
          </div>

          :
          <h1>Videp Not Available</h1>
      }
    </>
  )
}

export default Videolist
