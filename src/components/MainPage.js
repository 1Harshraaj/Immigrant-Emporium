import React from 'react'
import main from "../icon/main.svg"
import { Col, Row } from 'antd';
import Derasar from "../icon/derasar.png"
import Food from "../icon/food.png"
import Transport from "../icon/transport.png"
import Bank from "../icon/bank.png"
import Shopping from "../icon/shopping.png"

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <div>
                <div>
                    <img src={main} alt='main-background' style={{ height: "50%", width: "100%" }} />
                </div>
                <div>
                    <div style={{
                        textAlign: "center",
                        fontSize: "35px",
                        fontWeight: 400,
                        lineHeight: "59px",
                        letterSpacing: "0em",

                    }}>Choose your</div>
                    <div style={{
                        textAlign: "center",
                        fontSize: "45px",
                        fontWeight: 600,
                        letterSpacing: "0em",
                    }}>Perfect Destination</div>
                </div>
                <Row style={{ Padding: "2% 20%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                    <Col xs={24} sm={24} md={10} lg={10} >
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            flexWrap: "wrap",
                            alignContent: "center"
                        }}>
                            <img src={Derasar} alt={"Derasar"} width="70%" />
                            <div style={{
                                // display: "flex", flexDirection: "column",
                                // justifyContent: "center",
                                // flexWrap: "wrap",
                                // alignContent: "space-around"
                            }}>

                                <button className='button' onClick={() => navigate('/temple')}>Temple <ArrowRightAltIcon /></button>
                            </div>
                            <p style={{ width: "35%", marginLeft: 5 }}>The Mandir is open to people of all faiths and backgrounds, all year round. Entry is free.</p>
                        </div>
                    </Col>  <Col xs={24} sm={24} md={10} lg={10} >
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            flexWrap: "wrap",
                            alignContent: "center"
                        }}>
                            <img src={Food} alt={"Food"} width="70%" />
                            <div style={{
                                // display: "flex", flexDirection: "column",
                                // justifyContent: "center",
                                // flexWrap: "wrap",
                                // alignContent: "space-around"
                            }}>
                                <button className='button' onClick={() => navigate('/food')}>Food <ArrowRightAltIcon /></button>
                            </div>
                            <p style={{ width: "35%", marginLeft: 5 }}>The best of dishes are often not solely one-dimensional in flavour. Enjoy your meal</p>
                        </div>
                    </Col>
                </Row>
                <Row style={{ Padding: "2% 20%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                    <Col xs={24} sm={24} md={10} lg={10} >
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            flexWrap: "wrap",
                            alignContent: "center"
                        }}>
                            <img src={Transport} alt={"Transport"} width="70%" />
                            <div style={{
                                // display: "flex", flexDirection: "column",
                                // justifyContent: "center",
                                // flexWrap: "wrap",
                                // alignContent: "space-around"
                            }}>
                                <button className='button' onClick={() => navigate('/transporter')} >Transport <ArrowRightAltIcon /></button>
                            </div>
                            <p style={{ width: "35%", marginLeft: 5 }}>What is public transport? Public transport is a system of transport for passengers.</p>
                        </div>
                    </Col>  <Col xs={24} sm={24} md={10} lg={10} >
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            flexWrap: "wrap",
                            alignContent: "center"
                        }}>
                            <img src={Bank} alt={"Bank"} width="70%" />
                            <div style={{
                                // display: "flex", flexDirection: "column",
                                // justifyContent: "center",
                                // flexWrap: "wrap",
                                // alignContent: "space-around"
                            }}>
                                <button className='button' onClick={() => navigate('/bank')}>Bank <ArrowRightAltIcon /></button>
                            </div>
                            <p style={{ width: "35%", marginLeft: 5 }}>An organization which keeps money safely for its customers; the office or building of such an organization.</p>
                        </div>
                    </Col>
                </Row>
                <Row style={{ Padding: "2% 20%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                    <Col xs={24} sm={24} md={10} lg={10} >
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            flexWrap: "wrap",
                            alignContent: "center"
                        }}>
                            <img src={Shopping} alt={"Shopping"} width="70%" />
                            <div style={{
                                // display: "flex", flexDirection: "column",
                                // justifyContent: "center",
                                // flexWrap: "wrap",
                                // alignContent: "space-around"
                            }}>
                                <button className='button' onClick={() => navigate('/shopping')}>Shopping <ArrowRightAltIcon /></button>
                            </div>
                            <p style={{ width: "35%", marginLeft: 5 }}>Shopping is an activity in which a customer browses the available goods or services.</p>
                        </div>
                    </Col>  <Col xs={24} sm={24} md={10} lg={10} >
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            flexWrap: "wrap",
                            alignContent: "center"
                        }}>
                            <img src={Derasar} alt={"Derasar"} width="70%" />
                            <div style={{
                                // display: "flex", flexDirection: "column",
                                // justifyContent: "center",
                                // flexWrap: "wrap",
                                // alignContent: "space-around"
                            }}>
                                <button className='button' onClick={() => navigate('/licence')}>More <ArrowRightAltIcon /></button>
                            </div>
                            <p style={{ width: "35%", marginLeft: 5 }}>An official page that shows you are allowed to do or have something.</p>
                        </div>
                    </Col>
                </Row>
            </div >
        </>
    )
}

export default MainPage