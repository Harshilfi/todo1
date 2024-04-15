import './style.scss';
/*This the Component that renders the tasks, we passed in the arguments (States and a function)that we defined in the App.js file*/
function TaskList({todo,delTodo}){
    return(
        <div className="task-list">
            <ul>
                {todo.map((t) => (
                    <li key={t.id}>
                        {t.text}
                        <button onClick={()=>delTodo(t.id)}>Delete</button>
                    </li>
                ))}
                
            </ul>
        </div>
    )
}
export default TaskList;