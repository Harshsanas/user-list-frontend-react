import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserList from './pages/userList/UserList';
import UserForm from './pages/userForm/UserForm';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/' element={<UserForm />} />
      </Routes>
    </>
  )
}

export default App;
