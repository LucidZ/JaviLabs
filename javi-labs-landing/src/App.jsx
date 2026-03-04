import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Apps from './pages/Apps';
import HabitDeveloper from './pages/HabitDeveloper';
import HabitDeveloperPrivacy from './pages/HabitDeveloperPrivacy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/privacy/habit-developer" element={<HabitDeveloperPrivacy />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/apps/habit-developer" element={<HabitDeveloper />} />
      </Routes>
    </Router>
  );
}

export default App;
