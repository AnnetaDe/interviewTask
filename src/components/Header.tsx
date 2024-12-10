import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-white-500 text-lg transition-all ease-in-out' : '';
  return (
    <div className="bg-teal text-white flex flex-row gap-4 pb-2 pt-2">
      <NavLink className={linkClass} to="/">
        Home
      </NavLink>
      <NavLink className={linkClass} to="/tasks">
        Tasks
      </NavLink>
      <NavLink className={linkClass} to="/kanban">
        Kanban
      </NavLink>
    </div>
  );
};

export default Header;
