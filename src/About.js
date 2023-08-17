import React from 'react'
import aboutUsImage from "./icon/about.png"
import { Row, Col } from "antd"
const About = () => {
  return (
    <Row >
      <Col xs={24} sm={24} md={12} lg={12} >
        <div style={{
          fontSize: "64px",
          fontWeight: 700,
          textAlign: "center",
        }}>
          About Us
        </div>
        <div
          style={{
            //   position: "absolute",
            //   top: "235px",
            //   left: "90px",
            fontSize: "20px",
            fontWeight: "600",
            textAlign: "center",
            //   display: "inline-block",
            //   width: "664px",
          }}
        >
          <p style={{ marginLeft: "25px" }}>
          <div>Fill Information Gap: The website aims to address the lack of easily accessible and comprehensive information about dining establishments, shopping centres, spiritual sites, shopping, driving tests, banks, WhatsApp groups, licences for jobs, grocery stores, bus transportation systems, liquor and weed shops with rules and regulations, licence rules, danger zones and nightlife ,Life preparation resources in the form of pdfs, and YouTube channels for explorations all on one platform.[Another field maybe added or some would be removed depending on work] For new immigrant commerce. By providing this information in one centralized platform, the website can bridge the information gap and empower newcomers with  the knowledge they need to navigate the commerce landscape.</div>
          <div>-------</div>
          <div>Support Integration: The website aims to support the successful integration of new immigrants into the local community by providing them with resources and support related to starting businesses or finding employment in the commerce sector. By facilitating their entry into the local economy, the website can contribute to their overall integration and economic.</div>
          </p>

        </div>
      </Col>

      <Col xs={24} sm={24} md={12} lg={12} >
        <img
          style={{
            //   position: "absolute",
            //   top: "126px",
            //   left: "721px",
            width: "100%",
            height: "386px",
            //   objectFit: "cover",
          }}
          alt=""
          src={aboutUsImage}
        />
      </Col>

    </Row >
  )
}

export default About