import React, { useEffect, useState } from 'react'
import './Enrolls.css'
import axios from 'axios'
import { baseURL } from '../../constants/constants'
import { Link } from 'react-router-dom'
import AdminNav from '../AdminNavigation/AdminNav'

function Enrolls() {

    const [enroll,setEnroll]=useState("")
    const [enrolls,setEnrolls]=useState([])
    const handleSubmit=async(event)=>{
        event.preventDefault()
        console.log(enroll);
        try{
         var res=await axios.post(`${baseURL}addenroll/`,{enroll})
            console.log(res.data);
        }
        catch(err){
            console.log(err);
        }
        getEnrolls()
     }
     const getEnrolls = async () => {
        try {
            var res = await axios.get(`${baseURL}get_enroll_data/`)
            console.log(res.data.success);
            setEnrolls(res.data.success)

        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getEnrolls()
    }, [])
    console.log(enrolls);
    const deleteUser=async(enroll)=>{
        console.log(enroll);
        var result = window.confirm("Are you sure to delete?");
        if(result){
        try{
          var  res= await axios.post(`${baseURL}delete_enroll/`,{enroll})
           console.log(res.data);
            getEnrolls()
          }
          catch(err){
console.log(err);
          }
    }
        
    }
  return (
  <>
  
       
       <form onSubmit={handleSubmit}>
            <input type='text' name='enroll'onChange={(e)=>{setEnroll(e.target.value)}} value={enroll} />
            <br />
            <button type='submit' >
							Add enroll
						</button>
       </form>
    

       <table >
  <tr>
    <th>Enrolls</th>
    <th>options</th>
  </tr>
  {
    enrolls.map((enr)=>{
       return(
        <tr>
        <td>{enr}</td>
        <td> 
            {/* <Link to=""> Edit </Link> */}
           
            <Link onClick={()=>{deleteUser(enr)}}> Delete </Link>
            
        </td>
        </tr>
       )
    })
  }


</table>
    </>

  )
}

export default Enrolls