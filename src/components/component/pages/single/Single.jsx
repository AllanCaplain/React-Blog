import React from 'react'
import Sidebar from '../../sidebar/Sidebar'
import Singlepost from '../../singlepost/Singlepost'

export default function Single() {
  return (
    <div className="container container_single">
        <Singlepost />
        <Sidebar />
    </div>
  )
}
