import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
                const {title,handleDelete,handleEdit,handleCheck} = this.props;
               return (
                <li className="list-group-item d-flex justify-content-between my-2">
                    <div>
                        <input type="checkbox" name="checkbox" id="" onChange={handleCheck} /> <span>{title}</span>
                    </div>
                    <div className="todo-icon">
                        <span className="mx-2 text-primary" onClick={handleEdit}>
                            <i className="fas fa-edit"></i> 
                        </span>
                        <span className="mx-1 text-danger" onClick={handleDelete}>
                            <i className="fas fa-trash" ></i>
                        </span>
                    </div>
                </li>
               )
           }
}
