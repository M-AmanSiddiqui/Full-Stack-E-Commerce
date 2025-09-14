import React from 'react'
import Footer from '../Common/Footer'
import Header from '../Common/Header'
import { Outlet } from 'react-router-dom'
export default function UserLayout() {
  return (
    <>
    {/* Header */}
    <Header />
    {/* Main content  */}
    <main><Outlet /></main>
    {/* Footer */}
    <Footer />
    </>
  )
}
