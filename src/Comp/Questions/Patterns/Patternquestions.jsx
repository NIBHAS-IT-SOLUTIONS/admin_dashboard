import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { baseURL } from '../../../constants/constants';
import './Patternquestions.css'
import { Link } from 'react-router-dom';

function Patternquestions() {
 const[pkeys,setpkeys]=useState([])
 const [selkey,setselkeys]=useState('')
 const [image,setimage]=useState('')
 const [mods,setmods]=useState([])
 const [qid,setqid]=useState([])
 const[pquestion,setPquestion]=useState([])
  const getqtype=async()=>{
    try{
        var res=await axios.get(`${baseURL}get_keyword_pattern/`)
        console.log(res.data.keys);
        setpkeys(res.data.keys)
    }
    catch(err){

    }
  }
  useEffect(()=>{
    getqtype()
  },[])
  const selKeys=async(e)=>{
    var enroll_type=e.target.value
    setselkeys(e.target.value)
    try{
      var res=await axios.post(`${baseURL}get_pattern_modules/`,{enroll_type})
      console.log(res.data);
      const data=Object.values(res.data);
      console.log(data);
      setmods(data)
     // setimage(res.data.image)
      //<img src={`data:image/jpeg;base64,${encodedString}`} alt="Base64 Image" />
    }
    catch(err){
      console.log(err);
    }
  }

  const selmods=async(e)=>{
    var keyword=selkey
    var q_name=e.target.value
    try{
      var res = await axios.post(`${baseURL}get_pattern_qid/`, { keyword,q_name })
      console.log(res.data.normal_questions);
      setqid(res.data.normal_questions)
    }
    catch(err){

    }
  }
  const showquestions=async(qid)=>{
    var key=qid
    try{
      var res=await axios.post(`${baseURL}get_pattern/`,{key})
      console.log(res.data);
      setPquestion(res.data)
      //setShow(true)
    }
    catch(err){
      console.log(err);
    }
  }
  const handleDelete=async(qid)=>{
    var key=qid
    try{
      var res= await axios.post(`${baseURL}del_pattern/`,{key})
      console.log(res);
      //selKeys()
    }
    catch(err){
      console.log(err);
    }

  }
  return (
    <div>
      <br /><br />
      <h1>Pattern Questions</h1>
    <select required name="keys" onChange={(e)=>selKeys(e)} id="">
      <option value="">select Enroll Type</option>
      {
        pkeys.map((keys)=>{
          return(
            <option value={keys}>
              {keys}
            </option>
          )
        })
      }

    </select>

    <select name="mods" onChange={(e)=>selmods(e)} id="">
      <option value="">select Module</option>
      {
        mods.map((mod)=>{
          return(
            <option value={mod}>
              {mod}
            </option>
          )
        })
      }

    </select>

    <table >
  <tr>
    <th>Id</th>
    <th>Id</th>
  </tr>
  {
    qid.map((q)=>{
       return(
        <tr>
        <td>{q}</td>
        <td> 
            {/* <Link to=""> Edit </Link> */}
           
            <Link onClick={()=>{showquestions(q)}}> Show </Link>
            
        </td>
        </tr>
       )
    })
  }


</table>


    {/* <img src={`data:image/jpeg;base64,${image}`} alt="Base64 Image" /> */}
    <div className="question-container">
<h2 className="question">{<img width="50" height="50" src={`data:image/jpeg;base64,${pquestion.question_image}`} alt="Base64 Image" />}</h2>
<div className="options">
          <div className="option">
            <input
              type="radio"
              name="option"
              value="sdgsbd"
            />{<img width="50" height="50" src={`data:image/jpeg;base64,${pquestion.a}`} alt="Base64 Image" />}
            <input
              type="radio"
              name="option"
              value="sdgsbd"
            />{<img width="50" height="50" src={`data:image/jpeg;base64,${pquestion.b}`} alt="Base64 Image" />}
            <input
              type="radio"
              name="option"
              value="sdgsbd"
            />{<img width="50" height="50" src={`data:image/jpeg;base64,${pquestion.c}`} alt="Base64 Image" />}
            <input
              type="radio"
              name="option"
              value="sdgsbd"
            />{<img width="50" height="50" src={`data:image/jpeg;base64,${pquestion.d}`} alt="Base64 Image" />}
            
          </div>
      </div>
      <button onClick={()=>{handleDelete(pquestion.qid)}}>Delete</button>
</div>
    </div>

  )
}

export default Patternquestions
