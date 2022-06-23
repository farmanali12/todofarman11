
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css"
import React, { Component } from 'react'
import Plan from './component/plan/plan';
class App extends Component {

state = {
  items: [],
  text: ""
}
handleChange = e => {
  this.setState({ text: e.target.value })
}
handleAdd = e => {
  if (this.state.text !== "") {
    const items = [...this.state.items, this.state.text];
    this.setState({ items: items, text: "" });
  }
}
handleDelete = id => {
  console.log("Deleted", id);
  const Olditems = [...this.state.items]
  console.log("Olditems", Olditems);
  const items = Olditems.filter((element, i) => {
    return i !== id
  })
  console.log("Newitems", items);
  this.setState({ items: items });
}
render() {
  return (
    <div className="container-fluid my-5">
      <div className="row ">
        <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
          <h2 className="text-center"> Today's Plan </h2>
          <div className="container-fluid">
            <div className="row " >
              <div className="col-lg-9 col-md-6 ">
                <input type="text" className="form-control" placeholder="Write Plan Here" value={this.state.text} onChange={this.handleChange} />
              </div>
              <div className="col-lg-3 col-md-3">
                <button className="btn btn-warning px-5 font-weight-bold" onClick={this.handleAdd}>Add</button>
              </div>
            </div>
            <div className="conatiner">
              <ul className="list-unstyled row m-5">
                {
                  this.state.items.map((value, i) => {
                    return <Plan key={i} id={i} value={value} sendData={this.handleDelete} />
                  })
                }
              </ul>
              {/* <ul className="list-unstyled row m-5">
                <Plan p={this.state.items} sendData={this.handleDelete} />
              </ul> */}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
}

export default App