import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';
import { Provider } from 'react-redux'; //Provider组件是react-redux提供的核心Api
//Provider在此处将store提供给了内部所有的组件使用
import store from './store'
const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)

ReactDOM.render(App,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
