
import './App.css';
import Addtasks from './Components/Addtasks';
import TaskList from './Components/TaskList';




function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Addtasks />
        <TaskList />
      </header>
    </div>
  );
}

export default App;