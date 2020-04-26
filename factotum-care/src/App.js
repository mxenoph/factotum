import React, { Component } from 'react'

import ReactDOM from 'react-dom'
import { Route, Link,Switch, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './js/pages/home'
import Productivity from './js/pages/Productivity'
import About from './js/pages/about'
import MentalHealth from './js/pages/MentalHealth/MentalHealth'
import WorkstationAssess from './js/pages/WorkstationAssess'
import VertGuide from './js/pages/VertGuide'
import Surroundings from './js/pages/Surroundings/Surroundings'

class App extends Component {
    render() {
      return (
        <div className="App">
        <Router>
         <Switch>
            <Route  path="/" exact component={() => <HomePage />}/>
            {/* <Route  path="/about" exact component={() => <About />}/> */}
            <Route  path="/mental" exact component={() => <MentalHealth />}/>
            <Route  path="/productivity" exact component={() => <Productivity />}/>            
            <Route path="/surroundings" exact component={() => <Surroundings />} />
            <Route path="/workstation" exact component={() => <VertGuide />} />
            </Switch>
        </Router>          
        </div>
      )
    }
}

export default App;
