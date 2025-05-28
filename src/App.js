// App.js
import { Routes, Route } from "react-router-dom";
import Layout from './layout/Layout';
import HomePage from './pages/home';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
