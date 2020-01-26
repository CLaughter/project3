import React from "react"

const List = (props) => {
    return (
        <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.list.name}</h5>
        </div>
        <div className="del-list">
        <button className="btn btn-danger" onClick={e => props.deleteList(e, props.list._id)}>Delete</button>
        </div>
      </div>
    )
}

export default List