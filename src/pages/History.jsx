import React, { useEffect, useState } from 'react'
import { getHistory } from '../Services/allApis'
import { deleteHistory } from '../Services/allApis'


function History() {

  const [viewHistory, setviewHistory] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const result = await getHistory()
    setviewHistory(result.data);
  }

  const deleteHis = async (id) => {
    const res = await deleteHistory(id)
    console.log(res);
    getData()
  }
  return (
    <div className='p-5'>
      <h3 className='MY-5'>WATCH HISTORY</h3>

      {
        viewHistory.length > 0 ?
          <table className='table table-bordered border border-3 shadow'>
            <thead>
              <tr>
                <th>Video ID</th>
                <th>Title</th>
                <th>Video URL</th>
                <th>Date and Time</th>

              </tr>
            </thead>


            <tbody>
              {viewHistory.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.caption}</td>
                  <td>{item.videoUrl}</td>
                  <td>{item.datatime}</td>
                  <td><button className='bg-dark' onClick={() =>{ deleteHis(item.id)}}><i className="fa-solid fa-trash" style={{ color: "#ff0000", }} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
          :
          <h3>No History</h3>
      }


    </div>
  )
}

export default History
