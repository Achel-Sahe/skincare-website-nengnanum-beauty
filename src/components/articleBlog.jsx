import React from 'react'

const ArticleBlog = ({ img, title, subtitle, isi }) => {
    return (
      <div className='article-blog-container'><a href="">
          <img src={img} alt={title} />
          <h3 className="sub-title-blog">{subtitle}</h3>
          <div className="title-blog">
              <h2>{title}</h2>
              <h2>›</h2>
          </div>
            <p className="isi-blog">{isi}</p>
            </a>
    </div>
  )
}

export default ArticleBlog