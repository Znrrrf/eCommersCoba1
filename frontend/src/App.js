// import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import Login from './components/login';
import { Routes, Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <UserList /> */}  
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/addUser' element={<AddUser />}/>
        <Route path='/userList' element={<UserList />}/>
      </Routes>
    </div>
  );
}

export default App;
