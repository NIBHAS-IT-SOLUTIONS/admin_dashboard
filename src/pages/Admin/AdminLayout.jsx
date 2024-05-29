import React from 'react'

import { Outlet } from 'react-router-dom'

import Dashboardmenu from '../../Comp/DashboardMenu/Dashboardmenu'
import AdminDashboard from '../../Comp/AdminDashboard/AdminDashboard'
import DashboardHeader from '../../Comp/DashboardHeader/DashboardHeader'

function AdminLayout() {
  return (
    <>
    
    <DashboardHeader/>
    <div class="main-container">
      <Dashboardmenu/>
        <main>
          <Outlet/>
        </main>
    </div>
    </>
  )
}

export default AdminLayout
