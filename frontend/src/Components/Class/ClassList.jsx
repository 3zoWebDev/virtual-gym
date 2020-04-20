import React, { Component } from 'react'
import { Form, Container, Button,Row ,Col,Image, Card} from "react-bootstrap";
import ClassCard from './ClassCard'
import axios from "axios";


export default class ClassList extends Component {
  state = {
    allClass :[],
    selectedClass:[]
}

componentDidMount() {

    axios.get('http://localhost:9000/class/listClass')
        .then(res => {
          // console.log(res.data)
            this.setState({
                allClass: res.data.listClass,
                selectedClass: res.data.listClass,
                  
            })
        }).catch(err => console.log(err))



}
  render() {
    
    console.log(this.state.allClass)
    let All = this.state.allClass.map((classElemnet) => (
       <ClassCard class={classElemnet} key={classElemnet._id} />
      
       
    ));
    
    return (
      <div>
      <h1>All Classes</h1>
      {/* {this.state.allClass.map((classElemnet) => (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={classElemnet.image} />
        <Card.Body>
          <Card.Title>{classElemnet.class_title}</Card.Title>
      <Card.Text>{<h4>{classElemnet.trainer}</h4>}</Card.Text>
          
      <Card.Text><h4>{classElemnet.duration}</h4></Card.Text>
      <Card.Text><h4>{classElemnet.description}</h4></Card.Text>
         
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
        ))}  */}
      {/* {this.state.allClass.map((classElemnet) => (
        //  <p>Hello, {classElemnet.class_title} with trainer {classElemnet.trainer}</p>
        <Container>
          
        <Row className="mt-5" style={{padding:40}}>
        <Col md={3} className="m-2" style={{ borderStyle: "double", borderRadius: "30px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Image
              src={classElemnet.image}
              style={{ height: "30%", width: "30%" }}
            />
          </Col>
          <Col md={5}>
            <h4>{classElemnet.class_title}</h4>
            <h4>{classElemnet.trainer}</h4>
            <h4>{classElemnet.duration}</h4>
            <h4>{classElemnet.description}</h4>
          </Col>
        </Row>
      </Container>
      ))} */}

       {/* <Container className="mt-5" fluid>
          <Row className="mt-5 justify-content-center">
            <Col md={4}>
              <Form.Label>Select Type</Form.Label>
              <Form.Control>
                {this.state.allClass.map((classElemnet) => ( 
                  <Card.Body>
                  <Col md={5}>
                  <h4>{classElemnet.class_title}</h4>
                  <h4>{classElemnet.trainer}</h4>
                  <h4>{classElemnet.duration}</h4>
                  <h4>{classElemnet.description}</h4>
                </Col>
                </Card.Body>
                ))}
              </Form.Control>
            </Col>
          </Row>
        </Container> */}

  </div >
    )
  }
}
