import React, { Component } from 'react'
import { Col, Card,Row } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Time from './Time'
import ReactMomentCountDown from 'react-moment-countdown';
import moment from 'moment'
export default class ClassCard extends Component {


    render() {
        
        let {class_title,class_type,trainer,duration,startAt,date,description,image,_id } = this.props.class;
        return (
        <>
        {/* <Time classDate={date} timeStart={startAt}></Time> */}
          <Col md={3} className="m-2">
            <Card>
              {/* <Image style={{ height: 150, width: 150 }} src={link} /> */}
              <Card.Img
                style={{ height: 400, width: "100%" }}
                variant="top"
                src={image}
              />
              <Card.Body>
        <Card.Title className={"text-center"}>{class_title} - {duration} Minutes</Card.Title>
        <Card.Text style={{paddingLeft:"20px"}}>{description}</Card.Text>
        <Card.Text ></Card.Text>
                {/* <Card.Text style={{paddingLeft:"20px"}}></Card.Text> */}
                <Card.Text style={{paddingLeft:"20px", color:'rgb(28, 58, 117)', textDecoration: "double"}}>live start on  :{date} at {startAt} clock </Card.Text>
                
                <ReactMomentCountDown toDate={date}/> 

                <Row>
                {/* <NavLink
                  to={`/DeleteClass/${_id}`}
                  className="btn btn-warning btn-block mb-3"
                  variant="outline-danger"
                >
                  Delete
                </NavLink>
                <NavLink
                  to={`/EditClass/${_id}`}
                  className="btn btn-warning btn-block mb-3"
                  variant="outline-success"
                >
                  Edit
                </NavLink> */}
                </Row>
                <NavLink
                  to={"/"}
                  className="btn btn-warning btn-block mb-3"
                  variant="outline-warning"
                >
                  Go Live
                </NavLink>

              </Card.Body>
            </Card>
          </Col>
          </>
        );
      }
}
