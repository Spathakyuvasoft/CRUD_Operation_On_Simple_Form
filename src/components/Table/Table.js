import { Component } from "react";



class Table extends Component {
  deleteRowTable = (index) => {
    const {  deleteRowTable } = this.props;
    deleteRowTable(index);
  };

  editButton=(index)=>{
    const { editTable } = this.props; 
    editTable(index)
  }

  render() {
    const { Array, deleteRowTable } = this.props;
    
    return (
      <>
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
          {Array.map((each, index) => {
            return (
              <tr key={each.id}>
                <th className="view">{each.id}</th>
                <th className="view">{each.Name}</th>
                <th className="view">{each.Phone}</th>
                <th className="view">{each.Email}</th>
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
      </>
    );
  }
} 


export default Table



