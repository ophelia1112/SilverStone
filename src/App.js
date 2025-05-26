import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout';
import HomePage from './pages/home';
import Founder from './pages/Founder';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="founder" element={<Founder />} />
        </Route>
      </Routes>
    </Router>
  );
}
