import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AddBook  from './components/AddBook';
import BookList from './components/BookList';
import {BrowserRouter as Router, Route, Link,NavLink,Switch } from 'react-router-dom' 
import { NotFound } from './components/NotFound';
import BookDetail from './components/BookDetail';
import { UpdateBook } from './components/UpdateBook';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
 import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


ReactDOM.render(

  <React.StrictMode>
 
      <Router>
      <AppBar position="static">
  <Toolbar>
    <IconButton edge="start"  color="inherit" aria-label="menu">
    <MenuIcon />
    </IconButton>
    <ul>
      <li>
    <Typography variant="h6" >
      
          
          <NavLink to="/" exact activeStyle={{color:'white'}}>Home</NavLink>  
        
    </Typography>
    </li>
    <li>
    <Typography variant="h6" >
     
          
    <NavLink to="/add"  exact activeStyle={{color:'white'}}>Add</NavLink>   
      
    </Typography>
    </li>
    <li>
    <Typography variant="h6" >
      
          
    <NavLink to="/List" exact activeStyle={{color:'white'}}>BookList</NavLink>   
        
    </Typography>
    </li>
    <li>
    <Typography variant="h6" >
     
          
    <NavLink to="/BookDetail/110"  exact activeStyle={{color:'white'}}>BookDetail</NavLink>   
        
    </Typography>
    </li>
    <li>
    <Typography variant="h6" >
     
          
    <NavLink to="/updateBook/110"  exact activeStyle={{color:'white'}}>UpdateBook</NavLink>  
        
    </Typography>
    </li>
    </ul>
  </Toolbar>
</AppBar>
        <div className="mdc-menu mdc-menu-surface">
     
      <Switch>
    <Route exact path="/" component={App} />
      <Route exact path="/add" component={AddBook} />
      <Route path="/List" component={BookList} />
      <Route path="/BookDetail/:id" render={(props)=> <BookDetail id={112} /> }  />
      <Route path="/updateBook/:id" render={(props)=> <UpdateBook id={112} /> } component={UpdateBook} />
      <Route component={NotFound}/>
      
      </Switch>
      </div>
  </Router>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
