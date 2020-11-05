import { Col, Image, Row } from 'antd';
import React from 'react'
import './MovieHeroCard.scss'
import getLanguage from '../../helpers/utils/localeMapper';
import getCrew from '../../helpers/utils/getCrew';

const MovieInfoHeroCard = ({ data }) => {
  return (
    <div>
      <Row className="movieInfoCard-container">
        <Col span={4} className="poster">
          <Image preview={false} width={240} src={data.poster_path} />
        </Col>
        <Col span={20}className="info-section">
          <Row>
              <div className="title">
                {data.title}
              </div>
          </Row>
          <Row>
            <div className="overview">
              {data.overview}
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
              <div className="metadata">
                <span>Director</span>
                <p>{getCrew(data.movieCredits.crew, 'Director')}</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default MovieInfoHeroCard;