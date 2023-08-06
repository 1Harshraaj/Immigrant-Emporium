import React from 'react'
import aboutUsImage from "/Users/prutheshsmac/Desktop/react/emporium/src/icon/about.png"

const About = () => {
  return (
    <div class="row g-0 text-center">
  <div class="col-sm-6 col-md-8">

  <b
        style={{
          position: "absolute",
          top: "119px",
          left: "277px",
          fontSize: "64px",
        }}
      >
        About Us
      </b>

      <div
        style={{
          position: "absolute",
          top: "235px",
          left: "90px",
          fontSize: "20px",
          fontWeight: "600",
          textAlign: "center",
          display: "inline-block",
          width: "664px",
        }}
      >
        <p style={{ margin: "0" }}>
          Communicate the story of your business and why you started it.
          Describe the customers or the cause that your business serves. Explain
          your business model or how your products are made.
        </p>
        <p style={{ margin: "0" }}>&nbsp;</p>
        <p style={{ margin: "0" }}>
          Communicate the story of your business and why you started it.
          Describe the customers or the cause that your business serves. Explain
          your business model or how your products are made.
        </p>
      </div>

  </div>
  <div class="col-6 col-md-4"> <img
        style={{
          position: "absolute",
          top: "126px",
          left: "721px",
          width: "966px",
          height: "386px",
          objectFit: "cover",
        }}
        alt=""
        src={aboutUsImage}
      /></div>
</div>
  )
}

export default About