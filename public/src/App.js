import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CreateBlog from './components/CreateBlog'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/profile">
          <h1>Profile</h1>
        </Route>
        <Route path="/createBlog">
          <CreateBlog />
        </Route>
        <Route path="/">
          <h1>Home</h1>
        </Route>
      </Switch>
  </Router>
  )
}

export default App
