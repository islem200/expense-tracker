const Expenses = ({ data, deleteExpense }) => {
  const calculateTotal = () => {
    let total = 0;
    for (let item of data) {
      total += item.amount;
    }
    return total;
  };
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
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.description}</td>
            <td>{item.amount}</td>
            <td>{item.category}</td>
            <td>
              <button
                onClick={() => deleteExpense(item.id)}
                className="btn btn-sm btn-outline-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>

      <tfoot>
        <tr>
          <td colSpan={5}>Total:${calculateTotal()}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Expenses;
