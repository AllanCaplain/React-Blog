import React from 'react'
import {GrAddCircle} from 'react-icons/gr'

export default function Write() {
  return (
    <div className="container container_write">
        <img className='write_img' src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        <form className='write_form'>
          <div className="write_form-group">
            <label htmlFor="fileinput">
              <GrAddCircle className='file_add'/>
            </label>
            <input type="file" id='fileinput' style={{display: "none"}}/>
            <input type="text" placeholder='Title' className='writeinput' autoFocus={true}/>
          </div>
          <div className="write_form-group">
            <textarea placeholder='Tell your story...' type="text" className='writeinput write_text'></textarea>
          </div>
          <button className="write_submit">Publish</button>
        </form>
    </div>
  )
}
