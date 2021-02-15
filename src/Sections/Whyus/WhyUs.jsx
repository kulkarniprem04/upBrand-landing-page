import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import COLORS from "../../Colors";
import aim from "../../assets/Layer 16.png";
import UpBrandServices from "../Upbrand-services/UpBrandServices";
import Media from "react-media";

const WhyUsPage = () => {
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
            <Container style={{ marginTop: "10em" }}>
              <Row>
                <Col className="d-flex flex-column">
                  <h1
                    className="d-flex justify-content-center align-items-center text-center"
                    style={{
                      borderLeft: `7px solid ${COLORS.primary}`,
                      fontSize: 30,
                    }}
                  >
                    Why upBrandToday
                  </h1>
                  <p
                    style={{
                      fontFamily: "Poppins",
                      marginTop: "2em",
                      fontWeight: "bold",
                      fontSize: 15,
                    }}
                  >
                    upBrandToday is here to prvide end-to-end branding plugins
                    to all entrerprise across all landscapes.At upBrandToday we
                    area tech-savvy proffesionals, ingenious content creators &
                    God-tier graphic designers.We take pride in bringing the
                    best of every buisness and showcasing it to the world to
                    see.We don't jut aim to brand, we aim to revolutionize.
                  </p>
                </Col>

                <Col className="d-flex justify-content-center align-items-center">
                  <Image style={{ height: "20em", width: "auto" }} src={aim} />
                </Col>
              </Row>

              <Row
                md={12}
                className="d-flex flex-column align-items-center justify-content-center"
                style={{ marginTop: "2em" }}
              >
                <h1
                  className="d-flex justify-content-center align-items-center text-center"
                  style={{
                    fontSize: 30,
                  }}
                >
                  Services Powered by upBrand
                </h1>
                <UpBrandServices />
              </Row>

              <Row className="d-flex justify-content-center align-items-end mt-5">
                <span>
                  In collaboration with{" "}
                  <span>
                    {" "}
                    <a
                      href="https://www.upskillutoday.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      upskillUToday
                    </a>
                  </span>
                </span>
              </Row>
            </Container>
          )}

          {matches.medium && (
            <Container
              data-aos="zoom-in"
              style={{ position: "relative", top: "15vh" }}
            >
              <Row>
                <Col className="d-flex flex-column">
                  <h1
                    style={{
                      borderLeft: `7px solid ${COLORS.primary}`,
                      paddingLeft: "1rem",
                    }}
                  >
                    Why upBrandToday
                  </h1>
                  <p
                    style={{
                      fontFamily: "Poppins",
                      marginTop: "2em",
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                  >
                    upBrandToday is here to prvide end-to-end branding plugins
                    to all entrerprise across all landscapes.At upBrandToday we
                    area tech-savvy proffesionals, ingenious content creators &
                    God-tier graphic designers.We take pride in bringing the
                    best of every buisness and showcasing it to the world to
                    see.We don't jut aim to brand, we aim to revolutionize.
                  </p>
                </Col>

                <Col className="d-flex justify-content-center align-items-center">
                  <Image style={{ height: "20em", width: "auto" }} src={aim} />
                </Col>
              </Row>

              <Row
                md={12}
                className="d-flex flex-column "
                style={{ marginTop: "2em" }}
              >
                <h1
                  style={{
                    borderLeft: `7px solid ${COLORS.primary}`,
                    paddingLeft: "1rem",
                    marginBottom: "2em",
                  }}
                >
                  Services Powered by upBrand
                </h1>
                <UpBrandServices />
              </Row>

              <Row
                style={{ marginTop: "4em" }}
                className="d-flex justify-content-center align-items-end"
              >
                <span>
                  In collaboration with{" "}
                  <span>
                    {" "}
                    <a
                      href="https://www.upskillutoday.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      upskillUToday
                    </a>
                  </span>
                </span>
              </Row>
            </Container>
          )}

          {matches.large && (
            <Container
              data-aos="zoom-in"
              style={{ position: "relative", top: "30vh" }}
            >
              <Row>
                <Col className="d-flex flex-column">
                  <h1
                    style={{
                      borderLeft: `7px solid ${COLORS.primary}`,
                      paddingLeft: "1rem",
                    }}
                  >
                    Why upBrandToday
                  </h1>
                  <p
                    style={{
                      fontFamily: "Poppins",
                      marginTop: "2em",
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                  >
                    upBrandToday is here to prvide end-to-end branding plugins
                    to all entrerprise across all landscapes.At upBrandToday we
                    area tech-savvy proffesionals, ingenious content creators &
                    God-tier graphic designers.We take pride in bringing the
                    best of every buisness and showcasing it to the world to
                    see.We don't jut aim to brand, we aim to revolutionize.
                  </p>
                </Col>

                <Col className="d-flex justify-content-center align-items-center">
                  <Image src={aim} />
                </Col>
              </Row>

              <Row
                md={12}
                className="d-flex flex-column "
                style={{ marginTop: "2em" }}
              >
                <h1
                  style={{
                    borderLeft: `7px solid ${COLORS.primary}`,
                    paddingLeft: "1rem",
                    marginBottom: "2em",
                  }}
                >
                  Services Powered by upBrand
                </h1>
                <UpBrandServices />
              </Row>

              <Row
                style={{ marginTop: "4em" }}
                className="d-flex justify-content-center align-items-end"
              >
                <span>
                  In collaboration with{" "}
                  <span>
                    {" "}
                    <a
                      href="https://www.upskillutoday.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      upskillUToday
                    </a>
                  </span>
                </span>
              </Row>
            </Container>
          )}
        </>
      )}
    </Media>
  );
};

export default WhyUsPage;
