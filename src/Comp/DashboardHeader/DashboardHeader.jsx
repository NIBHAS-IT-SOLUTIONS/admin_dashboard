import React, { useEffect } from 'react'
import './DashboardHeader.css'

function DashboardHeader() {

    useEffect(()=>{
        let menuicn = document.querySelector(".menuicn"); 
        let nav = document.querySelector(".navcontainer"); 
        
        menuicn.onclick=( () => { 
            nav.classList.toggle("navclose"); 
        })
      },[])

  return (
    <>
    
    
    <header>
    
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

    

</header>
    
    </>
  )
}

export default DashboardHeader
