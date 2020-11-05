import { Col, Image, Row } from 'antd';
import React from 'react'
import './TvShowHeroCard.scss'
import getLanguage from '../../helpers/utils/localeMapper';
import getCrew from '../../helpers/utils/getCrew';

const TVShowHeroCard = ({ data }) => {
  return (
    <div>
      <Row className="movieInfoCard-container">
        <Col span={4} className="poster">
          <Image preview={false} width={240} src={data.poster_path} />
        </Col>
        <Col span={20}className="info-section">
          <Row>
              <div className="title">
                {data.name}
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
                <span>Last Air Date</span>
                <p>{data.last_air_date}</p>
              </div>
              <div className="metadata">
                <span>Episode Runtime</span>
                <p>{data.episode_run_time}</p>
              </div>
              <div className="metadata">
                <span>No of Seasons</span>
                <p>{data.number_of_seasons}</p>
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
                <span>Created By</span>
                <p>{data.created_by}</p>
              </div>
              <div className="metadata">
                <span>No of Episodes</span>
                <p>{data.number_of_episodes}</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default TVShowHeroCard;