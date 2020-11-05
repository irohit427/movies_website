import { Card, Image } from 'antd'
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
                    <div className="movie-card">
                      <Image preview={false} width={210} height={300} src={d.poster_path} />
                      <div className="movie-meta">
                        <p className="movie-title">{d.title || d.name}</p>
                        <p className="movie-score">{d.vote_average}</p>
                      </div>
                    </div>
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