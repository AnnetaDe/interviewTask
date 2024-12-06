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
      createdAt: new Date(),
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
  const isFilterApplied = currentFilter !== 'all';

  return (
    <div className="w-43 flex flex-col items-center space-y-2">
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
        classNameShow={`px-2 py-1 rounded-md transition-all w-28 h-8 text-xs hover:scale-105 transition-all duration-300 ${
          isFilterApplied && currentFilter === 'completed'
            ? 'bg-teal-500 text-white-100'
            : 'bg-transparent text-gray-500 border border-gray-300 shadow-md'
        }`}
        classNameHide={`px-2 py-1 rounded-md transition-all w-28 h-8 text-xs hover:scale-105 transition-all duration-300 ${
          isFilterApplied && currentFilter === 'active'
            ? 'bg-teal-500 text-white-100'
            : 'bg-transparent text-gray-500 border border-gray-300 shadow-md'
        }`}
      />
      <div className="border rounded-lg shadow-md p-1">
        <ul className="space-y-4 bg-white  w-[273px] h-[400px] overflow-y-auto scrollbar-thin py-5  ">
          {todoList.map(todo => (
            <Task todo={todo} key={todo.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
