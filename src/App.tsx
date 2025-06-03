import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ClientLayout from './layouts/ClientLayout';
import EditorLayout from './layouts/EditorLayout';
import About from './pages/client/About';
import Services from './pages/client/Services';
import Portfolio from './pages/client/Portfolio';
import Contact from './pages/client/Contact';
import GetQuote from './pages/client/GetQuote';
import JobListings from './pages/editor/JobListings';
import CVUpload from './pages/editor/CVUpload';
import EditorProfile from './pages/editor/EditorProfile';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home route with user selection */}
        <Route path="/" element={<Home />} />
        
        {/* Client routes */}
        <Route path="/client" element={<ClientLayout />}>
          <Route index element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="quote" element={<GetQuote />} />
        </Route>
        
        {/* Editor routes */}
        <Route path="/editor" element={<EditorLayout />}>
          <Route index element={<JobListings />} />
          <Route path="upload-cv" element={<CVUpload />} />
          <Route path="profile" element={<EditorProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;