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
                })):(<h2 className="text-center my-2 text-danger">No Item Yet!</h2> )
           return( <ul className="list-group"> 
             { 
                 itemList
             }
            </ul>
            
            )
    }
}
