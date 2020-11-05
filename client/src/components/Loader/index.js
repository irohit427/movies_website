import React from 'react'
import { Spin } from 'antd';
import "antd/dist/antd.css";
import './Loader.scss'

const Loader = () => {
    return (
        <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Spin size="large" />
        </div>
    )
}

export default Loader;