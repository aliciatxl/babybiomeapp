import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Team from './components/Team';
import FAQ from './components/FAQ';
import User from './components/User';
import NotFoundPage from './components/NotFoundPage';

const App = () => (
  <BrowserRouter basename="/babybiomeapp">
      <div className="outer_div">
          <Switch>
              <Route path="/" component={Home} exact={true}/>
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/faq" component={FAQ} />
              <Route path="/team" component={Team} />
              <Route path="/user" component={User} />
              <Route component={NotFoundPage} />
          </Switch>
      </div>
  </BrowserRouter>
);

export default App;
