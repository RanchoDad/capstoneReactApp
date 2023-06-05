import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
// import NewOrderPage from '../NewOrderPage/NewOrderPage';
import UserTaskHistoryPage from '../UserTaskHistoryPage/UserTaskHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import NewTaskPage from '../NewTaskPage/NewTaskPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/usertasks" element={<UserTaskHistoryPage />} />
              <Route path="/" element={<HomePage />}/>
              <Route path="/newtasks" element={<NewTaskPage/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
