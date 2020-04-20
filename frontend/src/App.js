import React, { Component } from 'react'
import AddClass from './Components/Admin/AddClass'
import ClassList from './Components/Class/ClassList'
import ClassCard from './Components/Class/ClassCard'
export default class App extends Component {
  render() {
    return (
      <div>
        <AddClass/>
       
        {/* <ClassList/> */}
        
        {/* {<ClassCard class={"hello "}/>} */}
      </div>
    )
  }
}
