import React from 'react'
import { useQuery } from '@apollo/client'
import TVSHOW_INFO from '../helpers/queries/getTVShowInfo';
import Loader from '../components/Loader';
import TvShowHeroCard from '../components/TvShowHeroCard';
import './MovieInfo.scss'
import { Col, Image, Row } from 'antd';
import SeasonSection from '../components/SeasonSection';
import Section from '../components/Section'

export default function MovieInfo({match}) {
  const id = match.params.id;
  
  const { loading, error, data: tvShowInfo } = useQuery(TVSHOW_INFO, {
        variables: { id }
  });

  if (loading) return <Loader />
  else
    console.log(tvShowInfo)

  return (
    <div className="movieInfo-container">
      <TvShowHeroCard data={tvShowInfo.tvInfo}/>
      {
        tvShowInfo.tvInfo.videos.length > 0 && (
          <div className="trailer-section">
          <div className="movieInfo-heading">
            Trailer
          </div>
          <div className="trailer">
            <iframe title="movie-trailer" width="640" height="400"
              src={tvShowInfo.tvInfo.videos[0].key} >
            </iframe>
          </div>
        </div>
      )}
      <SeasonSection data={tvShowInfo.tvInfo.seasons}/>
      <div className="cast-section">
        <div className="movieInfo-heading">
          Cast
        </div>
        <div className="cast">
          <Row justify="space-between">
          {
            tvShowInfo.tvInfo.tvCredits.cast.map(
              cast => {
                return(
                    <div className="cast-card">
                      <Row>
                        <Col span={7}>
                          <Image preview={false} width={90} height={120} src={cast.profile_path} />
                        </Col>
                        <Col span={17}>
                          <p className="cast-name">{cast.name}</p>
                          <span className="cast-character">{cast.character}</span>
                        </Col>
                      </Row>
                    </div>
                )
              }
            )
          }
          </Row>
        </div>
      </div>
      <Section title="Recommended" data={tvShowInfo.tvInfo.similarTvShows} type="tv" />
    </div>
  )
}
