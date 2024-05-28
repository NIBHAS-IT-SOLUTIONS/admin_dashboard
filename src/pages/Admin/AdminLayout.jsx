import React from 'react'
import AdminNav from '../../components/AdminNavigation/AdminNav'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <>
    <AdminNav/>

    <main>
      <Outlet/>
    </main>
    
    </>
  )
}

export default AdminLayout
