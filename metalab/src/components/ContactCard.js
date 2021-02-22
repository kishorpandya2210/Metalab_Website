import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardGroup } from "react-bootstrap";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
} from "react-icons/io5";

const cardGroup = {
  height: "100%",
  backgroundColor: "rgb(0, 153, 153)",
  marginTop: "auto",
  marginBottom: "auto",
  paddingTop: 100,
};

const cardStyle = {
  width: "100%",
  backgroundColor: "rgb(0, 153, 153)",
  border: "none",

  borderRadius: 0,
  color: "white",
  textAlign: "center",
};
const cardText = {
  width: "75%",
  margin: "auto",
  color: "white",
  fontSize: 25,
};

const cardText2 = {
  width: "75%",
  margin: "auto",
  marginTop: 25,
  color: "white",
  fontSize: 19,
};

const cardSubtitle = {
  fontFamily: "Monospace",
  fontWeight: "bold",
  fontSize: 40,
  marginTop: 10,
  marginBottom: -10,
};

const cardTextTitle = {
  width: "80%",
  margin: "auto",
  fontWeight: "bold",
  fontSize: 30,
  marginTop: 40,
};

const ContactCard = () => {
  return (
    <CardGroup style={cardGroup}>
      <Card style={cardStyle}>
        <Card.Body>
          <Card.Title>
            <IoLocationOutline size={100}></IoLocationOutline>
          </Card.Title>
          <Card.Subtitle style={cardSubtitle}>LOCATION</Card.Subtitle>
          <Card.Text style={cardTextTitle}>Office</Card.Text>
          <Card.Text style={cardText}>
            don’t put this for the time being.
          </Card.Text>
          <Card.Text style={cardTextTitle}>Branch</Card.Text>
          <Card.Text style={cardText}>
            S.NO.47, PLOT NO 10, NEAR AKURDI POST OFFICE, AKURDI, PUNE 411 035
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={cardStyle}>
        <Card.Body>
          <Card.Title>
            <IoCallOutline size={100}></IoCallOutline>
          </Card.Title>
          <Card.Subtitle style={cardSubtitle}>PHONE</Card.Subtitle>

          <Card.Text style={cardTextTitle}>
            Reception<sup>*</sup>
          </Card.Text>
          <Card.Text style={cardText}>+91 202.724.1711</Card.Text>
          <Card.Text style={cardText}>+91 202.724.3596</Card.Text>
          <Card.Text style={cardText}>+91 913.002.0305</Card.Text>

          <Card.Text style={cardTextTitle}>Lab Manager</Card.Text>
          <Card.Text style={cardText}>+91 937.101.2525</Card.Text>

          <Card.Text style={cardText2}>
            <sup>*</sup>For sample and test related queries contact the
            reception.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={cardStyle}>
        <Card.Body>
          <Card.Title>
            <IoMailOutline size={100}></IoMailOutline>
          </Card.Title>
          <Card.Subtitle style={cardSubtitle}>EMAIL</Card.Subtitle>
          <Card.Text style={cardTextTitle}>
            Reception<sup>*</sup>
          </Card.Text>
          <a style={cardText} href="mailto:metalabpune@hotmail.com">
            metalabpune@hotmail.com
          </a>

          <Card.Text style={cardTextTitle}>Lab Manager</Card.Text>
          <a style={cardText} href="mailto:metalabindia@hotmail.com">
            metalabindia@hotmail.com
          </a>
          <Card.Text style={cardText2}>
            <sup>*</sup>For sample and test related queries contact the
            reception.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default ContactCard;
