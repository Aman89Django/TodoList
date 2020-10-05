import React from 'react';
import {ITodo} from "../interface";

type TodoListProps = {
  todos: ITodo[]
  onToggle(id:number): void
  onRemove(id:number): void
  // onToggle:() => void
  // onToggle:(id:number)=> void
  // onToggle?:(id:number)=> void
  // onToggle?(id:number): void
}

export const TodoList:React.FC<TodoListProps> =({todos, onToggle, onRemove})=>{
  if(todos.length ===0){
    return <p className='center'> NO work yet! </p>
  }
  const removeHabdler = (event:React.MouseEvent, id: number) =>{
    event.preventDefault();
    onRemove(id);
  }

  return(

    <ul>
      {todos.map(todo=> {
        const classes =['todo'];
        if(todo.completed){
          classes.push('completed')
        }

        return <li className={classes.join(' ')} key={todo.id}>
          <label className="todo">
            <input
                onChange={()=>{onToggle(todo.id)}}
                // onChange={onToggle.bind(null, todo.id)}
                type="checkbox"
                checked={todo.completed}/>
            <span>{todo.title}</span>
            <i className="material-icons red-text"
               onClick={(event)=>{removeHabdler(event, todo.id)}}>delete</i>
          </label>
        </li>
      })}
    </ul>
  )
};
