import React from 'react'
import main from "../icon/main.svg"
import { Col, Row } from 'antd';
import Derasar from "../icon/mandir1.png"
import JAGANATH from "../icon/mandir2.png"
import Bhuddha from "../icon/mandir3'.png"
import Chruch from "../icon/mandir4.png"
import Sikh from "../icon/mandir5.png"
import Jain from "../icon/mandir6.png"
import { useNavigate } from 'react-router-dom';

const Main2 = () => {
    const navigate = useNavigate()

    return (
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
                        onClick={() => navigate('/more-details')}
                    >

                        <img src={Derasar} alt={"Derasar"} width="70%" />

                        <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                            Baps Mandir
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
                    }}>
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
                    }}>
                        <img src={Bhuddha} alt={"Derasar"} width="70%" />
                        <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                        Bhuddha Temple
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
                    }}>
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
                    }}>
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
                    }}>
                        <img src={Jain} alt={"Derasar"} width="70%" />
                        <div style={{ borderTop: "1px solid #6C78C3", borderBottom: "1px solid #6C78C3", padding: 10, fontSize: "24px", fontWeight: 400, margin: 20, width: "69%", textAlign: "center" }}>
                            Jain Mandir
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Main2