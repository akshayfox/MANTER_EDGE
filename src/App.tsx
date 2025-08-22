import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardContent from './pages/DashboardContent';
import TestPageOne from './pages/TestPageOne';
import TestPageTwo from './pages/TestPageTwo';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<DashboardContent />} />
        <Route path="/test-one" element={<TestPageOne />} />
        <Route path="/test-two" element={<TestPageTwo />} />
      </Route>
    </Routes>
  );
}
