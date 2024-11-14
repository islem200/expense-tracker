

const Expenses = ({data}) => {
  return (
    <table className="table table-hover table-bordered">
      <thead>
        <th>#</th>
        <th>Description</th>
        <th>Amount</th>
        <th>Category</th>
        <th>Action</th>
      </thead>

      <tbody>
        
          {data.map((item) => (
            <tr>
            <td>{item.id}</td>
            <td>{item.description}</td>
            <td>{item.amount}</td>
            <td>{item.category}</td>
            <td>
              <button className="btn btn-sm btn-outline-danger">Delete</button>
            </td>
          </tr>
          ))}      
        
      </tbody>

    </table>
  
  )
}

export default Expenses
