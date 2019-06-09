import React , {Component} from 'react';
import Navbar from './components/navbar.js';
import { BrowserRouter as Router ,Route,Switch } from 'react-router-dom'
import Home from './components/todolist.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import Updates from './components/updates.js';
import Post from './components/post.js';
class App extends Component{
 
  render() {
    return (
      <Router>
        <div className="todo-app container">
          <Navbar/>
            <Switch>
              <Route  path='/' exact component={Home} /> 
              <Route  path='/about.js' exact component={About} /> 
              <Route  path='/contact.js'  component={Contact} /> 
              <Route  path='/updates.js'  component={Updates} /> 
              <Route path='/:post_id' component={Post}/>
            </Switch>
        </div>
      </Router>
      
    );
  }
}
export default App;
