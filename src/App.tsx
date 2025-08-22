import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardPage from './features/dashboard/pages/DashboardPage';
import ClientsPage from './features/clients/pages/ClientsPage';
import TasksPage from './features/tasks/pages/TasksPage';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Route>
    </Routes>
  );
}
