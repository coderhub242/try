import React from 'react';
import { Outlet } from 'react-router-dom';
import ClientHeader from '../components/client/ClientHeader';
import Footer from '../components/shared/Footer';

const ClientLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ClientHeader />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default ClientLayout;