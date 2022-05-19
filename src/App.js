import './scss/main.scss';
import Users from './components/Users'
import SingleUser from './components/SingleUser'
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'



function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<Users />} />
          <Route path="users/:username" element={<SingleUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
