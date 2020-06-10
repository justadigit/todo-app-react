import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        let {item,handleChange,handleSubmit,edited} = this.props;
        return (
                <form action="" className="col-12" onSubmit={handleSubmit}>
                    <label htmlFor="newlist">Add An Item</label>
                    <div className="row">
                        <div className="col-10">
                            <input type="text" id="newlist" className="form-control" value={item} onChange={handleChange} placeholder="Enter an Item Name" required/>
                        </div>
                        <div className="col-2">
                            <button className={
                                edited?"btn btn-warning col-12":"btn btn-primary col-12"
                            }>
                                {edited?"Edit":"Add"}
                            </button>
                        </div>
                    </div>
                </form>
        )
    }
}
