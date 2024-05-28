import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { baseURL } from '../../constants/constants'
import { Link } from 'react-router-dom'
import DataTable from 'datatables.net-dt';
import AdminNav from '../AdminNavigation/AdminNav'
//import $ from 'jQuery';

function Subject() {

    const [enrolls, setEnroll] = useState([])
    const [selenr,setselenr]=useState('')
    const [selclass,setselclass]=useState('')
    const [classes,setclasses]=useState([])
    const [getsubj,setgetsub]=useState([])
    const [subject,setSubj]=useState({
        subject:"",
        enroll:"",
        classes:""
    })
    const [subs,setsubs]=useState([])
    
    //let mtable = new DataTable('#myTable');
 
    
    //get_classes_data
    //addsubject

    const getEnrolls = async () => {
        try {
            var res = await axios.get(`${baseURL}get_enroll_data/`)
            console.log(res.data.success);
            setEnroll(res.data.success)

        }
        catch (err) {
            console.log(err);
        }
    }
    const getsubs = async () => {
        try {
            var res = await axios.get(`${baseURL}get_all_table/`)
          //  console.log(res.data);
            setsubs(Object.values(res.data))

        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getsubs()
       
       getEnrolls()
       
    }, [])
    //console.log(subs);
    const handleSubmit= async(event)=>{
        event.preventDefault()
        console.log(subject);
        try {
            var res = await axios.post(`${baseURL}addsubject/`, {
                subject:subject.subject,
                enroll:subject.enroll,
                classes:subject.classes
                
            })
            console.log(res.data);
        }
        catch (err) {
            console.log(err);
        }
        getsubs()
    }
    const handleChange=(event)=>{
        const {name,value}=event.target
        setSubj((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
     }
     const handleselect=async(e)=>{
        
        const {name,value}=e.target
        setSubj((prevProps) => ({
           ...prevProps,
           [name]: value
         }));
         //console.log(e.target.value);
        try {
            var res = await axios.post(`${baseURL}get_classes_data/`,{
                enroll:e.target.value
            })
            console.log(res.data.success);
            setclasses(res.data.success)

        }
        catch (err) {
            console.log(err);
        }

     }
    const handleselenroll=async(e)=>
        {
           
            console.log(e.target.value);
            try {
                var res = await axios.post(`${baseURL}get_classes_data/`,{
                    enroll:e.target.value
                })
                console.log(res.data.success);
                setselenr(e.target.value)
                setclasses(res.data.success)
    
            }
            catch (err) {
                console.log(err);
            }
        }
        const handleselclass=async(e)=>{
            setselclass(e.target.value);
            var classes=e.target.value
            try {
                var res = await axios.post(`${baseURL}get_subject_data/`,{
                    enroll:selenr,
                    classes:classes
                })
                console.log(res.data.success);
                setgetsub(res.data.success)
               // setselenr(e.target.value)
                //setselclass(res.data.success)
    
            }
            catch (err) {
                console.log(err);
            }
        }
     const deleteSub=async(...sub)=>{
        // console.log(sub[0]);
        // console.log(sub[1]);
        // console.log(sub[2]);
        try {
            var res = await axios.post(`${baseURL}delete_subject/`,{
                subject:sub[2],
                enroll:sub[0],
                classes:sub[1]
            })
            console.log(res.data.success);
          

        }
        catch (err) {
            console.log(err);
        }
        getsubs()
    }//delete_sub
     

  return (
    <>
  
    <div> <form onSubmit={handleSubmit}  >
    <input required type="text" onChange={(e)=>handleChange(e)}  name='subject' />
    <select required name="enroll" onChange={(e)=>handleselect(e)} id="" >
        <option  value="">select</option>
        {
            enrolls.map((enroll) => {
                return (
                    <option value={enroll}>{enroll}</option>
                )
            })
        }

    </select>
    <select required name="classes"  onChange={(e)=>handleChange(e)}  id="" >
        <option  value="">select</option>
        {
            classes.map((classes) => {
                return (
                    <option value={classes}>{classes}</option>
                )
            })
        }

    </select>
    <button type='submit' >
        Add Subject
    </button>
</form>

<h1>Subjects</h1>
{/* <select required name="enroll" onChange={(e)=>handleselenroll(e)} id="" >
        <option  value="">select</option>
        {
            enrolls.map((enroll) => {
                return (
                    <option value={enroll}>{enroll}</option>
                )
            })
        }

    </select>
    <select required name="classes"  onChange={(e)=>handleselclass(e)}  id="" >
        <option  value="">select</option>
        {
            classes.map((classes) => {
                return (
                    <option value={classes}>{classes}</option>
                )
            })
        }

    </select> */}
    <mytable>

    </mytable>
    <table id='myTable'>
        <tr>
            <th>
                Enroll
            </th>
            <th>
                Class
            </th>
            <th>
                Subject
            </th>
            <th>
                Action
            </th>
            </tr>

            {
                subs.map((sub)=>{
                  //  console.log(sub[1]);
                    return(
                        <tr>
                        <td>{sub[0]}</td>
                        <td>{sub[1]}</td>
                        <td>{sub[2]}</td>
                        <td> <Link onClick={()=>{deleteSub(sub[0],sub[1],sub[2])}}> Delete </Link></td>
                    </tr>
                    )
                })
            }

    </table>
     {/* <table >
  <tr>
    <th>Enrolls</th>
    <th>options</th>
  </tr>
  {
    
        getsubj.map((sub)=>{
            return(
             <tr>
             <td>{sub}</td>
             <td> 
                 {/* <Link to=""> Edit </Link> */}
{/*                 
                 <Link onClick={()=>{deleteSub(sub)}}> Delete </Link>
                 
             </td>
             </tr>
            )
         })
    }
   
  


</table>  */} 
</div>
</>

  )
}

export default Subject