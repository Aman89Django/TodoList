import React, {useEffect, useState} from 'react';
import {TodoForm} from "../components/TodoForm";
import {TodoList} from "../components/TodoList";
import {ITodo} from "../interface";


declare var confirm: (question:string) =>boolean;

export const TodosPage:React.FC =() =>{

    const[todos, setTodos] = useState<ITodo[]>([]);

    const addHandler = (title:string) =>{
        const newTodo:ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        };
        setTodos(prev =>[newTodo, ...prev])
    };

    const toggleHandler = (id:number) =>{
        setTodos(prev => prev.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    };

    const removeHandler = (id:number) =>{
        const shouldRemove = confirm('Are you sure want to delete it?');
        if(shouldRemove){
            setTodos(prev => prev.filter(todo =>todo.id !== id))
        }
    };

    useEffect(() =>{
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        setTodos(saved)
    }, []);

    useEffect(() =>{
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    return (
        <React.Fragment>
            <TodoForm onAdd={addHandler}/>

            <TodoList
                onToggle = {toggleHandler}
                onRemove = {removeHandler}
                todos = {todos}/>
        </React.Fragment>
    )
};

