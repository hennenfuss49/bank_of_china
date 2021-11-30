import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div className="App font-Nunito">
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
