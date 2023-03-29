import React, { Component } from 'react'
import "./Components.css"

export default class ClassCompo extends Component {
    state={
        name:"",
        department:"",
        rating:"",
        data:[]
    }
    handleChange =(e)=>{
        this.setState({[e.target.name]:[e.target.value]})
        this.setState({[e.target.department]:[e.target.value]})
        this.setState({[e.target.rating]:[e.target.value]})
    }
    handleSubmit=()=>{
        const dataObj={
            name:this.state.name,
            department:this.state.department,
            rating:this.state.rating
        }
        const arr=this.state.data;
        arr.push(dataObj);
        this.setState({[this.state.data]:arr});
        console.log(this.state.name);
        console.log(this.state.data);
    }
  render() {
    return (
      <>
      <div className="input-fields">
      <label>Name:</label>
      <input type="text" placeholder="Enter Name" name="name" onChange={this.handleChange}></input><br></br>
      <label>Department:</label>
      <input type="text" placeholder="Enter Department" name="department" onChange={this.handleChange}></input><br></br>
      <label>Rating:</label>
      <input type="text" placeholder="Rating" name="rating" onChange={this.handleChange}></input><br></br>
      <button onClick={this.handleSubmit}>Submit</button>
      </div>
      <div className="parent">
      {/* <div className="data"> */}
      {this.state.data.map((item,index)=>{
        return(
          <div className='data'>
            <p key={index}>Name : {item.name} | Department : {item.department} | Rating : {item.rating}</p>
          </div>
        )
      })}
      {/* </div> */}
      </div>
      </>
    )
  }
}