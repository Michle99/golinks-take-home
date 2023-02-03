import SearchBar from './SearchBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import RepoDetails from "./RepoDetails"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path='/' element={<SearchBar/>} />
          <Route path="/repos/:input/:reponame/commits" element={<RepoDetails/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
