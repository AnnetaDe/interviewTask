import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className="bg-teal text-white">
      <Link to="/">Home</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/kanban">Kanban</Link>
    </div>
  );
};

export default Header;
