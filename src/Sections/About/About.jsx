import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import zigzag from "../../assets/zigzag.png";
import laptop from "../../assets/laptop.png";
import { ReactComponent as Journey } from "../../assets/journey.svg";
import COLORS from "../../Colors";
import "./About.css";
import Media from "react-media";

const AboutPage = () => {
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
            <div style={{ marginTop: "5em" }}>
              {/* <Image
                style={{ position: "absolute" }}
                className="w-100"
                fluid
                src={zigzag}
              /> */}
              <Container
                style={{
                  marginBottom: "10em",
                  overflow: "hidden",
                }}
              >
                <Row data-aos="fade-right">
                  <Col className="d-flex flex-column justify-content-center align-items-center">
                    <h1
                      style={{
                        borderLeft: `7px solid ${COLORS.primary}`,
                        paddingLeft: "1rem",
                      }}
                    >
                      UpBrandToday
                    </h1>
                    <p
                      style={{
                        fontFamily: "Poppins",
                        marginTop: "2em",
                        fontSize: 15,
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Creating value to your brand is the foundation on which
                      upBrandToday stands. We are a proffesional organisation
                      based in Pune, with a team of creative and crazy people
                      that bring in the quirky factor that will cater to your
                      branding and digital marketing needs.
                    </p>
                    <Button
                      size="sm"
                      style={{
                        background: COLORS.secondary,
                        fontFamily: "Poppins",
                        width: "30%",
                        border: "none",
                      }}
                    >
                      Work with us
                    </Button>
                  </Col>

                  <Col className="d-flex justify-content-center align-items-center mt-5">
                    <Image
                      style={{ height: "15em", width: "auto" }}
                      src={laptop}
                    />
                  </Col>
                </Row>

                <div
                  className="d-flex flex-column justify-content-center align-items-center mt-5"
                  data-aos="fade-left"
                >
                  <Row style={{ marginTop: "7em" }}>
                    <h1
                      className="d-flex justify-content-center align-items-center text-center"
                      style={{
                        borderLeft: `7px solid ${COLORS.primary}`,
                        fontSize: 30,
                      }}
                    >
                      Typical Brand Journey
                    </h1>
                  </Row>

                  <Row
                    style={{ marginTop: "5em" }}
                    className="d-flex flex-column justify-content-center align-items-center text-center"
                  >
                    <h1
                      style={{
                        color: COLORS.primary,
                        fontWeight: "bolder",
                        fontSize: 30,
                      }}
                    >
                      NO MATTER
                    </h1>
                    <h3 style={{ fontSize: 20 }}>
                      AT WHAT STAGE YOUR BRAND IS,
                    </h3>
                    <h4
                      style={{
                        background: COLORS.secondary,
                        color: "white",
                        fontSize: 20,
                      }}
                    >
                      WE PROVIDE SERVICES FOR STAGES.
                    </h4>
                  </Row>

                  <Row
                    style={{ marginTop: "7em" }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <Journey
                      style={{ height: "7em", width: "auto" }}
                      className="journey"
                    />
                    <h5
                      style={{
                        position: "absolute",
                        right: "82%",
                        bottom: "7%",
                      }}
                    >
                      IDEA
                    </h5>
                    <h5
                      style={{
                        position: "absolute",
                        left: "75%",
                        bottom: "12%",
                      }}
                    >
                      SUCCESS
                    </h5>
                  </Row>
                </div>
              </Container>
            </div>
          )}

          {matches.medium && (
            <Container
              style={{
                width: "70%",
                marginTop: "5em",
                marginBottom: "10em",
              }}
            >
              <Row data-aos="fade-right">
                <Col className="d-flex flex-column align-items-center">
                  <h1
                    style={{
                      borderLeft: `7px solid ${COLORS.primary}`,
                      paddingLeft: "1rem",
                    }}
                  >
                    UpBrandToday
                  </h1>
                  <p
                    style={{
                      fontFamily: "Poppins",
                      marginTop: "2em",
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    Creating value to your brand is the foundation on which
                    upBrandToday stands. We are a proffesional organisation
                    based in Pune, with a team of creative and crazy people that
                    bring in the quirky factor that will cater to your branding
                    and digital marketing needs.
                  </p>
                  <Button
                    size="sm"
                    style={{
                      background: COLORS.secondary,
                      fontFamily: "Poppins",
                      width: "30%",
                      border: "none",
                    }}
                  >
                    Work with us
                  </Button>
                </Col>

                <Col className="mt-5 d-flex justify-content-center">
                  <Image
                    style={{ height: "15em", width: "auto" }}
                    src={laptop}
                  />
                </Col>
              </Row>

              <div data-aos="fade-left">
                <Row
                  className="d-flex flex-column align-items-center"
                  style={{ marginTop: "7em" }}
                >
                  <h1
                    style={{
                      borderLeft: `7px solid ${COLORS.primary}`,
                      paddingLeft: "1rem",
                    }}
                  >
                    Typical Brand Journey
                  </h1>
                </Row>

                <Row
                  style={{ marginTop: "5em" }}
                  className="d-flex flex-column justify-content-center align-items-center"
                >
                  <h1 style={{ color: COLORS.primary, fontWeight: "bolder" }}>
                    NO MATTER
                  </h1>
                  <h3>AT WHAT STAGE YOUR BRAND IS,</h3>
                  <h4 style={{ background: COLORS.secondary, color: "white" }}>
                    WE PROVIDE SERVICES FOR STAGES.
                  </h4>
                </Row>

                <Row
                  style={{ marginTop: "7em" }}
                  className="d-flex justify-content-center align-items-center"
                >
                  <Journey
                    style={{ height: "12em", width: "auto" }}
                    className="journey"
                  />
                  <h4
                    style={{
                      position: "absolute",
                      right: "90%",
                      bottom: "10%",
                    }}
                  >
                    IDEA
                  </h4>
                  <h4
                    style={{
                      position: "absolute",
                      left: "85%",
                      bottom: "10%",
                    }}
                  >
                    SUCCESS
                  </h4>
                </Row>
              </div>
            </Container>
          )}

          {matches.large && (
            <div style={{ marginTop: "2em" }}>
              <Image
                style={{ position: "absolute" }}
                className="w-100"
                fluid
                src={zigzag}
              />
              <Container
                style={{
                  position: "relative",
                  top: "30vh",
                  marginBottom: "20em",
                }}
              >
                <Row data-aos="fade-right">
                  <Col className="d-flex flex-column">
                    <h1
                      style={{
                        borderLeft: `7px solid ${COLORS.primary}`,
                        paddingLeft: "1rem",
                      }}
                    >
                      UpBrandToday
                    </h1>
                    <p
                      style={{
                        fontFamily: "Poppins",
                        marginTop: "2em",
                        fontSize: 20,
                        fontWeight: "bold",
                      }}
                    >
                      Creating value to your brand is the foundation on which
                      upBrandToday stands. We are a proffesional organisation
                      based in Pune, with a team of creative and crazy people
                      that bring in the quirky factor that will cater to your
                      branding and digital marketing needs.
                    </p>
                    <Button
                      size="sm"
                      style={{
                        background: COLORS.secondary,
                        fontFamily: "Poppins",
                        width: "30%",
                        border: "none",
                      }}
                    >
                      Work with us
                    </Button>
                  </Col>

                  <Col>
                    <Image src={laptop} />
                  </Col>
                </Row>

                <div data-aos="fade-left">
                  <Row style={{ marginTop: "7em" }}>
                    <h1
                      style={{
                        borderLeft: `7px solid ${COLORS.primary}`,
                        paddingLeft: "1rem",
                      }}
                    >
                      Typical Brand Journey
                    </h1>
                  </Row>

                  <Row
                    style={{ marginTop: "5em" }}
                    className="d-flex flex-column justify-content-center align-items-center"
                  >
                    <h1 style={{ color: COLORS.primary, fontWeight: "bolder" }}>
                      NO MATTER
                    </h1>
                    <h3>AT WHAT STAGE YOUR BRAND IS,</h3>
                    <h4
                      style={{ background: COLORS.secondary, color: "white" }}
                    >
                      WE PROVIDE SERVICES FOR STAGES.
                    </h4>
                  </Row>

                  <Row
                    style={{ marginTop: "7em" }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <Journey className="journey" />
                    <h4
                      style={{
                        position: "absolute",
                        right: "78%",
                        bottom: "13%",
                      }}
                    >
                      IDEA
                    </h4>
                    <h4
                      style={{
                        position: "absolute",
                        left: "75%",
                        bottom: "18%",
                      }}
                    >
                      SUCCESS
                    </h4>
                  </Row>
                </div>
              </Container>
            </div>
          )}
        </>
      )}
    </Media>
  );
};

export default AboutPage;
