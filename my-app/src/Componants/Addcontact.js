import React from "react";

class Addcontact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) =>{
    e.preventDefault()
    if(this.state.name === '' || this.state.email === ''){
        alert("all fields are mandatory")
        return
    }
    this.props.addContactHandler(this.state);
    this.setState({name:'',email:''}); 
  }

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
            id="name"
              type="text"
              name="name"
              placeholder="name"
              onChange={(e) => this.setState({ name: e.target.value })}
              value={this.state.name}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
            id="email"  
              type="text"
              name="email"
              placeholder="email"
              onChange={(e) => this.setState({ email: e.target.value })}
              value={this.state.email}
            />
          </div>
          <button className="ui button blue" type="submit">Add</button>
        </form>
      </div>
    );
  }
}
export default Addcontact;
