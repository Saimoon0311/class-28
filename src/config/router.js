import { render } from '@testing-library/react';
import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link
  } from "react-router-dom";
import Home from '../Containers/home'
import About from '../Containers/about'



  class Approuter extends React.Component{
      render(){
          return(
            <Router>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
            </Router>
          )
      }
  }



  export default Approuter;