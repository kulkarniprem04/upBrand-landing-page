import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import COLORS from "../../Colors";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import PinterestIcon from "@material-ui/icons/Pinterest";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import CopyrightIcon from "@material-ui/icons/Copyright";
import Media from "react-media";

const Footer = () => {
  return (
    <Media
      queries={{
        small: "(max-width: 599px)",
        medium: "(min-width: 600px) and (max-width: 1199px)",
        large: "(min-width: 1200px)",
      }}
    >
      {matches => (
        <>
          {matches.small && (
            <div
              style={{
                background: COLORS.primary,
                marginTop: "2em",
                paddingTop: "4em",
                paddingBottom: "3em",
              }}
            >
              <Container>
                <Row>
                  <Col md={7} className="d-flex flex-column align-items-center">
                    <h3
                      style={{
                        color: "white",
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                      }}
                    >
                      Reach out to us
                    </h3>
                    <h5
                      style={{
                        color: "white",
                        fontFamily: "Poppins",
                        marginTop: "1rem",
                      }}
                    >
                      upbrandtoday@gmail.com
                    </h5>
                    <h5
                      style={{
                        color: "white",
                        fontFamily: "Poppins",
                      }}
                    >
                      +91 8484985668
                    </h5>
                  </Col>

                  <Col className="d-flex flex-column justifycontent-center align-items-center mt-5">
                    <div>
                      <FacebookIcon
                        style={{
                          height: "2em",
                          width: "auto",
                          marginRight: "4px",
                          color: "white",
                        }}
                      />
                      <InstagramIcon
                        style={{
                          height: "2em",
                          width: "auto",
                          marginRight: "4px",
                          color: "white",
                        }}
                      />
                      <LinkedInIcon
                        style={{
                          height: "2em",
                          width: "auto",
                          marginRight: "4px",
                          color: "white",
                        }}
                      />
                      <PinterestIcon
                        style={{
                          height: "2em",
                          width: "auto",
                          marginRight: "4px",
                          color: "white",
                        }}
                      />
                      <TwitterIcon
                        style={{
                          height: "2em",
                          width: "auto",
                          marginRight: "4px",
                          color: "white",
                        }}
                      />
                    </div>

                    <div className="d-flex align-items-center mt-2">
                      <CopyrightIcon style={{ color: "white" }} />
                      <h5
                        style={{
                          color: "white",
                          fontFamily: "Poppins",
                          marginLeft: "4px",
                        }}
                      >
                        {" "}
                        upBrandToday 2021-2023
                      </h5>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          )}

          {matches.medium && (
            <div
              style={{
                background: COLORS.primary,
                position: "relative",
                top: "20vh",
                paddingTop: "4em",
                paddingBottom: "3em",
              }}
            >
              <Container>
                <Row>
                  <Col md={7} className="d-flex flex-column">
                    <h3
                      style={{
                        color: "white",
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                      }}
                    >
                      Reach out to us
                    </h3>
                    <h5
                      style={{
                        color: "white",
                        fontFamily: "Poppins",
                        marginTop: "1rem",
                      }}
                    >
                      upbrandtoday@gmail.com
                    </h5>
                    <h5
                      style={{
                        color: "white",
                        fontFamily: "Poppins",
                      }}
                    >
                      +91 8484985668
                    </h5>
                  </Col>

                  <Col>
                    <div>
                      <FacebookIcon
                        style={{
                          height: "2em",
                          width: "auto",
                          marginRight: "4px",
                          color: "white",
                        }}
                      />
                      <InstagramIcon
                        style={{
                          height: "2em",
                          width: "auto",
                          marginRight: "4px",
                          color: "white",
                        }}
                      />
                      <LinkedInIcon
                        style={{
                          height: "2em",
                          width: "auto",
                          marginRight: "4px",
                          color: "white",
                        }}
                      />
                      <PinterestIcon
                        style={{
                          height: "2em",
                          width: "auto",
                          marginRight: "4px",
                          color: "white",
                        }}
                      />
                      <TwitterIcon
                        style={{
                          height: "2em",
                          width: "auto",
                          marginRight: "4px",
                          color: "white",
                        }}
                      />
                    </div>

                    <div className="d-flex align-items-center mt-2">
                      <CopyrightIcon style={{ color: "white" }} />
                      <h5
                        style={{
                          color: "white",
                          fontFamily: "Poppins",
                          marginLeft: "4px",
                        }}
                      >
                        {" "}
                        upBrandToday 2021-2023
                      </h5>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          )}

          {matches.large && (
            <div
              style={{
                background: COLORS.primary,
                position: "relative",
                top: "33vh",
                paddingTop: "4em",
                paddingBottom: "3em",
              }}
            >
              <Container>
                <Row>
                  <Col md={7} className="d-flex flex-column">
                    <h3
                      style={{
                        color: "white",
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                      }}
                    >
                      Reach out to us
                    </h3>
                    <h5
                      style={{
                        color: "white",
                        fontFamily: "Poppins",
                        marginTop: "1rem",
                      }}
                    >
                      upbrandtoday@gmail.com
                    </h5>
                    <h5
                      style={{
                        color: "white",
                        fontFamily: "Poppins",
                      }}
                    >
                      +91 8484985668
                    </h5>
                  </Col>

                  <Col>
                    <div>
                      <FacebookIcon
                        style={{
                          height: "2em",
                          width: "auto",
                          marginRight: "4px",
                          color: "white",
                        }}
                      />
                      <InstagramIcon
                        style={{
                          height: "2em",
                          width: "auto",
                          marginRight: "4px",
                          color: "white",
                        }}
                      />
                      <LinkedInIcon
                        style={{
                          height: "2em",
                          width: "auto",
                          marginRight: "4px",
                          color: "white",
                        }}
                      />
                      <PinterestIcon
                        style={{
                          height: "2em",
                          width: "auto",
                          marginRight: "4px",
                          color: "white",
                        }}
                      />
                      <TwitterIcon
                        style={{
                          height: "2em",
                          width: "auto",
                          marginRight: "4px",
                          color: "white",
                        }}
                      />
                    </div>

                    <div className="d-flex align-items-center mt-2">
                      <CopyrightIcon style={{ color: "white" }} />
                      <h5
                        style={{
                          color: "white",
                          fontFamily: "Poppins",
                          marginLeft: "4px",
                        }}
                      >
                        {" "}
                        upBrandToday 2021-2023
                      </h5>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          )}
        </>
      )}
    </Media>
  );
};

export default Footer;
