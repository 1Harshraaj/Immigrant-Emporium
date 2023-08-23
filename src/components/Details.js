import React from 'react'
import main from "../icon/main.svg"
import { Col, Row } from 'antd';
import Derasar from "../icon/mandir1.png"
import JAGANATH from "../icon/mandir2.png"
import Bhuddha from "../icon/mandir3'.png"
import Chruch from "../icon/mandir4.png"
import Sikh from "../icon/mandir5.png"
import Jain from "../icon/mandir6.png"
import MAP1P1 from "../icon/MAINLINE-NS.png"
import MAP2 from "../icon/CROSSTOWN.png"
import MAP3 from "../icon/3M MEMORIAL.png"
import MAP4 from "../icon/EDWARD.png"
import RoyalPan from "../icon/RoyalPan.png"
import Montanas from "../icon/Montanas.png"
import IndianBistro from "../icon/IndianBistro.png"
import MasalGrill from "../icon/MasalGrill.png"
import Wallmart from "../icon/Wallmart.png"
import Dolarama from "../icon/Dolarama.png"
import Staples from "../icon/Staples.png"
import CIBC from "../icon/CIBC.png"
import Scotiabank from "../icon/Scotiabank.png"

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import { useNavigate, useParams } from 'react-router-dom';

const Main2 = () => {
    const navigate = useNavigate();
    const params = useParams();

    return (
        <>
            {params?.id === "temple" &&
                <div>
                    <Row style={{ Padding: "2% 20%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }}
                                onClick={() => navigate(`/${params?.id}/baps`)}
                            >

                                <img src={Derasar} alt={"Derasar"} width="70%" />

                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                    Vedic Culture
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/sikh`)}>
                                <img src={Sikh} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                The Gurudwara Project (Sikh Community Thunder Bay)
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/jain`)}>
                                <img src={Jain} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                Thunder Bay Masjid
                                </div>
                            </div>
                        </Col>
                        {/* <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/derasar`)}>
                                <img src={JAGANATH} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                    JAGANATH MANDIR
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/derasar`)}>
                                <img src={Bhuddha} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                    Bhuddha Temple
                                </div>
                            </div>
                        </Col> */}
                    </Row>
                    {/* <Row style={{ Padding: "2% 20%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/derasar`)}>
                                <img src={Chruch} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                    Chruch
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/derasar`)}>
                                <img src={Sikh} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                    Sikh Temple
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/derasar`)}>
                                <img src={Jain} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                    Jain Mandir
                                </div>
                            </div>
                        </Col>
                    </Row> */}
                </div>
            }

            {params?.id === "food" &&
                <div>
                    <Row style={{ Padding: "2% 20%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }}
                                onClick={() => navigate(`/${params?.id}/Royal Pan`)}
                            >
                                <img src={RoyalPan} alt={"Derasar"} width="70%" />

                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                Royal Pan
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/montanas`)}>
                                <img src={Montanas} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                Montanas
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/indian bistro`)}>
                                <img src={IndianBistro} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                Indian Bistro
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ Padding: "2% 20%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/masal grill`)}>
                                <img src={MasalGrill} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                Masal Grill
                                </div>
                            </div>
                        </Col>
                        {/* <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/derasar`)}>
                                <img src={Sikh} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                    Sikh Temple
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/derasar`)}>
                                <img src={Jain} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                    Jain Mandir
                                </div>
                            </div>
                        </Col> */}
                    </Row>
                </div>
            }

            {params?.id === "transporter" &&
                <div>
                    <Row style={{ Padding: "2% 20%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }}
                                onClick={() => navigate(`/${params?.id}/MAINLINE`)}
                            >

                                <img src={MAP1P1} alt={"Derasar"} width="70%" />

                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                    Line 1 Bus
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/CROSSTOWN`)}>
                                <img src={MAP2} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                    Crosstwon 2 Bus
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/3M MEMORIAL`)}>
                                <img src={MAP3} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                    Bus Number M3
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ Padding: "2% 20%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/EDWARD`)}>
                                <img src={MAP4} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                    Tbay Transit
                                </div>
                            </div>
                        </Col>
                        {/* <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/derasar`)}>
                                <img src={Sikh} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                    Sikh Temple
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/derasar`)}>
                                <img src={Jain} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                    Jain Mandir
                                </div>
                            </div>
                        </Col> */}
                    </Row>
                </div>
            }

            {params?.id === "bank" &&
                <div>
                    <Row style={{ Padding: "2% 20%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }}
                                onClick={() => navigate(`/${params?.id}/baps`)}
                            >

                                <img src={CIBC} alt={"Derasar"} width="70%" />

                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                    CIBC
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/derasar`)}>
                                <img src={Scotiabank} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                Scotiabank
                                </div>
                            </div>
                        </Col>
                        {/* <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/derasar`)}>
                                <img src={Bhuddha} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                    Bhuddha Temple
                                </div>
                            </div>
                        </Col> */}
                    </Row>
                    {/* <Row style={{ Padding: "2% 20%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/derasar`)}>
                                <img src={Chruch} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                    Food
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/derasar`)}>
                                <img src={Sikh} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                    Sikh Temple
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/derasar`)}>
                                <img src={Jain} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                    Jain Mandir
                                </div>
                            </div>
                        </Col>
                    </Row> */}
                </div>
            }

            {params?.id === "shopping" &&
                <div>
                    <Row style={{ Padding: "2% 20%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }}
                                onClick={() => navigate(`/${params?.id}/wallmart`)}
                            >

                                <img src={Wallmart} alt={"Derasar"} width="70%" />

                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                Wallmart
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/dolarama`)}>
                                <img src={Dolarama} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                Dolarama
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/Staples`)}>
                                <img src={Staples} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                Staples
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* <Row style={{ Padding: "2% 20%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/derasar`)}>
                                <img src={Chruch} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                    Food
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/derasar`)}>
                                <img src={Sikh} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                    Sikh Temple
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/derasar`)}>
                                <img src={Jain} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                    Jain Mandir
                                </div>
                            </div>
                        </Col>
                    </Row> */}
                </div>
            }

            {params?.id === "licence" &&
                <div>

                    <Row style={{ Padding: "2% 20%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                    
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }}
                            >
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                Whatsapp Link:
                                </div>
                                <div style={{
                            }}>
                                <button className='button' onClick={() => window.open("https://chat.whatsapp.com/DPA1TvjPblT7B7hRebCWXH", "_blank")}>Group1<ArrowRightAltIcon /></button>
                                
                            </div>
                                <button className='button' onClick={()=> window.open("https://chat.whatsapp.com/LQ1yXVaeoPLBKWd7bCIQNA", "_blank")}>Group2<ArrowRightAltIcon /></button>
                                <button className='button' onClick={()=> window.open("https://chat.whatsapp.com/LuJ5Z7uirYmBtHceRfTT79", "_blank")}>Group3<ArrowRightAltIcon /></button>
                                <button className='button' onClick={()=> window.open("https://chat.whatsapp.com/DzmmFfzcOMe8uFrAzIyinn", "_blank")}>Ride Group1<ArrowRightAltIcon /></button>
                                <button className='button' onClick={()=> window.open("https://chat.whatsapp.com/CwDRln45RvmCkqUxJ6qKwe", "_blank")}>Ride Group2<ArrowRightAltIcon /></button>
                                <button className='button' onClick={()=> window.open("https://chat.whatsapp.com/JtrnClzIUVo00IM8uHwtya", "_blank")}>Ride Group3<ArrowRightAltIcon /></button>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }}
                            >
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                Youtube Vlogs About Thunder Bay 
                                </div>
                                <div style={{
                            }}>
                                <button className='button' onClick={() => window.open("https://www.youtube.com/@HeetinWest/featured", "_blank")}>Youtube Vlogs<ArrowRightAltIcon /></button>
                                
                            </div>
                            </div>
                        </Col>
                        {/* <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/derasar`)}>
                                <img src={JAGANATH} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                    Transporter
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/derasar`)}>
                                <img src={Bhuddha} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                    Bhuddha Temple
                                </div>
                            </div>
                        </Col> */}
                    </Row>
                    {/* <Row style={{ Padding: "2% 20%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/derasar`)}>
                                <img src={Chruch} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                    Food
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/derasar`)}>
                                <img src={Sikh} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                    Sikh Temple
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                alignContent: "center",
                                alignItems: "center",
                            }} onClick={() => navigate(`/${params?.id}/derasar`)}>
                                <img src={Jain} alt={"Derasar"} width="70%" />
                                <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                                    Jain Mandir
                                </div>
                            </div>
                        </Col>
                    </Row> */}
                </div>
            }

        </>
    )
}

export default Main2