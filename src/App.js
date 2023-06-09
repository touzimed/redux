import './App.css';
import { Addtask } from './compoenent/Addtask';
import ListTask from './compoenent/ListTask';
import { Filter } from './compoenent/filter';
function App() {
  return (
    <div className="App">
      <Addtask/>   
         <ListTask/>
  <Filter/>
    </div>
  );
}

export default App;
