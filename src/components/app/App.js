import './app.css';
import AddToDo from '../addtodo/addtodo';
import Logo from '../../assets/logo.svg';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TodoList from '../todolist/todolist';
import actions from '../../actions';
import { connect } from 'react-redux';
import { faTrashAlt, faTimes, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faTrashAlt, faTimes, faCheckSquare);

export class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <Logo width={50} height={50} ></Logo>
          <div className="app-title">To Do List</div>
          <div className="app-intro">The worlds most exciting to-do app</div>
        </div>
        <div className="app-content">
          <AddToDo submitToDo={this.props.submitToDo} />
          <TodoList todos={this.props.todos} deleteToDo={this.props.deleteToDo} />
        </div>
      </div>
    );
  }
};

App.propTypes = {
  submitToDo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      createdAt: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      priority: PropTypes.number.isRequired,
      tags: PropTypes.array.isRequired,
      isDone: PropTypes.bool.isRequired,
    },
  )).isRequired,
  deleteToDo: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.todos;

const mapDispatchToProps = dispatch => ({
  submitToDo: (text) => {
    if (text) {
      dispatch(actions.submitToDo(text));
    }
  },
  deleteToDo: (id) => {
    dispatch(actions.deleteToDo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
