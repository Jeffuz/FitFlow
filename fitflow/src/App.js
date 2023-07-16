import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import NoPage from './Pages/NoPage'
import Questionnaire from './Pages/Questionnaire'
import Signup from './Pages/Signup';
import DisplayWorkout from './Pages/DisplayWorkout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/displayWorkout" element={<DisplayWorkout />} />
          <Route path="/signup" element={<Signup />}/>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;