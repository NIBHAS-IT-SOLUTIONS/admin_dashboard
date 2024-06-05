import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { baseURL } from '../../../constants/constants';
import Patternquestions from './Patternquestions'
import './Patterns.css'
import { Link } from 'react-router-dom';


function Patterns() {
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

const onFileChange = (event) => {

    console.log(event.target.files[0]);

    const { name, value } = event.target
    document.getElementById(name).src=URL.createObjectURL(event.target.files[0])
    setQuestion((prevProps) => ({
        ...prevProps,
        [name]:event.target.files[0]
        
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
    formData.append('enroll', question.enroll);
    formData.append('classes', question.classes);
    formData.append('subject', question.subject);
    formData.append('question_name', question.question_name);
    formData.append('question_image', question.question_image);
    formData.append('question', question.question);
    formData.append('a', question.a);
    formData.append('b', question.b);
    formData.append('c', question.c);
    formData.append('d', question.d);
    formData.append('answer', question.answer);


    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
   try {
      var res = await axios.post(`${baseURL}add_pattern/`,formData)
     console.log(res.data);
  }
  catch (err) {
      console.log(err);
  }
   console.log(formData);
}
  return (
    <>
  
    <div className='pattern-container'>
      <br /><br />
        <h1>Patterns</h1>
        <Link to={'/viewpatterns'}>View Added Questions👁️‍🗨️</Link>
        <form className='pattern-form' onSubmit={handleSubmit} >
  
    <select required name="enroll" onChange={(e)=>{getClasses(e)}} id="">
    <option value="">Select Enroll Type</option>
    {
      
        enrolls.map((enroll)=>{
          return(
            <option value={enroll}>{enroll}</option>
          )
        })
      } 
   </select><br />
    <select required name="classes" onChange={(e)=>{getsubjects(e)}} id="">
    <option value="">Select Class</option>
      {
       
        classes.map((clss)=>{
          return(
            <option value={clss}>{clss}</option>
          )
        })
      }  
    </select><br />

    <select required name="subject" onChange={(e)=>{handleChange(e)}} id="">

    <option value="">Select Subject</option>
      {
       
        subs.map((sub)=>{
          return(
            <option value={sub}>{sub}</option>
          )
        })
      }

    </select>
    <br />
    <div className="form-inputs">

   
    <input required placeholder='Enter Question Topic' onChange={(e)=>{handleChange(e)}} name='question_name' type='text'/> <br />
    <input required placeholder='Enter Question' onChange={(e)=>{handleChange(e)}} name='question' type='text'/> <br />

    <img  width="50px" alt="Select Question Image" height="auto" id="question_image"  />
    <input required  onChange={(e)=>{onFileChange(e)}} name='question_image' type='file' accept=".jpg, .jpeg, .png"/> <br />
    
    <img  width="50px" alt="Select Option A" height="auto" id="a"  />
    <input onChange={(e)=>{onFileChange(e)}} name='a' type='file' accept=".jpg, .jpeg, .png"/> <br />

    <img  width="50px" alt="Select Option B" height="auto" id="b"  />
    <input onChange={(e)=>{onFileChange(e)}} name='b' type='file' accept=".jpg, .jpeg, .png"/> <br />

    <img  width="50px" alt="Select Option C " height="auto" id="c"  />
    <input onChange={(e)=>{onFileChange(e)}} name='c' type='file'accept=".jpg, .jpeg, .png"/> <br />

    <img  width="50px" alt="Select Option D" height="auto" id="d"  />
    <input onChange={(e)=>{onFileChange(e)}} name='d' type='file' accept=".jpg, .jpeg, .png"/> <br />

    <select onChange={(e)=>{handleChange(e)}} name="answer" id="">
      <option value="">Select</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="D">D</option>
    </select><br />
    <button className='pattern-btn' type='submit'value="">Add Question</button>
    </div>
</form>

    </div>
    </>
  )
}

export default Patterns
