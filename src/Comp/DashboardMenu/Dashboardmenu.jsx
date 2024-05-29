import React, { useEffect } from 'react'
import './Dashboardmenu.css'
import { Link } from 'react-router-dom';

function Dashboardmenu() {

    useEffect(()=>{
        // let menuicn = document.querySelector(".menuicn"); 
        // let nav = document.querySelector(".navcontainer"); 
        
        // menuicn.onclick=( () => { 
        //     nav.classList.toggle("navclose"); 
        // })
      },[])
    
  return (
    <>
{/* <header>

<div class="logosec">
    <div class="logo">Edu rainbow dashboard</div>
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
        class="icn menuicn" id="menuicn" alt="menu-icon"/>
</div>

<div class="searchbar">
    <input type="text" placeholder="Search"/>
    <div class="searchbtn">
        <i class="fa fa-search" aria-hidden="true"></i>
    
    </div>
</div>



</header> */}


<div class="navcontainer">
    <nav class="nav">
        <div class="nav-upper-options">

        <Link to='/'>
            <div class="nav-option option3">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                    class="nav-img" alt="dashboard"/>
                <h3> Dashboard</h3>
            </div>
        </Link>
            

            <Link to='/enrolls'>
                <div class="option2 nav-option">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
                    class="nav-img" alt="articles"/>
                <h3> Enrolls</h3>
            </div>
            </Link>
            <Link to='/classes'>
            <div class="nav-option option3">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
                    class="nav-img" alt="report"/>
                <h3> Classes</h3>
            </div>
            </Link>

            <Link to='/subjects'>
            <div class="nav-option option4">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"
                    class="nav-img" alt="institution"/>
                <h3> Subjects</h3>
            </div>
            </Link>
            <Link to='/questions'>
            <div class="nav-option option5">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
                    class="nav-img" alt="blog"/>
                <h3> Normal Questions</h3>
            </div>
            </Link>
            <Link to='/patterns'>
            <div class="nav-option option6">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/4.png"
                    class="nav-img" alt="settings"/>
                <h3> Pattern Questions</h3>
            </div>
            </Link>
            <Link>
            <div class="nav-option logout">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                    class="nav-img" alt="logout"/>
                <h3>Logout</h3>
            </div>
            </Link>
        </div>
    </nav>
</div>


    </>
  )
}

export default Dashboardmenu
