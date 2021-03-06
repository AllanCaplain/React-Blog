import React from 'react'
import Header from '../../header/Header'
import Posts from '../../posts/Posts'
import Sidebar from '../../sidebar/Sidebar'

export default function Home() {
  return (
    <>
        <Header />
        <div className="container container_home">
            <Posts />
            <Sidebar />
        </div>
    </>
  )
}
