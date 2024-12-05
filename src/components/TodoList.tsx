import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/reduxHooks';
import { selectCurrentFilter, selectFilteredTasks } from '../redux/selectors';
import Task from './Task';
import { addTask } from '../redux/todoOperations';
import { ITodo } from '../types/todo.types';
import AddTaskForm from './AddTaskForm';
import ButtonsFilter from './ButtonsFilter';
import { setNewFilter } from '../redux/filterSlice';

const TodoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const todoList = useAppSelector(selectFilteredTasks);
  const [newTask, setNewTask] = useState('');
  const currentFilter = useAppSelector(selectCurrentFilter);

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
  const handleShowDone = () => {
    const newFilter = currentFilter === 'completed' ? 'all' : 'completed';
    dispatch(setNewFilter(newFilter));
  };
  const handleHideDone = () => {
    const newFilter = currentFilter === 'all' ? 'active' : 'all';
    dispatch(setNewFilter(newFilter));
  };

  return (
    <div className="w-43">
      <AddTaskForm
        task={newTask}
        handleAddTask={handleAddTask}
        onAddInputChange={e => setNewTask(e.target.value)}
      />
      <ButtonsFilter
        onClick={handleShowDone}
        onClickHide={handleHideDone}
        textDone={currentFilter === 'completed' ? 'Show All' : 'Show Done'}
        textActive={currentFilter === 'active' ? 'Show All' : 'Hide completed'}
      />

      <ul className="space-y-4 p-6 bg-white rounded-lg shadow-md w-[285px] max-h-[400px] overflow-y-auto scrollbar-thin">
        {todoList.map(todo => (
          <Task todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
