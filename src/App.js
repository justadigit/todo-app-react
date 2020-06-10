import React, { Component } from 'react'
import TodoInput from './components/Todo/TodoInput';
import TodoList from './components/Todo/TodoList';

import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { v4 as uuidv4 } from 'uuid';
export default class App extends Component {
  state = {
    items:[],
    item:"",
    edited:false,
  }
  item = null;
   handleChange = (e)=>{
    this.setState({
      item:e.target.value
    })
  }
  handleSubmit = e =>{
    e.preventDefault();
    let newItem ={
      id:uuidv4(),
      title:this.state.item
    }
    let updatedItem = [...this.state.items,newItem];
    this.setState({
      items: updatedItem,
      item:"",
      edited:false,
    })
  }
  handleDelete = (id)=>{
    let deleteItem = this.state.items.filter(item=>{
      return item.id !==id
    })
    this.setState({
      items : deleteItem
    })
  }
  handleEdit = id =>{
    let editItem = this.state.items.filter(item=>{
      return item.id !==id
    })
    const selectItem = this.state.items.find(item=>{
      return item.id === id;
    })
    this.setState({
      items : editItem,
      item:selectItem.title,
      edited:true,
      id:id,
    })
  }
  handleCheck = e =>{
    console.log(e);
  }
  render() {
    return (
       <div className="container">
         <div className="row">
           <div className="col-10 mx-auto col-md-8 mt-4">
             <h3 className="text-capitalize text-center">ToDo App</h3>
             <TodoInput
              item={this.state.item} 
              handleChange={this.handleChange}
               handleSubmit={this.handleSubmit}
               edited={this.state.edited}
              />
             <TodoList 
             items={this.state.items} 
             handleDelete={this.handleDelete} 
             handleEdit={this.handleEdit}
             checked = {this.state.checked}
             handleCheck = {this.handleCheck}
             />
           </div>
         </div>
       </div>
    )
  }
}

