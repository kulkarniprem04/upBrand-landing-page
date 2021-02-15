import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
  makeStyles,
  Snackbar,
} from "@material-ui/core";
import { CancelOutlined, CheckCircle } from "@material-ui/icons";
import hero from "../../assets/1.png";
import upbrand from "../../assets/upBrand.png";
import logo from "../../assets/white.png";
import COLORS from "../../Colors";
import Media from "react-media";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  TextField: {
    height: "1vh",
  },
}));

const HomePage = () => {
  const classes = useStyles();

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phoneNumber: "",
    buisnessName: "",
  });
  const [snackbar, setSnackbar] = React.useState(null);

  const handleInput = event => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const submitFromData = event => {
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.phoneNumber === "" ||
      formData.buisnessName === ""
    ) {
      setSnackbar(
        <Snackbar
          place="br"
          icon={CancelOutlined}
          message="Enter All the information"
          open={true}
          closeNotification={() => setSnackbar(null)}
          close
        />,
        setTimeout(() => {
          setSnackbar(null);
        }, 3000)
      );
    } else {
      event.preventDefault();
      // const formDataToSubmit = new FormData();
      // formDataToSubmit.set("name", `${formData.name}`);
      // formDataToSubmit.set("email", `${formData.email}`);
      // formDataToSubmit.set("phoneNumber", `${formData.phoneNumber}`);
      // formDataToSubmit.set("buisnessName", `${formData.buisnessName}`);

      const data = {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        buisnessName: formData.buisnessName,
      };

      // console.log(formDataToSubmit);

      axios({
        method: "POST",
        url: "http://localhost:5000/mail",
        data: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
        .then(response => {
          console.log(response.data);
          setSnackbar(
            <Snackbar
              place="br"
              icon={CheckCircle}
              message="Information sucessfully sent"
              open={true}
              closeNotification={() => setSnackbar(null)}
              close
            />,
            setTimeout(() => {
              setSnackbar(null);
            }, 3000)
          );
        })
        .catch(err => {
          console.error(err);
        });
    }
  };

  React.useEffect(() => {
    console.log(formData);
  });

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
            <div>
              {snackbar}
              <Image
                style={{ position: "absolute", overflow: "hidden" }}
                className="w-100"
                fluid
                src={hero}
              />
              <Container style={{ position: "relative" }}>
                <Col>
                  <Row className="d-flex align-items-center justify-content-center">
                    <Image
                      style={{
                        height: "4em",
                        width: "auto",
                        marginTop: "2rem",
                        padding: 0,
                      }}
                      src={logo}
                    />
                    <Image
                      style={{ height: "3em", width: "auto", marginTop: "2em" }}
                      src={upbrand}
                    />
                  </Row>

                  <Row
                    style={{
                      borderLeft: "7px solid white",
                      paddingLeft: "1rem",
                      marginTop: "2em",
                    }}
                    className="d-flex flex-column"
                  >
                    <span
                      style={{
                        fontWeight: "bolder",
                        fontFamily: "sans-serif",
                        fontSize: 40,
                      }}
                    >
                      Your story -
                    </span>
                    <span style={{ fontSize: 25, color: "black" }}>
                      know it! Say it!
                    </span>
                  </Row>

                  <Row
                    className="d-flex justify-content-center align-items-center"
                    style={{ marginTop: "5em" }}
                  >
                    <Card
                      style={{
                        width: "70%",
                        boxShadow: `-3px -2px 15px black`,
                      }}
                    >
                      <CardHeader title="Get in touch with us" />
                      <CardContent className="d-flex flex-column">
                        <TextField
                          variant="outlined"
                          fullWidth
                          id="name"
                          placeholder="Your Name"
                          value={formData.name}
                          inputProps={{
                            className: classes.TextField,
                            onChange: handleInput,
                          }}
                        />
                        <TextField
                          style={{ marginTop: "1rem" }}
                          id="email"
                          variant="outlined"
                          fullWidth
                          placeholder="Your Email"
                          value={formData.email}
                          inputProps={{
                            className: classes.TextField,
                            onChange: handleInput,
                          }}
                        />
                        <TextField
                          style={{ marginTop: "1rem" }}
                          variant="outlined"
                          id="phoneNumber"
                          fullWidth
                          placeholder="Your Phone"
                          value={formData.phoneNumber}
                          inputProps={{
                            className: classes.TextField,
                            onChange: handleInput,
                          }}
                        />
                        <TextField
                          style={{ marginTop: "1rem" }}
                          variant="outlined"
                          fullWidth
                          id="buisnessName"
                          placeholder="Buisness Name"
                          value={formData.buisnessName}
                          inputProps={{
                            className: classes.TextField,
                            onChange: handleInput,
                          }}
                        />
                        <Button
                          style={{
                            background: COLORS.secondary,
                            marginTop: "1rem",
                            width: "80%",
                            color: "white",
                          }}
                          onClick={submitFromData}
                        >
                          {" "}
                          Let's Work Together
                        </Button>
                      </CardContent>
                    </Card>
                  </Row>
                </Col>
              </Container>
            </div>
          )}

          {matches.medium && (
            <div style={{ background: COLORS.primary, paddingBottom: "2em" }}>
              {snackbar}
              {/* <Image
                style={{ position: "absolute", overflow: "hidden" }}
                className="w-100"
                fluid
                src={hero}
              /> */}
              <Container>
                <Col>
                  <Row className="d-flex align-items-center justify-content-center">
                    <Image
                      style={{
                        height: "8em",
                        width: "auto",
                        marginTop: "2rem",
                        padding: 0,
                      }}
                      src={logo}
                    />
                    <Image
                      style={{ height: "5em", width: "auto", marginTop: "2em" }}
                      src={upbrand}
                    />
                  </Row>

                  <Row
                    style={{
                      paddingLeft: "1rem",
                      marginTop: "2em",
                    }}
                    className="d-flex flex-column justify-content-center align-items-center"
                  >
                    <span
                      style={{
                        fontWeight: "bolder",
                        fontFamily: "sans-serif",
                        fontSize: 40,
                      }}
                    >
                      Your story -
                    </span>
                    <span style={{ fontSize: 25, color: "black" }}>
                      know it! Say it!
                    </span>
                  </Row>

                  <Row
                    className="d-flex justify-content-center align-items-center"
                    style={{ marginTop: "2em" }}
                  >
                    <Card
                      style={{
                        width: "60%",
                        boxShadow: `-3px -2px 15px black`,
                      }}
                    >
                      <CardHeader title="Get in touch with us" />
                      <CardContent className="d-flex flex-column">
                        <TextField
                          variant="outlined"
                          id="name"
                          fullWidth
                          placeholder="Your Name"
                          value={formData.name}
                          inputProps={{
                            className: classes.TextField,
                            onChange: handleInput,
                          }}
                        />
                        <TextField
                          style={{ marginTop: "1rem" }}
                          variant="outlined"
                          id="email"
                          fullWidth
                          placeholder="Your Email"
                          value={formData.email}
                          inputProps={{
                            className: classes.TextField,
                            onChange: handleInput,
                          }}
                        />
                        <TextField
                          style={{ marginTop: "1rem" }}
                          variant="outlined"
                          id="phoneNumber"
                          fullWidth
                          placeholder="Your Phone"
                          value={formData.phoneNumber}
                          inputProps={{
                            className: classes.TextField,
                            onChange: handleInput,
                          }}
                        />
                        <TextField
                          style={{ marginTop: "1rem" }}
                          variant="outlined"
                          id="buisnessName"
                          fullWidth
                          placeholder="Buisness Name"
                          value={formData.buisnessName}
                          inputProps={{
                            className: classes.TextField,
                            onChange: handleInput,
                          }}
                        />
                        <Button
                          style={{
                            background: COLORS.secondary,
                            marginTop: "1rem",
                            width: "60%",
                            color: "white",
                          }}
                          onClick={submitFromData}
                        >
                          {" "}
                          Let's Work Together
                        </Button>
                      </CardContent>
                    </Card>
                  </Row>
                </Col>
              </Container>
            </div>
          )}

          {matches.large && (
            <div>
              {snackbar}
              <Image
                style={{ position: "absolute" }}
                className="w-100"
                fluid
                src={hero}
              />
              <Container style={{ position: "relative" }}>
                <Col>
                  <Row className="d-flex align-items-center">
                    <Image
                      style={{
                        height: "8em",
                        width: "auto",
                        marginTop: "2rem",
                        padding: 0,
                      }}
                      src={logo}
                    />
                    <Image
                      style={{ height: "5em", width: "auto", marginTop: "2em" }}
                      src={upbrand}
                    />
                  </Row>

                  <Row
                    style={{
                      borderLeft: "7px solid white",
                      paddingLeft: "1rem",
                      marginTop: "1rem",
                    }}
                    className="d-flex flex-column"
                  >
                    <span
                      style={{
                        fontWeight: "bolder",
                        fontFamily: "sans-serif",
                        fontSize: 35,
                      }}
                    >
                      Your story -
                    </span>
                    <span style={{ fontSize: 25, color: "black" }}>
                      know it! Say it!
                    </span>
                  </Row>

                  <Row style={{ marginTop: "2em" }}>
                    <Card
                      style={{
                        width: "30%",
                        boxShadow: `-3px -2px 15px black`,
                      }}
                    >
                      <CardHeader title="Get in touch with us" />
                      <CardContent className="d-flex flex-column">
                        <TextField
                          variant="outlined"
                          id="name"
                          fullWidth
                          placeholder="Your Name"
                          value={formData.name}
                          inputProps={{
                            className: classes.TextField,
                            onChange: handleInput,
                          }}
                        />
                        <TextField
                          style={{ marginTop: "1rem" }}
                          variant="outlined"
                          id="email"
                          fullWidth
                          placeholder="Your Email"
                          value={formData.email}
                          inputProps={{
                            className: classes.TextField,
                            onChange: handleInput,
                          }}
                        />
                        <TextField
                          style={{ marginTop: "1rem" }}
                          variant="outlined"
                          id="phoneNumber"
                          fullWidth
                          placeholder="Your Phone"
                          value={formData.phoneNumber}
                          inputProps={{
                            className: classes.TextField,
                            onChange: handleInput,
                          }}
                        />
                        <TextField
                          style={{ marginTop: "1rem" }}
                          variant="outlined"
                          id="buisnessName"
                          fullWidth
                          placeholder="Buisness Name"
                          value={formData.buisnessName}
                          inputProps={{
                            className: classes.TextField,
                            onChange: handleInput,
                          }}
                        />
                        <Button
                          style={{
                            background: COLORS.secondary,
                            marginTop: "1rem",
                            width: "60%",
                            color: "white",
                          }}
                          onClick={submitFromData}
                        >
                          {" "}
                          Let's Work Together
                        </Button>
                      </CardContent>
                    </Card>
                  </Row>
                </Col>
              </Container>
            </div>
          )}
        </>
      )}
    </Media>
  );
};

export default HomePage;
