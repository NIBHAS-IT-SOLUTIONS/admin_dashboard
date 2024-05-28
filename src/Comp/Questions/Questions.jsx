import React, { useEffect, useState } from 'react'
import './Questions.css'
import { baseURL } from '../../constants/constants'
import axios from 'axios'
import Viewquestions from './Viewquestions'

function Questions() {

  const [enrolls,setEnrolls]=useState([])
  const[selenr,setselenr]=useState('')
  const[classes,setclasses]=useState([])
  const [selclasses,setselclasses]=useState('')
  const[subs,setsubs]=useState([])
  const[question,setQuestion]=useState({

  })

  
  const getEnrolls=async()=>{
    
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
const getClasses=async(e)=>{
  handleChange(e)
console.log(e.target.value);
setselenr(e.target.value)
  try {
    var res = await axios.post(`${baseURL}get_classes_data/`, {
        enroll: e.target.value
    })
     console.log(res.data.success);
     setclasses(res.data.success)
    // setEnr(e.target.value)
    console.log(selenr);

}
catch (err) {
    console.log(err);
}


}
const handleChange=(event)=>{
  const { name, value } = event.target
  setQuestion((prevProps) => ({
      ...prevProps,
      [name]: value
  }));
}
const getsubjects=async(e)=>{
  handleChange(e)
  var classe=e.target.value
  setselclasses(e.target.value)
            try {
                var res = await axios.post(`${baseURL}get_subject_data/`,{
                    enroll:selenr,
                    classes:classe
                })
                //console.log(selenr,classes);
                console.log(res.data.success);
               setsubs(res.data.success)
               // setselenr(e.target.value)
                //setselclass(res.data.success)
    
            }
            catch (err) {
                console.log(err);
            }
}
const handleSubmit=async(event)=>{
 

    event.preventDefault();
    console.log(question);
    var formData = new FormData();
    formData.append('n_enroll', question.n_enroll);
    formData.append('n_classes', question.n_classes);
    formData.append('n_subject', question.n_subject);
    formData.append('n_question_name', question.n_question_name);
    formData.append('n_question', question.n_question);
    formData.append('n_a', question.n_a);
    formData.append('n_b', question.n_b);
    formData.append('n_c', question.n_c);
    formData.append('n_d', question.n_d);
    formData.append('n_answer', question.n_answer);


    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }
   try {
      var res = await axios.post(`${baseURL}add_normal/`,formData)
      console.log(res.data);
  }
  catch (err) {
      console.log(err);
  }
    console.log(formData);
}
  return (
    <>
   
    <div>
      <h1>Questions</h1>
<form onSubmit={handleSubmit} >
  
    <select name="n_enroll" onChange={(e)=>{getClasses(e)}} id="">
    <option value="">Select</option>
    {
      
        enrolls.map((enroll)=>{
          return(
            <option key={enroll} value={enroll}>{enroll}</option>
          )
        })
      } 
   </select><br />
    <select name="n_classes" onChange={(e)=>{getsubjects(e)}} id="">
    <option value="">Select</option>
      {
       
        classes.map((clss)=>{
          return(
            <option value={clss}>{clss}</option>
          )
        })
      }  
    </select><br />

    <select name="n_subject" onChange={(e)=>{handleChange(e)}} id="">

    <option value="">Select</option>
      {
       
        subs.map((sub)=>{
          return(
            <option value={sub}>{sub}</option>
          )
        })
      }

    </select><br />
    <input onChange={(e)=>{handleChange(e)}} name='n_question_name' type='text'/> <br />
    <textarea onChange={(e)=>{handleChange(e)}} name="n_question" id=""></textarea><br />
    <input onChange={(e)=>{handleChange(e)}} name='n_a' type='text'/> <br />
    <input onChange={(e)=>{handleChange(e)}} name='n_b' type='text'/> <br />
    <input onChange={(e)=>{handleChange(e)}} name='n_c' type='text'/> <br />
    <input onChange={(e)=>{handleChange(e)}} name='n_d' type='text'/> <br />
    <select onChange={(e)=>{handleChange(e)}} name="n_answer" id="">
      <option value="">Select</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="D">D</option>
    </select><br />
    <input type="submit" value="Add Question" />
</form>
<Viewquestions/>
</div>
</>
  )
}

export default Questions