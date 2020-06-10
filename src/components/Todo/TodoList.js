import React, { Component } from 'react'
import TodoItem from './TodoItem';
export default class TodoList extends Component {
    render() {
        let {items,handleDelete,handleEdit} =this.props;
            let itemList =items.length?( items.map(item => {
                return (  
                        <TodoItem 
                         key={item.id} title={item.title} 
                         handleDelete={()=>handleDelete(item.id)}
                         handleEdit={()=>handleEdit(item.id)}
                        />
                    )
                })):(<p className="text-center my-2 text-danger"><h2>No Item Yet!</h2></p> )
           return( <ul className="list-group"> 
             { 
                 itemList
             }
            </ul>
            
            )
    }
}
