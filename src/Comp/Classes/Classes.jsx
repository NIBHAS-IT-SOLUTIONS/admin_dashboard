import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseURL } from '../../constants/constants'
import { Link } from 'react-router-dom'
import './Classes.css'

function Classes() {

    const [enrolls, setEnroll] = useState([])
    const [selenr, setEnr] = useState([])

    const [classe, setClasse] = useState([])
    const [classes, setclasses] = useState({

        classes: "",
        enroll: ""

    })
    const handleChange = (event) => {
        const { name, value } = event.target
        setclasses((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    }
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
    const getClasses = async (e) => {
        try {
            var res = await axios.post(`${baseURL}get_classes_data/`, {
                enroll: e.target.value
            })
            console.log(res.data.success);
            setClasse(res.data.success)

        }
        catch (err) {
            console.log(err);
        }

    }
    useEffect(() => {

        getEnrolls()
    }, [])
    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(classes);
        try {
            var res = await axios.post(`${baseURL}addclass/`, {
                classes: classes.classes,
                enroll: classes.enroll
            })
            console.log(res.data);
        }
        catch (err) {
            console.log(err);
        }
    }
    const handleselect = async (e) => {


        //console.log(e.target.value);
        try {
            var res = await axios.post(`${baseURL}get_classes_data/`, {
                enroll: e.target.value
            })
            console.log(res.data.success);
            setClasse(res.data.success)
            setEnr(e.target.value)
            console.log(selenr);

        }
        catch (err) {
            console.log(err);
        }

    }
    const deleteUser = async (clas) => {
        var result = window.confirm("Are you sure to delete?");
        if (result) {
            try {
                var res = await axios.post(`${baseURL}delete_classes/`, {
                    enroll: selenr,
                    classes: clas
                })
                console.log(res.data);

            }
            catch (err) {
                console.log(err);
            }
        }

        console.log(selenr);
    }
    return (
        <>

            <div className='classes'>


                <form className='classform' onSubmit={handleSubmit}  >
                    <input required placeholder='Enter Class' type="text" onChange={(e) => handleChange(e)} name='classes' />
                    <select required name="enroll" onChange={(e) => handleChange(e)} id="" >
                        <option value="">Select Enroll Type</option>
                        {
                            enrolls.map((enroll) => {
                                return (
                                    <option value={enroll}>{enroll}</option>
                                )
                            })
                        }

                    </select>

                    {/*  */}


                    <button className='class-btn' type='submit' >
                        Add Class
                    </button>
                </form>




                <div className="table-data">

                    <h1 className='class-heading'>
                        Classes
                    </h1>

                    <select className='table-select' required name="enroll1" onChange={(e) => handleselect(e)} id="" >
                        <option value="">select</option>
                        {
                            enrolls.map((enroll) => {
                                return (
                                    <option value={enroll}>{enroll}</option>
                                )
                            })
                        }

                    </select>

                    <table >
                        <tr>
                            <th>Classes</th>
                            <th>options</th>
                        </tr>
                        {
                            classe.map((clas) => {
                                return (
                                    <tr>
                                        <td>{clas}</td>
                                        <td>
                                            {/* <Link to=""> Edit </Link> */}

                                            <Link onClick={() => { deleteUser(clas) }}> Delete </Link>

                                        </td>
                                    </tr>
                                )
                            })
                        }


                    </table>
                </div>

            </div>
        </>
    )
}

export default Classes