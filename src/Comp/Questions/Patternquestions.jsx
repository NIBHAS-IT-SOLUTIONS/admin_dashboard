import React, { useEffect, useState } from 'react'
import { baseURL } from '../../constants/constants';
import axios from 'axios';

function Patternquestions() {
 const[pkeys,setpkeys]=useState([])
 const [image,setimage]=useState('')
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
    var key=1 //e.target.value
    try{
      var res=await axios.post(`${baseURL}get_pattern/`,{key})
      console.log(res.data);
      setPquestion(res.data)
     // setimage(res.data.image)
      //<img src={`data:image/jpeg;base64,${encodedString}`} alt="Base64 Image" />
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <div>
      <h1>Pattern Questions</h1>
    <select name="keys" onChange={(e)=>selKeys(e)} id="">
      <option value="">select</option>
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
    {/* <img src={`data:image/jpeg;base64,${image}`} alt="Base64 Image" /> */}
    <div className="question-container">
<h2 className="question">{<img src={`data:image/jpeg;base64,${pquestion.question_image}`} alt="Base64 Image" />}</h2>
<div className="options">
          <div className="option">
            <input
              type="radio"
              name="option"
              value="sdgsbd"
            />{<img src={`data:image/jpeg;base64,${pquestion.a}`} alt="Base64 Image" />}
            <input
              type="radio"
              name="option"
              value="sdgsbd"
            />{<img src={`data:image/jpeg;base64,${pquestion.b}`} alt="Base64 Image" />}
            <input
              type="radio"
              name="option"
              value="sdgsbd"
            />{<img src={`data:image/jpeg;base64,${pquestion.c}`} alt="Base64 Image" />}
            <input
              type="radio"
              name="option"
              value="sdgsbd"
            />{<img src={`data:image/jpeg;base64,${pquestion.d}`} alt="Base64 Image" />}
            
          </div>
      </div>

</div>
    </div>

  )
}

export default Patternquestions
