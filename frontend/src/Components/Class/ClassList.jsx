// import React, { Component } from 'react'
// import { Form, Container, Button } from "react-bootstrap";
// import axios from "axios";
// import ClassCard from "./ClassCard"

// export default class ClassList extends Component {

//  componentDidMount() {
//  console.log("component ClassList running !!!")
//  }

//   state = {};

//   registerHandler = async () => {
//     try {
//       let data = await axios.post(
//         "http://localhost:9000/class/addClass",
//         this.state
//       );
//       console.log(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   changeHandler = (e) => {
//     // console.log("name of field", e.target["name"]);
//     // console.log("value of field", e.target.value);
//     let temp = { ...this.state }; //copy state object
//     temp[e.target.name] = e.target.value;
//     this.setState(temp);
//   };
//     render() {
//         return (
//             <div>
//           <Container>
//           <Form.Group>
//             <Form.Label>class title:</Form.Label>
//             <Form.Control name="class_title" onChange={this.changeHandler} />
//           </Form.Group>

//           <Form.Group>
//             <Form.Label>trainer :</Form.Label>
//             <Form.Control name="trainer" onChange={this.changeHandler} />
//           </Form.Group>

//           <Form.Group>
//             <Form.Label>duration:</Form.Label>
//             <Form.Control name="duration" onChange={this.changeHandler} />
//           </Form.Group>

//           <Form.Group>
//             <Form.Label>startAt:</Form.Label>
//             <Form.Control name="startAt" onChange={this.changeHandler} />
//           </Form.Group>

//           <Form.Group>
//             <Form.Label>date:</Form.Label>
//             <Form.Control name="date" onChange={this.changeHandler} />
//           </Form.Group>

//           <Form.Group>
//             <Form.Label>description:</Form.Label>
//             <Form.Control name="description" onChange={this.changeHandler} />
//           </Form.Group>

//           <Form.Group>
//             <Form.Label>image:</Form.Label>
//             <Form.Control name="image" onChange={this.changeHandler} />
//           </Form.Group>

//           <Form.Group>
//             <Form.Label>class type:</Form.Label>
//             <Form.Control name="class_type" onChange={this.changeHandler} />
//           </Form.Group>

            
//           <Button variant="primary" onClick={this.registerHandler} block>
//             Add Class 
//           </Button>
//         </Container>
//             </div>
//         )
//     }
// }
