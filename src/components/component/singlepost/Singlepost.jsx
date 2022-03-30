import React from 'react'
import {AiFillEdit} from 'react-icons/ai'
import {BsTrashFill} from 'react-icons/bs'

export default function Singlepost() {
  return (
    <div className="container container_singlepost">
        <div className="singlepost_wrapper">
          <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" className="singlepost_image" />
          <h1 className="singlepost_title">Lorem ipsum dolor sit amet.
            <div className="singlepost_edit">
              <AiFillEdit className='singlepost_icon'/>
              <BsTrashFill className='singlepost_icon' />
            </div>
          </h1>
          <div className="singlepost_info">
            <span className='singlepost_author'>Author : <b>Safak</b></span>
            <span className='singlepost_date'>1 hour ago</span>
          </div>
            <p className='singlepost_desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quos enim in ipsam deleniti quidem quas voluptatibus, aliquam quisquam aperiam unde dolorum expedita, esse, rerum distinctio! Sed quisquam at aut.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quos enim in ipsam deleniti quidem quas voluptatibus, aliquam quisquam aperiam unde dolorum expedita, esse, rerum distinctio! Sed quisquam at aut.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quos enim in ipsam deleniti quidem quas voluptatibus, aliquam quisquam aperiam unde dolorum expedita, esse, rerum distinctio! Sed quisquam at aut.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quos enim in ipsam deleniti quidem quas voluptatibus, aliquam quisquam aperiam unde dolorum expedita, esse, rerum distinctio! Sed quisquam at aut.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quos enim in ipsam deleniti quidem quas voluptatibus, aliquam quisquam aperiam unde dolorum expedita, esse, rerum distinctio! Sed quisquam at aut.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quos enim in ipsam deleniti quidem quas voluptatibus, aliquam quisquam aperiam unde dolorum expedita, esse, rerum distinctio! Sed quisquam at aut.</p>
        </div>
    </div>
  )
}
