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
import MAP1P1 from "../icon/MAINLINE-NS.png"
import MAP1P2 from "../icon/MAINLINE-SS.png"
import MAP2 from "../icon/CROSSTOWN.png"
import MAP3 from "../icon/3M MEMORIAL.png"
import MAP4 from "../icon/EDWARD.png"
import { useParams } from "react-router-dom";

const MoreDetails = () => {
  const params = useParams();
  console.log(params, ">>>>");
  return (
    <>
      {params?.id === "temple" && params?.details === "baps" &&
        <>
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

          }}>Vedic Culture</div>
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%",
                paddingRight: "5%"

              }}>Address</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                1600 Dease Street, Thunder Bay, ONP7C 5H4, Canada
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
            paddingLeft: "5%",
            paddingRight: "5%"
          }}>
            The Vedic Cultural Centre (ISKCON) Thunder Bay is a community services project. The Vedic Cultural Center is open to all regardless of race, religion, sex, nationality or economic status.Inspired by the teachings of HDG A.C. Bhaktivedanta Swami Srila Prabhupada, Vedic Cultural Center is dedicated to preserving, practicing, and growing the Vedic tradition for the benefit of younger generation and all people. The Vedas teach that we are all part of one great family with a common origin. Therefore Vedic culture celebrates commonality of all human beings and teaches them to live in harmony with nature by practice of the universal principle of ahimsa or non violence. Another major theme of the Vedas is para upakar: doing good to others.The Vedic cultural center practices respect of all people regardless of race or any other material designation. Education for making enlightened choices in life is the primary goal of the VCC for spreading light and peace in the world.Come and join the fun and be a participating volunteer to grow the VCC for the benefit of our children and future generations.
          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }
      {params?.id === "temple" && params?.details === "derasar" &&
        <>
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

          }}>DERASAR</div>
          <div style={{ display: "flex" }}>

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
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }
      {/* Bhuddha */}
      {params?.id === "temple" && params?.details?.toLowerCase() === "bhuddha" &&
        <>
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

          }}>DERASAR</div>
          <div style={{ display: "flex" }}>

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
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }
      {/* Chruch */}
      {params?.id === "temple" && params?.details?.toLowerCase() === "chruch" &&
        <>
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

          }}>DERASAR</div>
          <div style={{ display: "flex" }}>

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
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }
      {/* Sikh  */}
      {params?.id === "temple" && params?.details?.toLowerCase() === "sikh" &&
        <>
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

          }}>The Gurudwara Project (Sikh Community Thunder Bay)</div>
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Address
              </div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                632 Fort William Rd Unit B, Thunder Bay, ON P7B 2Z9
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
            Sikhism was founded in the 16th century in the Punjab district of what is now India and Pakistan. It was founded by Guru Nanak and is based on his teachings and those of the 9 Sikh gurus who followed him. The Sikh faith began around 1500 CE when Guru Nanak began teaching a faith that was quite distinct from Hinduism and Islam. There are approximately 20 million followers worldwide, most of whom live in the Punjab province of India. Canadian Sikhs number roughly 468,670 people and account for roughly 1.4% of Canada's population. Sikhism is a world religion with over 35 million followers worldwide, with the majority of their population in Punjab, India. The Legislative Assembly of Ontario celebrates the month of April as Sikh Heritage Month. ​ All Sikh Gurus since Guru Nanak have worn turbans. However, covering one's hair with a turban was made an official policy by Guru Gobind Singh, the tenth Guru of the Sikhs. The main reasons to wear a turban is to take care of the hair, promote equality, and preserve the Sikh identity.
          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }
      {/* Jain */}
      {params?.id === "temple" && params?.details?.toLowerCase() === "jain" &&
        <>
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

          }}>Thunder Bay Masjid</div>
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Address</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                591 John St. Thunder Bay, ON. P7B 1Y8
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
            The Mosque is considered to be the community center for Muslims. Better known in Arabic as a Masjid, the mosque represents the nucleus of the Muslim family and community. Daily prayers are offered five times throughout segments of the day.
          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }

      {/* FOR FOOD AND THERE DETAILS */}
      {params?.id === "food" && params?.details === "Royal Pan" &&
        <>
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

          }}>Royal Pan</div>
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Address</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                1186 Memorial Ave Unit 10, Thunder Bay, ON P7B 5K5
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
            ROYAL PAAN® was established first in 2001 due to the fact that the founder wasn’t able to find the authentic Indian version of paan in Canada. After much research and experimentation, the first location was opened in Malton.
          </div><div style={{
            lineHeight: "27px",
            fontWeight: "500",
            display: "inline-block",
            paddingLeft: "5%"
          }}>
            Various milkshakes and falooda kulfi were added as they were also unavailable in Canada in their authentic forms at the time. Today, with our 20 locations in Canada and the USA, ROYAL PAAN® continues to be the only source of true, authentic Paan, Falooda, and milkshakes along with street food delicacies from Mumbai.
          </div>

          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }
      {params?.id === "food" && params?.details === "montanas" &&
        <>
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

          }}>Montanas</div>
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Address</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                615 Sibley Dr Thunder Bay, ONP7B 6Z8
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
            "Montanas BBQ, nestled in the heart of Thunder Bay, is your ultimate destination for mouthwatering barbecue delights. Savor the irresistible smoky flavors as you indulge in a diverse menu featuring succulent ribs, tender pulled pork, and savory brisket, all expertly crafted and grilled to perfection. Our warm and inviting atmosphere, paired with friendly service, ensures a memorable dining experience for every barbecue enthusiast. Come join us at Montanas BBQ and embark on a flavorful journey that will leave your taste buds craving for more."

          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }
      {/* Bhuddha */}
      {params?.id === "food" && params?.details?.toLowerCase() === "indian bistro" &&
        <>
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

          }}>Indian Bistro</div>
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Address</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                250 Red River Road, Thunder Bay, ON P7B 1A6
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
          }}>Krushi`s Indian Bistro Thunder Bay specializes in authentic Indian cuisines. Come over and knock yourself out on our mouth-watering varieties of cuisines and appetizers. Whether it is the lingering taste of our authentic curries or the finest of the tandooris or the world-famous Hyderabadi Dum Biryani.
          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }
      {/* Chruch */}
      {params?.id === "food" && params?.details?.toLowerCase() === "masal grill" &&
        <>
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

          }}>Masal Grill</div>
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Address</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                170 Algoma St N, Thunder Bay, ON P7A 5A1
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
            When you step into Masala Grille, you are engulfed by a wave of mouth-watering aroma, arising from the mixture of spices. The blend of any spices is referred to as a masala. At Masala Grille, we have blended the spices, together with the atmosphere, authentic cuisine and service to offer you a unique dining experience right here in Thunder Bay.Masala Grille pleased to offer you a diverse variety of Indian and Thai cuisine. Whether it be dine-in, take-out or delivery your favourite dishes await you.
          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }
      {/* Sikh  */}
      {params?.id === "food" && params?.details?.toLowerCase() === "sikh" &&
        <>
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

          }}>DERASAR</div>
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Best hindu food in your country</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                A food is a religious building that's meant for worshipping or
                praying. Hindu foods are typically devoted to one specific god. While
                foods tend to be associated with non-Christian religions like Islam,
                Judaism, and Buddhism, some sects of Orthodox Christianity worship in
                foods as well.
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
            A food is a religious building that's meant for worshipping or praying. Hindu foods are typically devoted to one specific god. While foods tend to be associated with non-Christian religions like Islam, Judaism, and Buddhism, some sects of Orthodox Christianity worship in foods as well.
          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }
      {/* Jain */}
      {params?.id === "food" && params?.details?.toLowerCase() === "jain" &&
        <>
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

          }}>DERASAR</div>
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Best hindu food in your country</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                A food is a religious building that's meant for worshipping or
                praying. Hindu foods are typically devoted to one specific god. While
                foods tend to be associated with non-Christian religions like Islam,
                Judaism, and Buddhism, some sects of Orthodox Christianity worship in
                foods as well.
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
            A food is a religious building that's meant for worshipping or praying. Hindu foods are typically devoted to one specific god. While foods tend to be associated with non-Christian religions like Islam, Judaism, and Buddhism, some sects of Orthodox Christianity worship in foods as well.
          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }


      {/* FOR transporter AND THERE DETAILS */}
      {params?.id === "transporter" && params?.details === "MAINLINE" &&
        <>
          <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={MAP1P1} alt={"mainseen"} style={{ height: "30%", width: "100%" }} />
              </div>
              <div class="carousel-item">
                <img src={MAP1P2} alt={"mainseen"} style={{ height: "30%", width: "100%" }} />
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
        </>
      }
      {params?.id === "transporter" && params?.details === "CROSSTOWN" &&
        <>
          <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={MAP2} alt={"mainseen"} style={{ height: "30%", width: "100%" }} />
              </div>
              <div class="carousel-item">
                <img src={MAP2} alt={"mainseen"} style={{ height: "30%", width: "100%" }} />
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
        </>
      }
      {/* Bhuddha */}
      {params?.id === "transporter" && params?.details === "3M MEMORIAL" &&
        <>
          <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={MAP3} alt={"mainseen"} style={{ height: "30%", width: "100%" }} />
              </div>
              <div class="carousel-item">
                <img src={MAP3} alt={"mainseen"} style={{ height: "30%", width: "100%" }} />
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
        </>
      }
      {/* Chruch */}
      {params?.id === "transporter" && params?.details === "EDWARD" &&
        <>
          <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={MAP4} alt={"mainseen"} style={{ height: "30%", width: "100%" }} />
              </div>
              <div class="carousel-item">
                <img src={MAP4} alt={"mainseen"} style={{ height: "30%", width: "100%" }} />
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
        </>
      }
      {/* Sikh  */}
      {params?.id === "transporter" && params?.details?.toLowerCase() === "sikh" &&
        <>
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

          }}>DERASAR</div>
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Best hindu transporter in your country</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                A transporter is a religious building that's meant for worshipping or
                praying. Hindu transporters are typically devoted to one specific god. While
                transporters tend to be associated with non-Christian religions like Islam,
                Judaism, and Buddhism, some sects of Orthodox Christianity worship in
                transporters as well.
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
                  transporter
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
            A transporter is a religious building that's meant for worshipping or praying. Hindu transporters are typically devoted to one specific god. While transporters tend to be associated with non-Christian religions like Islam, Judaism, and Buddhism, some sects of Orthodox Christianity worship in transporters as well.
          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }
      {/* Jain */}
      {params?.id === "transporter" && params?.details?.toLowerCase() === "jain" &&
        <>
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

          }}>DERASAR</div>
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Best hindu transporter in your country</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                A transporter is a religious building that's meant for worshipping or
                praying. Hindu transporters are typically devoted to one specific god. While
                transporters tend to be associated with non-Christian religions like Islam,
                Judaism, and Buddhism, some sects of Orthodox Christianity worship in
                transporters as well.
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
                  transporter
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
            A transporter is a religious building that's meant for worshipping or praying. Hindu transporters are typically devoted to one specific god. While transporters tend to be associated with non-Christian religions like Islam, Judaism, and Buddhism, some sects of Orthodox Christianity worship in transporters as well.
          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }


      {/* FOR bank AND THERE DETAILS */}
      {params?.id === "bank" && params?.details === "baps" &&
        <>
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
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Best hindu bank in your country</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                A bank is a religious building that's meant for worshipping or
                praying. Hindu banks are typically devoted to one specific god. While
                banks tend to be associated with non-Christian religions like Islam,
                Judaism, and Buddhism, some sects of Orthodox Christianity worship in
                banks as well.
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
                  bank
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
            A bank is a religious building that's meant for worshipping or praying. Hindu banks are typically devoted to one specific god. While banks tend to be associated with non-Christian religions like Islam, Judaism, and Buddhism, some sects of Orthodox Christianity worship in banks as well.
          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }
      {params?.id === "bank" && params?.details === "derasar" &&
        <>
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

          }}>DERASAR</div>
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Best hindu bank in your country</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                A bank is a religious building that's meant for worshipping or
                praying. Hindu banks are typically devoted to one specific god. While
                banks tend to be associated with non-Christian religions like Islam,
                Judaism, and Buddhism, some sects of Orthodox Christianity worship in
                banks as well.
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
                  bank
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
            A bank is a religious building that's meant for worshipping or praying. Hindu banks are typically devoted to one specific god. While banks tend to be associated with non-Christian religions like Islam, Judaism, and Buddhism, some sects of Orthodox Christianity worship in banks as well.
          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }
      {/* Bhuddha */}
      {params?.id === "bank" && params?.details?.toLowerCase() === "bhuddha" &&
        <>
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

          }}>DERASAR</div>
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Best hindu bank in your country</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                A bank is a religious building that's meant for worshipping or
                praying. Hindu banks are typically devoted to one specific god. While
                banks tend to be associated with non-Christian religions like Islam,
                Judaism, and Buddhism, some sects of Orthodox Christianity worship in
                banks as well.
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
                  bank
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
            A bank is a religious building that's meant for worshipping or praying. Hindu banks are typically devoted to one specific god. While banks tend to be associated with non-Christian religions like Islam, Judaism, and Buddhism, some sects of Orthodox Christianity worship in banks as well.
          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }
      {/* Chruch */}
      {params?.id === "bank" && params?.details?.toLowerCase() === "chruch" &&
        <>
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

          }}>DERASAR</div>
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Best hindu bank in your country</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                A bank is a religious building that's meant for worshipping or
                praying. Hindu banks are typically devoted to one specific god. While
                banks tend to be associated with non-Christian religions like Islam,
                Judaism, and Buddhism, some sects of Orthodox Christianity worship in
                banks as well.
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
                  bank
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
            A bank is a religious building that's meant for worshipping or praying. Hindu banks are typically devoted to one specific god. While banks tend to be associated with non-Christian religions like Islam, Judaism, and Buddhism, some sects of Orthodox Christianity worship in banks as well.
          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }
      {/* Sikh  */}
      {params?.id === "bank" && params?.details?.toLowerCase() === "sikh" &&
        <>
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

          }}>DERASAR</div>
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Best hindu bank in your country</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                A bank is a religious building that's meant for worshipping or
                praying. Hindu banks are typically devoted to one specific god. While
                banks tend to be associated with non-Christian religions like Islam,
                Judaism, and Buddhism, some sects of Orthodox Christianity worship in
                banks as well.
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
                  bank
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
            A bank is a religious building that's meant for worshipping or praying. Hindu banks are typically devoted to one specific god. While banks tend to be associated with non-Christian religions like Islam, Judaism, and Buddhism, some sects of Orthodox Christianity worship in banks as well.
          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }
      {/* Jain */}
      {params?.id === "bank" && params?.details?.toLowerCase() === "jain" &&
        <>
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

          }}>DERASAR</div>
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Best hindu bank in your country</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                A bank is a religious building that's meant for worshipping or
                praying. Hindu banks are typically devoted to one specific god. While
                banks tend to be associated with non-Christian religions like Islam,
                Judaism, and Buddhism, some sects of Orthodox Christianity worship in
                banks as well.
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
                  bank
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
            A bank is a religious building that's meant for worshipping or praying. Hindu banks are typically devoted to one specific god. While banks tend to be associated with non-Christian religions like Islam, Judaism, and Buddhism, some sects of Orthodox Christianity worship in banks as well.
          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }



      {/* FOR shopping AND THERE DETAILS */}
      {params?.id === "shopping" && params?.details === "wallmart" &&
        <>
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

          }}>Wallmart</div>
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Locations</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                <div>1st</div>
                777 Memorial Ave, Thunder Bay, ON P7B 6S2                
                <div>2nd</div>
                1020 Dawson Rd, Thunder Bay, ON P7B 5V1
                <div>3rd</div>
                1101 Arthur St W, Thunder Bay, ON P7E 5S2                
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
                  shopping
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
            Discover Thunder Bay's Walmart Supercenters – Your One-Stop Shopping Destination!
          </div>
          <div style={{
            lineHeight: "27px",
            fontWeight: "500",
            display: "inline-block",
            paddingLeft: "5%"
          }}>
            Experience unbeatable convenience and a wide array of products at Thunder Bay's Walmart Supercenters. With multiple locations throughout the city, we're here to make your shopping experience truly exceptional.
            <div>Explore Our Offerings:</div>
            <div>Everyday Essentials: Find everything you need for your daily life – from groceries and household items to personal care products and more.</div>
            <div>Fashion & Style: Discover the latest fashion trends and clothing essentials for the entire family, all at affordable prices.</div>
            <div>Electronics & Gadgets: Upgrade your tech game with a vast selection of electronics, from TVs and laptops to smartphones and accessories.</div>
            <div>Home & Living: Spruce up your living space with an extensive range of furniture, home décor, and appliances that suit your taste.
Toys & Entertainment: Delight kids of all ages with our wide collection of toys, games, and entertainment options.
Auto & Hardware: Maintain your vehicle and tackle DIY projects with our automotive and hardware sections.
Pharmacy & Health: Take care of your well-being with our pharmacy services and health products.
Why Choose Walmart:
Value for Money: Enjoy everyday low prices on a diverse range of products.</div>
            <div>Convenience: Multiple locations across Thunder Bay mean you're never far from a Walmart Supercenter.
Quality & Variety: Explore a vast assortment of trusted brands and products across every category.
Customer Service: Our friendly associates are here to assist you and provide exceptional service.</div>
            <div>Shop smarter, save more, and find everything you need under one roof at Thunder Bay's Walmart Supercenters. Your shopping journey starts here!"</div>
            <div>Please note that specific details and offerings may vary by location, so it's recommended to visit the official Walmart website or contact the individual stores for the most up-to-date information.</div>
          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }
      {params?.id === "shopping" && params?.details === "dolarama" &&
        <>
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

          }}>Dolarama</div>
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Locations:</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                <div>1st</div>
                789 Memorial Ave, Thunder Bay, ON P7B 3Z7
                <div>2nd</div>
                2826 Arthur St E, Thunder Bay, ON P7E 5P4
                <div>3rd</div>
                425 Edward St N Northwood Park Plaza, Thunder Bay, ON P7C 4P7
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
                  shopping
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
            Discover Thunder Bay's Dollarama Stores – Your Ultimate Bargain-Hunting Destination!
          </div>
          <div style={{
            lineHeight: "27px",
            fontWeight: "500",
            display: "inline-block",
            paddingLeft: "5%"
          }}>
            Welcome to Dollarama, your go-to destination for incredible deals and unbeatable value in Thunder Bay. With multiple convenient locations throughout the city, we bring you a treasure trove of affordable finds that cater to every need and budget.
          <div>Explore Our Offerings:</div>
          <div>Thrifty Treasures: Uncover a diverse and ever-changing selection of products, from household essentials and party supplies to seasonal decorations and more.
Party & Events: Plan the perfect party without breaking the bank with our extensive range of party supplies, decorations, and tableware.
Home & Organization: Enhance your living space with budget-friendly home décor, storage solutions, and kitchen essentials.
Toys & Crafts: Delight kids and the young at heart with our range of affordable toys, games, and craft supplies.
Health & Beauty: Discover a variety of personal care and beauty products that won't compromise your wallet.
Stationery & Office: Stock up on school supplies, office essentials, and stationery items for work or play.
Seasonal Delights: Embrace every season with themed decorations, gifts, and accessories that add a touch of joy to your life.</div>
          <div>Why Choose Dollarama:</div>
          <div>Unbeatable Prices: Enjoy incredible savings on a wide array of products – every visit is a new treasure hunt!
Variety & Convenience: With multiple locations across Thunder Bay, we're just around the corner for your shopping needs.
Quality Finds: Discover trusted brands and quality products at prices that make you smile.
Customer-Focused: Our friendly staff is always ready to assist you in finding the perfect items for your needs.
</div>
<div>Experience the thrill of discovering amazing deals and hidden gems at Thunder Bay's Dollarama Stores. Start your budget-friendly shopping journey with us today!"
Please note that product availability may vary by location, so it's recommended to visit the official Dollarama website or contact the individual stores for the most up-to-date information.
</div>
          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }
      {/* Bhuddha */}
      {params?.id === "shopping" && params?.details === "Staples" &&
        <>
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

          }}>Staples</div>
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Locations:</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                1st
767 Memorial Ave, Thunder Bay, ON P7B 3Z7
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
                  shopping
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
            Discover Thunder Bay's Staples Stores – Your Ultimate Office and School Supply Destination!
          </div>
          <div style={{
            lineHeight: "27px",
            fontWeight: "500",
            display: "inline-block",
            paddingLeft: "5%"
          }}>
            Welcome to Staples, where convenience, quality, and affordability come together to meet all your office, school, and tech needs in Thunder Bay. With multiple easily accessible locations a
            <div>Explore Our Offerings:</div>
            Office Essentials: Stock up on pens, paper, notebooks, and other essential supplies to keep your workspace organized and efficient.
School Supplies: Prepare for the school year with a wide selection of backpacks, binders, calculators, and more for students of all ages.
Technology & Electronics: Stay up-to-date with the latest tech trends – from laptops and tablets to printers and accessories.
Furniture & Storage: Create a functional and comfortable workspace with our range of office furniture and storage solutions.
Printing Services: Turn your ideas into reality with our printing and copying services for flyers, business cards, and more.
Shipping & Packaging: Send packages securely and conveniently with our shipping and packaging solutions.
Art & Crafting: Unleash your creativity with our selection of art supplies, crafting materials, and DIY project essentials.
            <div>Why Choose Staples:</div>
            Unrivaled Selection: Explore an extensive range of products, from everyday basics to cutting-edge tech gadgets.
Quality Assurance: Find trusted brands and high-quality products that meet your professional and educational needs.
Expert Advice: Our knowledgeable staff is ready to assist you in finding the right products and solutions for your requirements.
Convenience & Accessibility: With multiple locations across Thunder Bay, you're never far from a Staples store.
            <div>Elevate your productivity, education, and creativity with Thunder Bay's Staples Stores. Step into a world of endless possibilities, where everything you need is just a visit away!"
Please note that product availability and services may vary by location, so it's recommended to visit the official Staples website or contact the individual stores for the most up-to-date information.</div>
          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }
      {/* Chruch */}
      {params?.id === "shopping" && params?.details?.toLowerCase() === "chruch" &&
        <>
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

          }}>DERASAR</div>
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Best hindu shopping in your country</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                A shopping is a religious building that's meant for worshipping or
                praying. Hindu shoppings are typically devoted to one specific god. While
                shoppings tend to be associated with non-Christian religions like Islam,
                Judaism, and Buddhism, some sects of Orthodox Christianity worship in
                shoppings as well.
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
                  shopping
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
            A shopping is a religious building that's meant for worshipping or praying. Hindu shoppings are typically devoted to one specific god. While shoppings tend to be associated with non-Christian religions like Islam, Judaism, and Buddhism, some sects of Orthodox Christianity worship in shoppings as well.
          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }
      {/* Sikh  */}
      {params?.id === "shopping" && params?.details?.toLowerCase() === "sikh" &&
        <>
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

          }}>DERASAR</div>
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Best hindu shopping in your country</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                A shopping is a religious building that's meant for worshipping or
                praying. Hindu shoppings are typically devoted to one specific god. While
                shoppings tend to be associated with non-Christian religions like Islam,
                Judaism, and Buddhism, some sects of Orthodox Christianity worship in
                shoppings as well.
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
                  shopping
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
            A shopping is a religious building that's meant for worshipping or praying. Hindu shoppings are typically devoted to one specific god. While shoppings tend to be associated with non-Christian religions like Islam, Judaism, and Buddhism, some sects of Orthodox Christianity worship in shoppings as well.
          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }
      {/* Jain */}
      {params?.id === "shopping" && params?.details?.toLowerCase() === "jain" &&
        <>
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

          }}>DERASAR</div>
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Best hindu shopping in your country</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                A shopping is a religious building that's meant for worshipping or
                praying. Hindu shoppings are typically devoted to one specific god. While
                shoppings tend to be associated with non-Christian religions like Islam,
                Judaism, and Buddhism, some sects of Orthodox Christianity worship in
                shoppings as well.
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
                  shopping
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
            A shopping is a religious building that's meant for worshipping or praying. Hindu shoppings are typically devoted to one specific god. While shoppings tend to be associated with non-Christian religions like Islam, Judaism, and Buddhism, some sects of Orthodox Christianity worship in shoppings as well.
          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }


      {/* FOR licence AND THERE DETAILS */}
      {params?.id === "licence" && params?.details === "baps" &&
        <>
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
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Best hindu licence in your country</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                A licence is a religious building that's meant for worshipping or
                praying. Hindu licences are typically devoted to one specific god. While
                licences tend to be associated with non-Christian religions like Islam,
                Judaism, and Buddhism, some sects of Orthodox Christianity worship in
                licences as well.
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
                  licence
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
            A licence is a religious building that's meant for worshipping or praying. Hindu licences are typically devoted to one specific god. While licences tend to be associated with non-Christian religions like Islam, Judaism, and Buddhism, some sects of Orthodox Christianity worship in licences as well.
          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }
      {params?.id === "licence" && params?.details === "derasar" &&
        <>
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

          }}>DERASAR</div>
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Best hindu licence in your country</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                A licence is a religious building that's meant for worshipping or
                praying. Hindu licences are typically devoted to one specific god. While
                licences tend to be associated with non-Christian religions like Islam,
                Judaism, and Buddhism, some sects of Orthodox Christianity worship in
                licences as well.
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
                  licence
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
            A licence is a religious building that's meant for worshipping or praying. Hindu licences are typically devoted to one specific god. While licences tend to be associated with non-Christian religions like Islam, Judaism, and Buddhism, some sects of Orthodox Christianity worship in licences as well.
          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }
      {/* Bhuddha */}
      {params?.id === "licence" && params?.details?.toLowerCase() === "bhuddha" &&
        <>
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

          }}>DERASAR</div>
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Best hindu licence in your country</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                A licence is a religious building that's meant for worshipping or
                praying. Hindu licences are typically devoted to one specific god. While
                licences tend to be associated with non-Christian religions like Islam,
                Judaism, and Buddhism, some sects of Orthodox Christianity worship in
                licences as well.
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
                  licence
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
            A licence is a religious building that's meant for worshipping or praying. Hindu licences are typically devoted to one specific god. While licences tend to be associated with non-Christian religions like Islam, Judaism, and Buddhism, some sects of Orthodox Christianity worship in licences as well.
          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }
      {/* Chruch */}
      {params?.id === "licence" && params?.details?.toLowerCase() === "chruch" &&
        <>
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

          }}>DERASAR</div>
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Best hindu licence in your country</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                A licence is a religious building that's meant for worshipping or
                praying. Hindu licences are typically devoted to one specific god. While
                licences tend to be associated with non-Christian religions like Islam,
                Judaism, and Buddhism, some sects of Orthodox Christianity worship in
                licences as well.
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
                  licence
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
            A licence is a religious building that's meant for worshipping or praying. Hindu licences are typically devoted to one specific god. While licences tend to be associated with non-Christian religions like Islam, Judaism, and Buddhism, some sects of Orthodox Christianity worship in licences as well.
          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }
      {/* Sikh  */}
      {params?.id === "licence" && params?.details?.toLowerCase() === "sikh" &&
        <>
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

          }}>DERASAR</div>
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Best hindu licence in your country</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                A licence is a religious building that's meant for worshipping or
                praying. Hindu licences are typically devoted to one specific god. While
                licences tend to be associated with non-Christian religions like Islam,
                Judaism, and Buddhism, some sects of Orthodox Christianity worship in
                licences as well.
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
                  licence
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
            A licence is a religious building that's meant for worshipping or praying. Hindu licences are typically devoted to one specific god. While licences tend to be associated with non-Christian religions like Islam, Judaism, and Buddhism, some sects of Orthodox Christianity worship in licences as well.
          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }
      {/* Jain */}
      {params?.id === "licence" && params?.details?.toLowerCase() === "jain" &&
        <>
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

          }}>DERASAR</div>
          <div style={{ display: "flex" }}>

            <div>
              <div style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#6c78c3",
                paddingLeft: "5%"
              }}>Best hindu licence in your country</div>
              <div style={{
                lineHeight: "27px",
                fontWeight: "500",
                display: "inline-block",
                paddingLeft: "5%"
              }}>
                A licence is a religious building that's meant for worshipping or
                praying. Hindu licences are typically devoted to one specific god. While
                licences tend to be associated with non-Christian religions like Islam,
                Judaism, and Buddhism, some sects of Orthodox Christianity worship in
                licences as well.
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
                  licence
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
            A licence is a religious building that's meant for worshipping or praying. Hindu licences are typically devoted to one specific god. While licences tend to be associated with non-Christian religions like Islam, Judaism, and Buddhism, some sects of Orthodox Christianity worship in licences as well.
          </div>
          <div class="container text-center" style={{ paddingBottom: 10 }}>
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
        </>
      }


    </>)
    ;
};

export default MoreDetails;