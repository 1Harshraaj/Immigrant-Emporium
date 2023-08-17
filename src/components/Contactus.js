import React from 'react';
import Contactusimg from "../icon/contactus.png"
import { Row, Col } from "antd"
import CallIcon from '@mui/icons-material/Call';
import ChatIcon from '@mui/icons-material/Chat';

const Contactus = () => {
    return (
        <>
            <div style={{ height: "30vh", width: "100%", background: "#5D93BA", alignItems: "center" }}>
                <Row>
                    <Col xs={24} sm={24} md={8} lg={8} style={{
                        fontSize: "35px",
                        fontWeight: 400,
                        lineHeight: "42px",
                        letterSpacing: "0em",
                        textAlign: "center",
                        paddingTop: "6%",
                        // placeSelf: "center",
                        paddingLeft: "20%",
                        color: "white"
                    }} >

                        Get in touch

                    </Col>
                    <Col xs={24} sm={24} md={8} lg={10}
                        style={{
                            fontSize: "35px",
                            fontWeight: 700,
                            lineHeight: "42px",
                            letterSpacing: "0em",
                            textAlign: "center",
                            paddingTop: "3%",
                            // placeSelf: "center"
                        }}>
                        Contact Us

                    </Col>
                    <Col xs={24} sm={24} md={8} lg={6} style={{ textAlign: "right" }} >
                        <img src={Contactusimg} alt='contact-us' style={{ height: "30vh", width: "100%" }} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={10} style={{
                        fontSize: "35px",
                        fontWeight: 400,
                        lineHeight: "42px",
                        letterSpacing: "0em",
                        textAlign: "center",
                        marginLeft: "10%",
                        // placeSelf: "center",
                        color: "white"
                    }} >
                        <div className='contactus-box' >
                            <div style={{ color: "black", paddingTop: "5%" }} >
                                <CallIcon style={{ fontSize: "50px" }} />
                            </div>
                            <div style={{
                                color: "black",
                                fontSize: "18px"
                            }}>
                                Call Now
                            </div>
                            <div style={{
                                color: "black",
                                fontSize: "18px",
                                paddingTop: "5%"
                            }}>
                                Just Pick the phone to cantact our member. For any query releated issue
                            </div>
                            <div style={{
                                fontSize: "45px",
                                fontWeight: 700,
                                lineHeight: "54px",
                                letterSpacing: "0em",
                                textAlign: "center",
                                color: "#6C78C3",
                                paddingTop: "3%",
                            }}>
                                +1 (807) 358-2220
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={10} style={{
                        fontSize: "35px",
                        fontWeight: 400,
                        lineHeight: "42px",
                        letterSpacing: "0em",
                        textAlign: "center",

                        // placeSelf: "center",
                        color: "white"
                    }} >
                        <div className='contactus-box' >
                            <div style={{ color: "black", paddingTop: "5%" }} >
                                <ChatIcon style={{ fontSize: "50px" }} />
                            </div>
                            <div style={{
                                color: "black",
                                fontSize: "18px"
                            }}>
                                Mail Now
                                
                            </div>
                            <div style={{
                                color: "black",
                                fontSize: "18px",
                                paddingTop: "5%"
                            }}>
                                Feel free to directly chat with us in using link below for issue or query.
                            </div>
                            <div style={{
                                fontSize: "45px",
                                fontWeight: 700,
                                lineHeight: "54px",
                                letterSpacing: "0em",
                                textAlign: "center",
                                color: "#6C78C3",
                                paddingTop: "3%",
                            }}>
                                harshparmar808@gmail.com
                            </div>
                        </div>
                    </Col>
                </Row>
            </div >
        </>
    )
}

export default Contactus