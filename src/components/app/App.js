import React, { Component } from 'react';
import Logo from '../../assets/logo.svg';
import './App.css';
import AddToDo from '../addToDo/';

const App = () => (
  <div class="app">
    <div class="app-header">
      <Logo width={50} height={50} ></Logo>
      <div className="app-title">To Do List</div>
      <div className="app-intro">The worlds most exciting to-do app</div>
    </div>
    <div class="app-content">
      <AddToDo submitToDo={() => { }} />
    </div>
  </div>
);

export default App;