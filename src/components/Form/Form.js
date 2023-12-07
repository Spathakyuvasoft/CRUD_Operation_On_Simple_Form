import "./Form.css";
import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zero: 0,
      requiredField: "",
      nameRequired: "",
      phoneRequired: "",
      emailRequired: "", 
      Required:"",
      empty:{}
    };
  }

  handleInputChange = (event) => {
    const { handle } = this.props;
    // const { name, value } = event.target;
    // this.setState({ [name]: value });
    handle(event);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { first, leo } = this.props;
    const { zero, Required,empty } = this.state;
    const { name, phone, email, newList, status } = leo;
    this.setState({ zero: parseInt(zero) + 1 });
    const enterDetails = {
      Name: name,
      Phone: phone,
      Email: email,
      id: zero,
    };
    first(enterDetails); 

    const empty1={}

    if (name===""){
       empty1.name1="Name Required"
    }

     if (phone === "") {
       empty1.phone1 = "Phone Required";
     } 

     if (email ===""){
       empty1.email="Email Required" 
     }

     this.setState({empty:empty1})


    // if (name === "" && phone === "" && email === "") {
    //   this.setState({
    //     nameRequired: "*Name Required",
    //     phoneRequired: "*PhoneRequired",
    //     emailRequired: "*Email Required",
    //   });
    // } 
    // else if (name !== "" && phone.length === 10 && email === "") {
    //   this.setState({
    //     nameRequired: "",
    //     emailRequired: "*Email Required",
    //     phoneRequired: "",
    //   });
    // } else if (name === "" && phone.length === 10 && email !== "") {
    //   this.setState({
    //     nameRequired: "*Name Required",
    //     phoneRequired: "",
    //     emailRequired: "",
    //   });
    // } else if (name !== "" && phone.length === 10 && email === "") {
    //   this.setState({
    //     nameRequired: "",
    //     phoneRequired: "",
    //     emailRequired: "*Email Required",
    //   });
    // } else if (name !== "" && phone === "" && email !== "") {
    //   this.setState({
    //     nameRequired: "",
    //     emailRequired: "",
    //     phoneRequired: "*Phone Required",
    //   });
    // } else if (name === "" && phone === "" && email !== "") {
    //   this.setState({
    //     nameRequired: "*Name Required",
    //     phoneRequired: "*Phone Required",
    //     emailRequired: "",
    //   });
    // } else if (name === "" && phone.length === 10 && email === "") {
    //   this.setState({
    //     nameRequired: "*Name Required",
    //     emailRequired: "*Email Required",
    //     phoneRequired: "",
    //   });
    // } else if (name !== "" && phone === "" && email === "") {
    //   this.setState({
    //     nameRequired: "",
    //     emailRequired: "*Email Required",
    //     phoneRequired: "*Phone Required",
    //   });
    // } else if (name !== "" && phone.length !== 10 && email !== "") {
    //   this.setState({
    //     nameRequired: "",
    //     emailRequired: "",
    //     phoneRequired: "*Phone length must be 10 characters",
    //   }); 
      
    // } 
     

  

    
  };

  updatingValues = () => {
    const { zero } = this.state;
    const { updateValues } = this.props;
    updateValues();
  };

  render() {
    const { zero, requiredField, nameRequired, phoneRequired, emailRequired,Required,empty } =
      this.state;
    const { fourth, updateValues, leo, handle } = this.props;
    const { name, email, phone } = leo; 
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
          <p className="Required">{nameRequired}</p>
          <br />
          <label>phone:</label>
          <br />
          <input
            type="text"
            name="phone"
            onChange={this.handleInputChange}
            value={phone}
          />
          <p className="Required">{phoneRequired}</p>
          <br />
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            onChange={this.handleInputChange}
            value={email}
          />
          <p className="Required">{emailRequired}</p>
          <br />
          {fourth ? "" : <button type="submit">Add</button>}
        </form>
        {fourth ? <button onClick={this.updatingValues}>Update</button> : ""}
      </div>
    );
  }
}

export default Form;
