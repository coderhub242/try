import React from 'react';
import { Outlet } from 'react-router-dom';
import EditorHeader from '../components/editor/EditorHeader';
import Footer from '../components/shared/Footer';

const EditorLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <EditorHeader />
      <main className="flex-grow bg-gray-50">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default EditorLayout;