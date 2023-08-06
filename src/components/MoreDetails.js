import React from "react";
import mainseen from "../icon/main_seen.png"
import img1 from "../icon/food.png"
import imagebudha from "../icon/temple_seens.png"
import icFood from "../icon/ic_food.png"
import icWifi from "../icon/ic_wifi.png"
import icVideo from "../icon/ic_video.png"
import icfeather from "../icon/ic_feather.png"
import side_seen1 from "../icon/side_seen1.png"
import side_seen2 from "../icon/side_seen2.png"
import side_seen3 from "../icon/side_seen3.png"
import side_seen4 from "../icon/side_seen4.png"
import side_seen5 from "../icon/side_seen5.png"

const MoreDetails = () => {
    return (<>
        <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={mainseen} alt={"mainseen"} style={{ height: "30%", width: "100%" }} />
                </div>
                <div class="carousel-item">
                    <img src={mainseen} alt={"mainseen"} style={{ height: "30%", width: "100%" }} />
                </div>
                <div class="carousel-item">
                    <img src={mainseen} alt={"mainseen"} style={{ height: "30%", width: "100%" }} />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div style={{
            textAlign: "center",
            fontSize: "35px",
            fontWeight: 400,
            lineHeight: "96px",
            letterSpacing: "0em",

        }}>JAGANATH MANDIR</div>



<div style={{display:"flex"}}>
    
<div>
        <div style={{
            fontSize: "48px",
            fontWeight: "600",
            color: "#6c78c3",
            paddingLeft: "5%"
        }}>Best hindu temple in your country</div>
        <div style={{
            lineHeight: "27px",
            fontWeight: "500",
            display: "inline-block",
            paddingLeft: "5%"
        }}>
            A temple is a religious building that's meant for worshipping or
            praying. Hindu temples are typically devoted to one specific god. While
            temples tend to be associated with non-Christian religions like Islam,
            Judaism, and Buddhism, some sects of Orthodox Christianity worship in
            temples as well.
        </div>
        </div>
        <div
            style={{
                display: "inline-block",
                lineHeight: "69px",
                fontWeight: "600",
                width: "80%",
                height: "80%",
            }}
        >
            <img
                style={{
                    top: "0px",
                    left: "0px",
                    borderRadius: "10px",
                    objectFit: "cover",
                }}
                alt=""
                src={imagebudha}
            />
        </div>
        </div>
        <div
        style={{
          backgroundColor: "rgba(108, 120, 195, 0.16)",
          width: "100%",
          height: "130px",
        }}
      >
        <div class="container text-center">
  <div class="row">
    <div class="col">
    <div><img
        style={{
          width: "100px",
          height: "100px",
          overflow: "hidden",
          paddingTop: "2%",
        }}
        alt=""
        src={icFood}
      /> </div>
        Food
    </div>
    <div class="col">
    <div><img
        style={{
          width: "100px",
          height: "100px",
          overflow: "hidden",
          paddingTop: "2%",
        }}
        alt=""
        src={icWifi}
      /> </div>
          Wifi
    </div>
    <div class="col">
    <div><img
        style={{
          width: "100px",
          height: "100px",
          overflow: "hidden",
          paddingTop: "2%",
        }}
        alt=""
        src={icVideo}
      /> </div>
          Movie
    </div>
    <div class="col">
    <div><img
        style={{
          width: "100px",
          height: "100px",
          overflow: "hidden",
          paddingTop: "2%",
        }}
        alt=""
        src={icfeather}
      /> </div>
          Clean Environment
    </div>
  </div>
</div>
      </div>
      <div
        style={{
          fontSize: "48px",
          fontWeight: "600",
          color: "#6c78c3",
          display: "inline-block",
          paddingLeft: "5%"
        }}
      >
        Description
      </div>
      <div style={{
            lineHeight: "27px",
            fontWeight: "500",
            display: "inline-block",
            paddingLeft: "5%"
        }}>
            A temple is a religious building that's meant for worshipping or praying. Hindu temples are typically devoted to one specific god. While temples tend to be associated with non-Christian religions like Islam, Judaism, and Buddhism, some sects of Orthodox Christianity worship in temples as well.
        </div>
        <div class="container text-center">
  <div class="row">
    <div class="col">
    <img
        style={{
          width: "200px",
          height: "200px",
          overflow: "hidden",
          paddingTop: "2%",
        }}
        alt=""
        src={side_seen1}
      /> 
    </div>
    <div class="col">
    <img
        style={{
          width: "200px",
          height: "200px",
          overflow: "hidden",
          paddingTop: "2%",
        }}
        alt=""
        src={side_seen2}
      /> 
    </div>
    <div class="col">
    <img
        style={{
          width: "200px",
          height: "200px",
          overflow: "hidden",
          paddingTop: "2%",
        }}
        alt=""
        src={side_seen3}
      /> 
    </div>
    <div class="col">
    <img
        style={{
          width: "200px",
          height: "200px",
          overflow: "hidden",
          paddingTop: "2%",
        }}
        alt=""
        src={side_seen4}
      /> 
    </div>
    <div class="col">
    <img
        style={{
          width: "200px",
          height: "200px",
          overflow: "hidden",
          paddingTop: "2%",
        }}
        alt=""
        src={side_seen5}
      /> 
    </div>
  </div>
</div>
    </>);
};

export default MoreDetails;