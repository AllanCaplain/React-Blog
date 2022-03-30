import React from 'react'
import TopBar from './components/component/topbar/TopBar'
import Home from './components/component/pages/home/Home'
import Single from './components/component/pages/single/Single'
import Write from './components/component/pages/write/Write'
import Settings from './components/component/pages/settings/Settings'

const App = () => {
  return (
    <>
      <TopBar />
      <Settings />
    </>
  )
}

export default App