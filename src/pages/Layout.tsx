import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { Suspense } from 'react';

const Layout: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
