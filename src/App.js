import { Component } from "react";
import Form from "./components/Form/Form";

import Table from "./components/Table/Table";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      newList: [],
      status: false,
      selectedId: "",
      zero: 0,
      empty: {},
    };
  }

  submitForm = (methods) => {
    const { newList, name, phone, email, empty, zero } = this.state;

    // this.setState((prevState) => ({
    //   newList: [...prevState.newList, methods],
    // }));
    const empty1 = {};

    if (name === "") {
      empty1.name1 = "*Name Required";
    } else if (name.length <= 2) {
      empty1.name1 = "*Name characters should be greater than 2";
    }

    if (phone === "") {
      empty1.phone1 = "Phone Required";
    } else if (phone.length < 10) {
      empty1.phone1 = "*Phone length  be 10";
    }

    if (email === "") {
      empty1.email1 = "Email Required";
    } else if (!email.includes("@")) {
      empty1.email1 = "Email to be format";
    }

    const objectLength = Object.keys(empty1).length;

    if (objectLength === 0) { 
      this.setState({zero:zero+1})
      methods.id=zero

      newList.push(methods);

      this.setState((prevState) => ({
        name: "",
        phone: "",
        email: "",
      }));
    } else {
      this.setState({ empty: empty1 });
    }
  };

  deleteRowTable = (index) => {
    const { newList } = this.state;
    const deletion = newList.filter((each) => each.id !== index);
    this.setState({ newList: deletion });
  };

  editTable = (index) => {
    const { name, phone, email, newList, status } = this.state;
    const informationFilter = newList.filter((each) => each.id === index);
    const { Name, Phone, Email } = informationFilter[0];
    this.setState({
      name: Name,
      phone: Phone,
      email: Email,
      status: true,
      selectedId: index,
    });
  };

  updateValues = () => {
    const { name, phone, email, newList, status, selectedId } = this.state;
    //  this.setState({ Name: name, Phone: phone, Email: email,status:false})
    const new1 = { Name: name, Phone: phone, Email: email, id: selectedId };
    const Latest = newList.findIndex((each) => each.id === selectedId);

    newList.splice(Latest, 1, new1);
    const listing = [...newList];
    this.setState({
      newList: listing,
      name: "",
      phone: "",
      email: "",
      status: false,
    });
  };

  handle = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { newList, status, empty } = this.state;
    console.log(empty)
    return (
      <div className="App">
        <Form
          submitForm={this.submitForm}
          status={status}
          updateValues={this.updateValues}
          state={this.state}
          handle={this.handle}
        />
        <Table
          Array={newList}
          deleteRowTable={this.deleteRowTable}
          editTable={this.editTable}
        />
      </div>
    );
  }
}

export default App;

// import "./App.css";

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       phone: "",
//       email: "",
//       newList: [],
//       status: false,
//       selectedId: "",
//       zero:0
//     };
//   }

//   handleInputChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { name, phone, email, newList,zero } = this.state;
//     this.setState({zero:parseInt(zero)+1})
//     const enterDetails = {
//       Name: name,
//       Phone: phone,
//       Email: email,
//       id: zero
//     };
//     (newList.push(enterDetails));

//     this.setState((prevState) => ({
//       name: "",
//       phone: "",
//       email: "",
//     }));
//   };

//   deleteRowTable = (Id) => {
//     const { name, phone, email, newList } = this.state;
//     const filteredColumn = newList.filter((each) => each.id !== Id);
//     this.setState({ newList: filteredColumn });

//     console.log(Id)
//   };

//   editButton = (Id) => {
//     const { name, phone, email, newList, status } = this.state;
//     const informationFilter = newList.filter((each) => each.id === Id);
//     const { Name, Phone, Email } = informationFilter[0];
//     this.setState({
//       name: Name,
//       phone: Phone,
//       email: Email,
//       status: true,
//       selectedId: Id,
//     });
//     console.log(newList)
//     console.log(Id)
//   };

//   updatingValues = () => {
//     const { name, phone, email, newList, status, selectedId } = this.state;
//

//     const new1 = { Name: name, Phone: phone, Email: email, id: selectedId };
//     const Latest=newList.findIndex((each)=>(each.id===selectedId))
//     console.log(newList)
//     console.log(new1)
//     console.log(selectedId);
//     console.log(Latest)
//     newList.splice(Latest, 1, new1);
//     const listing = [...newList];
//      this.setState({
//        newList: listing,
//        name: "",
//       phone: "",
//        email: "",
//       status: false,
//      });
//   };

//   render() {
//     const { name, phone, email, newList, status } = this.state;
//      console.log(newList);
//     return (
//       <div className="App">
//         <div className="Form">
//           <form onSubmit={this.handleSubmit}>
//             <label>Name:</label>
//             <br />
//             <input
//               type="text"
//               name="name"
//               value={this.state.name}
//               onChange={this.handleInputChange}
//             />
//             <br />
//             <label>phone:</label>
//             <br />
//             <input
//               type="text"
//               name="phone"
//               value={this.state.phone}
//               onChange={this.handleInputChange}
//             />
//             <br />
//             <label>Email:</label>
//             <br />
//             <input
//               type="text"
//               name="email"
//               value={this.state.email}
//               onChange={this.handleInputChange}
//             />
//             <br />
//             {status ? "" : <button type="submit">Add</button>}
//           </form>
//           {status ? <button onClick={this.updatingValues}>Update</button> : ""}
//         </div>
//         <table className="table">
//           <tr>
//             <th>Sr.no</th>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Email</th>
//             <th>Action</th>
//           </tr>
//           {/* <EditText
//             name="email"
//             type="email"
//             style={{ width: "200px" }}
//             defaultValue="email@domain.com"
//             inline
//           /> */}
//           {newList.map((each,index) => {
//             return (
//               <tr key={each.id}>
//                 <th className="view">{each.id}</th>
//                 <th className="view">{each.Name}</th>
//                 <th className="view">{each.Phone}</th>
//                 <th className="view" >
//                   {each.Email}
//                 </th>
//                 <th>
//                   <button
//                     onClick={() => {
//                       this.deleteRowTable(each.id);
//                     }}
//                   >
//                     Delete
//                   </button>
//                   /
//                   <button
//                     onClick={() => {
//                       this.editButton(each.id);
//                     }}
//                   >
//                     Edit
//                   </button>
//                 </th>
//               </tr>
//             );
//           })}
//         </table>
//       </div>
//     );
//   }
// }

// export default App;
