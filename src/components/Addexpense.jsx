import { useState } from "react";
const Addexpense = ({ addExpense }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  return (
    <>
      <h1 className="text-primary text-center mb-2">Expense Tracker</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if(!description || !amount || !category) return

          
          addExpense({
            description,
            amount,
            category,
          });

          setDescription((description) => "");
          setAmount((amount) => "");
          setCategory((category) => "");
        }}
      >
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            value={description}
            type="text"
            className="form-control"
            placeholder="Enter description..."
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Add Amount</label>
          <input
            onChange={(event) => {
              setAmount(+event.target.value);
            }}
            value={amount}
            type="number"
            className="form-control"
            placeholder="Enter Amount..."
          />
        </div>
        <div className="mb-3">
          <select
            onChange={(event) => {
              setCategory(event.target.value);
            }}
            value={category}
            className="form-control"
          >
            <option value=""> Select Category</option>
            <option value="food">Food</option>
            <option value="entertainment">Entertainment</option>
            <option value="utilities">Utilities</option>
          </select>
        </div>

        <div className="d-grid">
          <button className="btn btn-info">Add</button>
        </div>
      </form>
    </>
  );
};

export default Addexpense;
