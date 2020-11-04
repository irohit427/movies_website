import React from 'react';
import './BlogCard.scss';

const BlogCard = ({ index, title, description, imgUrl }) => {
  let direction = index % 2 === 0 ? 'row-reverse' : 'row';  
  return (
    <div className='blogCard-container' style={{ flexDirection: direction }}>
      <div className='blogCard-meta'>
        <p className='heading'>
          {title}
        </p>
        <p className='description'>
          {description}
        </p>
        <span><a href='/blog'>Read More</a></span>
      </div>
      <div className='blogCard-banner'>
        <img src={imgUrl} alt='blod card' />
      </div>
    </div>
  )
}

export default BlogCard;
