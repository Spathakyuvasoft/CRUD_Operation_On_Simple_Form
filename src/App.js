
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
      zero:0
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, phone, email, newList,zero } = this.state;
    this.setState({zero:parseInt(zero)+1})
    const enterDetails = {
      Name: name,
      Phone: phone,
      Email: email,
      id: zero
    };
    (newList.push(enterDetails));

    this.setState((prevState) => ({
      name: "",
      phone: "",
      email: "",
    }));
  };

  deleteRowTable = (Id) => {
    const { name, phone, email, newList } = this.state;
    const filteredColumn = newList.filter((each) => each.id !== Id);
    this.setState({ newList: filteredColumn });

    console.log(Id)
  };

  editButton = (Id) => {
    const { name, phone, email, newList, status } = this.state;
    const informationFilter = newList.filter((each) => each.id === Id);
    const { Name, Phone, Email } = informationFilter[0];
    this.setState({
      name: Name,
      phone: Phone,
      email: Email,
      status: true,
      selectedId: Id,
    });
    console.log(newList)
    console.log(Id)
  };

  updatingValues = () => {
    const { name, phone, email, newList, status, selectedId } = this.state;


    const new1 = { Name: name, Phone: phone, Email: email, id: selectedId };
    const Latest=newList.findIndex((each)=>(each.id===selectedId))
    console.log(newList)
    console.log(new1)
    console.log(selectedId);
    console.log(Latest)
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

  render() {
    const { name, phone, email, newList, status } = this.state;
     console.log(newList);
    return (
      <div className="App">
        <div className="Form">
          <form onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <br />
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <br />
            <label>phone:</label>
            <br />
            <input
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={this.handleInputChange}
            />
            <br />
            <label>Email:</label>
            <br />
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <br />
            {status ? "" : <button type="submit">Add</button>}
          </form>
          {status ? <button onClick={this.updatingValues}>Update</button> : ""}
        </div>
        <table className="table">
          <tr>
            <th>Sr.no</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
          {/* <EditText
            name="email"
            type="email"
            style={{ width: "200px" }}
            defaultValue="email@domain.com"
            inline
          /> */}
          {newList.map((each,index) => {
            return (
              <tr key={each.id}>
                <th className="view">{each.id}</th>
                <th className="view">{each.Name}</th>
                <th className="view">{each.Phone}</th>
                <th className="view" >
                  {each.Email}
                </th>
                <th>
                  <button
                    onClick={() => {
                      this.deleteRowTable(each.id);
                    }}
                  >
                    Delete
                  </button>
                  /
                  <button
                    onClick={() => {
                      this.editButton(each.id);
                    }}
                  >
                    Edit
                  </button>
                </th>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default App;
