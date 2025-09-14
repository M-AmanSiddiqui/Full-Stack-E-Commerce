import React from 'react'
import Hero from "../Layout/Hero"
import GenderCollectionSection from '../Products/GenderCollectionSection'
import NewArrivals from '../Products/NewArrivals'
 function Home() {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
    </div>
  )
}
export default Home