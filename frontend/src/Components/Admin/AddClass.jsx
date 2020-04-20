import React, { Component } from 'react'

 import {Container,Form,Button,Card} from 'react-bootstrap';
import axios from "axios";


export default class ClassList extends Component {

 componentDidMount() {
 console.log("component ClassList running !!!")
 }

  state = {};

  registerHandler = async () => {
    try {
      let data = await axios.post(
        "http://localhost:9000/class/addClass",
        this.state
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  changeHandler = (e) => {
    // console.log("name of field", e.target["name"]);
    // console.log("value of field", e.target.value);
    let temp = { ...this.state }; //copy state object
    temp[e.target.name] = e.target.value;
    this.setState(temp);
  };
    render() {
        return (
            <div>
               {/* <Card style={{ width: '18rem' }}></Card> */}
              <Card className="m-2" border="secondary"  style={{ width: '18rem', borderRadius: "30px", display: "flex", flexDirection: "column", alignItems: "center" }}>
  <Form.Group controlId="formBasicText">
    <Form.Label>Class Title</Form.Label>
    <Form.Control name="class_title" type="Steing" placeholder="Enter Class Title" />
  </Form.Group>

  <Form.Group controlId="formBasicText">
    <Form.Label>Trainer</Form.Label>
    <Form.Control name="trainer" type="Steing" placeholder="Enter Trainer" />
  </Form.Group>

  <Form.Group controlId="formBasicText">
    <Form.Label>Start At :</Form.Label>
    <Form.Control name="startAt" type="Steing" placeholder="Enter Start time" />
  </Form.Group>

  <Form.Group controlId="formBasicText">
    <Form.Label>image :</Form.Label>
    <Form.Control  name="image" type="Steing" placeholder="Enter image" />
  </Form.Group>

  <Form.Group controlId="formBasicText">
    <Form.Label>Duration</Form.Label>
    <Form.Control name="duration"  type="Steing" placeholder="Enter Duration" />
  </Form.Group>

  <Form.Group controlId="formBasicText">
    <Form.Label>Date</Form.Label>
    <Form.Control name="date" type="Steing" placeholder="Enter Date" />
  </Form.Group>

  <Form.Group controlId="formBasicText">
    <Form.Label>Class Type</Form.Label>
    <Form.Control name="class_type" type="Steing" placeholder="Enter class type" />
  </Form.Group>

  <Form.Group controlId="formBasicText">
    <Form.Label>Description</Form.Label>
    <Form.Control name="description" type="Steing" placeholder="Enter Description" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Card>
          {/* <Container>
          <Form.Group>
            <Form.Label>class title:</Form.Label>
            <Form.Control name="class_title" onChange={this.changeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label>trainer :</Form.Label>
            <Form.Control name="trainer" onChange={this.changeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label>duration:</Form.Label>
            <Form.Control name="duration" onChange={this.changeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label>startAt:</Form.Label>
            <Form.Control name="startAt" onChange={this.changeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label>date:</Form.Label>
            <Form.Control name="date" onChange={this.changeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label>description:</Form.Label>
            <Form.Control name="description" onChange={this.changeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label>image:</Form.Label>
            <Form.Control name="image" onChange={this.changeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label>class type:</Form.Label>
            <Form.Control name="class_type" onChange={this.changeHandler} />
          </Form.Group>

            
          <Button variant="primary" onClick={this.registerHandler} block>
            Add Class 
          </Button>
        </Container> */}
            </div>
        )
    }
}
