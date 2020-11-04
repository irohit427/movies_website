import { Col, Image, Row } from 'antd';
import React from 'react'
import './HeroCard.scss'
import getLanguage from '../../helpers/utils/localeMapper';
import Meta from 'antd/lib/card/Meta';

const MovieInfoHeroCard = ({ data }) => {
  return (
    <div>
      <Row className="container">
        <Col span={3} className="poster">
          <Image width={200} src={data.poster_path} />
        </Col>
        <Col className="info-section">
          <Row>
              <div className="title">
                {data.title}
              </div>
          </Row>
          <Row className="info">
            <Col flex={2} className="info-left">
              <div className="metadata">
                <span>Language</span>
                <p>{getLanguage(data.original_language)}</p>
              </div>
              <div className="metadata">
                <span>Release Date</span>
                <p>{data.release_date}</p>
              </div>
              <div className="metadata">
                <span>Runtime</span>
                <p>{data.runtime}</p>
              </div>
            </Col>
            <Col flex={2} className="info-right">
              <div className="metadata">
                <span>Ratings</span>
                <p>{data.vote_average}</p>
              </div>
              <div className="metadata">
                <span>Genre</span>
                <p>{data.genres}</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default MovieInfoHeroCard;