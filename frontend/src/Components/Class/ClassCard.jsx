import React, { Component } from 'react'
import { Col, Card,Row } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import CountDownTimer from './CountDownTimer'
// import ReactMomentCountDown from 'react-moment-countdown';
import moment from 'moment'
import classes from "../BackgroundVideo.module.css";
import videoSource from "../cardio4.mp4";
export default class ClassCard extends Component {


    render() {
        
        let {class_title,class_type,trainer,duration,startAt,date,description,image,_id } = this.props.class;

        let dt = new Date(date);
        const then = moment(dt, "ddd MMM DD YYYY HH:mm:ss GMT Z");
        var ms = moment(then, "DD/MM/YYYY HH:mm:ss");
        let mt = moment()
        return (
        <>
        {console.log("mss"+ms.format('dddd Do MMMM, YYYY'))}
        {console.log("seo"+ms.format('HH:mm a'))}

          <Col md={3} className="m-2">
            <Card >
              {/* <Image style={{ height: 150, width: 150 }} src={link} /> */}
              <div className="container">
              <Card.Img className="Img1"
                style={{ height: 200, width: "100%" ,marginTop:"20px"}}
                variant="top"
                src={image}
              />
              </div>
              <Card.Body style={{textAlign:"center"}}>
              {/* <Card.Header>{class_title} - {duration} Minutes</Card.Header> */}
                <Card.Title className={"text-center"} style={{backgroundColor:"rgb(244, 244, 244)"}}>{class_title} - {duration} Minutes</Card.Title>
                <Card.Text style={{paddingLeft:"20px"}}>{description}</Card.Text>
                <Card.Text style={{textAlign:'left'}}>this is amazing warm up with sara to do as all of the this is amazing warm up with sara to do as all of the </Card.Text>
            
                <Card.Text style={{backgroundColor:"rgb(244, 244, 244)"}}> <CountDownTimer class={this.props.class}></CountDownTimer> </Card.Text>
                <Card.Text style={{backgroundColor:"rgb(244, 244, 244)"}}>{ms.format('HH:mm a')}</Card.Text>
                {/* <Card.Text style={{paddingLeft:"20px", color:'rgb(28, 58, 117)', textDecoration: "double"}}>Live Start On {ms.format('dddd Do MMMM ')}  </Card.Text>

                <Card.Text>{ms.format('HH:mm a')}</Card.Text> */}
                
             
                
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
