import './App.css';
import Home from './pages/Home';
import Form from './components/Form';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addevent" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
