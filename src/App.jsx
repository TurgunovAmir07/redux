import { useDispatch, useSelector } from "react-redux";
import { addCustomer, removeCustomer } from "./store/customerReducer";
import { useState } from "react";

function App() {
  const [username, setUserName] = useState("");

  const dispatch = useDispatch();

  const cash = useSelector((state) => state.cashReducer.cash);
  const customers = useSelector((state) => state.customerReducer.customers);

  const addCash = () => {
    dispatch({ type: "ADD CASH", payload: 10000 });
  };
  const getCash = () => {
    dispatch({ type: "GET CASH", payload: 5000 });
  };

  const handleAddCustomer = () => {
    dispatch(addCustomer(username));
  };
  const handleRemoveCustomer = () => {
    dispatch(removeCustomer(username));
  };

  return (
    <>
      <h1>Redux: {cash} sum</h1>
      <button onClick={() => addCash()}>добавить</button>
      <button onClick={() => getCash()}>снять</button>

      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={() => handleAddCustomer()}>добавить пользователя</button>
      <button onClick={() => handleRemoveCustomer()}>
        удалить пользователей
      </button>

      {customers.length > 0 &&
        customers.map((customer) => <p key={customer}>{customer}</p>)}
    </>
  );
}

export default App;
