import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import calculatorPage from './pages/calculatorPage';
import Home from './pages/Home';
import Quote from './pages/Quote';

const App = () => (
  <div className="App">
    <Header />
    <main>
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<calculatorPage />} />
        <Route path="about" element={<Quote />} />
      </Routes>
    </main>
  </div>
);

export default App();
