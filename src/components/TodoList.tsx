import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/reduxHooks';
import { selectTodos } from '../redux/selectors';
import Task from './Task';
import { addTask } from '../redux/todoOperations';
import { ITodo } from '../types/todo.types';
import AddTaskForm from './AddTaskForm';
import ButtonFilter from './ButtonFilter';

const TodoList = () => {
  const dispatch = useAppDispatch();
  const todoList = useAppSelector(selectTodos);
  const [newTask, setNewTask] = useState('');
  const handleAddTask = () => {
    if (newTask.trim() === '') {
      return;
    }
    const newTodo: ITodo = {
      id: Date.now(),
      task: newTask,
      isdone: false,
    };
    dispatch(addTask(newTodo));
    setNewTask('');
  };

  return (
    <div>
      <AddTaskForm
        task={newTask}
        handleAddTask={handleAddTask}
        onAddInputChange={e => setNewTask(e.target.value)}
      />

      <ul>
        {todoList.map(todo => (
          <Task todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
