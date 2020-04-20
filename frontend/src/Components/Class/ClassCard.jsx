import React, { Component } from 'react'
import { Col, Card } from "react-bootstrap";
export default class ClassCard extends Component {
    render() {
        let {class_title,class_type,trainer,duration,startAt,date,description,image  } = this.props.class;
        return (
          <Col md={3} className="m-2">
            <Card>
              {/* <Image style={{ height: 150, width: 150 }} src={link} /> */}
              <Card.Img
                style={{ height: 400, width: "100%" }}
                variant="top"
                src={image}
              />
              <Card.Body>
                <Card.Title className={"text-center"}>{class_title}</Card.Title>
                <Card.Text>{trainer}</Card.Text>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{class_type} </Card.Text>
                {/* <NavLink
                  to={`/L/${_id}`}
                  className="btn btn-warning btn-block mb-3"
                  variant="outline-warning"
                >
                  go life
                </NavLink> */}
              </Card.Body>
            </Card>
          </Col>
        );
      }
}
