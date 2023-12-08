import "./Form.css";
import { Component } from "react";

class Form extends Component {

  handleInputChange = (event) => {
    const { handle } = this.props;
    // const { name, value } = event.target;
    // this.setState({ [name]: value });
    handle(event);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { submitForm, state } = this.props;
    
    const { name, phone, email, newList, status,empty } = state;
  
    const enterDetails = {
      Name: name,
      Phone: phone,
      Email: email,
     
    };

    submitForm(enterDetails); 

     
  };

  updatingValues = () => {
    const { zero } = this.state;
    const { updateValues } = this.props;
    updateValues();
  };

  render() {
    const { status, updateValues, state, handle } = this.props;
    const { name, email, phone ,empty} = state; 
    console.log(empty)
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            onChange={this.handleInputChange}
            value={name}
          />
          <p className="Required">{empty.name1}</p>
          <br />
          <label>phone:</label>
          <br />
          <input
            type="text"
            name="phone"
            onChange={this.handleInputChange}
            value={phone}
          />
          <p className="Required">{empty.phone1}</p>
          <br />
          <label>Email:</label>
          <br />
          <input
            type="text"
            name="email"
            onChange={this.handleInputChange}
            value={email}
          />
          <p className="Required">{empty.email1}</p>
          <br />
          {status ? "" : <button type="submit">Add</button>}
        </form>
        {status ? <button onClick={this.updatingValues}>Update</button> : ""}
      </div>
    );
  }
}

export default Form;
