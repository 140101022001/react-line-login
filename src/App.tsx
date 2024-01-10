import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LineLoginPage from './pages/LineLoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/line-login-page' element={<LineLoginPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
