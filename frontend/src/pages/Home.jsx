import React from 'react'
import Banner from '../components/Banner'
import Category from '../components/Category'
import TopDishes from '../components/TopDishes'
import AppDownload from '../components/AppDownload'

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <TopDishes />
      <AppDownload />
    </div>
  )
}

export default Home
