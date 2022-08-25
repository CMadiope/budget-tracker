import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";

function App() {
  return (
    <div className='App'>
      <Budget />
      <Remaining/>
      <ExpenseTotal/>
    </div>
  );
}

export default App;
