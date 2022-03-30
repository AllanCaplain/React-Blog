import React from 'react'
import { Link } from 'react-router-dom'

export default function Post({img}) {
  return (
    <div className="container container_post">
        <img className='post_img' src={img} alt="" />
        <div className="post_info">
          <div className="post_cats">
            <span className="post_cat"><Link className="link" to="/posts?cat=Music">Music</Link></span>
            <span className="post_cat"><Link className="link" to="/posts?cat=Life">Life</Link></span>
          </div>
          <span className="post_title"><Link to="/post/abc" className="link">
            Lorem ipsum dolor sit amet
            </Link>
          </span>
          <hr />
          <span className="post_date">1 hour ago</span>
          <p className="post_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo adipisci molestiae dolorum reiciendis porro deserunt. Molestias nihil beatae excepturi tempore dolores, aliquam veritatis quibusdam corrupti minus a illum illo tempora.</p>
        </div>
    </div>
  )
}
