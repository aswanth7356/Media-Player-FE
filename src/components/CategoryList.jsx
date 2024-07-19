import React, { useEffect, useState } from 'react'
import { getCategory, getSpecificCategory, updateCategory } from '../Services/allApis'
import { toast } from 'react-toastify'
import { deleteCategory } from '../Services/allApis'
import VideoCard from './VideoCard'


function CategoryList(addres) {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    getData()
  }, [addres])

  const getData = async () => {
    const cat = await getCategory()
    setCategories(cat.data);
  }


  const deleteCat = async (id) => {
    const res = await deleteCategory(id)
    console.log(res);
    if (res.status == 200) {
      toast.success("Category Removed!!")
      getData()
    }
    else {
      toast.error("Something Went Wrong!!")
    }
  }


  const dragOver = (ev) => {
    ev.preventDefault()
    console.log("dragging Over");
  }

  const handleDrop = async (ev, val) => {
    ev.preventDefault()
    console.log("dropping..");
    // console.log(val);
    const catId = val
    const data = JSON.parse(ev.dataTransfer.getData("video"))
    console.log(data);

    const res = await getSpecificCategory(catId)
    const category = res.data
    category.catVideos.push(data)
    console.log(category);
    const resp = await updateCategory(catId, category)
    console.log(resp);
    if (resp.status == 200) {
      toast.success("Video Added To Category!!")
      getData()
    }
    else {
      toast.warning("Video Added To Category Failed!!")
    }

  }

  return (
    <>
      <div className='w-100 border p-2 shadow bg-secondary mt-3 '>
        {
          categories.length > 0 ?

            <div>
              {categories.map(item => (
                <div className='border bg-white border-3 shadow p-3  mb-5' onDragOver={(e) => { dragOver(e) }} onDrop={(e) => { handleDrop(e, item.id) }}>
                  <div className='d-flex justify-content-between'>
                    <h4 className='text-black'>{item.catName}</h4>
                    <button className='btn' onClick={() => deleteCat(item.id)}><i className="fa-solid fa-trash" style={{ color: "#ff0000", }} /></button>
                  </div>

                  {
                    item.catVideos.length > 0 &&
                    <div className='mt-3 p-3 border border-3 shadow'>
                      {
                        item.catVideos.map((vid)=>(
                          <VideoCard video={vid} cat={true}/>
                        ))
                      }
                    </div>
                  }

                </div>
              ))}
            </div>

            :
            <h5>Category Not Available!!</h5>
        }

      </div>
    </>
  )
}

export default CategoryList
