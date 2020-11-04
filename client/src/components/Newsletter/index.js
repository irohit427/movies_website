import React from 'react'
import { Input, Button } from 'antd';
import './Newsletter.scss'
const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-brand">
        <img src={window.location.origin + '/assets/images/Newsletter.svg'} alt="newsletter-brand"/>
      </div>
      <div className="newletter-form">
        <p>Subscribe to our newsletter</p>
        <div className="newsletter-input">
          <Input placeholder="Enter Email" style={{ width: '200px', marginRight: '8px'}}/>
          <Button type="primary"
            style={{ background: "#ffab00", border: '#ffab00', borderRadius: '3px', fontWeight: 'bold'}}>
            Sign In
          </Button>
        </div>
        <br/>
        <span>No spam, we promise</span>
      </div>
    </div>
  )
}

export default Newsletter;