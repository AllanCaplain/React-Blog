import React from 'react'

export default function Header() {
  return (
      <header>
        <div className="container container_header">
            <div className="headertitles">
                <span className='header_title-small'>React & Node</span>
                <span className='header_title-large'>Blog</span>
            </div>
            <img src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className='header_image'/>
        </div>
      </header>
  )
}
