import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginModal from './LoginModal';
import Users from './Users';
import SingleUser from './Users/SingleUser';  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/LoginModal" element={<LoginModal />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<SingleUser />} />
        <Route path="/" element={<Users />} /> {/* Add a default route */}
      </Routes>
    </Router>
  );
}

export default App;
