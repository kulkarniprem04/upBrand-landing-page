import React from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import zigzag from "../../assets/Layer 17 copy.png";
import BrandDevelopment from "../../assets/brand development.png";
import digitalMarketing from "../../assets/digital marketing.png";
import marketingStrategy from "../../assets/marketing strategy.png";
import COLORS from "../../Colors";
import Media from "react-media";

const ServicesPage = () => {
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
            <div style={{ background: COLORS.primary, overflow: "hidden" }}>
              <Container
                style={{
                  marginBottom: "7em",
                  paddingTop: "4em",
                }}
              >
                <Row className="d-flex justify-content-center align-items-center">
                  <h1
                    className="d-flex justify-content-center align-items-center text-center"
                    style={{
                      borderLeft: `7px solid ${COLORS.primary}`,
                      fontSize: 30,
                    }}
                  >
                    Value added service
                  </h1>
                </Row>

                <Row style={{ marginTop: "13em" }}>
                  <Col className="d-flex justify-content-center align-items-center">
                    <Image
                      style={{ position: "absolute" }}
                      src={digitalMarketing}
                    />
                    <h1
                      style={{
                        position: "relative",
                        fontWeight: "bold",
                        fontFamily: "Poppins",
                        marginBottom: "2em",
                        color: "white",
                        textAlign: "center",
                        fontSize: 33,
                      }}
                    >
                      Digital Networking
                    </h1>
                  </Col>

                  <Col
                    style={{ marginTop: "18em" }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <Image
                      style={{ position: "absolute" }}
                      src={marketingStrategy}
                    />
                    <h1
                      style={{
                        position: "relative",
                        fontWeight: "bold",
                        fontFamily: "Poppins",
                        marginBottom: "2em",
                        color: "white",
                        textAlign: "center",
                        fontSize: 35,
                      }}
                    >
                      Marketing Strategy
                    </h1>
                  </Col>

                  <Col
                    style={{ marginTop: "18em" }}
                    data-aos-delay="200"
                    className="d-flex justify-content-center align-items-center"
                  >
                    <Image
                      style={{ position: "absolute" }}
                      src={BrandDevelopment}
                    />
                    <h1
                      style={{
                        position: "relative",
                        fontWeight: "bold",
                        fontFamily: "Poppins",
                        marginBottom: "2em",
                        color: "white",
                        textAlign: "center",
                        fontSize: 30,
                      }}
                    >
                      Brand Development
                    </h1>
                  </Col>
                </Row>

                <Row
                  className="d-flex justify-content-center align-items-center"
                  style={{ marginTop: "10em" }}
                >
                  <Button
                    size="sm"
                    style={{
                      background: COLORS.secondary,
                      fontFamily: "Poppins",
                      width: "40%",
                      border: "none",
                    }}
                  >
                    Work with us
                  </Button>
                </Row>
              </Container>
            </div>
          )}

          {matches.medium && (
            <div
              style={{
                background: COLORS.primary,
                paddingTop: "4em",
                paddingBottom: "4em",
              }}
            >
              {/* <Image
                style={{ position: "absolute", height: "140vh" }}
                className="w-100"
                src={zigzag}
              /> */}
              <Container data-aos="fade-left">
                <Row>
                  <h1
                    style={{
                      fontWeight: "bold",
                      borderLeft: `7px solid white`,
                      paddingLeft: "1rem",
                    }}
                  >
                    Value Added Services
                  </h1>
                </Row>

                <Row style={{ marginTop: "13em" }}>
                  <Col
                    data-aos="fade-right"
                    className="d-flex justify-content-center align-items-center"
                  >
                    <Image
                      style={{ position: "absolute" }}
                      src={digitalMarketing}
                    />
                    <h1
                      style={{
                        position: "relative",
                        fontWeight: "bold",
                        fontFamily: "Poppins",
                        marginBottom: "2em",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      Digital Networking
                    </h1>
                  </Col>

                  <Col
                    data-aos="fade-left"
                    data-aos-delay="500"
                    className="d-flex justify-content-center align-items-center"
                  >
                    <Image
                      style={{ position: "absolute" }}
                      src={marketingStrategy}
                    />
                    <h1
                      style={{
                        position: "relative",
                        fontWeight: "bold",
                        fontFamily: "Poppins",
                        marginBottom: "2em",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      Marketing Strategy
                    </h1>
                  </Col>

                  <Col
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="d-flex justify-content-center align-items-center"
                    style={{ marginTop: "15em" }}
                  >
                    <Image
                      style={{ position: "absolute" }}
                      src={BrandDevelopment}
                    />
                    <h1
                      style={{
                        position: "relative",
                        fontWeight: "bold",
                        fontFamily: "Poppins",
                        marginBottom: "2em",
                        color: "white",
                        textAlign: "center",
                        fontSize: 33,
                      }}
                    >
                      Brand Development
                    </h1>
                  </Col>
                </Row>

                <Row
                  className="d-flex justify-content-center align-items-center"
                  style={{ marginTop: "10em" }}
                >
                  <Button
                    size="sm"
                    style={{
                      background: COLORS.secondary,
                      fontFamily: "Poppins",
                      width: "15%",
                      border: "none",
                    }}
                  >
                    Work with us
                  </Button>
                </Row>
              </Container>
            </div>
          )}

          {matches.large && (
            <div>
              <Image
                style={{ position: "absolute", height: "140vh" }}
                className="w-100"
                src={zigzag}
              />
              <Container
                data-aos="fade-left"
                style={{
                  position: "relative",
                  top: "30vh",
                  marginBottom: "20em",
                }}
              >
                <Row>
                  <h1
                    style={{
                      fontWeight: "bold",
                      borderLeft: `7px solid white`,
                      paddingLeft: "1rem",
                    }}
                  >
                    Value Added Services
                  </h1>
                </Row>

                <Row style={{ marginTop: "13em" }}>
                  <Col
                    data-aos="fade-right"
                    className="d-flex justify-content-center align-items-center"
                  >
                    <Image
                      style={{ position: "absolute" }}
                      src={digitalMarketing}
                    />
                    <h1
                      style={{
                        position: "relative",
                        fontWeight: "bold",
                        fontFamily: "Poppins",
                        marginBottom: "2em",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      Digital Networking
                    </h1>
                  </Col>

                  <Col
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="d-flex justify-content-center align-items-center"
                  >
                    <Image
                      style={{ position: "absolute" }}
                      src={marketingStrategy}
                    />
                    <h1
                      style={{
                        position: "relative",
                        fontWeight: "bold",
                        fontFamily: "Poppins",
                        marginBottom: "2em",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      Marketing Strategy
                    </h1>
                  </Col>

                  <Col
                    data-aos="fade-left"
                    data-aos-delay="200"
                    className="d-flex justify-content-center align-items-center"
                  >
                    <Image
                      style={{ position: "absolute" }}
                      src={BrandDevelopment}
                    />
                    <h1
                      style={{
                        position: "relative",
                        fontWeight: "bold",
                        fontFamily: "Poppins",
                        marginBottom: "2em",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      Brand Development
                    </h1>
                  </Col>
                </Row>

                <Row
                  className="d-flex justify-content-center align-items-center"
                  style={{ marginTop: "10em" }}
                >
                  <Button
                    size="sm"
                    style={{
                      background: COLORS.secondary,
                      fontFamily: "Poppins",
                      width: "15%",
                      border: "none",
                    }}
                  >
                    Work with us
                  </Button>
                </Row>
              </Container>
            </div>
          )}
        </>
      )}
    </Media>
  );
};

export default ServicesPage;
