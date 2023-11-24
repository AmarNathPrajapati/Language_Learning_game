import React, { useEffect, useState } from 'react'
// import { getServerData } from '../helper/helper'
import axios from 'axios'
export default function ResultTable() {

    const [data, setData] = useState([])

    const getFetchData = async() =>{
        const fetchData = await axios.get('http://localhost:8080/api/result');
          setData(fetchData.data);
      }
      useEffect(()=>{
        getFetchData();
      },[])

    // useEffect(() => {
    //     // getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
    //     getServerData(`http://localhost:8080/api/result`, (res) => {
    //         setData(res)
    //     },[])
    // })

  return (
    <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attemps</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
                { !data ?? <div>No Data Found </div>}
                {
                    data.map((v, i) => (
                        <tr className='table-body' key={i}>
                            <td>{v?.username || ''}</td>
                            <td>{v?.attempts || 0}</td>
                            <td>{v?.points || 0}</td>
                            <td>{v?.achived || ""}</td>
                        </tr>
                    ))
                }
                
            </tbody>
        </table>
    </div>
  )
}
