import React from 'react'
import './Section.scss'

const Section = (props) => {
  const { title } = props
  return (
    <div className="section">
      <div className="heading">{title}</div>
    </div>
  )
}

export default Section;