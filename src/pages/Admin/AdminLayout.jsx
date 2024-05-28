import React from 'react'

import { Outlet } from 'react-router-dom'

import Dashboardmenu from '../../Comp/DashboardMenu/Dashboardmenu'
import AdminDashboard from '../../Comp/AdminDashboard/AdminDashboard'

function AdminLayout() {
  return (
    <>
    

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
