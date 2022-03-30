import React from 'react'

export default function Post() {
  return (
    <div className="container container_post">
        <img className='post_img' src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
        <div className="post_info">
          <div className="post_cats">
            <div className="post_cat">Music</div>
            <div className="post_cat">Life</div>
          </div>
          <span className="post_title">Lorem ipsum dolor sit amet.</span>
          <hr />
          <span className="post_date">1 hour ago</span>
          <p className="post_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo adipisci molestiae dolorum reiciendis porro deserunt. Molestias nihil beatae excepturi tempore dolores, aliquam veritatis quibusdam corrupti minus a illum illo tempora.</p>
        </div>
    </div>
  )
}
