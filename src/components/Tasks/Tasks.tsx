import './Tasks.css';
function Tasks() {
    return (
    <div className="tasks-container">
        <h2 className='task-header'>All Tasks</h2>
        <input className='add-input' type="text" placeholder="Add new To Do"/>
    </div>
  );
}

export default Tasks;
