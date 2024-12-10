import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/reduxHooks';
import {
  selectCurrentFilter,
  selectFilteredTasks,
  selectTodos,
} from '../redux/selectors';
import Task from './Task';
import { addTask } from '../redux/todoOperations';
import { ITodo } from '../types/todo.types';
import AddTaskForm from './AddTaskForm';
import ButtonsFilter from './ButtonsFilter';
import { setNewFilter } from '../redux/filterSlice';
import Progress from './Progress';
import ProgressCirclle from './ProgressCirclle';

const TodoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const todoList = useAppSelector(selectFilteredTasks);
  const allTasks = useAppSelector(selectTodos);
  const [newTask, setNewTask] = useState('');
  const currentFilter = useAppSelector(selectCurrentFilter);
  const total = allTasks.length;
  const completed = allTasks.filter(todo => todo.isdone).length;

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
    <div className=" flex-col items-center space-y-2 pt-6 pb-6 ">
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
        classNameShow={` px-2 py-1 rounded-md transition-all w-28 h-8 text-xs hover:scale-105 transition-all duration-300 ${
          isFilterApplied && currentFilter === 'completed'
            ? 'bg-teal text-white-100'
            : 'bg-transparent text-grey shadow-md'
        }`}
        classNameHide={`px-2 py-1 rounded-md transition-all w-28 h-8 text-xs hover:scale-105 transition-all duration-300 ${
          isFilterApplied && currentFilter === 'active'
            ? 'bg-teal text-white'
            : 'bg-transparent text-grey shadow-md'
        }`}
      />
      <Progress total={total} completed={completed} />
      <ProgressCirclle total={total} completed={completed} />
      <div className="border rounded-md p-1 pl-0">
        <ul className="space-y-1 bg-white overflow-y-auto scrollbar-thin py-1 px-1 max-h-[500px]">
          {todoList.length === 0 && (
            <li className="text-center text-grey">No tasks</li>
          )}
          {todoList.map(todo => (
            <Task todo={todo} key={todo.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
