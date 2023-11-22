import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar.component.js'; 
import ExercisesList from './components/exercises-list.component'; 
import UsersList from './components/users-list.component'; 
import EditExercise from './components/edit-exercise.component'; 
import EditUser from './components/edit-user.component'; 
import CreateExercise from './components/create-exercise.component'; 
import CreateUser from './components/create-user.component'; 

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <br />
        <Routes>
          <Route path='/' element={<ExercisesList />} />
          <Route path='/users' element={<UsersList />} />
          <Route path='/editexercise/:id' element={<EditExercise />} />
          <Route path='/edituser/:id' element={<EditUser />} />
          <Route path='/createexercise' element={<CreateExercise />} />
          <Route path='/createuser' element={<CreateUser />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
