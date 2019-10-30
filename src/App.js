import React from 'react';
import './styles/App.css';
import './styles/tailwind.css'
import ReactDom from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import TopPage from './page/index'
import TodoPage from './page/todo'



export default App;

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <TopPage />
        </Route>
        <Route path="/todo" exact>
          <TodoPage />
        </Route>
      </Switch>
    </Router>
  );
}