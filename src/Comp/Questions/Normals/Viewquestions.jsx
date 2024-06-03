import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseURL } from '../../../constants/constants';
import { Link } from 'react-router-dom'
import './Viewquestions.css'

function Viewquestions() {
  const[nkeys,setnkeys]=useState([])
  const[selkey,setselkey]=useState()
  
  const [modu,setmodules]=useState([])
  const [selmod,setselmod]=useState('')
  
  const[qid,setQid]=useState([])

  const[question,setQuestion]=useState([])
  const[show,setShow]=useState(false)
  const getqtype=async()=>{
    try{
        var res=await axios.get(`${baseURL}get_keyword_normal/`)
        console.log(res.data.keys);
        setnkeys(res.data.keys)
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    getqtype()
  },[])
  const selKeys=async(e)=>{
    var enroll_type= e ? e.target.value : selkey
    setselkey(enroll_type)
    try{
      var res=await axios.post(`${baseURL}get_normal_modules/`,{enroll_type})
      console.log(res.data[0]);
      const data=Object.values(res.data);
      setmodules(data)
      // setQid(res.data.normal_questions)
      // setShow(true)
    }
    catch(err){
      console.log(err);
    }
  }
  const showquestions=async(qid)=>{
    var key=qid
    try{
      var res=await axios.post(`${baseURL}get_normal/`,{key})
      console.log(res.data);
      setQuestion(res.data)
      setShow(true)
    }
    catch(err){
      console.log(err);
    }
    console.log(show);
    //Question()
  }
  //{ question, options, selectedOption, onOptionSelect }
  const Question = () => {
    console.log(question);
    return (
      <div className="question-container">
        <h2 className="question">{question}</h2>
        <div className="options">
          
        </div>
      </div>
    );
  };

  const selModules = async (e) => {
      var keyword=selkey
      var q_name=e ? e.target.value : selmod
      setselmod(q_name)
    console.log(q_name,keyword);
    try {
      var res = await axios.post(`${baseURL}get_normal_qid/`, { keyword,q_name })
      console.log(res.data.normal_questions);
      setQid(res.data.normal_questions)
      setShow(true)
    }
    catch (err) {
      console.log(err);
    }

  }
  const handleDelete=async(key)=>{
console.log(key);
console.log(selkey);
var key=key
try{
  var res= await axios.post(`${baseURL}del_normal/`,{key})
  console.log(res);
  selModules()
}
catch(err){
  console.log(err);
}
  }
  return (
    <div>
      <br /><br />
      <h1>Normal Questions</h1>
    <select name="keys" onChange={(e)=>selKeys(e)} id="">
      <option value="">select</option>
      {
        nkeys.map((keys)=>{
          return(
            <option key={keys} value={keys}>
              {keys}
            </option>
          )
        })
      }

    </select>

    <select name="module" onChange={(e)=>selModules(e)} id="">
      <option value="">select</option>
      {
        modu.map((mod)=>{
          return(
            <option key={mod} value={mod}>
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
{show && 

<div className="question-container">
<h2 className="question">{question.question}</h2>
<div className="options">
          <div className="option">
            <input
              type="radio"
              name="option"
              value="sdgsbd"
            />{question.a}
            <input
              type="radio"
              name="option"
              value="sdgsbd"
            />{question.b}
            <input
              type="radio"
              name="option"
              value="sdgsbd"
            />{question.c}
            <input
              type="radio"
              name="option"
              value="sdgsbd"
            />{question.d}
            
          </div>
      </div>
  <button onClick={()=>{handleDelete(question.qid)}}>Delete</button>
</div>


}
    </div>

  )
}

export default Viewquestions