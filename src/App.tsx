import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout.tsx'
import Home from './pages/home.tsx'
import Agent from './pages/agents.tsx'
import Scroll from './pagecomponents/layoutComponents/scrollTotop.tsx'

export default function App() {
  return (
    <BrowserRouter>
        <Scroll/>
      <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agents" element={<Agent />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
