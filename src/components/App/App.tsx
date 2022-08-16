
import Category from '../Category/Category';
import Tasks from '../Tasks/Tasks';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className='app-container'>
        <Category/>
        <Tasks/>
      </div>
    </div>
  );
}

export default App;
