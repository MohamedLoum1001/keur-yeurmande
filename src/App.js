import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Accueil from './pages/accueil/Accueil';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path='/' element={<Accueil />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
