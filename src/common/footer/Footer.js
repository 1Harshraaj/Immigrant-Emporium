import { Col, Row } from 'antd';
import React from 'react'

const Footer = () => {
    const containerStyles = {
        height: "97vh"
    };
    return (
        <div style={containerStyles}>
            <div>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <div style={window.innerWidth <= 768 ? { height: '70vh' } : { height: '90vh' }}>
                            <div className='slogan-title'>
                                <h1 style={{ fontWeight: 900, fontSize: "40px" }} > Find & Hire Perfect
                                    Influencer For your Brand
                                </h1>
                            </div>
                            <div className='slogan-description'>
                                <h6 style={{ fontSize: 16 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</h6>
                            </div>
                            <div className='slogan-description-button'>
                                <span className="grp-button"><button className="brand-button" >Get Started</button></span>
                                <span style={{ color: 'blue' }}>How It Work?</span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <div className='slogan-container'>
                            <img src={"SloganImage"} alt='Slogan' className='slogan-image' />
                        </div>
                    </Col>

                </Row>
            </div >
        </div>
    )
}

export default Footer