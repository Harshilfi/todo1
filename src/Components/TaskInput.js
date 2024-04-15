import './style.scss';
import { useState } from 'react';
/*This component is used to take in the user input to add tasks, here as well we passed in the addTodo function as an argument(to let it know what exactly the function is, if we tried to perform anything directly it would throw an error of addTodo not being defined) that we created in the App.js file */
function TaskInput({addTodo}){
    const [text, setText] = useState('');
    /*addText() passes the trimmed inputted value of the target(i.e our input tag) as the text of the <li> in the addTodo() that is defined in the App.js file*/
    function addText(e){
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText('');
    }
    return(
        <form className="task-input" onSubmit={addText}>
            <h1>Your TODOs</h1>
            <div>
                <input type='text' placeholder='Feed the Dawgg' value={text} onChange={(e)=> setText(e.target.value)}/>
                <button type='submit'>Add</button>
            </div>
            
        </form>
    )
}
export default TaskInput;