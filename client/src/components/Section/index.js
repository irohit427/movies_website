import { Card } from 'antd'
import React, { useState } from 'react'
import Slider from '../Slider';
import { useQuery } from '@apollo/client'
import './Section.scss'
import GET_MOVIES from '../../helpers/queries/getMovies';
import { Link } from 'react-router-dom';

const { Meta } = Card;
const Section = ({title, data}) => {
  return (
    <div className="section">
      <div className="heading">{title}</div>
      <div className="content">
        <div className="carousel-container">
          <div className="carousel-item">
            <Slider>
              {data.map(d => {
                return (
                <div key={d.id} className="child">
                  <Link to={"/info/"+d.id} >
                    <Card hoverable style={{ width: 240 }} cover={<img alt="example" src={d.poster_path} />}>
                      <Meta title={d.title || d.name} />
                    </Card>
                  </Link>
                </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section;