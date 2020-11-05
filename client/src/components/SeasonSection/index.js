import React from 'react'
import './SeasonSection.scss';
import { Image, Tabs } from 'antd';

const SeasonSection = ({data}) => {
  const { TabPane } = Tabs;
  return (
    <div>
      <div className="tvShowInfo-heading">
        Seasons
      </div>
      <div className="card-container">
        <Tabs type="card">
          {
            data.map(d => {
              return (
                <TabPane tab={d.name} key={d.name} className="tab-pane">
                  <div className="seasons-info">
                    <div className="info-left">
                      <Image width={260} src={d.poster_path} />
                    </div>
                    <div className="info-right">
                      <p className="info-heading">
                        {d.name}
                      </p>
                      <div className="overview">
                        <p>{d.overview}</p>
                      </div>
                      <div className="meta-section">
                        <div className="metadata">
                          <span>No of Episodes</span>
                          <p>{d.episode_count}</p>
                        </div>
                        <div className="metadata">
                          <span>Air date</span>
                          <p>{d.air_date}</p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </TabPane>
              )
            })
          }
        </Tabs>
      </div>
    </div>
  )
}

export default SeasonSection;